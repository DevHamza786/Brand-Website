<?php
define('ADMIN_PASSWORD', 'Admin$123');
require_once __DIR__ . '/config.php';
ensure_admin_session();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
  if ($_POST['password'] === ADMIN_PASSWORD) {
    $_SESSION['admin_authed'] = true;
    header('Location: admin.php');
    exit;
  }
  $login_error = 'Incorrect admin password.';
}

if (empty($_SESSION['admin_authed'])) {
  ?>
  <!DOCTYPE html>
  <html lang="en-AU">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin portal</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>tailwind.config={theme:{extend:{colors:{navy:{DEFAULT:'#0F172A'},cyan:{DEFAULT:'#06B6D4',light:'#22D3EE'},slate:{400:'#94A3B8',500:'#64748B',700:'#334155',800:'#1e293b',900:'#0f172a',950:'#020617'}}}}};</script>
  </head>
  <body class="min-h-screen bg-slate-950 flex items-center justify-center px-6 font-[Outfit]">
    <div class="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-8 shadow-xl">
      <h1 class="font-bold text-2xl text-white mb-2">Admin portal</h1>
      <p class="text-slate-400 text-sm mb-6">Enter the admin password to view leads and email settings.</p>
      <form method="post" class="space-y-4">
        <input type="password" name="password" placeholder="Admin password" class="w-full h-11 px-4 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan/40" required>
        <?php if (!empty($login_error)) { ?><p class="text-red-400 text-sm"><?php echo htmlspecialchars($login_error); ?></p><?php } ?>
        <button type="submit" class="w-full h-11 rounded-lg bg-cyan text-navy font-semibold hover:bg-cyan-light transition-colors">Enter</button>
      </form>
    </div>
  </body>
  </html>
  <?php
  exit;
}

$page_title = 'Admin portal';
$current_page = '';
require_once __DIR__ . '/includes/header.php';
$base = base_url('');
?>
<section class="min-h-screen bg-slate-950 py-12 md:py-16">
  <div class="max-w-6xl mx-auto px-6 md:px-10">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h1 class="font-headline font-bold text-3xl md:text-4xl text-white mb-2">Admin portal</h1>
        <p class="text-slate-400 text-sm">Review incoming leads and control email notification settings.</p>
      </div>
    </div>
    <div class="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 lg:gap-10 items-start">
      <div class="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-7 shadow-xl">
        <h2 class="font-headline font-semibold text-xl text-white mb-2">Email notifications (SMTP)</h2>
        <p class="text-slate-400 text-sm mb-4">Plug in SMTP details. New leads will be emailed to the notification address below.</p>
        <form id="admin-settings-form" class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div><label class="block text-sm font-medium text-slate-200 mb-1">SMTP host</label><input type="text" id="smtpHost" placeholder="smtp.gmail.com" class="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan/40"></div>
            <div><label class="block text-sm font-medium text-slate-200 mb-1">SMTP port</label><input type="number" id="smtpPort" value="587" placeholder="587" class="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan/40"></div>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div><label class="block text-sm font-medium text-slate-200 mb-1">SMTP username</label><input type="text" id="smtpUser" placeholder="SMTP login" class="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan/40"></div>
            <div><label class="block text-sm font-medium text-slate-200 mb-1">SMTP password</label><input type="password" id="smtpPassword" placeholder="App password" class="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan/40"></div>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div><label class="block text-sm font-medium text-slate-200 mb-1">From email</label><input type="email" id="fromEmail" placeholder="noreply@yourdomain.com" class="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan/40"></div>
            <div><label class="block text-sm font-medium text-slate-200 mb-1">Notification email</label><input type="email" id="notificationEmail" placeholder="you@example.com" class="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan/40"></div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="inline-flex items-center gap-2 text-sm text-slate-200"><input type="checkbox" id="smtpSecure" class="h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan focus:ring-cyan/40"> Use secure connection (SSL/TLS, port 465)</label>
            <label class="inline-flex items-center gap-2 text-sm text-slate-200"><input type="checkbox" id="emailEnabled" class="h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan focus:ring-cyan/40"> Enable email notifications for new leads</label>
          </div>
          <p class="text-red-400 text-sm hidden" id="settings-error"></p>
          <p class="text-emerald-400 text-sm hidden" id="settings-message"></p>
          <div class="mt-2 flex flex-wrap gap-2 items-center">
            <button type="submit" class="inline-flex px-5 py-2.5 rounded-lg bg-cyan text-navy font-body font-semibold text-sm hover:bg-cyan-light disabled:opacity-60" id="settings-submit">Save settings</button>
            <button type="button" class="inline-flex px-5 py-2.5 rounded-lg bg-slate-700 text-slate-100 font-body font-semibold text-sm hover:bg-slate-600 disabled:opacity-60" id="send-test-email">Send test email</button>
          </div>
          <p class="text-sm hidden mt-1" id="test-email-message"></p>
        </form>
      </div>
      <div class="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-7 shadow-xl">
        <div class="flex items-center justify-between gap-3 mb-4">
          <h2 class="font-headline font-semibold text-xl text-white">Leads</h2>
          <span class="text-xs text-slate-400" id="leads-count">Loading…</span>
        </div>
        <div id="leads-list" class="space-y-3 max-h-[480px] overflow-auto pr-1">
          <p class="text-slate-500 text-sm">Loading…</p>
        </div>
      </div>
    </div>
  </div>
  <div id="lead-modal" class="fixed inset-0 z-50 hidden items-center justify-center px-4 bg-slate-950/70 backdrop-blur-sm">
    <div class="w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 md:p-7 relative">
      <button type="button" id="lead-modal-close" class="absolute top-3 right-3 text-slate-400 hover:text-slate-100">✕</button>
      <h3 class="font-headline font-semibold text-lg text-white mb-3">Lead details</h3>
      <div id="lead-modal-content" class="space-y-2 text-sm text-slate-100"></div>
    </div>
  </div>
</section>
<?php
$footer_scripts = '<script src="' . $base . 'js/admin.js"></script>';
require_once __DIR__ . '/includes/footer.php';
?>
