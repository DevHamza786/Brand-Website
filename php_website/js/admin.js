(function () {
  var settingsForm = document.getElementById('admin-settings-form');
  var leadsList = document.getElementById('leads-list');
  var leadsCount = document.getElementById('leads-count');
  var modal = document.getElementById('lead-modal');
  var modalContent = document.getElementById('lead-modal-content');
  var modalClose = document.getElementById('lead-modal-close');
  var settingsError = document.getElementById('settings-error');
  var settingsMessage = document.getElementById('settings-message');
  var settingsSubmit = document.getElementById('settings-submit');

  if (typeof localStorage !== 'undefined') {
    try { localStorage.setItem('aussie_admin_authed', 'true'); } catch (e) {}
  }

  function loadLeads() {
    fetch('api/admin/leads.php', { credentials: 'same-origin' })
      .then(function (r) {
        if (r.status === 401) { window.location.href = 'admin.php'; return; }
        return r.json();
      })
      .then(function (data) {
        var leads = Array.isArray(data) ? data : [];
        if (leadsCount) leadsCount.textContent = leads.length + ' lead' + (leads.length === 1 ? '' : 's');
        if (!leadsList) return;
        if (leads.length === 0) {
          leadsList.innerHTML = '<p class="text-slate-500 text-sm">No leads yet. When someone submits the contact form, they will appear here.</p>';
          return;
        }
        leadsList.innerHTML = leads.map(function (lead) {
          var date = lead.createdAt ? new Date(lead.createdAt).toLocaleString() : '';
          var extra = [];
          if (lead.company) extra.push('Company: ' + lead.company);
          if (lead.phone) extra.push('Phone: ' + lead.phone);
          var msg = (lead.message || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').substring(0, 150);
          if ((lead.message || '').length > 150) msg += '…';
          return '<div class="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 cursor-pointer hover:border-cyan/60 transition-colors" data-lead-id="' + (lead.id || '') + '">' +
            '<div class="flex justify-between gap-2 mb-1"><p class="font-semibold">' + (lead.name || '') + ' <span class="text-slate-400 text-xs">&lt;' + (lead.email || '') + '&gt;</span></p>' +
            '<span class="text-[11px] text-slate-500">' + date + '</span></div>' +
            (extra.length ? '<p class="text-[11px] text-slate-400 mb-1.5">' + extra.join(' • ') + '</p>' : '') +
            '<p class="text-[12px] text-slate-200 line-clamp-3">' + msg + '</p></div>';
        }).join('');
        leadsList.querySelectorAll('[data-lead-id]').forEach(function (el) {
          el.addEventListener('click', function () {
            var id = el.getAttribute('data-lead-id');
            var lead = leads.find(function (l) { return l.id === id; });
            if (lead && modal && modalContent) {
              var date = lead.createdAt ? new Date(lead.createdAt).toLocaleString() : '';
              var extra = [];
              if (lead.company) extra.push('Company: ' + lead.company);
              if (lead.phone) extra.push('Phone: ' + lead.phone);
              modalContent.innerHTML = '<p class="font-semibold">' + (lead.name || '') + ' <span class="text-slate-400 text-xs">&lt;' + (lead.email || '') + '&gt;</span></p>' +
                '<p class="text-[11px] text-slate-400">' + date + '</p>' +
                (extra.length ? '<p class="text-[12px] text-slate-300">' + extra.join(' • ') + '</p>' : '') +
                '<div class="mt-3 rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-3 max-h-64 overflow-auto"><p class="text-[13px] text-slate-100 whitespace-pre-line">' + (lead.message || '').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p></div>';
              modal.classList.remove('hidden');
              modal.classList.add('flex');
            }
          });
        });
      })
      .catch(function () {
        if (leadsCount) leadsCount.textContent = 'Error';
        if (leadsList) leadsList.innerHTML = '<p class="text-slate-500 text-sm">Unable to load leads.</p>';
      });
  }

  function loadSettings() {
    fetch('api/admin/settings.php', { credentials: 'same-origin' })
      .then(function (r) {
        if (r.status === 401) { window.location.href = 'admin.php'; return; }
        return r.json();
      })
      .then(function (data) {
        if (!data || typeof data !== 'object') return;
        if (document.getElementById('smtpHost')) document.getElementById('smtpHost').value = data.smtpHost || '';
        if (document.getElementById('smtpPort')) document.getElementById('smtpPort').value = data.smtpPort || 587;
        if (document.getElementById('smtpUser')) document.getElementById('smtpUser').value = data.smtpUser || '';
        if (document.getElementById('smtpPassword')) document.getElementById('smtpPassword').value = data.smtpPassword || '';
        if (document.getElementById('fromEmail')) document.getElementById('fromEmail').value = data.fromEmail || '';
        if (document.getElementById('notificationEmail')) document.getElementById('notificationEmail').value = data.notificationEmail || '';
        if (document.getElementById('smtpSecure')) document.getElementById('smtpSecure').checked = !!data.smtpSecure;
        if (document.getElementById('emailEnabled')) document.getElementById('emailEnabled').checked = !!data.emailEnabled;
      })
      .catch(function () {});
  }

  loadLeads();
  loadSettings();

  if (modalClose && modal) {
    modalClose.addEventListener('click', function () {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }
    });
  }

  var sendTestEmailBtn = document.getElementById('send-test-email');
  var testEmailMessage = document.getElementById('test-email-message');
  if (sendTestEmailBtn && testEmailMessage) {
    sendTestEmailBtn.addEventListener('click', function () {
      sendTestEmailBtn.disabled = true;
      testEmailMessage.classList.remove('hidden', 'text-emerald-400', 'text-red-400');
      testEmailMessage.classList.add('text-slate-400');
      testEmailMessage.textContent = 'Sending…';
      fetch('api/admin/send-test-email.php', { method: 'POST', credentials: 'same-origin' })
        .then(function (r) {
          if (r.status === 401) { window.location.href = 'admin.php'; return null; }
          return r.json();
        })
        .then(function (data) {
          sendTestEmailBtn.disabled = false;
          if (!data) return;
          testEmailMessage.textContent = data.message || (data.ok ? 'Test email sent.' : 'Failed.');
          testEmailMessage.classList.add(data.ok ? 'text-emerald-400' : 'text-red-400');
          testEmailMessage.classList.remove('hidden');
        })
        .catch(function () {
          sendTestEmailBtn.disabled = false;
          testEmailMessage.textContent = 'Request failed. Try again.';
          testEmailMessage.classList.add('text-red-400');
          testEmailMessage.classList.remove('hidden');
        });
    });
  }

  if (settingsForm) {
    settingsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (settingsSubmit) settingsSubmit.disabled = true;
      if (settingsError) { settingsError.classList.add('hidden'); settingsError.textContent = ''; }
      if (settingsMessage) { settingsMessage.classList.add('hidden'); settingsMessage.textContent = ''; }
      var payload = {
        smtpHost: document.getElementById('smtpHost') ? document.getElementById('smtpHost').value : '',
        smtpPort: parseInt(document.getElementById('smtpPort') ? document.getElementById('smtpPort').value : 587, 10) || 587,
        smtpUser: document.getElementById('smtpUser') ? document.getElementById('smtpUser').value : '',
        smtpPassword: document.getElementById('smtpPassword') ? document.getElementById('smtpPassword').value : '',
        fromEmail: document.getElementById('fromEmail') ? document.getElementById('fromEmail').value : '',
        notificationEmail: document.getElementById('notificationEmail') ? document.getElementById('notificationEmail').value : '',
        smtpSecure: document.getElementById('smtpSecure') ? document.getElementById('smtpSecure').checked : false,
        emailEnabled: document.getElementById('emailEnabled') ? document.getElementById('emailEnabled').checked : false
      };
      fetch('api/admin/settings.php', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (r) {
          if (!r.ok) throw new Error('Failed to save');
          return r.json();
        })
        .then(function () {
          if (settingsMessage) { settingsMessage.textContent = 'Settings saved.'; settingsMessage.classList.remove('hidden'); }
          if (settingsSubmit) settingsSubmit.disabled = false;
        })
        .catch(function () {
          if (settingsError) { settingsError.textContent = 'Could not save settings. Try again.'; settingsError.classList.remove('hidden'); }
          if (settingsSubmit) settingsSubmit.disabled = false;
        });
    });
  }
})();
