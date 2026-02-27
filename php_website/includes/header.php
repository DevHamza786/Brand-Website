<?php
if (!isset($page_title)) $page_title = 'Aussie App Studio';
if (!isset($current_page)) $current_page = '';
require_once __DIR__ . '/../config.php';
$base = base_url('');
$assets = asset_url('');
?>
<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?php echo htmlspecialchars($page_title); ?></title>
<link rel="icon" href="<?php echo $assets; ?>favicon.png">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Source+Sans+3:wght@400;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>tailwind.config={theme:{extend:{colors:{navy:{DEFAULT:'#0F172A',deep:'#1A1A40',light:'#1E293B'},cyan:{DEFAULT:'#06B6D4',light:'#22D3EE',dark:'#0891B2'},slate:{50:'#F8FAFC',100:'#F1F5F9',200:'#E2E8F0',400:'#94A3B8',600:'#475569',900:'#0F172A'}},fontFamily:{headline:['Outfit','system-ui','sans-serif'],body:['Source Sans 3','system-ui','sans-serif']},maxWidth:{content:'1200px',copy:'720px'},boxShadow:{card:'0 2px 8px rgba(15,23,42,0.06)',dropdown:'0 12px 32px rgba(15,23,42,0.14)'}}}};</script>
<link href="<?php echo $base; ?>css/style.css" rel="stylesheet">
</head>
<body class="min-h-screen flex flex-col bg-slate-50 font-body text-slate-900 antialiased text-lg leading-relaxed">
<header class="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
<div class="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-18 md:h-20">
<a href="<?php echo $base; ?>index.php" class="flex items-center gap-2 shrink-0"><img src="<?php echo $assets; ?>logo.png" alt="" class="h-12 md:h-14 w-auto object-contain"></a>
<nav class="hidden md:flex items-center gap-8">
<div class="relative" id="services-nav">
<button type="button" class="font-body font-medium text-slate-600 hover:text-navy py-2" id="services-toggle">Services</button>
<ul class="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-lg py-2 border border-slate-200 hidden" id="services-menu">
<li><a href="<?php echo $base; ?>services.php" class="block px-4 py-2.5 text-slate-600 hover:bg-cyan/5">All Services</a></li>
<li><a href="<?php echo $base; ?>services/web-development.php" class="block px-4 py-2.5 text-slate-600 hover:bg-cyan/5">Web Development</a></li>
<li><a href="<?php echo $base; ?>services/mobile-apps.php" class="block px-4 py-2.5 text-slate-600 hover:bg-cyan/5">Mobile Apps</a></li>
<li><a href="<?php echo $base; ?>services/ui-ux.php" class="block px-4 py-2.5 text-slate-600 hover:bg-cyan/5">UI/UX Design</a></li>
<li><a href="<?php echo $base; ?>services/maintenance.php" class="block px-4 py-2.5 text-slate-600 hover:bg-cyan/5">Support & Maintenance</a></li>
</ul>
</div>
<a href="<?php echo $base; ?>work.php" class="font-body font-medium py-2 <?php echo $current_page=='work'?'text-cyan-dark':'text-slate-600 hover:text-navy'; ?>">Work</a>
<a href="<?php echo $base; ?>about.php" class="font-body font-medium py-2 <?php echo $current_page=='about'?'text-cyan-dark':'text-slate-600 hover:text-navy'; ?>">About</a>
<a href="<?php echo $base; ?>contact.php" class="font-body font-medium py-2 <?php echo $current_page=='contact'?'text-cyan-dark':'text-slate-600 hover:text-navy'; ?>">Contact</a>
<a href="<?php echo $base; ?>contact.php" class="ml-4 px-6 py-3 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-xl">Start a project</a>
</nav>
<button type="button" class="md:hidden p-2 text-navy" id="mobile-menu-btn">
<svg class="w-6 h-6" id="icon-menu" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
<svg class="w-6 h-6 hidden" id="icon-close" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
</button>
</div>
<div class="md:hidden border-t border-slate-200 bg-white hidden" id="mobile-menu">
<nav class="max-w-content mx-auto px-6 py-5 flex flex-col gap-1">
<a href="<?php echo $base; ?>services.php" class="font-body font-medium text-slate-700 py-3">Services</a>
<div class="pl-4 border-l-2 border-cyan/30 ml-2 flex flex-col gap-1">
<a href="<?php echo $base; ?>services/web-development.php" class="py-2 text-slate-600">Web Development</a>
<a href="<?php echo $base; ?>services/mobile-apps.php" class="py-2 text-slate-600">Mobile Apps</a>
<a href="<?php echo $base; ?>services/ui-ux.php" class="py-2 text-slate-600">UI/UX Design</a>
<a href="<?php echo $base; ?>services/maintenance.php" class="py-2 text-slate-600">Support & Maintenance</a>
</div>
<a href="<?php echo $base; ?>work.php" class="font-body font-medium text-slate-700 py-3">Work</a>
<a href="<?php echo $base; ?>about.php" class="font-body font-medium text-slate-700 py-3">About</a>
<a href="<?php echo $base; ?>contact.php" class="font-body font-medium text-slate-700 py-3">Contact</a>
<a href="<?php echo $base; ?>contact.php" class="mt-4 inline-flex justify-center px-6 py-3.5 bg-cyan text-navy font-body font-semibold rounded-xl">Start a project</a>
</nav>
</div>
</header>
<main class="flex-1">
