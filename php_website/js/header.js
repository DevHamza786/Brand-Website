(function () {
  var mobileBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var iconMenu = document.getElementById('icon-menu');
  var iconClose = document.getElementById('icon-close');
  var menuLabel = document.getElementById('mobile-menu-label');
  var servicesNav = document.getElementById('services-nav');
  var servicesToggle = document.getElementById('services-toggle');
  var servicesMenu = document.getElementById('services-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('hidden');
      mobileBtn.setAttribute('aria-expanded', !open);
      if (iconMenu) iconMenu.classList.toggle('hidden', !open);
      if (iconClose) iconClose.classList.toggle('hidden', open);
      if (menuLabel) menuLabel.textContent = open ? 'Open menu' : 'Close menu';
    });
  }

  if (servicesNav && servicesToggle && servicesMenu) {
    servicesToggle.addEventListener('mouseenter', function () {
      servicesMenu.classList.remove('hidden');
      servicesToggle.setAttribute('aria-expanded', 'true');
    });
    servicesNav.addEventListener('mouseleave', function () {
      servicesMenu.classList.add('hidden');
      servicesToggle.setAttribute('aria-expanded', 'false');
    });
  }
})();
