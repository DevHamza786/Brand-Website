<?php
$page_title = 'Thank you';
$current_page = '';
require_once __DIR__ . '/includes/header.php';
$base = base_url('');
?>
<section class="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-slate-50">
  <div class="max-w-md text-center">
    <div class="w-16 h-16 rounded-full bg-cyan/20 flex items-center justify-center mx-auto mb-8">
      <svg class="w-8 h-8 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    </div>
    <h1 class="font-headline font-bold text-3xl md:text-4xl text-navy mb-6">Thanks—we've got it.</h1>
    <p class="text-slate-600 text-lg mb-10 leading-relaxed">We'll be in touch within 24 hours. In the meantime, take a look at our work or add us on LinkedIn.</p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="<?php echo $base; ?>work.php" class="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-navy text-navy font-body font-semibold rounded-xl hover:bg-navy hover:text-white">See our work</a>
      <a href="<?php echo $base; ?>index.php" class="inline-flex items-center gap-2 px-6 py-3.5 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-xl">Back to home</a>
    </div>
  </div>
</section>
<?php require_once __DIR__ . '/includes/footer.php'; ?>
