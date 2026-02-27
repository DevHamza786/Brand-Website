<?php
$page_title = 'Services | Aussie App Studio';
$current_page = 'services';
require_once __DIR__ . '/includes/header.php';
$base = base_url('');
$assets = asset_url('');
?>
<section class="relative pt-24 md:pt-28 pb-16 md:pb-24 bg-navy text-white overflow-hidden">
  <div class="max-w-content mx-auto px-6 md:px-10 relative z-10">
    <nav class="text-sm text-slate-400 mb-6"><a href="<?php echo $base; ?>index.php" class="hover:text-cyan-light">Home</a> / <span class="text-white font-medium">Services</span></nav>
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div>
        <p class="text-cyan-light font-body font-medium text-sm uppercase tracking-wider mb-4">Full stack development for Australia, USA & NZ</p>
        <h1 class="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">Web & mobile app <span class="text-cyan-light">development services</span></h1>
        <p class="text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">From strategy and UI/UX design to full stack development and ongoing support. We build software that converts and scales for Australian businesses and beyond. Get a quote or discuss your project in the form.</p>
        <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 px-6 py-3.5 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-xl">Get a quote</a>
      </div>
      <div class="relative max-w-md mx-auto lg:ml-auto">
        <div class="relative p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl">
          <h2 class="font-headline font-bold text-xl text-navy mb-1">Discuss your project</h2>
          <p class="font-headline font-bold text-xl text-cyan mb-6">needs</p>
          <form id="hero-contact-form" class="space-y-4">
            <input type="text" name="name" required placeholder="Name" class="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-cyan outline-none text-navy">
            <input type="email" name="email" required placeholder="Email" class="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-cyan outline-none text-navy">
            <input type="tel" name="phone" placeholder="Phone" class="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-cyan outline-none text-navy">
            <textarea name="message" required rows="3" placeholder="Your message..." class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan outline-none text-navy"></textarea>
            <p class="text-red-600 text-sm hidden" data-form-error></p>
            <button type="submit" class="w-full h-12 px-6 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="py-20 md:py-28 bg-slate-50">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4 text-center">What we offer</h2>
    <p class="text-slate-600 text-lg text-center max-w-2xl mx-auto mb-14">Four core services that cover the full product lifecycle, from idea to launch and beyond.</p>
    <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-7 md:gap-8">
      <?php
      $services = [
        ['title'=>'Web Development','href'=>'web-development.php','desc'=>'Scalable web apps with React and Node.js.','img'=>'Services/Generated Image February 27, 2026 - 1_54PM.png'],
        ['title'=>'Mobile App Development','href'=>'mobile-apps.php','desc'=>'Native and cross-platform apps with Flutter and React Native.','img'=>'Services/Generated Image February 27, 2026 - 1_47PM.png'],
        ['title'=>'UI/UX Design','href'=>'ui-ux.php','desc'=>'Interfaces that users love and that convert.','img'=>'Services/Generated Image February 27, 2026 - 2_05PM.png'],
        ['title'=>'Support & Maintenance','href'=>'maintenance.php','desc'=>'Keep your product secure and improving.','img'=>'Services/Generated Image February 27, 2026 - 1_45PM.png']
      ];
      foreach ($services as $i => $s) { ?>
      <div class="group h-full bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan/30 overflow-hidden flex flex-col">
        <div class="relative w-full pt-[70%] overflow-hidden">
          <img src="<?php echo $assets . $s['img']; ?>" alt="<?php echo htmlspecialchars($s['title']); ?>" class="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-90"></div>
          <div class="absolute inset-x-0 bottom-0 px-4 pb-3"><span class="text-[10px] font-headline font-semibold uppercase text-cyan/90">0<?php echo $i+1; ?> · <?php echo htmlspecialchars($s['title']); ?></span></div>
        </div>
        <div class="flex-1 px-5 md:px-6 py-5 md:py-6">
          <h3 class="font-headline font-bold text-lg md:text-xl text-navy mb-2"><?php echo htmlspecialchars($s['title']); ?></h3>
          <p class="text-slate-600 text-sm leading-relaxed mb-4 flex-1"><?php echo htmlspecialchars($s['desc']); ?></p>
          <div class="flex flex-wrap gap-3 mt-auto">
            <a href="<?php echo $base; ?>contact.php" class="inline-flex px-4 py-2.5 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-lg text-sm">Get a quote</a>
            <a href="<?php echo $base; ?>services/<?php echo $s['href']; ?>" class="inline-flex text-cyan font-body font-medium text-sm hover:text-cyan-dark">Learn more</a>
          </div>
        </div>
      </div>
      <?php } ?>
    </div>
  </div>
</section>

<!-- Full stack intro -->
<section class="py-20 md:py-28 bg-white">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <h2 class="font-headline font-bold text-2xl md:text-3xl text-navy mb-6">Full stack services, from strategy to launch</h2>
        <p class="text-slate-600 leading-relaxed mb-4">We cover the full product lifecycle: web development with React and Node.js, mobile app development with Flutter and React Native, UI/UX design, and ongoing support. Australian businesses and startups choose us for time zone aligned collaboration and a conversion first approach.</p>
        <p class="text-slate-600 leading-relaxed mb-6">Not sure whether you need a web app, a mobile app, or both? We will review your goals and timeline, then recommend the right mix. No obligation, just a straight conversation about what you need.</p>
        <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 text-cyan font-body font-semibold hover:text-cyan-dark">Get a free consultation <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <?php foreach (['Web apps & dashboards', 'Mobile (iOS & Android)', 'UI/UX design', 'Support & maintenance'] as $item) { ?>
        <div class="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
          <span class="w-8 h-8 rounded-lg bg-cyan/15 flex items-center justify-center flex-shrink-0 text-cyan"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg></span>
          <span class="font-body font-medium text-slate-700 text-sm"><?php echo htmlspecialchars($item); ?></span>
        </div>
        <?php } ?>
      </div>
    </div>
  </div>
</section>

<!-- How we work -->
<section class="py-20 md:py-28 bg-slate-50">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <div class="max-w-3xl mx-auto mb-14">
      <div class="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-[0_18px_55px_rgba(148,163,184,0.35)]">
        <div class="absolute inset-0 opacity-70">
          <img src="<?php echo $assets; ?>Services/Generated Image February 27, 2026 - 1_48PM.png" alt="Team collaborating over sketches and strategy notes." class="absolute inset-0 w-full h-full object-cover blur-sm scale-105">
          <div class="absolute inset-0 bg-gradient-to-r from-white/90 via-white/92 to-white/96"></div>
        </div>
        <div class="relative px-6 md:px-10 py-8 md:py-10 text-center">
          <p class="text-xs font-semibold tracking-[0.3em] uppercase text-cyan mb-3">How we work</p>
          <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-3">A clear, transparent delivery process</h2>
          <p class="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">From first conversation to launch and beyond, you always know what's happening next and who is doing what. No black‑box development, ever.</p>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <?php $processSteps = [['01','Discovery & strategy','We align on goals, scope, and success metrics so everyone is on the same page from day one.'],['02','Design & prototype','Wireframes and high-fidelity UI so you see exactly what we\'re building before a line of code is written.'],['03','Build & test','Agile sprints with regular demos. Quality assurance and performance testing built into every release.'],['04','Launch & support','Smooth go-live and ongoing maintenance so your product stays secure, fast, and aligned with your roadmap.']]; foreach ($processSteps as $step) { ?>
      <div class="relative h-full rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm">
        <span class="font-headline font-bold text-4xl text-cyan/20 mb-4 block"><?php echo $step[0]; ?></span>
        <h3 class="font-headline font-semibold text-lg text-navy mb-3"><?php echo htmlspecialchars($step[1]); ?></h3>
        <p class="text-slate-600 text-sm leading-relaxed"><?php echo htmlspecialchars($step[2]); ?></p>
        <?php if ($step[0] !== '04') { ?><span class="hidden lg:block absolute top-8 -right-4 text-slate-300">→</span><?php } ?>
      </div>
      <?php } ?>
    </div>
  </div>
</section>

<!-- Why brands choose us -->
<section class="py-20 md:py-28 bg-white">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <h2 class="font-headline font-bold text-2xl md:text-3xl text-navy mb-12">Why brands choose us</h2>
    <div class="grid sm:grid-cols-3 gap-8">
      <?php foreach ([['Time zone aligned','We work in your business hours. Sydney, Melbourne, Auckland, and the US. No more waiting for replies across continents.'],['Fixed scope & timeline','Clear milestones and transparent pricing. No surprise scope creep or hidden costs.'],['Built for conversion','Every screen and flow is designed with your ROI in mind. We combine UX best practices with measurable outcomes.']] as $wc) { ?>
      <div class="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan/20 transition-colors">
        <h3 class="font-headline font-semibold text-navy mb-2"><?php echo htmlspecialchars($wc[0]); ?></h3>
        <p class="text-slate-600 text-sm leading-relaxed"><?php echo htmlspecialchars($wc[1]); ?></p>
      </div>
      <?php } ?>
    </div>
  </div>
</section>

<!-- Technology Stack (same as home) -->
<?php
$techCategories = ['Backend'=>['Node.js','Express','Django','Laravel','Symfony','ASP.NET Core','NestJS','Python','Java'],'Frontend'=>['React','Next.js','Vue.js','TypeScript','JavaScript','Angular','HTML5','CSS3','Tailwind CSS','Redux'],'Mobile'=>['Flutter','React Native','Swift','Kotlin','Ionic','Xamarin'],'Database'=>['PostgreSQL','MongoDB','MySQL','Redis','Firebase','Supabase'],'DevOps'=>['AWS','Docker','Kubernetes','GitHub Actions','Vercel','CI/CD'],'UI/UX'=>['Figma','Adobe XD','Sketch'],'CMS'=>['Contentful','Sanity','Strapi','WordPress']];
$techLogos = ['Node.js'=>'nodejs.png','Express'=>'expressjs.png','Django'=>'djongo.png','Laravel'=>'laravel.png','Symfony'=>'symfony.webp','ASP.NET Core'=>'asp.net.png','NestJS'=>'nestjs.png','Python'=>'python.png','Java'=>'java.png','React'=>'reactjs.jpg','Next.js'=>'next.js.png','Vue.js'=>'Vue js.png','TypeScript'=>'TypeScript.png','JavaScript'=>'Java Script.webp','Angular'=>'Angular.jpg','HTML5'=>'HTML5.jpg','CSS3'=>'CSS3.webp','Tailwind CSS'=>'Tailwind CSS.png','Redux'=>'Redux.png','Flutter'=>'Flutter.png','React Native'=>'React Native.png','Swift'=>'Swift.png','Kotlin'=>'Kotlin.jpg','Ionic'=>'Ionic.jpg','Xamarin'=>'Xamarin.jpg','PostgreSQL'=>'PostgreSQL.png','MongoDB'=>'MongoDB.svg','MySQL'=>'MySQL.png','Redis'=>'Redis.png','Firebase'=>'Firebase.png','Supabase'=>'Supabase.jpg','AWS'=>'AWS.webp','Docker'=>'Docker.png','Kubernetes'=>'Kubernetes.png','GitHub Actions'=>'GitHub Actions.png','Vercel'=>'Vercel.svg','CI/CD'=>'CI=CD.webp','Figma'=>'Figma.png','Adobe XD'=>'Adobe XD.jpg','Sketch'=>'Sketch.png','Contentful'=>'Contentful.png','Sanity'=>'Sanity.png','Strapi'=>'Strapi.webp','WordPress'=>'WordPress.png'];
?>
<section class="py-24 md:py-32 bg-slate-50 border-t border-slate-200">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="text-center text-cyan font-body font-semibold text-sm uppercase tracking-wider mb-3">Technology Stack</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy text-center mb-14">Technologies We Work With</h2>
    <div class="flex flex-wrap justify-center gap-2 mb-12 border-b border-slate-200 pb-2">
      <?php $firstTab = true; foreach (array_keys($techCategories) as $tab) { ?>
      <button type="button" data-tech-tab="<?php echo htmlspecialchars($tab); ?>" class="px-4 py-2.5 rounded-lg font-body font-medium text-sm <?php echo $firstTab?'text-cyan border-b-2 border-cyan bg-cyan/5':'text-slate-500 hover:text-navy hover:bg-slate-50'; ?>"><?php echo htmlspecialchars($tab); ?></button>
      <?php $firstTab = false; } ?>
    </div>
    <?php $firstPanel = true; foreach ($techCategories as $cat => $techs) { ?>
    <div data-tech-panel="<?php echo htmlspecialchars($cat); ?>" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8 <?php echo $firstPanel?'':'hidden'; ?>">
      <?php foreach ($techs as $name) { $logo = isset($techLogos[$name]) ? $assets . 'tech/' . $techLogos[$name] : ''; ?>
      <div class="flex flex-col items-center justify-center p-5 rounded-xl bg-white border border-slate-200 hover:border-cyan/20">
        <?php if ($logo) { ?><img src="<?php echo $logo; ?>" alt="<?php echo htmlspecialchars($name); ?>" class="w-10 h-10 object-contain mb-3"><?php } ?>
        <span class="text-sm font-body text-slate-700 text-center"><?php echo htmlspecialchars($name); ?></span>
      </div>
      <?php } ?>
    </div>
    <?php $firstPanel = false; } ?>
  </div>
</section>

<!-- Stats strip -->
<section class="py-16 md:py-20 bg-white">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <div class="grid grid-cols-3 gap-8">
      <?php foreach ([['50+','Projects delivered'],['3','Regions served'],['24h','Response time']] as $stat) { ?>
      <div class="text-center">
        <p class="font-headline font-bold text-4xl md:text-5xl text-cyan mb-2"><?php echo htmlspecialchars($stat[0]); ?></p>
        <p class="text-slate-600 font-body text-sm md:text-base"><?php echo htmlspecialchars($stat[1]); ?></p>
      </div>
      <?php } ?>
    </div>
  </div>
</section>

<section class="py-16 md:py-20 bg-navy text-white">
  <div class="max-w-content mx-auto px-6 md:px-10 text-center">
    <h2 class="font-headline font-bold text-2xl md:text-3xl mb-3">Get a free quote</h2>
    <p class="text-slate-300 text-lg max-w-xl mx-auto mb-8">Tell us about your project. We reply within 24 hours with next steps and a ballpark quote. No obligation.</p>
    <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-xl">Get a quote</a>
  </div>
</section>
<?php $footer_scripts = '<script src="' . $base . 'js/forms.js"></script><script src="' . $base . 'js/tech-tabs.js"></script>'; require_once __DIR__ . '/includes/footer.php'; ?>
