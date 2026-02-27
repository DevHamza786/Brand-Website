document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('hero-contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var errEl = form.querySelector('[data-form-error]');
      if (btn) btn.disabled = true;
      if (errEl) errEl.textContent = '';
      var fd = new FormData(form);
      var body = {
        name: fd.get('name'),
        email: fd.get('email'),
        phone: fd.get('phone') || undefined,
        company: fd.get('company') || undefined,
        message: fd.get('message')
      };
      var base = (typeof window.BASE_URL === 'string' && window.BASE_URL) ? window.BASE_URL.replace(/\/$/, '') + '/' : (document.location.pathname.indexOf('/services/') !== -1 ? document.location.pathname.split('/services/')[0] : '');
      var apiUrl = (base ? base : '') + 'api/contact.php';
      var thankYouUrl = (base ? base : '') + 'thank-you.php';
      fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        .then(function (r) {
          if (r.ok) { window.location.href = thankYouUrl; return; }
          return r.json().then(function (d) { throw new Error(d.message || 'Something went wrong'); });
        })
        .catch(function (err) {
          if (errEl) errEl.textContent = err.message || 'Please try again.';
          if (btn) btn.disabled = false;
        });
    });
  }

  var contactForm = document.getElementById('contact-page-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      var errEl = contactForm.querySelector('[data-form-error]');
      if (btn) btn.disabled = true;
      if (errEl) errEl.textContent = '';
      var fd = new FormData(contactForm);
      var first = fd.get('firstName') || '';
      var last = fd.get('lastName') || '';
      var name = (first + ' ' + last).trim() || first || last;
      var body = {
        name: name,
        email: fd.get('email'),
        phone: fd.get('phone') || undefined,
        company: fd.get('company') || undefined,
        message: fd.get('message')
      };
      var baseContact = (typeof window.BASE_URL === 'string' && window.BASE_URL) ? window.BASE_URL.replace(/\/$/, '') + '/' : (document.location.pathname.indexOf('/services/') !== -1 ? document.location.pathname.split('/services/')[0] : '');
      var apiUrlContact = (baseContact ? baseContact : '') + 'api/contact.php';
      var thankYouUrlContact = (baseContact ? baseContact : '') + 'thank-you.php';
      fetch(apiUrlContact, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
        .then(function (r) {
          if (r.ok) { window.location.href = thankYouUrlContact; return; }
          return r.json().then(function (d) { throw new Error(d.message || 'Something went wrong'); });
        })
        .catch(function (err) {
          if (errEl) errEl.textContent = err.message || 'Please try again.';
          if (btn) btn.disabled = false;
        });
    });
  }

  document.querySelectorAll('[data-interest-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var field = document.querySelector('[name="interest"]');
      var current = field && field.value;
      var val = btn.getAttribute('data-interest-btn');
      var next = current === val ? '' : val;
      if (field) field.value = next;
      document.querySelectorAll('[data-interest-btn]').forEach(function (b) {
        b.classList.toggle('bg-slate-100', b.getAttribute('data-interest-btn') === next);
        b.classList.toggle('border-slate-300', b.getAttribute('data-interest-btn') === next);
        b.classList.toggle('text-navy', b.getAttribute('data-interest-btn') === next);
        b.classList.toggle('bg-slate-50', b.getAttribute('data-interest-btn') !== next);
        b.classList.toggle('border-slate-200', b.getAttribute('data-interest-btn') !== next);
        b.classList.toggle('text-slate-600', b.getAttribute('data-interest-btn') !== next);
      });
    });
  });
});
