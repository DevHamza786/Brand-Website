<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit(0); }

require_once __DIR__ . '/../config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['message' => 'Method not allowed']);
  exit;
}

$raw = file_get_contents('php://input');
$body = json_decode($raw, true) ?: [];
$name = isset($body['name']) ? trim((string)$body['name']) : '';
$email = isset($body['email']) ? trim((string)$body['email']) : '';
$message = isset($body['message']) ? trim((string)$body['message']) : '';
$phone = isset($body['phone']) && $body['phone'] !== '' ? trim((string)$body['phone']) : null;
$company = isset($body['company']) && $body['company'] !== '' ? trim((string)$body['company']) : null;

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['message' => 'Name, email, and message are required.']);
  exit;
}
if (strlen($name) > 200 || strlen($email) > 254 || strlen($message) > 10000) {
  http_response_code(400);
  echo json_encode(['message' => 'Invalid field length.']);
  exit;
}

$lead = [
  'id' => (string)(time() . '-' . substr(bin2hex(random_bytes(4)), 0, 8)),
  'createdAt' => date('c'),
  'name' => $name,
  'email' => $email,
  'phone' => $phone,
  'company' => $company,
  'message' => $message,
];

$leadsFile = DATA_DIR . '/leads.json';
$leads = [];
if (is_file($leadsFile)) {
  $content = file_get_contents($leadsFile);
  $leads = json_decode($content, true) ?: [];
}
array_unshift($leads, $lead);
if (!is_dir(DATA_DIR)) mkdir(DATA_DIR, 0755, true);
file_put_contents($leadsFile, json_encode($leads, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

$configFile = DATA_DIR . '/admin-config.json';
if (is_file($configFile)) {
  $config = json_decode(file_get_contents($configFile), true) ?: [];
  if (!empty($config['emailEnabled']) && !empty($config['notificationEmail']) && !empty($config['fromEmail'])) {
    $subject = 'New website enquiry – ' . $name;
    $text = "You've received a new enquiry from your website.\n\n";
    $text .= "CONTACT DETAILS\nName: $name\nEmail: $email\n";
    if ($phone) $text .= "Phone: $phone\n";
    if ($company) $text .= "Company: $company\n";
    $text .= "Submitted: " . date('Y-m-d H:i:s', strtotime($lead['createdAt'])) . "\n\nMESSAGE\n$message\n";

    require_once __DIR__ . '/../includes/email-template.php';
    $htmlBody = get_email_template_html('lead', [
      'name' => $name,
      'email' => $email,
      'phone' => $phone,
      'company' => $company,
      'message' => $message,
      'createdAt' => $lead['createdAt'],
    ]);

    $sent = false;
    $autoload = __DIR__ . '/../vendor/autoload.php';
    if (!empty($config['smtpHost']) && is_file($autoload)) {
      try {
        require_once $autoload;
        $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = $config['smtpHost'];
        $port = (int)($config['smtpPort'] ?? 587);
        $mail->Port = $port;
        $mail->SMTPAuth = !empty($config['smtpUser']);
        if ($mail->SMTPAuth) {
          $mail->Username = $config['smtpUser'];
          $mail->Password = (string)($config['smtpPassword'] ?? '');
        }
        // Port 465 = SMTPS (implicit SSL), port 587 = STARTTLS
        $mail->SMTPSecure = ($port === 465)
          ? \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS
          : \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        // Avoid "certificate verify failed" on Windows/localhost (e.g. Mailtrap)
        $mail->SMTPOptions = ['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]];
        $mail->CharSet = \PHPMailer\PHPMailer\PHPMailer::CHARSET_UTF8;
        $mail->setFrom($config['fromEmail'], 'Aussie App Studio');
        $mail->addAddress($config['notificationEmail']);
        $mail->addReplyTo($email, $name);
        $mail->Subject = $subject;
        $mail->Body = $htmlBody;
        $mail->AltBody = $text;
        $mail->isHTML(true);
        $mail->send();
        $sent = true;
      } catch (\Exception $e) {
        // Fall through to mail() fallback
      }
    }
    if (!$sent) {
      $headers = 'From: ' . $config['fromEmail'] . "\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";
      @mail($config['notificationEmail'], $subject, $text, $headers);
    }
  }
}

echo json_encode(['ok' => true]);
