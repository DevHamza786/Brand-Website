<?php
$page_title = 'Work | Aussie App Studio';
$current_page = 'work';
require_once __DIR__ . '/includes/header.php';
$base = base_url('');
$assets = asset_url('');

$deviceSlides = [
  ['src'=>'Work/Generated Image February 27, 2026 - 2_10PM.png','alt'=>'Analytics dashboards across tablet and phone'],
  ['src'=>'Work/Generated Image February 27, 2026 - 2_33PM.png','alt'=>'System health dashboard on desktop with harbour view'],
  ['src'=>'Work/Generated Image February 27, 2026 - 2_32PM.png','alt'=>'Mobile banking experience in a cafe'],
  ['src'=>'Work/Generated Image February 27, 2026 - 2_30PM.png','alt'=>'E‑commerce dashboard across multiple devices'],
];

$mobileProjects = [
  ['src'=>'Work/Mob/android-developmentb.png','title'=>'Android app experience','type'=>'Mobile app','description'=>'Modern Android UI with clear navigation and native-feeling interactions.'],
  ['src'=>'Work/Mob/android-developmentb (1).png','title'=>'Play Store-ready app screens','type'=>'Mobile app','description'=>'High-fidelity screens prepared for app store listings and marketing.'],
  ['src'=>'Work/Mob/image (3).png','title'=>'Feature-rich mobile dashboard','type'=>'Mobile app','description'=>'At-a-glance metrics and actions for on-the-go teams.'],
  ['src'=>'Work/Mob/image (4).png','title'=>'Onboarding & sign-up flow','type'=>'Mobile app','description'=>'Frictionless first-time experience that gets users to value faster.'],
  ['src'=>'Work/Mob/image (5).png','title'=>'Operational tools on mobile','type'=>'Mobile app','description'=>'Interfaces designed for field staff and operational teams in motion.'],
  ['src'=>'Work/Mob/image (6).png','title'=>'Multi-screen app journeys','type'=>'Mobile app','description'=>'End-to-end journeys that feel cohesive across every screen.'],
];

$webProjects = [
  ['src'=>'Work/Web/new1.webp','title'=>'Marketing website for a growing brand','type'=>'Web app','description'=>'Responsive marketing site with clear funnels and conversion-focused layouts.'],
  ['src'=>'Work/Web/new2.webp','title'=>'B2B product dashboard UI','type'=>'Web app','description'=>'Clean analytics views designed for busy teams that live in their browser.'],
  ['src'=>'Work/Web/new3.webp','title'=>'SaaS platform interface','type'=>'Web app','description'=>'Multi-panel interface that scales from laptop to ultra-wide setups.'],
  ['src'=>'Work/Web/new4.webp','title'=>'Content-rich landing experience','type'=>'Web app','description'=>'Story-driven landing page optimised for scroll depth and engagement.'],
];
?>
<section class="relative pt-24 md:pt-32 pb-20 md:pb-28 bg-navy text-white overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(6,182,212,0.12),transparent)]"></div>
  <div class="max-w-content mx-auto px-6 md:px-10 relative z-10">
    <nav class="text-sm text-slate-400 mb-10" aria-label="Breadcrumb"><a href="<?php echo $base; ?>index.php" class="hover:text-cyan-light">Home</a> / <span class="text-white font-medium">Work</span></nav>
    <h1 class="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 max-w-4xl">Web and Mobile App Projects: Case Studies and Portfolio</h1>
    <p class="text-xl text-slate-300 max-w-3xl leading-relaxed">A selection of web development and mobile app development projects we have delivered for brands in Australia and beyond. Each one built for scale, conversion, and long term success.</p>
  </div>
</section>

<section class="py-20 md:py-28 bg-slate-950">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <div class="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center mb-12 md:mb-16">
      <div>
        <p class="text-xs font-body font-semibold tracking-[0.28em] uppercase text-cyan-light mb-3">Portfolio</p>
        <h2 class="font-headline font-bold text-3xl md:text-4xl text-white mb-4">Web & mobile product experiences in the wild</h2>
        <p class="text-slate-300 text-base md:text-lg leading-relaxed mb-6">Instead of static thumbnails, here's a closer look at real interface work we've shipped for brands across Australia, New Zealand and the US—from browser-based platforms to app‑store ready screens.</p>
        <p class="text-slate-400 text-sm leading-relaxed">We're opinionated about clarity, hierarchy and performance. Every screen here is designed to feel fast, legible and conversion‑focused on the devices your customers actually use.</p>
      </div>
      <div class="relative">
        <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan/20 blur-3xl opacity-70"></div>
        <div class="absolute -left-8 -bottom-10 h-32 w-32 rounded-full bg-navy/50 blur-3xl opacity-60"></div>
        <div class="relative mx-auto max-w-md rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-[0_24px_70px_rgba(15,23,42,0.95)]">
          <div class="overflow-hidden rounded-3xl bg-slate-950 border border-slate-700/80 relative">
            <div class="relative w-full pt-[60%]">
              <?php foreach ($deviceSlides as $di => $ds) { ?>
              <div data-device-slide class="absolute inset-0 transition-opacity duration-700 <?php echo $di === 0 ? 'opacity-100' : 'opacity-0'; ?>">
                <img src="<?php echo $assets . $ds['src']; ?>" alt="<?php echo htmlspecialchars($ds['alt']); ?>" class="absolute inset-0 w-full h-full object-cover">
              </div>
              <?php } ?>
            </div>
            <div class="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
              <?php for ($i = 0; $i < count($deviceSlides); $i++) { ?><button type="button" data-device-dot class="h-1.5 rounded-full transition-all duration-200 <?php echo $i === 0 ? 'w-6 bg-cyan' : 'w-2.5 bg-slate-600/80'; ?>"></button><?php } ?>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile apps showcase (image left) -->
    <div class="space-y-12 md:space-y-16">
    <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div class="relative">
        <div class="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(15,23,42,0.95)] bg-slate-950">
          <div class="relative w-full pt-[65%]">
            <?php foreach ($mobileProjects as $mi => $mp) { ?>
            <div data-mobile-slide class="absolute inset-0 <?php echo $mi === 0 ? 'opacity-100' : 'opacity-0'; ?>">
              <img src="<?php echo $assets . $mp['src']; ?>" alt="<?php echo htmlspecialchars($mp['title']); ?>" class="absolute inset-0 w-full h-full object-cover">
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            </div>
            <?php } ?>
          </div>
          <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
            <div>
              <p class="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-light mb-1" data-mobile-caption-type><?php echo htmlspecialchars($mobileProjects[0]['type']); ?></p>
              <p class="font-headline font-semibold text-sm md:text-base text-slate-50 line-clamp-2" data-mobile-caption-title><?php echo htmlspecialchars($mobileProjects[0]['title']); ?></p>
            </div>
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-900/70 text-[11px] text-slate-200 backdrop-blur" data-mobile-counter>1/<?php echo count($mobileProjects); ?></span>
          </div>
        </div>
      </div>
      <div class="max-w-xl">
        <p class="text-xs font-body font-semibold tracking-[0.28em] uppercase text-cyan-light mb-3">Mobile apps</p>
        <h2 class="font-headline font-bold text-3xl md:text-4xl text-white mb-4">Mobile app interfaces and flows</h2>
        <p class="text-slate-300 text-base md:text-lg leading-relaxed mb-6">Left side you can see a rotating view of real mobile UI work—from onboarding to core flows—designed to feel fast and native on both Android and iOS. On the right, we break down how we approach mobile product design and development.</p>
        <div class="flex items-center gap-2">
          <?php for ($i = 0; $i < count($mobileProjects); $i++) { ?><button type="button" data-mobile-dot class="h-2.5 rounded-full transition-all duration-200 <?php echo $i === 0 ? 'w-7 bg-cyan' : 'w-2.5 bg-slate-600'; ?>"></button><?php } ?>
        </div>
      </div>
    </div>

    <!-- Web development showcase (image right) -->
    <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div class="max-w-xl order-2 lg:order-1">
        <p class="text-xs font-body font-semibold tracking-[0.28em] uppercase text-cyan-light mb-3">Web development</p>
        <h2 class="font-headline font-bold text-3xl md:text-4xl text-white mb-4">Web app and platform UI</h2>
        <p class="text-slate-300 text-base md:text-lg leading-relaxed mb-6">Here the layout flips: on the left we talk about how we design and build modern web platforms, while on the right the slider cycles through marketing sites, dashboards and SaaS interfaces we've delivered for clients.</p>
        <div class="flex items-center gap-2">
          <?php for ($i = 0; $i < count($webProjects); $i++) { ?><button type="button" data-web-dot class="h-2.5 rounded-full transition-all duration-200 <?php echo $i === 0 ? 'w-7 bg-cyan' : 'w-2.5 bg-slate-600'; ?>"></button><?php } ?>
        </div>
      </div>
      <div class="relative order-1 lg:order-2">
        <div class="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(15,23,42,0.95)] bg-slate-950">
          <div class="relative w-full pt-[65%]">
            <?php foreach ($webProjects as $wi => $wp) { ?>
            <div data-web-slide class="absolute inset-0 <?php echo $wi === 0 ? 'opacity-100' : 'opacity-0'; ?>">
              <img src="<?php echo $assets . $wp['src']; ?>" alt="<?php echo htmlspecialchars($wp['title']); ?>" class="absolute inset-0 w-full h-full object-cover">
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            </div>
            <?php } ?>
          </div>
          <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
            <div>
              <p class="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-light mb-1" data-web-caption-type><?php echo htmlspecialchars($webProjects[0]['type']); ?></p>
              <p class="font-headline font-semibold text-sm md:text-base text-slate-50 line-clamp-2" data-web-caption-title><?php echo htmlspecialchars($webProjects[0]['title']); ?></p>
            </div>
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-900/70 text-[11px] text-slate-200 backdrop-blur" data-web-counter>1/<?php echo count($webProjects); ?></span>
          </div>
        </div>
      </div>
    </div>
    </div>

    <!-- Next project CTA -->
    <div class="relative mt-20 md:mt-28 py-20 md:py-28 overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_55%)]"></div>
      <div class="max-w-4xl mx-auto rounded-3xl border border-slate-700/70 bg-slate-900/80 backdrop-blur-xl p-10 md:p-14 shadow-[0_32px_100px_rgba(15,23,42,0.95)] relative z-10">
        <p class="text-xs font-body font-semibold tracking-[0.28em] uppercase text-cyan-light mb-4 text-center">Next project</p>
        <h2 class="font-headline font-bold text-3xl md:text-4xl text-white text-center mb-5">Want your product to be the next project on this page?</h2>
        <p class="text-slate-300 text-base md:text-lg leading-relaxed text-center mb-8">We're currently turning these snapshots into full case studies. Share a bit about what you're building and we'll walk you through exactly how we'd approach it—plus examples that match your industry and stage.</p>
        <div class="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div class="flex items-center gap-3 text-slate-300 text-sm">
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan/15 text-cyan">✓</span>
            <span>2–3 relevant case examples, not a generic sales deck.</span>
          </div>
          <div class="flex items-center gap-3 text-slate-300 text-sm">
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan/15 text-cyan">✓</span>
            <span>Clear next steps, timelines and rough investment range.</span>
          </div>
        </div>
        <div class="flex justify-center">
          <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-2xl transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-cyan/30">Tell us about your project <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
      </div>
    </div>
  </div>
</section>
<?php
$mobileData = json_encode(array_map(function ($p) { return ['type'=>$p['type'],'title'=>$p['title']]; }, $mobileProjects));
$webData = json_encode(array_map(function ($p) { return ['type'=>$p['type'],'title'=>$p['title']]; }, $webProjects));
$footer_scripts = '<script>window.WORK_MOBILE_CAPTIONS=' . $mobileData . ';window.WORK_WEB_CAPTIONS=' . $webData . ';</script><script src="' . $base . 'js/work-sliders.js"></script>';
require_once __DIR__ . '/includes/footer.php';
?>
