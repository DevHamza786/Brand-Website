<?php
header('Content-Type: application/json');
require_once __DIR__ . '/../../config.php';
ensure_admin_session();
if (empty($_SESSION['admin_authed'])) {
  http_response_code(401);
  echo json_encode(['message' => 'Unauthorized']);
  exit;
}
$file = DATA_DIR . '/admin-config.json';
$default = ['notificationEmail'=>'','emailEnabled'=>false,'smtpHost'=>'','smtpPort'=>587,'smtpUser'=>'','smtpPassword'=>'','smtpSecure'=>false,'fromEmail'=>''];

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  if (!is_file($file)) { echo json_encode($default); exit; }
  $c = json_decode(file_get_contents($file), true);
  echo json_encode(is_array($c) ? array_merge($default, $c) : $default);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['message' => 'Method not allowed']);
  exit;
}
$raw = file_get_contents('php://input');
$body = json_decode($raw, true) ?: [];
$config = [
  'notificationEmail' => isset($body['notificationEmail']) ? trim((string)$body['notificationEmail']) : '',
  'emailEnabled' => !empty($body['emailEnabled']),
  'smtpHost' => isset($body['smtpHost']) ? trim((string)$body['smtpHost']) : '',
  'smtpPort' => isset($body['smtpPort']) ? (int)$body['smtpPort'] : 587,
  'smtpUser' => isset($body['smtpUser']) ? trim((string)$body['smtpUser']) : '',
  'smtpPassword' => isset($body['smtpPassword']) ? (string)$body['smtpPassword'] : '',
  'smtpSecure' => !empty($body['smtpSecure']),
  'fromEmail' => isset($body['fromEmail']) ? trim((string)$body['fromEmail']) : '',
];
if (!is_dir(DATA_DIR)) mkdir(DATA_DIR, 0755, true);
file_put_contents($file, json_encode($config, JSON_PRETTY_PRINT));
echo json_encode($config);
