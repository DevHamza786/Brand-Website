<?php
$page_title = 'Contact Us | Get a Quote | Aussie App Studio';
$current_page = 'contact';
require_once __DIR__ . '/includes/header.php';
$base = base_url('');
?>
<section id="form" class="pt-24 md:pt-28 pb-20 md:pb-28 scroll-mt-24 bg-navy">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <div class="rounded-3xl bg-white shadow-2xl overflow-hidden">
      <div class="grid lg:grid-cols-[1.35fr_0.65fr] min-h-0">
        <div class="p-8 md:p-12 lg:p-14">
          <p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">Let's Connect!</p>
          <h1 class="font-headline font-bold text-2xl md:text-3xl text-navy mb-8 leading-tight">Got a wild digital idea or a tech challenge? We're all ears!</h1>
          <form id="contact-page-form" class="space-y-8">
            <div class="grid grid-cols-2 gap-5">
              <div><label for="contact-firstname" class="block font-body font-medium text-slate-700 mb-2">First Name <span class="text-coral">*</span></label><input type="text" id="contact-firstname" name="firstName" required class="w-full h-12 px-4 rounded-lg border-0 border-b-2 border-slate-200 bg-transparent focus:border-cyan outline-none placeholder:text-slate-400" placeholder="First Name"></div>
              <div><label for="contact-lastname" class="block font-body font-medium text-slate-700 mb-2">Last Name</label><input type="text" id="contact-lastname" name="lastName" class="w-full h-12 px-4 rounded-lg border-0 border-b-2 border-slate-200 bg-transparent focus:border-cyan outline-none placeholder:text-slate-400" placeholder="Last Name"></div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div><label for="contact-email" class="block font-body font-medium text-slate-700 mb-2">Email Address <span class="text-coral">*</span></label><input type="email" id="contact-email" name="email" required class="w-full h-12 px-4 rounded-lg border-0 border-b-2 border-slate-200 bg-transparent focus:border-cyan outline-none placeholder:text-slate-400" placeholder="Email Address"></div>
              <div><label for="contact-phone" class="block font-body font-medium text-slate-700 mb-2">Phone Number</label><input type="tel" id="contact-phone" name="phone" class="w-full h-12 px-4 rounded-lg border-0 border-b-2 border-slate-200 bg-transparent focus:border-cyan outline-none placeholder:text-slate-400" placeholder="Phone Number"></div>
            </div>
            <div><label for="contact-company" class="block font-body font-medium text-slate-700 mb-2">Company Name</label><input type="text" id="contact-company" name="company" class="w-full h-12 px-4 rounded-lg border-0 border-b-2 border-slate-200 bg-transparent focus:border-cyan outline-none placeholder:text-slate-400" placeholder="Company Name"></div>
            <div>
              <p class="font-body font-medium text-slate-700 mb-4">I'm interested in...</p>
              <div class="flex flex-wrap gap-3">
                <?php foreach (['Branding & Design','Development','Mobile app development','Artificial intelligence (AI)','Digital marketing','Staff augmentation'] as $opt) { ?>
                <button type="button" data-interest-btn="<?php echo htmlspecialchars($opt); ?>" class="px-4 py-2.5 rounded-lg font-body text-sm font-medium border bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"><?php echo htmlspecialchars($opt); ?></button>
                <?php } ?>
              </div>
              <input type="hidden" name="interest" value="">
            </div>
            <div><label for="contact-message" class="block font-body font-medium text-slate-700 mb-2">Tell us about your project <span class="text-coral">*</span></label><textarea id="contact-message" name="message" required rows="4" class="w-full px-4 py-3 rounded-lg border-0 border-b-2 border-slate-200 bg-transparent focus:border-cyan outline-none resize-y min-h-[100px] placeholder:text-slate-400" placeholder="Tell us about your project..."></textarea></div>
            <p class="text-coral text-sm hidden" data-form-error></p>
            <div class="flex justify-end"><button type="submit" class="inline-flex items-center gap-2 px-8 py-4 bg-navy hover:bg-navy-deep text-white font-body font-semibold rounded-xl disabled:opacity-50">Submit</button></div>
          </form>
        </div>
        <div class="bg-slate-50 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <div class="space-y-6">
            <div><p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-1.5">Email</p><a href="mailto:hello@aussieappstudio.com.au" class="font-body font-medium text-navy hover:text-cyan-dark underline underline-offset-2">hello@aussieappstudio.com.au</a></div>
            <div><p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-1.5">Phone</p><p class="font-body text-slate-600 text-sm">Coming soon</p></div>
            <div><p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-1.5">Address</p><p class="text-slate-700 font-body leading-relaxed">Australia · Serving Sydney, Melbourne, Brisbane, Auckland & US</p></div>
            <div><p class="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-4">Follow us on</p><div class="flex gap-4"><a href="https://www.linkedin.com/company/aussie-app-studio" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-cyan" aria-label="LinkedIn"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="py-16 md:py-20 bg-navy text-white">
  <div class="max-w-content mx-auto px-6 md:px-10 text-center">
    <h2 class="font-headline font-bold text-2xl md:text-3xl mb-3">Let's build something great together</h2>
    <p class="text-slate-300 text-lg max-w-xl mx-auto mb-8">Request a consultation. Share your idea and we'll reply within 24 hours with next steps.</p>
    <a href="#form" class="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-xl">Request a consultation</a>
  </div>
</section>
<?php $footer_scripts = '<script src="' . $base . 'js/forms.js"></script>'; require_once __DIR__ . '/includes/footer.php'; ?>
