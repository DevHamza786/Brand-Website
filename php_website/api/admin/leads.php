<?php
header('Content-Type: application/json');
require_once __DIR__ . '/../../config.php';
ensure_admin_session();
if (empty($_SESSION['admin_authed'])) {
  http_response_code(401);
  echo json_encode(['message' => 'Unauthorized']);
  exit;
}
$file = DATA_DIR . '/leads.json';
if (!is_file($file)) {
  echo json_encode([]);
  exit;
}
$content = file_get_contents($file);
$leads = json_decode($content, true);
echo json_encode(is_array($leads) ? $leads : []);
