<?php
$page_title = 'Aussie App Studio | Web & Mobile App Development';
$current_page = 'home';
require_once __DIR__ . '/includes/header.php';
$base = base_url('');
$assets = asset_url('');
require_once __DIR__ . '/includes/home-hero.php';
require_once __DIR__ . '/includes/home-sections.php';
$footer_scripts = '<script src="' . $base . 'js/sliders.js"></script>';
$footer_scripts .= '<script src="' . $base . 'js/faq.js"></script>';
$footer_scripts .= '<script src="' . $base . 'js/tech-tabs.js"></script>';
$footer_scripts .= '<script src="' . $base . 'js/forms.js"></script>';
require_once __DIR__ . '/includes/footer.php';
