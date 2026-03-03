<?php
/**
 * Our Portfolio section for mobile app services page.
 * Dark purple background, white text, 5 portfolio items with 3 overlapping app screens + auto slider.
 */
if (!isset($assets)) $assets = asset_url('');
if (!isset($base)) $base = base_url('');
$portfolio_bg = '#1e1b4b';
$portfolio_items = [
  [
    'title' => 'IOS AND ANDROID APPLICATION GAIN SAFE APP',
    'title_line2' => null,
    'title_dot' => false,
    'description' => 'Gain Safe is a dynamic and efficient app that focuses on providing prime services to the inventory storage places and warehouses with complete resources.',
    'cta' => 'Read The Case Study',
    'images' => ['imageye___-_imgi_23_app-s1.jpg', 'imageye___-_imgi_24_app-s2.jpg', 'imageye___-_imgi_22_app-s3.jpg'],
    'bullet' => false,
    'decor_dot' => 'right',
  ],
  [
    'title' => 'ANDROID APPLICATION',
    'title_line2' => 'KNUCKLE APP',
    'title_dot' => false,
    'description' => 'The Knuckle App is a whole new way to connect, interact, and mingle with like-minded individuals from around the world.',
    'cta' => 'Read The Case Study',
    'images' => ['imageye___-_imgi_26_app-s4.png', 'imageye___-_imgi_27_app-s5.png', 'imageye___-_imgi_25_app-s6.png'],
    'bullet' => true,
    'decor_dot' => 'right',
  ],
  [
    'title' => 'IOS APPLICATION LOOKOUT AMIGO',
    'title_line2' => null,
    'title_dot' => false,
    'description' => 'Lookout Amigo offers solution to all your touring needs under a single platform. An app that can help you plan your trips in a couple of taps.',
    'cta' => 'Read The Case Study',
    'images' => ['imageye___-_imgi_29_app-s7.png', 'imageye___-_imgi_30_app-s8.png', 'imageye___-_imgi_28_app-s9.png'],
    'bullet' => false,
    'decor_dot' => 'right',
  ],
  [
    'title' => 'ANDROID APPLICATION',
    'title_line2' => 'MOVERS C\' APP',
    'title_dot' => false,
    'description' => 'Digital United Lab has always believed in entrepreneurs and encourages them to work on innovation idea. Movers C\' is exactly the type of ideas we support.',
    'cta' => 'Read The Case Study',
    'images' => ['imageye___-_imgi_32_app-s10.png', 'imageye___-_imgi_33_app-s11.png', 'imageye___-_imgi_31_app-s12.png'],
    'bullet' => true,
    'decor_dot' => 'left',
  ],
  [
    'title' => 'IOS AND ANDROID APPLICATION FITNESS INDUSTRY',
    'title_line2' => null,
    'title_dot' => true,
    'description' => 'An app entirely focused on the idea of making fitness goals achievable.',
    'cta' => 'Read The Case Study',
    'images' => ['imageye___-_imgi_35_app-s13.png', 'imageye___-_imgi_36_app-s14.png', 'imageye___-_imgi_34_app-s15.png'],
    'bullet' => false,
    'decor_dot' => 'right',
  ],
];
?>
<section class="mobile-portfolio py-10 md:py-14 relative overflow-hidden" style="background-color: <?php echo $portfolio_bg; ?>;">
  <div class="max-w-content mx-auto px-4 md:px-6 relative z-10">
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-white text-center mb-2">Our Portfolio</h2>
    <p class="text-slate-300 text-center text-lg max-w-2xl mx-auto mb-6 md:mb-8">Want to see how we can help you? Check out what we have done for different brands around the world.</p>

    <?php foreach ($portfolio_items as $idx => $item): $is_even = ($idx % 2) === 1; ?>
    <div class="portfolio-item flex flex-col <?php echo $is_even ? 'lg:flex-row-reverse' : 'lg:flex-row'; ?> gap-5 lg:gap-6 items-center mb-10 lg:mb-12 last:mb-0 relative">
      <?php if (!empty($item['decor_dot'])): ?>
      <span class="absolute w-2 h-2 md:w-3 md:h-3 rounded-full pointer-events-none opacity-70 <?php echo $item['decor_dot'] === 'left' ? 'left-4 top-4 lg:left-8 lg:top-8' : 'right-4 top-4 lg:right-8 lg:top-8'; ?>" style="background-color: #f59e0b;" aria-hidden="true"></span>
      <?php endif; ?>

      <div class="flex-1 w-full min-w-0 <?php echo $is_even ? 'lg:text-right lg:pl-4' : 'lg:text-left lg:pr-4'; ?>">
        <h3 class="font-headline font-bold text-xl md:text-2xl lg:text-3xl text-white uppercase mb-4">
          <?php echo htmlspecialchars($item['title']); ?>
          <?php if (!empty($item['title_line2'])): ?><br><span class="mt-1 block"><?php echo htmlspecialchars($item['title_line2']); ?></span><?php endif; ?>
          <?php if (!empty($item['title_dot'])): ?><span class="inline-block w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ml-1.5 align-middle" style="background-color: #f59e0b;" aria-hidden="true"></span><?php endif; ?>
        </h3>
        <p class="text-slate-300 text-base leading-relaxed mb-6 <?php echo $item['bullet'] ? 'flex items-start gap-2' : ''; ?>">
          <?php if ($item['bullet']): ?><span class="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style="background-color: #f59e0b;"></span><?php endif; ?>
          <span><?php echo htmlspecialchars($item['description']); ?></span>
        </p>
        <a href="<?php echo $base; ?>work.php" class="inline-flex items-center gap-2 text-cyan font-body font-semibold text-sm hover:text-cyan-light transition-colors">
          <?php echo htmlspecialchars($item['cta']); ?>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>

      <div class="flex-1 w-full flex justify-center <?php echo $is_even ? 'lg:justify-start' : 'lg:justify-end'; ?> shrink-0">
        <div class="portfolio-phone-slider relative overflow-visible" data-slider style="width: 380px; height: 440px;">
          <?php
          $orders = [[0,1,2],[1,2,0],[2,0,1]];
          foreach ($orders as $slideIdx => $order):
          ?>
          <div class="portfolio-slide absolute inset-0 flex items-center justify-center" data-slide style="<?php echo $slideIdx > 0 ? 'opacity:0;pointer-events:none' : ''; ?>">
            <?php foreach ($order as $i => $imgIdx): 
              $img = $item['images'][$imgIdx];
              $rot = ($i === 0) ? -10 : (($i === 1) ? 0 : 10);
              $z = $i + 1;
              $scale = ($i === 1) ? 1 : 0.88;
              /* First phone shifted right so it is not cut off when rotated */
              $x = ($i === 0) ? '12%' : (($i === 1) ? '34%' : '56%');
            ?>
            <div class="absolute rounded-[1.75rem] overflow-hidden border-[5px] border-slate-600 bg-slate-800 shadow-2xl phone-mockup" style="width: 40%; max-width: 175px; aspect-ratio: 9/19; left: <?php echo $x; ?>; top: 50%; transform: translateY(-50%) rotate(<?php echo $rot; ?>deg) scale(<?php echo $scale; ?>); z-index: <?php echo $z; ?>;">
              <img src="<?php echo $assets . $img; ?>" alt="" class="w-full h-full object-cover">
            </div>
            <?php endforeach; ?>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
    <?php endforeach; ?>
  </div>
</section>

<style>
/* Slider – 520px width, first phone not cut off */
.portfolio-phone-slider { min-height: 360px; }
.portfolio-phone-slider .portfolio-slide { transition: opacity 0.6s ease; will-change: opacity; overflow: visible; }
.portfolio-phone-slider .phone-mockup { box-shadow: 0 25px 50px rgba(0,0,0,0.35); }
@media (min-width: 1024px) {
  .portfolio-phone-slider { width: 520px !important; height: 500px !important; }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .portfolio-phone-slider { width: 380px !important; height: 440px !important; }
}
@media (max-width: 767px) {
  .portfolio-phone-slider { width: 300px !important; height: 360px !important; }
}
</style>

<script>
(function() {
  var sliders = document.querySelectorAll('.portfolio-phone-slider[data-slider]');
  var INTERVAL = 4000;
  sliders.forEach(function(el) {
    var slides = el.querySelectorAll('.portfolio-slide');
    if (slides.length < 2) return;
    var idx = 0;
    function show(n) {
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = i === n ? '1' : '0';
        slides[i].style.pointerEvents = i === n ? '' : 'none';
      }
    }
    setInterval(function() {
      idx = (idx + 1) % slides.length;
      show(idx);
    }, INTERVAL);
  });
})();
</script>
