<?php
if (!isset($techCategories)) {
  $techCategories = ['Backend'=>['Node.js','Express','Django','Laravel','Symfony','ASP.NET Core','NestJS','Python','Java'],'Frontend'=>['React','Next.js','Vue.js','TypeScript','JavaScript','Angular','HTML5','CSS3','Tailwind CSS','Redux'],'Mobile'=>['Flutter','React Native','Swift','Kotlin','Ionic','Xamarin'],'Database'=>['PostgreSQL','MongoDB','MySQL','Redis','Firebase','Supabase'],'DevOps'=>['AWS','Docker','Kubernetes','GitHub Actions','Vercel','CI/CD'],'UI/UX'=>['Figma','Adobe XD','Sketch'],'CMS'=>['Contentful','Sanity','Strapi','WordPress']];
}
if (!isset($techLogos)) {
  $techLogos = ['Node.js'=>'nodejs.png','Express'=>'expressjs.png','Django'=>'djongo.png','Laravel'=>'laravel.png','Symfony'=>'symfony.webp','ASP.NET Core'=>'asp.net.png','NestJS'=>'nestjs.png','Python'=>'python.png','Java'=>'java.png','React'=>'reactjs.jpg','Next.js'=>'next.js.png','Vue.js'=>'Vue js.png','TypeScript'=>'TypeScript.png','JavaScript'=>'Java Script.webp','Angular'=>'Angular.jpg','HTML5'=>'HTML5.jpg','CSS3'=>'CSS3.webp','Tailwind CSS'=>'Tailwind CSS.png','Redux'=>'Redux.png','Flutter'=>'Flutter.png','React Native'=>'React Native.png','Swift'=>'Swift.png','Kotlin'=>'Kotlin.jpg','Ionic'=>'Ionic.jpg','Xamarin'=>'Xamarin.jpg','PostgreSQL'=>'PostgreSQL.png','MongoDB'=>'MongoDB.svg','MySQL'=>'MySQL.png','Redis'=>'Redis.png','Firebase'=>'Firebase.png','Supabase'=>'Supabase.jpg','AWS'=>'AWS.webp','Docker'=>'Docker.png','Kubernetes'=>'Kubernetes.png','GitHub Actions'=>'GitHub Actions.png','Vercel'=>'Vercel.svg','CI/CD'=>'CI=CD.webp','Figma'=>'Figma.png','Adobe XD'=>'Adobe XD.jpg','Sketch'=>'Sketch.png','Contentful'=>'Contentful.png','Sanity'=>'Sanity.png','Strapi'=>'Strapi.webp','WordPress'=>'WordPress.png'];
}
?>
<section class="py-24 md:py-32 bg-slate-50 border-t border-slate-200">
  <div class="max-w-content mx-auto px-6 md:px-10">
    <p class="text-center text-cyan font-body font-semibold text-sm uppercase tracking-wider mb-3">Technology Stack</p>
    <h2 class="font-headline font-bold text-3xl md:text-4xl text-navy text-center mb-14">Technologies We Work With</h2>
    <div class="flex flex-wrap justify-center gap-2 mb-12 border-b border-slate-200 pb-2">
      <?php $firstTab = true; foreach (array_keys($techCategories) as $tab) { ?>
      <button type="button" data-tech-tab="<?php echo htmlspecialchars($tab); ?>" class="px-4 py-2.5 rounded-lg font-body font-medium text-sm <?php echo $firstTab?'text-cyan border-b-2 border-cyan bg-cyan/5':'text-slate-500 hover:text-navy hover:bg-slate-50'; ?>"><?php echo htmlspecialchars($tab); ?></button>
      <?php $firstTab = false; } ?>
    </div>
    <?php $firstPanel = true; foreach ($techCategories as $cat => $techs) { ?>
    <div data-tech-panel="<?php echo htmlspecialchars($cat); ?>" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8 <?php echo $firstPanel?'':'hidden'; ?>">
      <?php foreach ($techs as $name) { $logo = isset($techLogos[$name]) ? $assets . 'tech/' . $techLogos[$name] : ''; ?>
      <div class="flex flex-col items-center justify-center p-5 rounded-xl bg-white border border-slate-200 hover:border-cyan/20">
        <?php if ($logo) { ?><img src="<?php echo $logo; ?>" alt="<?php echo htmlspecialchars($name); ?>" class="w-10 h-10 object-contain mb-3"><?php } ?>
        <span class="text-sm font-body text-slate-700 text-center"><?php echo htmlspecialchars($name); ?></span>
      </div>
      <?php } ?>
    </div>
    <?php $firstPanel = false; } ?>
  </div>
</section>
