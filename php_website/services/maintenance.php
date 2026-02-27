<?php
$page_title = 'App & Web Support and Maintenance Australia | Ongoing Development | Aussie App Studio';
$current_page = 'services';
require_once __DIR__ . '/../includes/header.php';
$base = base_url('');
$assets = asset_url('');

$service_breadcrumb = [['label'=>'Home','href'=>'index.php'],['label'=>'Services','href'=>'services.php'],['label'=>'Support & Maintenance','href'=>null]];
$service_subheading = 'Ongoing support for web & mobile';
$service_headline = 'Support & Maintenance:';
$service_headline_highlight = 'Keep your product secure & fast';
$service_description = 'Launch is just the start. We offer ongoing support, updates, and optimisation so your web or mobile product stays secure, fast, and aligned with your roadmap. Bug fixes, security patches, performance tuning, and small feature work. Get a quote or discuss your needs in the form.';
$service_cta_text = 'Get a quote';
require_once __DIR__ . '/../includes/service-hero-with-form.php';
?>

<section class="py-16 md:py-20 bg-white">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed">Your organization runs on software. Our support and maintenance services can make your existing software serve your organization better. Tell us your goals, and our team can get to work to improve your existing software or keep it secure and fast while you focus on your business.</p>
  </div>
</section>

<section class="py-20 md:py-28 bg-slate-50">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">Support & Maintenance</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">Streamline operations with expert support tailored to you</h2>
    <p class="text-slate-600 max-w-3xl text-lg mb-14">Enhance your product's reliability with our support services. We handle bug fixes, security patches, performance tuning, and small feature work so your web or mobile app stays secure, fast, and aligned with your roadmap.</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <?php
      $maintenanceOfferings = [
        ['title'=>'Bug fixes & updates','description'=>'We fix bugs, apply dependency updates, and keep your product stable. You send requests through a dedicated channel and we prioritise, estimate, and deliver in regular releases.'],
        ['title'=>'Security patches & monitoring','description'=>'We apply security patches, monitor for vulnerabilities, and help you stay compliant. Your product stays secure without you managing every update yourself.'],
        ['title'=>'Performance tuning','description'=>'We analyse and improve load times, database queries, and resource usage. Performance tuning keeps your app fast as traffic and data grow.'],
        ['title'=>'Feature iterations','description'=>'Small features and improvements delivered in the same support pipeline. We scope, estimate, and ship so your product evolves with your business.'],
        ['title'=>'Dedicated support channel','description'=>'One place to report issues and request work. Clear priorities, realistic timelines, and a single team that owns the outcome so you are never left waiting.'],
        ['title'=>'Retainer arrangements','description'=>'Fixed monthly hours and a predictable budget. We work in your time zone so when something breaks you get a fast response and a clear path to resolution.'],
      ];
      foreach ($maintenanceOfferings as $off) { ?>
      <div class="h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-cyan/30 hover:shadow-xl transition-all duration-300">
        <h3 class="font-headline font-bold text-xl text-navy mb-4"><?php echo htmlspecialchars($off['title']); ?></h3>
        <p class="text-slate-600 text-sm leading-relaxed mb-6"><?php echo htmlspecialchars($off['description']); ?></p>
        <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 text-cyan font-body font-semibold text-sm hover:text-cyan-dark transition-colors">Learn more <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
      <?php } ?>
    </div>
  </div>
</section>

<section class="py-20 md:py-28 bg-white">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">Why Partner with Us</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4 text-center">Why choose us for support and maintenance</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <?php foreach ([['Experienced with your stack','We work on React, Node.js, Flutter, and common backends. We can support what you already have or what we built for you.'],['Predictable capacity & cost','Retainer plans give you a fixed monthly budget and guaranteed capacity so you can plan without surprise invoices.'],['Same time zone','Australian and international clients get responses and fixes in their business hours. No overnight handoffs or delayed replies.'],['Clear process','Dedicated channel, prioritisation, and regular releases. You always know what is in progress and what is next.']] as $item) { ?>
      <div class="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan/20 hover:shadow-lg transition-all duration-300 text-center">
        <h3 class="font-headline font-semibold text-navy mb-3"><?php echo htmlspecialchars($item[0]); ?></h3>
        <p class="text-slate-600 text-sm leading-relaxed"><?php echo htmlspecialchars($item[1]); ?></p>
      </div>
      <?php } ?>
    </div>
    <div class="text-center">
      <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan/25">Request a consultation <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
    </div>
  </div>
</section>

<section class="py-20 md:py-28 bg-slate-50">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">Our Process</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4 text-center">How we set up support</h2>
    <p class="text-slate-600 max-w-2xl mx-auto text-center mb-14">We work closely to understand your product and processes so support runs smoothly from day one.</p>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
      <?php foreach ([['01','Research','We research your current setup and support needs to understand priorities and constraints.'],['02','Project Scoping','We determine scope of support, SLAs, response times, and what we need from you.'],['03','Discovery Session','We review your codebase, environments, and processes so we can support effectively.'],['04','Project Kickoff','We set up channels, access, and cadence so support runs smoothly from day one.']] as $i => $s) { ?>
      <div class="relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan/20 hover:shadow-lg transition-all duration-300">
        <span class="font-headline font-bold text-4xl text-cyan/20 block mb-3"><?php echo $s[0]; ?></span>
        <h3 class="font-headline font-semibold text-navy mb-2"><?php echo htmlspecialchars($s[1]); ?></h3>
        <p class="text-slate-600 text-sm leading-relaxed"><?php echo htmlspecialchars($s[2]); ?></p>
        <?php if ($i < 3) { ?><span class="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-slate-300">→</span><?php } ?>
      </div>
      <?php } ?>
    </div>
  </div>
</section>

<?php require_once __DIR__ . '/../includes/tech-section.php'; ?>

<section class="py-20 md:py-28 bg-slate-50 overflow-hidden">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <div class="text-center max-w-2xl mx-auto mb-14">
      <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">Support & maintenance pricing</h2>
      <p class="text-slate-600 text-lg">Fixed monthly hours. Predictable budget. We work in your time zone.</p>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <?php
      $tiers = [['name'=>'Starter support','description'=>'Peace of mind for small products.','features'=>['Up to 10 hours/month','Bug fixes & small updates','Security patches','Email support','48h response'],'priceLabel'=>'From $800/mo','highlighted'=>false],['name'=>'Growth support','description'=>'Ongoing care for growing products.','features'=>['Up to 30 hours/month','Bug fixes & feature iterations','Performance tuning','Dedicated channel','24h response'],'priceLabel'=>'From $2,200/mo','highlighted'=>true],['name'=>'Enterprise','description'=>'Dedicated capacity and SLA.','features'=>['Custom hours','Priority support','SLA & uptime','Sprint planning','Dedicated team'],'priceLabel'=>'Custom quote','highlighted'=>false]];
      foreach ($tiers as $tier) { $hl = $tier['highlighted']; ?>
      <div class="relative h-full rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl <?php echo $hl ? 'border-cyan bg-navy text-white shadow-lg shadow-cyan/20' : 'border-slate-200 bg-white hover:border-cyan/40'; ?>">
        <?php if ($hl) { ?><div class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan text-navy font-body font-semibold text-sm">Most popular</div><?php } ?>
        <h3 class="font-headline font-bold text-xl mb-2"><?php echo htmlspecialchars($tier['name']); ?></h3>
        <p class="text-sm mb-6 <?php echo $hl ? 'text-slate-300' : 'text-slate-600'; ?>"><?php echo htmlspecialchars($tier['description']); ?></p>
        <p class="font-headline font-bold text-2xl mb-6 <?php echo $hl ? 'text-cyan-light' : 'text-navy'; ?>"><?php echo htmlspecialchars($tier['priceLabel']); ?></p>
        <ul class="space-y-3 mb-8"><?php foreach ($tier['features'] as $f) { ?><li class="flex items-start gap-3"><svg class="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span class="<?php echo $hl ? 'text-slate-200 text-sm' : 'text-slate-700 text-sm'; ?>"><?php echo htmlspecialchars($f); ?></span></li><?php } ?></ul>
        <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-body font-semibold text-sm transition-all duration-200 hover:scale-[1.02] <?php echo $hl ? 'bg-cyan hover:bg-cyan-light text-navy' : 'bg-navy hover:bg-navy-deep text-white'; ?>">Get a quote <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
      <?php } ?>
    </div>
  </div>
</section>

<section class="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(6,182,212,0.06),transparent)] pointer-events-none"></div>
  <div class="max-w-copy mx-auto px-6 md:px-10 relative">
    <div class="border-l-4 border-cyan pl-8 mb-10">
      <h2 class="font-headline font-bold text-2xl md:text-3xl text-navy">Why ongoing support and maintenance matter</h2>
    </div>
    <div class="text-slate-700 leading-relaxed space-y-6">
      <p>Software does not stand still. Browsers and mobile operating systems change. Security vulnerabilities get discovered. Users find bugs. Our support and maintenance services keep your web or mobile app current. We apply security patches, fix bugs, and tune performance so your product stays reliable and fast. We also add small features and improvements so the product evolves with your business.</p>
      <p>We work with clients who built their product with us and clients who built elsewhere. We use a dedicated support channel so you have one place to report issues and request work. You get clear priorities, realistic timelines, and a single team that owns the outcome. We also offer retainer arrangements so you have a fixed monthly budget and a predictable capacity. Australian and international businesses choose us because we work in their time zone. When something breaks you want a fix fast.</p>
    </div>
  </div>
</section>

<section class="py-20 md:py-28 bg-white border-y border-slate-200 w-full">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">FAQs</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-14">Curious about our support & maintenance solutions? Get the answers.</h2>
    <div class="space-y-4 max-w-5xl">
      <?php
      $faqs = [['q'=>'Do you support apps or websites you did not build?','a'=>'Yes. We work with clients who built their product with us and clients who built elsewhere. We review the codebase and stack during onboarding and then support it like our own.'],['q'=>'What is included in a typical support retainer?','a'=>'Typically: bug fixes, security patches, dependency updates, small feature work, and a dedicated channel for requests. Hours and response times depend on the plan you choose.'],['q'=>'How do we report issues and request work?','a'=>'You get a dedicated support channel (e.g. email or Slack). You send requests there; we prioritise, estimate, and schedule work. We keep you updated on progress and release in regular cycles.'],['q'=>'What response times do you offer?','a'=>'Starter plans usually include a 48-hour response time. Growth and enterprise plans can include 24-hour or faster response, depending on your needs and SLA.']];
      foreach ($faqs as $faq) { ?>
      <div class="rounded-2xl border-2 bg-slate-50/50 transition-all duration-200 border-slate-200 hover:border-slate-300" data-faq-item>
        <button type="button" class="w-full px-6 py-5 flex justify-between items-center gap-4 text-left" data-faq-toggle aria-expanded="false">
          <span class="font-headline font-semibold text-navy text-base md:text-lg pr-4"><?php echo htmlspecialchars($faq['q']); ?></span>
          <span class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg font-body font-medium bg-white border border-slate-200 text-slate-600" data-faq-plus>+</span>
        </button>
        <div class="overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-out" data-faq-content>
          <div class="px-6 pb-6 pt-0"><p class="text-slate-600 leading-relaxed text-base border-t border-slate-200/80 pt-5"><?php echo htmlspecialchars($faq['a']); ?></p></div>
        </div>
      </div>
      <?php } ?>
    </div>
  </div>
</section>

<section class="py-16 md:py-20 bg-navy text-white">
  <div class="max-w-content mx-auto px-6 md:px-10 text-center">
    <h2 class="font-headline font-bold text-2xl md:text-3xl mb-3">Let's build something great together</h2>
    <p class="text-slate-300 text-lg max-w-xl mx-auto mb-8">Need ongoing support for your product? Tell us about your app or website and we will propose a support plan and quote.</p>
    <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan/25">Get a quote <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
  </div>
</section>

<?php $footer_scripts = '<script src="' . $base . 'js/forms.js"></script><script src="' . $base . 'js/tech-tabs.js"></script><script src="' . $base . 'js/faq.js"></script>'; require_once __DIR__ . '/../includes/footer.php'; ?>
