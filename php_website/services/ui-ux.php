<?php
$page_title = 'UI/UX Design Agency Australia | User Experience & Interface Design | Aussie App Studio';
$current_page = 'services';
require_once __DIR__ . '/../includes/header.php';
$base = base_url('');
$assets = asset_url('');

$service_breadcrumb = [['label'=>'Home','href'=>'index.php'],['label'=>'Services','href'=>'services.php'],['label'=>'UI/UX Design','href'=>null]];
$service_subheading = 'User experience & interface design';
$service_headline = 'UI/UX Design Services:';
$service_headline_highlight = 'Web & Mobile';
$service_description = 'We design web and mobile experiences that users love and that drive results. From discovery and user research to wireframes, prototypes, and high fidelity UI. Conversion focused design that looks good and performs. Get a free quote or discuss your project in the form.';
$service_cta_text = 'Get a free quote';
require_once __DIR__ . '/../includes/service-hero-with-form.php';
?>

<section class="py-16 md:py-20 bg-white">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed">UI/UX design focuses on creating visually appealing, intuitive interfaces that enhance user interaction with websites or apps. We blend aesthetics with functionality, ensuring every element is user-friendly and engaging. Our approach prioritizes seamless navigation and optimal user journeys to create memorable and effective digital experiences.</p>
  </div>
</section>

<section class="py-20 md:py-28 bg-slate-50">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">Our UI/UX Design Services</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">Intuitive and engaging UI/UX design for your digital success</h2>
    <p class="text-slate-600 max-w-3xl text-lg mb-14">We offer comprehensive UI/UX design services, from website and app design to interaction design. Our goal is to craft seamless, engaging experiences that align with your brand and keep users coming back.</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <?php
      $uiOfferings = [
        ['title'=>'Website Design','description'=>'Our website design services focus on creating visually appealing, user-friendly layouts. We design websites that reflect your brand identity while providing a seamless and enjoyable user experience across all devices.'],
        ['title'=>'Web Application Design','description'=>'We specialize in designing intuitive web applications tailored to your business needs. Our designs emphasize functionality, usability, and aesthetics, ensuring users have a seamless and engaging experience on every platform.'],
        ['title'=>'Responsive Design','description'=>'Our responsive design services ensure your website or app looks and functions flawlessly across all devices. We create adaptable layouts that provide an optimal user experience on desktops, tablets, and smartphones.'],
        ['title'=>'Interaction Design','description'=>'We focus on creating dynamic, interactive elements that enhance user engagement. Our interaction design includes animations, transitions, and intuitive touch gestures, making your digital platform more immersive and user-friendly.'],
        ['title'=>'User Journey Mapping','description'=>'Our user journey mapping visualizes the paths users take on your website or app. We optimize every step of the journey, ensuring a smooth, intuitive experience that encourages engagement and conversions.'],
        ['title'=>'Information Architecture','description'=>"We organize and structure your website's content for easy navigation. Our information architecture services create intuitive layouts, helping users find what they need quickly, enhancing usability, and improving the overall user experience."],
      ];
      foreach ($uiOfferings as $off) { ?>
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
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4 text-center">Enhancing user experience with exceptional UI/UX design services</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <?php foreach ([['User-centred & conversion-focused','We blend aesthetics with functionality, ensuring every element is user-friendly and aligned with your business goals.'],['Research-driven design','We start with discovery and user research so we understand your audience and design with data, not assumptions.'],['Seamless dev handoff','We provide design systems, specs, and assets so development matches the design and ships without guesswork.'],['Web & mobile expertise','From marketing sites to complex web apps and native mobile UI, we deliver consistent, high-quality experiences.']] as $item) { ?>
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
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4 text-center">How we create digital and marketing solutions</h2>
    <p class="text-slate-600 max-w-2xl mx-auto text-center mb-14">A custom design or marketing plan could help your organization perform on a new level. We work closely to determine your needs and deliver the desired outcome.</p>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
      <?php foreach ([['01','Research','We research your industry and market trends to understand opportunities and challenges.'],['02','Project Scoping','We determine scope, objectives, deliverables, and what we need from you.'],['03','Discovery Session','We dive into your needs, goals, and expectations for the project.'],['04','Project Kickoff','Our team starts the initial phase of work to turn your project into reality.']] as $i => $s) { ?>
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
      <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">UI/UX pricing</h2>
      <p class="text-slate-600 text-lg">Clear deliverables and timeline. Get a proposal and quote in 24 hours.</p>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <?php
      $tiers = [['name'=>'Discovery & wireframes','description'=>'Validate flows and structure before build.','features'=>['User research','User flows','Wireframes (key screens)','Feedback round','1–2 week timeline'],'priceLabel'=>'From $2,500','highlighted'=>false],['name'=>'Full UI/UX','description'=>'End-to-end design for web or mobile.','features'=>['Discovery + wireframes','High-fidelity UI','Design system','Prototype','4–8 week timeline'],'priceLabel'=>'From $8,000','highlighted'=>true],['name'=>'Ongoing design','description'=>'Iterative design support and new features.','features'=>['Sprint-based design','New screens & flows','Design system updates','Dev handoff','Monthly retainer'],'priceLabel'=>'Custom quote','highlighted'=>false]];
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
      <h2 class="font-headline font-bold text-2xl md:text-3xl text-navy">User centred design that converts</h2>
    </div>
    <div class="text-slate-700 leading-relaxed space-y-6">
      <p>Good UI/UX design is not just about how things look. It is about how users move through your product and where they get stuck. We start with discovery and user research so we understand your audience and your goals. Then we map flows and build wireframes so you can see the structure before any visual design. That way we catch problems early and avoid expensive changes later.</p>
      <p>We design for conversion. Every screen has a job: inform, persuade, or convert. We use clear hierarchy, obvious calls to action, and friction free forms. We also think about accessibility so more people can use your product. When we hand off to development we provide a design system and specs so the build matches the design. Australian and international clients choose us when they want one team for both design and development, or when they need a dedicated design phase before they commit to build.</p>
    </div>
  </div>
</section>

<section class="py-20 md:py-28 bg-white border-y border-slate-200 w-full">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">FAQs</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-14">Curious about our custom digital & marketing solutions? Get the answers.</h2>
    <div class="space-y-4 max-w-5xl">
      <?php
      $faqs = [['q'=>'What is included in a typical UI/UX project?','a'=>'A typical project includes discovery and user research, wireframes or user flows, high-fidelity UI design, and a design system with specs and assets for development. We can also provide interactive prototypes and ongoing design support.'],['q'=>'Do you work with our development team or build the product too?','a'=>'We work with both. You can use us for design only and hand off to your own dev team, or we can handle design and development so one team owns the full product.'],['q'=>'How long does a UI/UX project take?','a'=>'Discovery and wireframes usually take 1–2 weeks. A full UI/UX project (research through to design system and handoff) typically runs 4–8 weeks depending on scope and number of screens.'],['q'=>'Do you design for accessibility?','a'=>'Yes. We consider contrast, focus states, and readable typography, and we can align deliverables with WCAG guidelines so more users can access your product.']];
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
    <p class="text-slate-300 text-lg max-w-xl mx-auto mb-8">Request a consultation. Share your project and we will reply within 24 hours with next steps and a quote.</p>
    <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan/25">Get a quote <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
  </div>
</section>

<?php $footer_scripts = '<script src="' . $base . 'js/forms.js"></script><script src="' . $base . 'js/tech-tabs.js"></script><script src="' . $base . 'js/faq.js"></script>'; require_once __DIR__ . '/../includes/footer.php'; ?>
