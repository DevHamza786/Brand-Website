<?php
/**
 * Base config for PHP website (same design/behavior as Next.js site).
 * If you deploy to a subfolder (e.g. /php_website), set BASE_PATH to '/php_website'.
 */
if (!defined('BASE_PATH')) {
  define('BASE_PATH', '');
}
if (!defined('ASSETS_PATH')) {
  define('ASSETS_PATH', BASE_PATH ? BASE_PATH . '/assets' : '/assets');
}
define('DATA_DIR', __DIR__ . '/data');

define('SITE_PHONE', '0488 845 048');
define('SITE_PHONE_RAW', '0488845048');
define('SITE_EMAIL', 'Info@aussieappstudio.com.au');
define('SITE_ADDRESS', '1/8 Ireland Place, Ranui, Auckland 0612, New Zealand');

function base_url($path = '') {
  $p = rtrim(BASE_PATH, '/');
  $root = ($p === '' ? '/' : $p . '/');
  return $path ? $root . ltrim($path, '/') : $root;
}
function asset_url($path) {
  $base = rtrim(ASSETS_PATH, '/');
  return $path === '' ? $base . '/' : $base . '/' . ltrim($path, '/');
}

function ensure_admin_session() {
  if (session_status() === PHP_SESSION_NONE) {
    session_start();
  }
}
