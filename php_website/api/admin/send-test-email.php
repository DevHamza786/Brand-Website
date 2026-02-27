<?php
header('Content-Type: application/json');
require_once __DIR__ . '/../../config.php';
ensure_admin_session();
if (empty($_SESSION['admin_authed'])) {
  http_response_code(401);
  echo json_encode(['ok' => false, 'message' => 'Unauthorized']);
  exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
  exit;
}

$configFile = DATA_DIR . '/admin-config.json';
if (!is_file($configFile)) {
  echo json_encode(['ok' => false, 'message' => 'No settings saved. Save SMTP settings first.']);
  exit;
}
$config = json_decode(file_get_contents($configFile), true) ?: [];
if (empty($config['notificationEmail']) || empty($config['fromEmail']) || empty($config['smtpHost'])) {
  echo json_encode(['ok' => false, 'message' => 'Set SMTP host, From email, and Notification email, then save.']);
  exit;
}

$autoload = __DIR__ . '/../../vendor/autoload.php';
if (!is_file($autoload)) {
  echo json_encode(['ok' => false, 'message' => 'PHPMailer not installed. Run: composer install']);
  exit;
}

require_once $autoload;
require_once __DIR__ . '/../../includes/email-template.php';

$htmlBody = get_email_template_html('test', [
  'message' => 'This is a test email from your Aussie App Studio admin panel. If you received this, SMTP is configured correctly and new lead notifications will use the same beautiful template.',
]);
$plainText = "This is a test email from your Aussie App Studio admin panel.\n\nIf you received this, SMTP is configured correctly and new lead notifications will be sent to this address.";

try {
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
  $mail->Subject = 'Test email – SMTP is working';
  $mail->Body = $htmlBody;
  $mail->AltBody = $plainText;
  $mail->isHTML(true);
  $mail->send();
  echo json_encode(['ok' => true, 'message' => 'Test email sent. Check your inbox (e.g. Mailtrap inbox).']);
} catch (\Exception $e) {
  echo json_encode(['ok' => false, 'message' => 'Send failed: ' . $e->getMessage()]);
}
