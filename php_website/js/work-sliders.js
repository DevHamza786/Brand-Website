document.addEventListener('DOMContentLoaded', function () {
  // Device slider (hero)
  var deviceSlides = document.querySelectorAll('[data-device-slide]');
  if (deviceSlides.length > 1) {
    var dCur = 0;
    function showDevice(i) {
      dCur = (i + deviceSlides.length) % deviceSlides.length;
      deviceSlides.forEach(function (el, k) {
        el.classList.toggle('opacity-100', k === dCur);
        el.classList.toggle('opacity-0', k !== dCur);
      });
      document.querySelectorAll('[data-device-dot]').forEach(function (el, k) {
        el.classList.toggle('w-6', k === dCur);
        el.classList.toggle('bg-cyan', k === dCur);
        el.classList.toggle('w-2.5', k !== dCur);
        el.classList.toggle('bg-slate-600/80', k !== dCur);
      });
    }
    setInterval(function () { showDevice(dCur + 1); }, 5000);
    document.querySelectorAll('[data-device-dot]').forEach(function (btn, i) {
      btn.addEventListener('click', function () { showDevice(i); });
    });
  }

  // Mobile showcase slider
  var mobileSlides = document.querySelectorAll('[data-mobile-slide]');
  var mobileCaptions = window.WORK_MOBILE_CAPTIONS || [];
  if (mobileSlides.length > 1) {
    var mCur = 0;
    function showMobile(i) {
      mCur = (i + mobileSlides.length) % mobileSlides.length;
      mobileSlides.forEach(function (el, k) {
        el.classList.toggle('opacity-100', k === mCur);
        el.classList.toggle('opacity-0', k !== mCur);
      });
      var typeEl = document.querySelector('[data-mobile-caption-type]');
      var titleEl = document.querySelector('[data-mobile-caption-title]');
      var counterEl = document.querySelector('[data-mobile-counter]');
      if (mobileCaptions[mCur]) {
        if (typeEl) typeEl.textContent = mobileCaptions[mCur].type;
        if (titleEl) titleEl.textContent = mobileCaptions[mCur].title;
      }
      if (counterEl) counterEl.textContent = (mCur + 1) + '/' + mobileSlides.length;
      document.querySelectorAll('[data-mobile-dot]').forEach(function (el, k) {
        el.classList.toggle('w-7', k === mCur);
        el.classList.toggle('bg-cyan', k === mCur);
        el.classList.toggle('w-2.5', k !== mCur);
        el.classList.toggle('bg-slate-600', k !== mCur);
      });
    }
    setInterval(function () { showMobile(mCur + 1); }, 4500);
    document.querySelectorAll('[data-mobile-dot]').forEach(function (btn, i) {
      btn.addEventListener('click', function () { showMobile(i); });
    });
  }

  // Web showcase slider
  var webSlides = document.querySelectorAll('[data-web-slide]');
  var webCaptions = window.WORK_WEB_CAPTIONS || [];
  if (webSlides.length > 1) {
    var wCur = 0;
    function showWeb(i) {
      wCur = (i + webSlides.length) % webSlides.length;
      webSlides.forEach(function (el, k) {
        el.classList.toggle('opacity-100', k === wCur);
        el.classList.toggle('opacity-0', k !== wCur);
      });
      var typeEl = document.querySelector('[data-web-caption-type]');
      var titleEl = document.querySelector('[data-web-caption-title]');
      var counterEl = document.querySelector('[data-web-counter]');
      if (webCaptions[wCur]) {
        if (typeEl) typeEl.textContent = webCaptions[wCur].type;
        if (titleEl) titleEl.textContent = webCaptions[wCur].title;
      }
      if (counterEl) counterEl.textContent = (wCur + 1) + '/' + webSlides.length;
      document.querySelectorAll('[data-web-dot]').forEach(function (el, k) {
        el.classList.toggle('w-7', k === wCur);
        el.classList.toggle('bg-cyan', k === wCur);
        el.classList.toggle('w-2.5', k !== wCur);
        el.classList.toggle('bg-slate-600', k !== wCur);
      });
    }
    setInterval(function () { showWeb(wCur + 1); }, 4500);
    document.querySelectorAll('[data-web-dot]').forEach(function (btn, i) {
      btn.addEventListener('click', function () { showWeb(i); });
    });
  }
});
