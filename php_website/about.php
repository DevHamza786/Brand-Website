<?php
$page_title = 'About Us | Aussie App Studio';
$current_page = 'about';
require_once __DIR__ . '/includes/header.php';
$base = base_url('');
$assets = asset_url('');
?>
<section class="relative pt-24 md:pt-32 pb-20 md:pb-28 bg-navy text-white overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(6,182,212,0.12),transparent)]"></div>
  <div class="max-w-content mx-auto px-6 md:px-10 relative z-10">
    <nav class="text-sm text-slate-400 mb-10" aria-label="Breadcrumb"><a href="<?php echo $base; ?>index.php" class="hover:text-cyan-light">Home</a> / <span class="text-white font-medium">About</span></nav>
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h1 class="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">Australian Web and Mobile App Development Agency: Local Trust, Global Standards</h1>
        <p class="text-xl text-slate-300 leading-relaxed mb-8">We are a digital product agency that bridges Australian innovation with world class engineering. Web development, mobile app development, and UI/UX design for ambitious brands in Australia, the USA, and New Zealand.</p>
        <p class="text-slate-300 leading-relaxed">Aussie App Studio exists because great ideas deserve great execution. We specialise in web and mobile app development for brands that want a partner who thinks in time zones, scales with growth, and designs for conversion.</p>
      </div>
      <div class="relative">
        <div class="aspect-[4/3] rounded-2xl bg-navy-light/80 border border-cyan/20 overflow-hidden">
          <img src="<?php echo $assets; ?>About/Generated Image February 27, 2026 - 3_21PM.png" alt="Aussie App Studio team collaborating in a bright product design workspace." class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </div>
</section>
<section class="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-10">Our story</h2>
    <div class="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
      <div class="max-w-copy space-y-8">
        <p class="text-slate-700 leading-relaxed text-lg">Our team brings together strategy, UI/UX design, and full-stack development so you get one team from first sketch to launch and beyond. We work with clients across Australia, the USA, and New Zealand. Aligned to your hours, not the other way around.</p>
        <p class="text-slate-700 leading-relaxed text-lg">Whether you're scaling an existing product or launching something new, we're built to deliver agile, secure, and user-centric platforms that drive real business outcomes. We don't do black-box outsourcing; we work as an extension of your team with clear ownership and communication.</p>
        <p class="text-slate-700 leading-relaxed text-lg">From discovery and wireframes to production and support, we cover the full product lifecycle. That means fewer handoffs, fewer surprises, and a single team that cares about your success as much as you do.</p>
      </div>
      <div class="relative">
        <div class="pointer-events-none absolute -right-10 -top-6 h-32 w-32 rounded-full bg-cyan/10 blur-3xl"></div>
        <div class="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-navy/5 blur-3xl"></div>
        <div class="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.1)]">
          <div class="relative w-full pt-[70%] bg-slate-100">
            <img src="<?php echo $assets; ?>About/Generated Image February 27, 2026 - 3_22PM.png" alt="Behind-the-scenes look at Aussie App Studio planning user flows and architecture." class="absolute inset-0 w-full h-full object-cover">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="py-20 md:py-28 bg-white">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-6">What we stand for</h2>
    <p class="text-slate-600 max-w-2xl mb-16">The principles that guide how we work with every client.</p>
    <div class="grid md:grid-cols-2 gap-8">
      <?php foreach ([['Transparency','Clear timelines, scope, and communication so you\'re never in the dark. We share progress regularly and flag risks early.'],['Delivery discipline','We ship on time and on budget. No endless scope creep. Fixed phases and change control keep projects predictable.'],['Conversion focus','We build with your ROI in mind, not just pretty interfaces. Every screen is designed to move the needle.'],['Time-zone respect','Collaboration that fits your schedule, not ours. We align our availability to Sydney, Auckland, and US hours.']] as $v) { ?>
      <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan/20 transition-colors">
        <h3 class="font-headline font-semibold text-xl text-navy mb-4"><?php echo htmlspecialchars($v[0]); ?></h3>
        <p class="text-slate-600 leading-relaxed"><?php echo htmlspecialchars($v[1]); ?></p>
      </div>
      <?php } ?>
    </div>
  </div>
</section>
<section class="relative py-20 md:py-28 bg-gradient-to-b from-slate-950 via-navy to-slate-950 text-white overflow-hidden">
  <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_55%)]"></div>
  <div class="max-w-content mx-auto px-6 md:px-10 relative">
    <div class="grid lg:grid-cols-[1.15fr_minmax(0,0.95fr)] gap-10 lg:gap-16 items-start">
      <div>
        <p class="text-[11px] font-body font-semibold tracking-[0.3em] uppercase text-cyan-light mb-3">What we do</p>
        <h2 class="font-headline font-bold text-3xl md:text-4xl mb-4">One team for strategy, design and build</h2>
        <p class="text-slate-300 max-w-2xl mb-6">We plug in where you need us most—whether that's upfront discovery, UI/UX, full stack delivery or ongoing optimisation. Every lane connects back to a single roadmap.</p>
        <p class="text-slate-400 text-sm md:text-base max-w-xl">Pick a lane below to jump into the relevant service page and see how we work in more detail.</p>
      </div>
      <div class="relative">
        <div class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan/25 blur-3xl opacity-70"></div>
        <div class="absolute -left-10 -bottom-10 h-32 w-40 rounded-full bg-slate-900 blur-3xl opacity-80"></div>
        <div class="relative rounded-3xl border border-slate-700/70 bg-slate-900/80 backdrop-blur-xl p-5 md:p-6 shadow-[0_26px_80px_rgba(15,23,42,0.95)]">
        <ul class="space-y-3">
          <?php
          $whatWeDo = [['01','Strategy & product discovery','services.php','Shape the right product before we write a single line of code.'],['02','UI/UX design & prototyping','ui-ux.php','Clickable prototypes, design systems, and flows your team can test early.'],['03','Web & mobile development','web-development.php','React, Next.js, Flutter and more for scalable web and app builds.'],['04','API & integration','services.php','Backend, integrations and infrastructure tuned for reliability.'],['05','Launch & ongoing support','maintenance.php','Ship, monitor and iterate without losing momentum post‑launch.']];
          foreach ($whatWeDo as $item) {
            $href = ($item[2] === 'services.php') ? ($base . 'services.php') : ($base . 'services/' . $item[2]);
          ?>
          <li><a href="<?php echo $href; ?>" class="group flex items-start gap-3 px-4 py-3 rounded-2xl bg-slate-900/60 border border-slate-700/70 hover:border-cyan/60 hover:bg-slate-900 transition-all">
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-cyan/15 text-cyan text-xs font-semibold"><?php echo $item[0]; ?></span>
            <div class="flex-1"><p class="font-body font-semibold text-sm md:text-base text-white"><?php echo htmlspecialchars($item[1]); ?></p><p class="text-[11px] md:text-xs text-slate-400 mt-1"><?php echo htmlspecialchars($item[3]); ?></p></div>
            <span class="hidden sm:inline-flex h-6 w-6 rounded-full border border-slate-600 text-slate-300 text-[11px] items-center justify-center group-hover:border-cyan">→</span>
          </a></li>
          <?php } ?>
        </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="py-20 md:py-28 bg-slate-50">
  <div class="max-w-content mx-auto px-6 md:px-10 text-center">
    <p class="text-slate-700 text-xl mb-10">See what we've built, or tell us what you want to build.</p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="<?php echo $base; ?>work.php" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy text-navy font-body font-semibold rounded-xl hover:bg-navy hover:text-white transition-colors">See our work</a>
      <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan/20">Start a project <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
    </div>
  </div>
</section>
<?php require_once __DIR__ . '/includes/footer.php'; ?>
