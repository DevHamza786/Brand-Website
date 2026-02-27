document.addEventListener('DOMContentLoaded', function () {
  var heroSlides = document.querySelectorAll('[data-hero-slide]');
  if (heroSlides.length > 1) {
    var cur = 0;
    function showHero(i) {
      cur = (i + heroSlides.length) % heroSlides.length;
      heroSlides.forEach(function (el, k) {
        el.classList.toggle('opacity-100', k === cur);
        el.classList.toggle('opacity-0', k !== cur);
        el.classList.toggle('z-10', k === cur);
        el.classList.toggle('pointer-events-none', k !== cur);
      });
    }
    var heroInterval = setInterval(function () { showHero(cur + 1); }, 7000);
    document.querySelectorAll('[data-hero-dot]').forEach(function (btn, i) {
      btn.addEventListener('click', function () { showHero(i); clearInterval(heroInterval); heroInterval = setInterval(function () { showHero(cur + 1); }, 7000); });
    });
  }

  var testimonialSlides = document.querySelectorAll('[data-testimonial-slide]');
  if (testimonialSlides.length > 1) {
    var tCur = 0;
    var tContainer = document.querySelector('[data-testimonial-track]');
    function showTestimonial(i) {
      tCur = (i + testimonialSlides.length) % testimonialSlides.length;
      if (tContainer) tContainer.style.transform = 'translateX(-' + tCur * 100 + '%)';
      document.querySelectorAll('[data-testimonial-dot]').forEach(function (el, k) {
        el.classList.toggle('w-6', k === tCur);
        el.classList.toggle('bg-cyan', k === tCur);
        el.classList.toggle('w-2', k !== tCur);
        el.classList.toggle('bg-slate-300', k !== tCur);
      });
    }
    setInterval(function () { showTestimonial(tCur + 1); }, 8000);
    document.querySelectorAll('[data-testimonial-dot]').forEach(function (btn, i) {
      btn.addEventListener('click', function () { showTestimonial(i); });
    });
    var tPrev = document.querySelector('[data-testimonial-prev]');
    var tNext = document.querySelector('[data-testimonial-next]');
    if (tPrev) tPrev.addEventListener('click', function () { showTestimonial(tCur - 1); });
    if (tNext) tNext.addEventListener('click', function () { showTestimonial(tCur + 1); });
  }

  var workItems = document.querySelectorAll('[data-work-item]');
  var workSlides = document.querySelectorAll('[data-work-slide]');
  if (workSlides.length > 1 || workItems.length > 1) {
    var wCur = 0;
    var total = workSlides.length || workItems.length;
    function showWork(i) {
      wCur = (i + total) % total;
      workSlides.forEach(function (el, k) {
        el.classList.toggle('opacity-100', k === wCur);
        el.classList.toggle('opacity-0', k !== wCur);
      });
      var counter = document.querySelector('[data-work-counter]');
      if (counter) counter.textContent = (wCur + 1) + '/' + total;
      var typeEl = document.querySelector('[data-work-caption-type]');
      var titleEl = document.querySelector('[data-work-caption-title]');
      if (workSlides[wCur]) {
        var ty = workSlides[wCur].getAttribute('data-work-type');
        var ti = workSlides[wCur].getAttribute('data-work-title');
        if (ty && typeEl) typeEl.textContent = ty;
        if (ti && titleEl) titleEl.textContent = ti;
      }
      document.querySelectorAll('[data-work-dot]').forEach(function (el, k) {
        el.classList.toggle('w-7', k === wCur);
        el.classList.toggle('bg-cyan', k === wCur);
        el.classList.toggle('w-2.5', k !== wCur);
        el.classList.toggle('bg-slate-600', k !== wCur);
      });
    }
    setInterval(function () { showWork(wCur + 1); }, 4500);
    document.querySelectorAll('[data-work-dot]').forEach(function (btn, i) {
      btn.addEventListener('click', function () { showWork(i); });
    });
  } else if (workSlides.length === 1 && document.querySelector('[data-work-counter]')) {
    document.querySelector('[data-work-counter]').textContent = '1/1';
  }
});
