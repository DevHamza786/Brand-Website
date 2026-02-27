<?php
// Difference, trust, how we work
?>
<section id="difference" class="py-24 md:py-32 bg-slate-50">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <div class="max-w-2xl mb-20">
      <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-6">The Aussie App Studio difference</h2>
      <p class="text-lg text-slate-600 leading-relaxed">We don't just deliver code. We deliver agile, secure, and user-centric platforms designed to compete on the world stage. Here's what sets us apart.</p>
    </div>
    <div class="grid md:grid-cols-2 gap-8 lg:gap-10">
      <?php
      $pillars = [
        ['Time-zone aligned','Seamless communication in your business hours, whether you\'re in Sydney, New York, or Auckland. No more waiting for replies across continents. We sync our availability to yours.','<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'],
        ['Scalable architecture','Web and mobile apps built with modern stacks (React, Flutter, Node.js) so they grow with your users. We design for scale from day one. No painful rewrites later.','<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>'],
        ['Conversion-first','Every line of code is written with your ROI in mind. Your product isn\'t just polished; it\'s a lead-generating machine. We combine UX best practices with measurable outcomes.','<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>'],
        ['Local trust, global reach','An Australian-owned studio with the technical firepower to launch in the world\'s most competitive markets. You get the reliability of a local partner and the capability of a global team.','<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>']
      ];
      foreach ($pillars as $p) { ?>
      <div class="group p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-xl hover:shadow-cyan/5 hover:-translate-y-1 hover:border-cyan/20 transition-all duration-300">
        <span class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan/10 text-cyan mb-6 group-hover:bg-cyan/20 group-hover:scale-105 transition-all duration-300"><?php echo $p[2]; ?></span>
        <h3 class="font-headline font-semibold text-xl text-navy mb-4"><?php echo htmlspecialchars($p[0]); ?></h3>
        <p class="text-slate-600 leading-relaxed"><?php echo htmlspecialchars($p[1]); ?></p>
      </div>
      <?php } ?>
    </div>
  </div>
</section>

<section class="relative py-18 md:py-20 bg-gradient-to-r from-slate-50 via-slate-50 to-slate-100 border-y border-slate-100 overflow-hidden">
  <div class="pointer-events-none absolute inset-y-0 left-1/2 w-[480px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.14),transparent_65%)] opacity-70"></div>
  <div class="max-w-content mx-auto px-6 md:px-10 relative">
    <div class="grid gap-10 lg:gap-16 lg:grid-cols-[1.15fr_minmax(0,0.95fr)] items-center">
      <div>
        <p class="text-[11px] font-semibold tracking-[0.26em] uppercase text-cyan mb-3">Trusted in multiple time zones</p>
        <h2 class="font-headline font-bold text-2xl md:text-3xl text-navy mb-3">A distributed studio that still feels local</h2>
        <p class="text-slate-700 text-base md:text-lg leading-relaxed">Teams in <span class="font-semibold text-navy">Sydney</span>, <span class="font-semibold text-navy">Melbourne</span>, <span class="font-semibold text-navy">Auckland</span>, and across the <span class="font-semibold text-navy">US</span> rely on us for web and mobile product work that ships on time&mdash;without late-night calls.</p>
        <p class="text-slate-500 text-sm mt-3 max-w-xl">We plan around your calendar, not the other way around: shared stand‑ups in your daylight hours, async updates, and response times measured in hours, not days.</p>
      </div>
      <div class="rounded-3xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-[0_18px_60px_rgba(15,23,42,0.15)] p-5 md:p-6">
        <div class="flex items-center justify-between gap-4 mb-5">
          <div>
            <p class="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500">Regions we overlap with</p>
            <p class="font-headline font-semibold text-lg text-navy mt-1">AU, NZ & US time zones</p>
          </div>
          <span class="inline-flex items-center gap-2 rounded-full bg-cyan/10 text-cyan px-3 py-1 text-[11px] font-medium"><span class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Online in your workday</span>
        </div>
        <div class="grid grid-cols-2 gap-3 mb-4">
          <?php foreach ([['Product teams','Roadmap-heavy, outcomes first.'],['Scale-ups','Shipping fast without breaking things.'],['Agencies','White-label delivery partner.'],['Innovation squads','Experimental bets with clear guardrails.']] as $item) { ?>
          <div class="rounded-2xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 flex flex-col gap-0.5">
            <div class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-cyan"></span><p class="text-[11px] font-medium text-slate-800"><?php echo htmlspecialchars($item[0]); ?></p></div>
            <p class="text-[10px] text-slate-500 leading-snug"><?php echo htmlspecialchars($item[1]); ?></p>
          </div>
          <?php } ?>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200/80 mt-2">
          <p class="text-[11px] text-slate-500"><span class="font-semibold text-slate-700">24h</span> average response time for new enquiries.</p>
          <p class="text-[11px] text-slate-500"><span class="font-semibold text-slate-700">100%</span> of projects run with time‑zone overlap.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-24 md:py-32 bg-slate-50">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <div class="text-center max-w-2xl mx-auto mb-20">
      <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-6">How we work</h2>
      <p class="text-lg text-slate-600">From first conversation to launch and beyond, clear phases, clear communication.</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <?php foreach ([['01','Discovery & strategy','We align on goals, scope, and success metrics so everyone is on the same page.'],['02','Design & prototype','Wireframes and high-fidelity UI so you see exactly what we\'re building before a line of code.'],['03','Build & test','Agile sprints with regular demos. Quality assurance and performance testing built in.'],['04','Launch & support','Smooth go-live and ongoing maintenance so your product stays secure and fast.']] as $step) { ?>
      <div class="relative">
        <span class="font-headline font-bold text-5xl text-cyan/20 mb-4 block"><?php echo $step[0]; ?></span>
        <h3 class="font-headline font-semibold text-lg text-navy mb-3"><?php echo $step[1]; ?></h3>
        <p class="text-slate-600 text-sm leading-relaxed"><?php echo $step[2]; ?></p>
        <?php if ($step[0] !== '04') { ?><span class="hidden lg:block absolute top-8 -right-4 text-slate-300">→</span><?php } ?>
      </div>
      <?php } ?>
    </div>
  </div>
</section>

<?php
$techCategories = ['Backend'=>['Node.js','Express','Django','Laravel','Symfony','ASP.NET Core','NestJS','Python','Java'],'Frontend'=>['React','Next.js','Vue.js','TypeScript','JavaScript','Angular','HTML5','CSS3','Tailwind CSS','Redux'],'Mobile'=>['Flutter','React Native','Swift','Kotlin','Ionic','Xamarin'],'Database'=>['PostgreSQL','MongoDB','MySQL','Redis','Firebase','Supabase'],'DevOps'=>['AWS','Docker','Kubernetes','GitHub Actions','Vercel','CI/CD'],'UI/UX'=>['Figma','Adobe XD','Sketch'],'CMS'=>['Contentful','Sanity','Strapi','WordPress']];
$techLogos = ['Node.js'=>'nodejs.png','Express'=>'expressjs.png','Django'=>'djongo.png','Laravel'=>'laravel.png','Symfony'=>'symfony.webp','ASP.NET Core'=>'asp.net.png','NestJS'=>'nestjs.png','Python'=>'python.png','Java'=>'java.png','React'=>'reactjs.jpg','Next.js'=>'next.js.png','Vue.js'=>'Vue js.png','TypeScript'=>'TypeScript.png','JavaScript'=>'Java Script.webp','Angular'=>'Angular.jpg','HTML5'=>'HTML5.jpg','CSS3'=>'CSS3.webp','Tailwind CSS'=>'Tailwind CSS.png','Redux'=>'Redux.png','Flutter'=>'Flutter.png','React Native'=>'React Native.png','Swift'=>'Swift.png','Kotlin'=>'Kotlin.jpg','Ionic'=>'Ionic.jpg','Xamarin'=>'Xamarin.jpg','PostgreSQL'=>'PostgreSQL.png','MongoDB'=>'MongoDB.svg','MySQL'=>'MySQL.png','Redis'=>'Redis.png','Firebase'=>'Firebase.png','Supabase'=>'Supabase.jpg','AWS'=>'AWS.webp','Docker'=>'Docker.png','Kubernetes'=>'Kubernetes.png','GitHub Actions'=>'GitHub Actions.png','Vercel'=>'Vercel.svg','CI/CD'=>'CI=CD.webp','Figma'=>'Figma.png','Adobe XD'=>'Adobe XD.jpg','Sketch'=>'Sketch.png','Contentful'=>'Contentful.png','Sanity'=>'Sanity.png','Strapi'=>'Strapi.webp','WordPress'=>'WordPress.png'];
?>
<section class="py-24 md:py-32 bg-white border-t border-slate-200">
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
      <div class="flex flex-col items-center justify-center p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan/20">
        <?php if ($logo) { ?><img src="<?php echo $logo; ?>" alt="<?php echo htmlspecialchars($name); ?>" class="w-10 h-10 object-contain mb-3"><?php } ?>
        <span class="text-slate-700 font-body font-medium text-center text-sm"><?php echo htmlspecialchars($name); ?></span>
      </div>
      <?php } ?>
    </div>
    <?php $firstPanel = false; } ?>
  </div>
</section>

<section class="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
  <div class="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-cyan/10 blur-3xl"></div>
  <div class="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-2xl"></div>
  <div class="max-w-content mx-auto px-6 md:px-10 relative">
    <div class="grid lg:grid-cols-[1.05fr_1.1fr] gap-10 lg:gap-16 items-center">
      <div>
        <p class="text-cyan font-body font-semibold text-xs uppercase tracking-[0.25em] mb-4">Why global brands choose us</p>
        <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-5">A partner that feels in‑house, not offshore</h2>
        <p class="text-slate-600 text-base md:text-lg leading-relaxed mb-6 max-w-xl">We combine local time‑zone overlap with senior engineering, design craft, and a ruthless focus on outcomes. You get the reliability of an in‑house team, without the overhead.</p>
        <ul class="space-y-3 text-sm text-slate-600">
          <li class="flex items-start gap-3"><span class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan/10 text-cyan"><svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg></span><span>Transparent roadmaps, weekly check‑ins, and async updates that fit your workday.</span></li>
          <li class="flex items-start gap-3"><span class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan/10 text-cyan"><svg class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg></span><span>Design, engineering, QA and DevOps under one roof for smoother launches.</span></li>
        </ul>
      </div>
      <div class="grid sm:grid-cols-2 gap-5 md:gap-6">
        <?php foreach ([['Agile delivery','Short sprints, regular demos, and clear communication so you always know what\'s shipping next.'],['Security-first','Best practices from day one: secure auth, hardened infrastructure, and ongoing monitoring.'],['ROI-focused','We prioritise features that move the needle on revenue, retention, and efficiency.'],['Time-zone overlap you can count on','Daylight-friendly standups, async updates, and support that lines up with your workday.']] as $wc) { ?>
        <div class="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-card hover:-translate-y-1.5 hover:shadow-card-hover hover:border-cyan/40 transition-all duration-300">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan/5 via-transparent to-navy/5 transition-opacity duration-300"></div>
          <div class="relative p-5 md:p-6">
            <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/10 text-cyan group-hover:bg-cyan group-hover:text-white transition-colors"><svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg></div>
            <h3 class="font-headline font-semibold text-base md:text-lg text-navy mb-2"><?php echo htmlspecialchars($wc[0]); ?></h3>
            <p class="text-xs md:text-sm text-slate-600 leading-relaxed"><?php echo htmlspecialchars($wc[1]); ?></p>
          </div>
        </div>
        <?php } ?>
      </div>
    </div>
  </div>
</section>

<section class="relative py-20 md:py-24 bg-slate-950 overflow-hidden">
  <div class="pointer-events-none absolute -right-40 top-10 h-72 w-72 rounded-full bg-cyan/15 blur-3xl"></div>
  <div class="pointer-events-none absolute -left-40 -bottom-10 h-80 w-80 rounded-full bg-navy/40 blur-3xl"></div>
  <div class="max-w-content mx-auto px-6 md:px-10 relative">
    <div class="text-center max-w-2xl mx-auto mb-12 md:mb-14">
      <p class="text-cyan-light font-body font-semibold text-xs uppercase tracking-[0.24em] mb-3">Inside the studio</p>
      <h2 class="font-headline font-bold text-3xl md:text-4xl text-white mb-4">A closer look at the products we design</h2>
      <p class="text-slate-300 text-base md:text-lg leading-relaxed">Realistic snapshots from our day‑to‑day work: product dashboards, app flows and architecture views that turn ideas into interfaces your team can actually ship.</p>
    </div>
    <?php $homeShowcase = [['file'=>'Home/Generated Image February 27, 2026 - 12_47PM.png','label'=>'Product launches','caption'=>'App Store-ready visuals and polished marketing sites.'],['file'=>'Home/Generated Image February 27, 2026 - 1_40PM.png','label'=>'UX flows','caption'=>'Deep UX thinking with detailed user flows.'],['file'=>'Home/Generated Image February 27, 2026 - 1_41PM (1).png','label'=>'Live dashboards','caption'=>'Real-time metrics and dashboards.'],['file'=>'Home/Generated Image February 27, 2026 - 1_42PM.png','label'=>'System architecture','caption'=>'Scalable backend architectures.']];
    $primary = $homeShowcase[0]; $others = array_slice($homeShowcase, 1); ?>
    <div class="grid gap-4 md:gap-6 lg:grid-cols-12 items-stretch">
      <div class="lg:col-span-7">
        <div class="relative h-full rounded-3xl bg-slate-900 border border-slate-700/80 overflow-hidden">
          <div class="relative w-full pt-[60%]"><img src="<?php echo $assets . $primary['file']; ?>" alt="<?php echo htmlspecialchars($primary['label']); ?>" class="absolute inset-0 w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-90"></div></div>
          <div class="absolute bottom-0 left-0 right-0 p-4"><p class="text-[11px] font-medium uppercase text-cyan-light mb-1"><?php echo htmlspecialchars($primary['label']); ?></p><p class="text-sm text-slate-100"><?php echo htmlspecialchars($primary['caption']); ?></p></div>
        </div>
      </div>
      <div class="lg:col-span-5 flex flex-col gap-4">
        <div class="grid grid-cols-2 gap-4">
          <?php foreach (array_slice($others, 0, 2) as $item) { ?>
          <div class="rounded-2xl bg-slate-900 border border-slate-700/70 overflow-hidden">
            <div class="relative w-full pt-[70%]"><img src="<?php echo $assets . $item['file']; ?>" alt="<?php echo htmlspecialchars($item['label']); ?>" class="absolute inset-0 w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-90"></div></div>
            <div class="absolute bottom-0 left-0 right-0 p-3"><p class="text-[10px] font-medium uppercase text-cyan-light mb-1"><?php echo htmlspecialchars($item['label']); ?></p><p class="text-[11px] text-slate-100/95 line-clamp-2"><?php echo htmlspecialchars($item['caption']); ?></p></div>
          </div>
          <?php } ?>
        </div>
        <?php if (isset($others[2])) { $item = $others[2]; ?>
        <div class="rounded-2xl bg-slate-900 border border-slate-700/70 overflow-hidden">
          <div class="relative w-full pt-[48%]"><img src="<?php echo $assets . $item['file']; ?>" alt="<?php echo htmlspecialchars($item['label']); ?>" class="absolute inset-0 w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-90"></div></div>
          <div class="absolute bottom-0 left-0 right-0 p-3"><p class="text-[10px] font-medium uppercase text-cyan-light mb-1"><?php echo htmlspecialchars($item['label']); ?></p><p class="text-[11px] text-slate-100/95 line-clamp-2"><?php echo htmlspecialchars($item['caption']); ?></p></div>
        </div>
        <?php } ?>
      </div>
    </div>
  </div>
</section>

<section class="py-24 md:py-32 bg-slate-50">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-6">What our clients say</h2>
      <p class="text-slate-600">Real feedback from teams we've worked with across Australia and New Zealand.</p>
    </div>
    <div class="relative max-w-3xl mx-auto">
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-500 ease-out" data-testimonial-track>
          <?php foreach ([['They delivered on time and on budget. The app is fast, looks great, and our users love it.','Sarah M.','Product Lead, Sydney'],['Finally a dev team that gets time zones. We\'re in Auckland and they made collaboration feel local.','James K.','CTO, Auckland'],['From strategy to launch, they were transparent and professional.','Rachel T.','Marketing Director, Melbourne']] as $t) { ?>
          <div data-testimonial-slide class="w-full flex-shrink-0 px-1">
            <div class="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-card">
              <p class="text-slate-700 leading-relaxed mb-6">"<?php echo htmlspecialchars($t[0]); ?>"</p>
              <p class="font-semibold text-navy"><?php echo htmlspecialchars($t[1]); ?></p>
              <p class="text-slate-500 text-sm"><?php echo htmlspecialchars($t[2]); ?></p>
            </div>
          </div>
          <?php } ?>
        </div>
      </div>
      <div class="mt-8 flex items-center justify-between gap-4">
        <button type="button" data-testimonial-prev class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 hover:border-cyan hover:text-cyan transition-colors" aria-label="Previous testimonial"><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg></button>
        <div class="flex gap-2"><?php for ($i=0;$i<3;$i++) { ?><button type="button" data-testimonial-dot class="h-1.5 rounded-full transition-all <?php echo $i===0?'w-6 bg-cyan':'w-2 bg-slate-300'; ?>"></button><?php } ?></div>
        <button type="button" data-testimonial-next class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 hover:border-cyan hover:text-cyan transition-colors" aria-label="Next testimonial"><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></button>
      </div>
    </div>
  </div>
</section>

<section id="work" class="py-24 md:py-32 bg-white">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
      <div><h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">Products we're proud of</h2><p class="text-slate-600 max-w-xl">From web platforms to mobile apps, see how we help brands scale and compete.</p></div>
      <a href="<?php echo $base; ?>work.php" class="font-body font-semibold text-cyan hover:text-cyan-dark shrink-0">View all work →</a>
    </div>
    <?php $workItems = [['src'=>'Work/Generated Image February 27, 2026 - 2_10PM.png','title'=>'Cross‑platform shopping experience','type'=>'Mobile commerce','desc'=>'Flutter + React Native builds for an AU retailer.'],['src'=>'Work/Generated Image February 27, 2026 - 2_33PM.png','title'=>'Operations dashboard across web & tablet','type'=>'Multi‑device dashboards','desc'=>'Responsive admin tools for teams.'],['src'=>'Work/Web/new3.webp','title'=>'Product analytics at a glance','type'=>'SaaS dashboards','desc'=>'High‑density dashboards for wide screens.']]; ?>
    <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div class="relative">
        <div class="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(15,23,42,0.95)] bg-slate-950 flex items-center justify-center min-h-[320px] max-h-[480px] md:max-h-[520px]">
          <?php foreach ($workItems as $wi => $w) { ?><div data-work-slide data-work-type="<?php echo htmlspecialchars($w['type']); ?>" data-work-title="<?php echo htmlspecialchars($w['title']); ?>" class="absolute inset-0 flex items-center justify-center <?php echo $wi===0?'opacity-100':'opacity-0'; ?>"><img src="<?php echo $assets . $w['src']; ?>" alt="<?php echo htmlspecialchars($w['title']); ?>" class="max-w-full max-h-[480px] md:max-h-[520px] w-auto h-auto object-contain"><div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none"></div></div><?php } ?>
        </div>
        <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <div><p class="text-[11px] font-medium uppercase text-cyan-light mb-1" data-work-caption-type><?php echo htmlspecialchars($workItems[0]['type']); ?></p><p class="font-headline font-semibold text-sm text-slate-50 line-clamp-2" data-work-caption-title><?php echo htmlspecialchars($workItems[0]['title']); ?></p></div>
          <span class="inline-flex px-3 py-1 rounded-full bg-slate-900/70 text-[11px] text-slate-200" data-work-counter>1/<?php echo count($workItems); ?></span>
        </div>
      </div>
      <div class="max-w-xl">
        <p class="text-xs font-body font-semibold tracking-[0.28em] uppercase text-cyan-light mb-3">Recent work</p>
        <h2 class="font-headline font-bold text-3xl md:text-4xl text-white mb-4">Web & mobile product experiences</h2>
        <p class="text-slate-300 text-base md:text-lg leading-relaxed mb-6">A rotating look at the kind of web and mobile interfaces we design and build for brands in Australia, New Zealand and the US.</p>
        <div class="flex items-center gap-2"><?php foreach ($workItems as $wi => $w) { ?><button type="button" data-work-dot data-work-item class="h-2.5 rounded-full transition-all <?php echo $wi===0?'w-7 bg-cyan':'w-2.5 bg-slate-600'; ?>"></button><?php } ?></div>
      </div>
    </div>
  </div>
</section>

<section id="faq" class="py-20 md:py-28 bg-white border-y border-slate-200">
  <div class="w-full px-6 md:px-10">
    <div class="mb-14 max-w-5xl mx-auto">
      <p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">FAQs</p>
      <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">Curious about working with us?</h2>
      <p class="text-slate-600 text-lg">Get the answers to common questions about working with Aussie App Studio.</p>
    </div>
    <div class="space-y-4 max-w-5xl mx-auto">
      <?php $homeFaqs = [['Do you work with clients outside Australia?','Yes. We serve brands in Australia, the USA, and New Zealand with collaboration timed to your time zone.'],['What tech stack do you use?','We build with React, Flutter, Node.js, and proven modern tools.'],['How do you handle time zones?','We align our availability to your business hours.'],['Do you offer ongoing support?','Yes. From launch we offer maintenance, updates, and support.'],["What's the typical project timeline?","It depends on scope. We'll give you a clear timeline after we understand your brief."]];
      foreach ($homeFaqs as $fi => $faq) { ?>
      <div data-faq-item class="rounded-2xl border-2 bg-slate-50/50 <?php echo $fi===0?'faq-open border-cyan/40 shadow-lg':'border-slate-200'; ?>">
        <button type="button" data-faq-toggle class="w-full px-6 py-5 flex justify-between items-center gap-4 text-left" aria-expanded="<?php echo $fi===0?'true':'false'; ?>">
          <span class="font-headline font-semibold text-navy text-base md:text-lg pr-4"><?php echo htmlspecialchars($faq[0]); ?></span>
          <span class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg <?php echo $fi===0?'bg-cyan text-navy':'bg-white border border-slate-200 text-slate-600'; ?>"><span data-faq-plus><?php echo $fi===0?'−':'+'; ?></span></span>
        </button>
        <div data-faq-content class="overflow-hidden transition-all duration-300" style="<?php echo $fi===0?'max-height:500px;opacity:1':'max-height:0;opacity:0'; ?>">
          <div class="px-6 pb-6 pt-0"><p class="text-slate-600 leading-relaxed border-t border-slate-200/80 pt-5"><?php echo htmlspecialchars($faq[1]); ?></p></div>
        </div>
      </div>
      <?php } ?>
    </div>
  </div>
</section>

<section class="py-16 md:py-20 bg-navy text-white">
  <div class="max-w-content mx-auto px-6 md:px-10 text-center">
    <h2 class="font-headline font-bold text-2xl md:text-3xl mb-3">Let's build something great together</h2>
    <p class="text-slate-300 text-lg max-w-xl mx-auto mb-8">Tell us your idea; we'll reply within 24 hours with next steps and a ballpark quote.</p>
    <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-xl shadow-lg">Get a quote</a>
  </div>
</section>
