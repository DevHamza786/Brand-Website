<?php
$page_title = 'Mobile App Development Australia | Flutter, React Native | iOS & Android | Aussie App Studio';
$current_page = 'services';
require_once __DIR__ . '/../includes/header.php';
$base = base_url('');
$assets = asset_url('');

$service_breadcrumb = [['label'=>'Home','href'=>'index.php'],['label'=>'Services','href'=>'services.php'],['label'=>'Mobile App Development','href'=>null]];
$service_subheading = 'iOS & Android app development';
$service_headline = 'Mobile App Development:';
$service_headline_highlight = 'Flutter & React Native';
$service_description = 'We build native and cross platform mobile apps for Australian and international brands. One codebase for iOS and Android, faster launch and lower cost. From concept to app store and beyond. Get a free quote or discuss your app idea in the form.';
$service_cta_text = 'Get a free quote';
require_once __DIR__ . '/../includes/service-hero-with-form.php';
?>

<section class="py-16 md:py-20 bg-white">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed">Set your organization apart with a sleek, smooth app that's a cut above the rest. Our team uses the latest in UI/UX design principles and cutting-edge technologies to create beautiful, easy-to-use apps that draw in users and don't let go. We specialize in creating high-performance mobile applications tailored to your business needs.</p>
  </div>
</section>

<section class="py-20 md:py-28 bg-slate-50">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">App Development Services</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">App development to support business</h2>
    <p class="text-slate-600 max-w-3xl text-lg mb-14">In an increasingly mobile-driven world, our App Development services are crucial for businesses looking to engage with their audience on the go. We specialize in creating custom mobile apps for iOS, Android, and cross-platform solutions using the latest frameworks like Flutter and React Native.</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <?php
      $appOfferings = [
        ['title'=>'Mobile App Development','description'=>'Develop custom mobile apps with us, whether you are targeting iOS app development, Android app development, or native app development. Our mobile application design focuses on creating mobile software solutions that are both functional and user-friendly.'],
        ['title'=>'Mobile App Support','description'=>'Ensure your app runs smoothly with our app maintenance and app updates. We offer comprehensive bug fixing, performance monitoring, and compatibility testing to keep your app performing at its best.'],
        ['title'=>'Flutter App Development','description'=>'Our team excels in creating cross-platform apps using Flutter for web and mobile. From custom Flutter apps to Flutter UI/UX design and Flutter app testing, we deliver high-quality Flutter widgets that enhance user experiences.'],
        ['title'=>'Hybrid App Development','description'=>'Expand your app\'s reach with hybrid mobile apps that run seamlessly across platforms. We provide cross-platform solutions using HTML5 apps and hybrid app frameworks, ensuring smooth multi-platform development and consistent hybrid app design.'],
        ['title'=>'Wearable App Development','description'=>'Tap into the wearable tech market with our smartwatch apps and fitness tracker apps. We develop innovative wearable technology solutions, including wearable software and health monitoring apps, designed for the future of connectivity.'],
        ['title'=>'Cross-Platform App Development','description'=>'Our cross-platform mobile apps enable you to reach more users with Xamarin development and React Native apps. We specialize in cross-platform frameworks that ensure mobile compatibility across devices.'],
      ];
      foreach ($appOfferings as $off) { ?>
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
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4 text-center">Drive engagement with expert mobile app solutions</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <?php foreach ([['Innovative & user-centric designs','We create intuitive, visually appealing mobile apps that enhance user experience and boost engagement.'],['Cross-platform expertise','Our team excels in developing responsive apps for iOS, Android, and cross-platform environments.'],['End-to-end development process','We manage the entire app development lifecycle, from concept to launch, ensuring seamless execution.'],['Ongoing support & maintenance','We provide continuous support to keep your app updated, secure, and performing at its best.']] as $item) { ?>
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
    <p class="text-slate-600 max-w-2xl mx-auto text-center mb-14">A custom software solution could help your organization perform on a new level. We work closely to determine your needs and deliver the desired performance.</p>
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
      <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">Mobile app pricing</h2>
      <p class="text-slate-600 text-lg">One codebase for iOS and Android. Fixed scope and timeline. Get a detailed quote in 24 hours.</p>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <?php
      $tiers = [['name'=>'MVP','description'=>'Validate your idea with a minimal viable product.','features'=>['Core features only','iOS + Android (cross-platform)','Basic backend','App store submission','2–4 month timeline'],'priceLabel'=>'From $12,000','highlighted'=>false],['name'=>'Full product','description'=>'Production-ready app with polish and scale.','features'=>['Full feature set','Native feel & performance','API + backend','Analytics & push','4–8 month timeline'],'priceLabel'=>'From $25,000','highlighted'=>true],['name'=>'Ongoing','description'=>'New features, updates, and dedicated support.','features'=>['Sprint-based releases','Bug fixes & updates','New features','App store compliance','Monthly retainer'],'priceLabel'=>'Custom quote','highlighted'=>false]];
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
      <h2 class="font-headline font-bold text-2xl md:text-3xl text-navy">Why businesses choose us for mobile app development</h2>
    </div>
    <div class="text-slate-700 leading-relaxed space-y-6">
      <p>Building an app for both iOS and Android used to mean two separate codebases and two teams. Today we use Flutter and React Native so one codebase runs on both platforms. That cuts development time and cost while still delivering a native feel. Flutter gives you pixel perfect UI and fast performance; React Native lets you reuse web skills and ship quickly. We pick the right fit for your product and your timeline.</p>
      <p>Our mobile app development team has shipped apps for startups and enterprises in Australia, New Zealand, and the US. We handle the full journey: discovery and wireframes, UI design, development, testing, app store submission, and ongoing updates. You get a single team that owns the outcome. We also build and integrate the backend APIs and admin tools so your app has a solid foundation.</p>
      <p>We work in your time zone. If you are in Sydney or Melbourne you get calls and updates in your business hours. If you have an app idea and want a team that communicates clearly and delivers on time, get in touch. Tell us what you want to build and we will come back with a scope and a quote. No obligation.</p>
    </div>
  </div>
</section>

<section class="py-20 md:py-28 bg-white border-y border-slate-200 w-full">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">FAQs</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-14">Curious about our custom digital & marketing solutions? Get the answers.</h2>
    <div class="space-y-4 max-w-5xl">
      <?php
      $faqs = [['q'=>'Which platforms do you develop mobile apps for?','a'=>'We develop apps for both iOS and Android platforms, and we also specialize in cross-platform app development using frameworks like Flutter and React Native.'],['q'=>'What is the difference between native and hybrid apps?','a'=>'Native apps are built specifically for one platform (iOS or Android) and offer the best performance, while hybrid apps are built using web technologies and can run on multiple platforms with a single codebase.'],['q'=>'How do you ensure the security of the apps you develop?','a'=>'We follow industry best practices for app security, including data encryption, secure APIs, and regular security testing to protect your app from vulnerabilities.'],['q'=>'Can you provide ongoing support after the app is launched?','a'=>'Yes, we offer mobile app support services that include app maintenance, updates, and bug fixing to keep your app running smoothly post-launch.'],['q'=>'What are wearable apps, and do you develop them?','a'=>'Wearable apps are designed for devices like smartwatches and fitness trackers. We offer wearable app development to create apps specifically for these devices.']];
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
    <p class="text-slate-300 text-lg max-w-xl mx-auto mb-8">Request a consultation. Share your idea and we will reply within 24 hours with next steps and a ballpark quote.</p>
    <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan/25">Get a quote <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
  </div>
</section>

<?php $footer_scripts = '<script src="' . $base . 'js/forms.js"></script><script src="' . $base . 'js/tech-tabs.js"></script><script src="' . $base . 'js/faq.js"></script>'; require_once __DIR__ . '/../includes/footer.php'; ?>
