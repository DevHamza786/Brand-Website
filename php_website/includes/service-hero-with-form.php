<?php
// Expects: $service_breadcrumb (array of [label, href or null]), $service_subheading, $service_headline, $service_headline_highlight, $service_description, $service_cta_text
if (!isset($service_cta_text)) $service_cta_text = 'Get a quote';
?>
<section class="relative pt-24 md:pt-28 pb-16 md:pb-24 bg-navy text-white overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(6,182,212,0.12),transparent)]"></div>
  <div class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 32px 32px;"></div>
  <div class="max-w-content mx-auto px-6 md:px-10 relative z-10">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
      <div class="order-2 lg:order-1">
        <nav class="text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
          <ol class="flex flex-wrap gap-2 items-center">
            <?php foreach ($service_breadcrumb as $i => $item) { ?>
            <li class="flex items-center gap-2"><?php if ($i > 0) { ?><span aria-hidden>/</span><?php } ?><?php if (!empty($item['href'])) { ?><a href="<?php echo $base . $item['href']; ?>" class="hover:text-cyan-light transition-colors"><?php echo htmlspecialchars($item['label']); ?></a><?php } else { ?><span class="text-white font-medium"><?php echo htmlspecialchars($item['label']); ?></span><?php } ?></li>
            <?php } ?>
          </ol>
        </nav>
        <?php if (!empty($service_subheading)) { ?>
        <p class="text-cyan-light font-body font-medium text-sm uppercase tracking-wider mb-4"><?php echo htmlspecialchars($service_subheading); ?></p>
        <?php } ?>
        <h1 class="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          <?php echo htmlspecialchars($service_headline); ?><?php if (!empty($service_headline_highlight)) { ?> <span class="text-cyan-light"><?php echo htmlspecialchars($service_headline_highlight); ?></span><?php } ?>
        </h1>
        <p class="text-xl text-slate-300 leading-relaxed mb-8 max-w-xl"><?php echo htmlspecialchars($service_description); ?></p>
        <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 px-6 py-3.5 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan/25"><?php echo htmlspecialchars($service_cta_text); ?> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
      <div class="order-1 lg:order-2">
        <div class="relative max-w-md mx-auto lg:ml-auto lg:mr-0">
          <div class="relative p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-navy/20">
            <div class="absolute right-0 bottom-0 w-1/2 h-1/2 rounded-tl-[100%] bg-gradient-to-tr from-cyan/10 to-transparent pointer-events-none"></div>
            <h2 class="font-headline font-bold text-xl md:text-2xl text-navy mb-1">Discuss your project</h2>
            <p class="font-headline font-bold text-xl md:text-2xl text-cyan mb-6">needs</p>
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
  </div>
</section>
