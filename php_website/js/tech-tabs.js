document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-tech-tab]').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var name = tab.getAttribute('data-tech-tab');
      document.querySelectorAll('[data-tech-tab]').forEach(function (t) {
        t.classList.toggle('text-cyan', t.getAttribute('data-tech-tab') === name);
        t.classList.toggle('border-b-2', t.getAttribute('data-tech-tab') === name);
        t.classList.toggle('border-cyan', t.getAttribute('data-tech-tab') === name);
        t.classList.toggle('bg-cyan/5', t.getAttribute('data-tech-tab') === name);
        t.classList.toggle('text-slate-500', t.getAttribute('data-tech-tab') !== name);
      });
      document.querySelectorAll('[data-tech-panel]').forEach(function (panel) {
        panel.classList.toggle('hidden', panel.getAttribute('data-tech-panel') !== name);
      });
    });
  });
});
