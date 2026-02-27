<?php
require_once __DIR__ . '/../config.php';
$base = base_url('');
$assets = asset_url('');
?>
</main>
<footer class="bg-navy text-white">
  <div class="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
      <div>
        <a href="<?php echo $base; ?>index.php" class="inline-block mb-5"><img src="<?php echo $assets; ?>logo.png" alt="" class="h-10 w-auto object-contain opacity-95"></a>
        <p class="text-slate-300 text-sm leading-relaxed max-w-xs">Digital products that win—in your time zone. Serving Australia, USA & New Zealand.</p>
      </div>
      <div>
        <p class="font-body font-semibold text-white mb-5">Offerings</p>
        <ul class="space-y-3">
          <li><a href="<?php echo $base; ?>services/web-development.php" class="text-slate-300 hover:text-cyan-light text-sm">Web Development</a></li>
          <li><a href="<?php echo $base; ?>services/mobile-apps.php" class="text-slate-300 hover:text-cyan-light text-sm">Mobile App Development</a></li>
          <li><a href="<?php echo $base; ?>services/ui-ux.php" class="text-slate-300 hover:text-cyan-light text-sm">UI/UX Design</a></li>
          <li><a href="<?php echo $base; ?>services/maintenance.php" class="text-slate-300 hover:text-cyan-light text-sm">Support & Maintenance</a></li>
        </ul>
      </div>
      <div>
        <p class="font-body font-semibold text-white mb-5">Company</p>
        <ul class="space-y-3">
          <li><a href="<?php echo $base; ?>about.php" class="text-slate-300 hover:text-cyan-light text-sm">About Us</a></li>
          <li><a href="<?php echo $base; ?>work.php" class="text-slate-300 hover:text-cyan-light text-sm">Work</a></li>
          <li><a href="<?php echo $base; ?>contact.php" class="text-slate-300 hover:text-cyan-light text-sm">Contact</a></li>
        </ul>
      </div>
      <div>
        <p class="font-body font-semibold text-white mb-5">Legal</p>
        <ul class="space-y-3">
          <li><a href="<?php echo $base; ?>privacy.php" class="text-slate-300 hover:text-cyan-light text-sm">Privacy Policy</a></li>
          <li><a href="<?php echo $base; ?>terms.php" class="text-slate-300 hover:text-cyan-light text-sm">Terms & Conditions</a></li>
        </ul>
        <p class="mt-6 text-slate-400 text-sm"><a href="mailto:hello@aussieappstudio.com.au" class="hover:text-cyan-light">hello@aussieappstudio.com.au</a></p>
        <a href="<?php echo $base; ?>contact.php" class="inline-block mt-4 px-5 py-2.5 border-2 border-cyan text-cyan rounded-xl font-body font-medium text-sm hover:bg-cyan hover:text-navy">Book a call</a>
      </div>
    </div>
    <div class="mt-16 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p class="text-slate-500 text-sm">© <?php echo date('Y'); ?> Aussie App Studio. All rights reserved.</p>
      <p class="text-slate-500 text-sm">Made in Australia</p>
    </div>
  </div>
</footer>
<script src="<?php echo $base; ?>js/header.js"></script>
<?php if (!empty($footer_scripts)) echo $footer_scripts; ?>
</body>
</html>
