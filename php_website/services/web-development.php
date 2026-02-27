<?php
$page_title = 'Custom Web Development Australia | React, Node.js, Full Stack | Aussie App Studio';
$current_page = 'services';
require_once __DIR__ . '/../includes/header.php';
$base = base_url('');
$assets = asset_url('');

$service_breadcrumb = [['label'=>'Home','href'=>'index.php'],['label'=>'Services','href'=>'services.php'],['label'=>'Web Development','href'=>null]];
$service_subheading = 'Custom web development for Australia, NZ & US';
$service_headline = 'Custom Web Development:';
$service_headline_highlight = 'React, Node.js, Full Stack';
$service_description = 'We build scalable web applications with React and Node.js for startups and enterprises across Australia, New Zealand, and the US. From e‑commerce and SaaS dashboards to customer portals and internal tools. Get a free quote or discuss your project in the form.';
$service_cta_text = 'Get a free quote';
require_once __DIR__ . '/../includes/service-hero-with-form.php';
?>

<section class="py-16 md:py-20 bg-white">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed">In a crowded digital landscape, standing out is crucial. We are a best-in-class web development company dedicated to helping you make a lasting impression. We focus on creating unique, user-friendly websites that capture your brand's essence and engage your audience. Our team of skilled developers, designers, and strategists work collaboratively to ensure your website not only looks great but also delivers an exceptional user experience.</p>
  </div>
</section>

<section class="py-20 md:py-28 bg-slate-50">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">Web Development Services</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">Achieve your business goals with web development</h2>
    <p class="text-slate-600 max-w-3xl text-lg mb-14">Our Web Development services are designed to create custom, user-friendly websites that are both functional and visually appealing. Whether you need a bespoke solution tailored to your brand's identity or a robust e-commerce platform to boost sales, we have the expertise to deliver.</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <?php
      $webOfferings = [
        ['title'=>'Custom Web Development','description'=>'Our custom websites are designed to meet your specific needs. We specialize in bespoke web solutions tailor-made to reflect your brand identity, using unique website design and custom coding to create personalized solutions that stand out.'],
        ['title'=>'E-Commerce Development','description'=>'Transform your online business with e-commerce websites designed to optimize the shopping experience. From online store development to payment gateway integration, our digital storefront solutions provide seamless online retail platforms that drive sales.'],
        ['title'=>'Full-Stack Development','description'=>'Our full-stack solutions encompass both front-end and back-end development, ensuring a cohesive and comprehensive end-to-end web development. Whether MEAN stack or MERN stack, we deliver top-tier development across all layers.'],
        ['title'=>'Content Management Systems (CMS)','description'=>'Leverage our expertise in WordPress development, Drupal development, and other CMS integration. Whether you need custom CMS development or an overhaul of your current setup, we create flexible and scalable systems tailored to your needs.'],
        ['title'=>'API Development and Integration','description'=>'We specialize in custom API development and third-party API integration, offering robust RESTful APIs and GraphQL APIs. Our services include thorough API documentation and API testing to ensure seamless connectivity across platforms.'],
        ['title'=>'Web Hosting and Security','description'=>'Our comprehensive web hosting services cover everything from domain registration to SSL certificates and website migration. With our security audits and DDoS protection, your website will remain secure and reliable.'],
      ];
      foreach ($webOfferings as $off) { ?>
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
    <p class="text-center text-cyan font-body font-semibold text-sm uppercase tracking-wider mb-3">Why Partner with Us</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4 text-center">Why websites we develop are reliable</h2>
    <p class="text-slate-600 max-w-2xl mx-auto text-center mb-12">Request a consultation to discuss your project.</p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <?php foreach ([['Skilled team & proven methods','Our experienced team utilizes industry best practices to deliver reliable, high-performing websites tailored to your unique needs.'],['User-focused, responsive design','We design websites that prioritize user experience, ensuring responsive layouts that adapt seamlessly to any device or screen size.'],['Rigorous QA & ongoing support','Our meticulous quality assurance process guarantees flawless functionality, while our support services keep your website up-to-date and secure.'],['Scalable solutions with top-tier security','Our websites are built to scale with your business, incorporating robust security measures to protect your data and users.']] as $item) { ?>
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
    <p class="text-center text-cyan font-body font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
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
      <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">Transparent pricing</h2>
      <p class="text-slate-600 text-lg">Fixed scope and timeline. No surprise invoices. Get a detailed quote in 24 hours.</p>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      <?php
      $tiers = [['name'=>'Starter','description'=>'Landing pages, marketing sites, or small web apps.','features'=>['Up to 5–8 pages','Responsive design','SEO basics','Contact form','1–2 month timeline'],'priceLabel'=>'From $4,500','highlighted'=>false],['name'=>'Growth','description'=>'Full web apps: dashboards, e‑commerce, or SaaS.','features'=>['Custom frontend & backend','Auth & user management','API integration','Admin panel','3–6 month timeline'],'priceLabel'=>'From $15,000','highlighted'=>true],['name'=>'Enterprise','description'=>'Large-scale platforms and ongoing development.','features'=>['Complex workflows','Multi-tenant or white-label','Dedicated team','SLA & support','Custom timeline'],'priceLabel'=>'Custom quote','highlighted'=>false]];
      foreach ($tiers as $tier) {
        $hl = $tier['highlighted'];
      ?>
      <div class="relative h-full rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl <?php echo $hl ? 'border-cyan bg-navy text-white shadow-lg shadow-cyan/20' : 'border-slate-200 bg-white hover:border-cyan/40'; ?>">
        <?php if ($hl) { ?><div class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan text-navy font-body font-semibold text-sm">Most popular</div><?php } ?>
        <h3 class="font-headline font-bold text-xl mb-2"><?php echo htmlspecialchars($tier['name']); ?></h3>
        <p class="text-sm mb-6 <?php echo $hl ? 'text-slate-300' : 'text-slate-600'; ?>"><?php echo htmlspecialchars($tier['description']); ?></p>
        <p class="font-headline font-bold text-2xl mb-6 <?php echo $hl ? 'text-cyan-light' : 'text-navy'; ?>"><?php echo htmlspecialchars($tier['priceLabel']); ?></p>
        <ul class="space-y-3 mb-8">
          <?php foreach ($tier['features'] as $f) { ?><li class="flex items-start gap-3"><svg class="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span class="<?php echo $hl ? 'text-slate-200 text-sm' : 'text-slate-700 text-sm'; ?>"><?php echo htmlspecialchars($f); ?></span></li><?php } ?>
        </ul>
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
      <h2 class="font-headline font-bold text-2xl md:text-3xl text-navy">Why choose our web development team</h2>
    </div>
    <div class="text-slate-700 leading-relaxed space-y-6">
      <p>Our web development services are built around modern, proven technology. We use React and Next.js for the front end so your users get a fast, responsive experience on any device. On the server side we use Node.js and TypeScript so your application is maintainable and easy to extend. When we need a database we typically choose PostgreSQL for relational data or MongoDB when a document store fits better. Every stack decision is made with your long term goals in mind, not just the quickest path to launch.</p>
      <p>Australian businesses come to us when they need more than a basic website. They need a web application that handles real users, real data, and real transactions. That might be an e‑commerce platform with custom checkout and inventory logic, a SaaS product with subscriptions and dashboards, or an internal tool that streamlines operations. We have built all of these and we know how to scope them so you get a clear timeline and a fixed price. No endless iterations or surprise invoices.</p>
      <p>Performance and SEO are part of every web development project we deliver. Security is non-negotiable: we follow OWASP guidelines, use parameterised queries, and ensure authentication and authorisation are implemented correctly. We work with clients in Sydney, Melbourne, Brisbane, Auckland, and the United States. Time zone aligned so you get responses and calls in your business hours.</p>
    </div>
  </div>
</section>

<section class="py-20 md:py-28 bg-white border-y border-slate-200 w-full">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">FAQs</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">Curious about our custom digital & marketing solutions? Get the answers.</h2>
    <p class="text-slate-600 max-w-2xl text-lg mb-14">Software development is a field defined by change. Learn about the latest developments here to make the best decisions for your organization.</p>
    <div class="space-y-4 max-w-5xl">
      <?php
      $faqs = [['q'=>'What is the typical timeline for developing a custom website?','a'=>'The timeline varies depending on the complexity of the project, but on average, a custom website takes 6–12 weeks from the initial consultation to final deployment.'],['q'=>'Can you integrate third-party services into my website?','a'=>'Yes, we specialize in API development and integration, allowing us to seamlessly connect your website with third-party services like payment gateways, CRM systems, and more.'],['q'=>'Do you offer ongoing maintenance and support for websites?','a'=>'We provide comprehensive web hosting and security services, including ongoing maintenance to ensure your website remains secure and up-to-date.'],['q'=>'How do you ensure my website will be mobile-friendly?','a'=>'All our websites are developed using responsive design techniques, ensuring they look and function perfectly on all devices, including smartphones and tablets.'],['q'=>'Can you help with SEO for my new website?','a'=>'Yes, we incorporate SEO best practices into the development process and can provide additional SEO services to help your website rank well in search engines.']];
      foreach ($faqs as $idx => $faq) { ?>
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
    <p class="text-slate-300 text-lg max-w-xl mx-auto mb-8">Request a consultation. Share your brief and we will reply within 24 hours with a ballpark quote and next steps.</p>
    <a href="<?php echo $base; ?>contact.php" class="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan/25">Get a quote <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
  </div>
</section>

<?php $footer_scripts = '<script src="' . $base . 'js/forms.js"></script><script src="' . $base . 'js/tech-tabs.js"></script><script src="' . $base . 'js/faq.js"></script>'; require_once __DIR__ . '/../includes/footer.php'; ?>
