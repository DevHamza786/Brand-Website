<?php
$heroSlides = [
  ['sub'=>'WEB & MOBILE APP DEVELOPMENT FOR AUSTRALIA, USA & NZ','head'=>'Digital products that win, ','highlight'=>'in your time zone.','desc'=>'We build high-performance web and mobile apps for ambitious brands in Australia, the USA, and New Zealand. Custom web development, mobile app development, UI/UX design, and ongoing support. Strategy to launch, in sync with your local hours.'],
  ['sub'=>'CUSTOM SOFTWARE & UI/UX','head'=>'From idea to launch, ','highlight'=>'faster.','desc'=>'Discovery, design, and development in one place. We help you validate, prototype, and ship products that users love—with clear timelines and transparent pricing.'],
  ['sub'=>'TRUSTED BY BRANDS IN AU, USA & NZ','head'=>'Local partnership, ','highlight'=>'global capability.','desc'=>'An Australian-owned studio with the technical firepower to compete anywhere. Get the reliability of a local partner and the scale of a global team.']
];
?>
<section class="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-navy via-navy-deep to-navy-light text-white">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.15),transparent)]"></div>
  <div class="max-w-content mx-auto px-6 md:px-10 py-24 md:py-32 w-full relative z-10">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div class="order-2 lg:order-1 relative min-h-[320px] md:min-h-[380px]">
        <?php foreach ($heroSlides as $i => $s) { ?>
        <div data-hero-slide class="absolute inset-0 transition-opacity duration-500 <?php echo $i===0?'opacity-100 z-10':'opacity-0 z-0 pointer-events-none'; ?>">
          <p class="text-cyan-light font-body font-medium text-sm uppercase tracking-wider mb-6"><?php echo htmlspecialchars($s['sub']); ?></p>
          <h1 class="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"><?php echo htmlspecialchars($s['head']); ?><span class="text-cyan-light"> <?php echo htmlspecialchars($s['highlight']); ?></span></h1>
          <p class="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed"><?php echo htmlspecialchars($s['desc']); ?></p>
          <div class="flex flex-wrap gap-4">
            <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-2xl shadow-lg">Get a quote</a>
            <a href="<?php echo $base; ?>work.php" class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-400/60 hover:border-cyan-light text-white font-body font-semibold">See our work</a>
          </div>
        </div>
        <?php } ?>
      </div>
      <div class="order-1 lg:order-2">
        <div class="relative max-w-md mx-auto lg:ml-auto p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl">
          <h2 class="font-headline font-bold text-xl md:text-2xl text-navy mb-1">Discuss your project</h2>
          <p class="font-headline font-bold text-xl md:text-2xl text-cyan mb-6">needs</p>
          <form id="hero-contact-form" class="space-y-4">
            <input type="text" name="name" required placeholder="Name" class="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none text-navy">
            <input type="email" name="email" required placeholder="Email" class="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none text-navy">
            <input type="tel" name="phone" placeholder="Phone" class="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none text-navy">
            <input type="text" name="company" placeholder="Company" class="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none text-navy">
            <textarea name="message" required rows="3" placeholder="Your message..." class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan outline-none text-navy"></textarea>
            <p class="text-red-600 text-sm hidden" data-form-error></p>
            <button type="submit" class="w-full h-12 px-6 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <?php if (count($heroSlides) > 1) { ?>
    <div class="mt-10 flex items-center justify-between gap-4 max-w-content mx-auto px-6 md:px-10">
      <div class="flex items-center gap-2">
        <?php foreach ($heroSlides as $i => $s) { ?><button type="button" data-hero-dot class="h-2 rounded-full transition-all <?php echo $i===0?'w-8 bg-cyan':'w-2 bg-white/40'; ?>"></button><?php } ?>
      </div>
    </div>
    <?php } ?>
  </div>
</section>

<section class="py-16 md:py-20 bg-white border-y border-slate-200">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
      <div class="text-center"><p class="font-headline font-bold text-4xl md:text-5xl text-cyan mb-2">50+</p><p class="text-slate-600 text-sm md:text-base">Projects delivered</p></div>
      <div class="text-center"><p class="font-headline font-bold text-4xl md:text-5xl text-cyan mb-2">3</p><p class="text-slate-600 text-sm md:text-base">Regions served</p></div>
      <div class="text-center"><p class="font-headline font-bold text-4xl md:text-5xl text-cyan mb-2">24h</p><p class="text-slate-600 text-sm md:text-base">Response time</p></div>
      <div class="text-center"><p class="font-headline font-bold text-4xl md:text-5xl text-cyan mb-2">100%</p><p class="text-slate-600 text-sm md:text-base">Client-focused</p></div>
    </div>
  </div>
</section>
