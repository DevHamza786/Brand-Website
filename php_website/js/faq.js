document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-faq-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wrap = btn.closest('[data-faq-item]');
      var content = wrap && wrap.querySelector('[data-faq-content]');
      var isOpen = wrap && wrap.classList.contains('faq-open');
      document.querySelectorAll('[data-faq-item]').forEach(function (w) {
        w.classList.remove('faq-open');
        var c = w.querySelector('[data-faq-content]');
        if (c) { c.style.maxHeight = ''; c.style.opacity = '0'; }
        var b = w.querySelector('[data-faq-toggle]');
        if (b) { b.setAttribute('aria-expanded', 'false'); b.querySelector('[data-faq-plus]').textContent = '+'; }
      });
      if (!isOpen && wrap && content) {
        wrap.classList.add('faq-open');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
        btn.setAttribute('aria-expanded', 'true');
        var plus = btn.querySelector('[data-faq-plus]');
        if (plus) plus.textContent = '−';
      }
    });
  });
});
