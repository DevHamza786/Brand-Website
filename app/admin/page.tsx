'use client';

import { useEffect, useState } from 'react';

type Lead = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

type AdminConfig = {
  notificationEmail: string;
  emailEnabled: boolean;
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPassword: string;
  smtpSecure: boolean;
  fromEmail: string;
};

const ADMIN_PASSWORD = 'Admin$123';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [config, setConfig] = useState<AdminConfig | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Restore session from localStorage so refresh doesn't show login again
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('aussie_admin_authed');
    if (stored === 'true') {
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (!authed) return;
    const load = async () => {
      setLoading(true);
      try {
        const [leadsRes, settingsRes] = await Promise.all([
          fetch('/api/admin/leads'),
          fetch('/api/admin/settings'),
        ]);
        const leadsData = await leadsRes.json();
        const settingsData = await settingsRes.json();
        setLeads(Array.isArray(leadsData) ? leadsData : []);
        setConfig(settingsData as AdminConfig);
      } catch (e) {
        console.error(e);
        setError('Unable to load admin data. Please refresh.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [authed]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError('');
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('aussie_admin_authed', 'true');
      }
    } else {
      setError('Incorrect admin password.');
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!config) return;
    setSaving(true);
    setMessage('');
    setError('');
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });
      if (!res.ok) {
        throw new Error('Failed to save settings.');
      }
      const updated = (await res.json()) as AdminConfig;
      setConfig(updated);
      setMessage('Settings saved.');
    } catch (err) {
      console.error(err);
      setError('Could not save settings. Try again.');
    } finally {
      setSaving(false);
    }
  };

  if (!authed) {
    return (
      <section className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.95)]">
          <h1 className="font-headline font-bold text-2xl text-white mb-2">Admin portal</h1>
          <p className="text-slate-400 text-sm mb-6">
            Enter the admin password to view leads and email settings.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin password"
              className="w-full h-11 px-4 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan/40"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-cyan text-navy font-body font-semibold hover:bg-cyan-light transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-headline font-bold text-3xl md:text-4xl text-white mb-2">Admin portal</h1>
            <p className="text-slate-400 text-sm">
              Review incoming leads and control email notification settings for your forms.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 lg:gap-10 items-start">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-7 shadow-[0_22px_60px_rgba(15,23,42,0.85)]">
            <h2 className="font-headline font-semibold text-xl text-white mb-2">
              Email notifications (SMTP)
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              Plug in SMTP details from Gmail / G Suite, your hosting provider, or services like Mailtrap. New leads
              will be emailed to the notification address below.
            </p>
            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    SMTP host
                  </label>
                  <input
                    type="text"
                    value={config?.smtpHost || ''}
                    onChange={(e) =>
                      setConfig((prev) => (prev ? { ...prev, smtpHost: e.target.value } : prev))
                    }
                    placeholder="smtp.gmail.com"
                    className="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    SMTP port
                  </label>
                  <input
                    type="number"
                    value={config?.smtpPort ?? 587}
                    onChange={(e) =>
                      setConfig((prev) =>
                        prev ? { ...prev, smtpPort: Number(e.target.value) || 587 } : prev
                      )
                    }
                    placeholder="587"
                    className="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    SMTP username
                  </label>
                  <input
                    type="text"
                    value={config?.smtpUser || ''}
                    onChange={(e) =>
                      setConfig((prev) => (prev ? { ...prev, smtpUser: e.target.value } : prev))
                    }
                    placeholder="SMTP login / full email"
                    className="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    SMTP password
                  </label>
                  <input
                    type="password"
                    value={config?.smtpPassword || ''}
                    onChange={(e) =>
                      setConfig((prev) => (prev ? { ...prev, smtpPassword: e.target.value } : prev))
                    }
                    placeholder="App password or SMTP password"
                    className="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    From email
                  </label>
                  <input
                    type="email"
                    value={config?.fromEmail || ''}
                    onChange={(e) =>
                      setConfig((prev) => (prev ? { ...prev, fromEmail: e.target.value } : prev))
                    }
                    placeholder="noreply@yourdomain.com"
                    className="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    Notification email
                  </label>
                  <input
                    type="email"
                    value={config?.notificationEmail || ''}
                    onChange={(e) =>
                      setConfig((prev) => (prev ? { ...prev, notificationEmail: e.target.value } : prev))
                    }
                    placeholder="you@example.com"
                    className="w-full h-10 px-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan/40"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="inline-flex items-center gap-2 text-sm text-slate-200">
                  <input
                    type="checkbox"
                    checked={Boolean(config?.smtpSecure)}
                    onChange={(e) =>
                      setConfig((prev) => (prev ? { ...prev, smtpSecure: e.target.checked } : prev))
                    }
                    className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan focus:ring-cyan/40"
                  />
                  Use secure connection (SSL/TLS, port 465)
                </label>
                <label className="inline-flex items-center gap-2 text-sm text-slate-200">
                  <input
                    type="checkbox"
                    checked={Boolean(config?.emailEnabled)}
                    onChange={(e) =>
                      setConfig((prev) => (prev ? { ...prev, emailEnabled: e.target.checked } : prev))
                    }
                    className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan focus:ring-cyan/40"
                  />
                  Enable email notifications for new leads
                </label>
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              {message && <p className="text-emerald-400 text-sm">{message}</p>}
              <button
                type="submit"
                disabled={saving}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan text-navy font-body font-semibold text-sm hover:bg-cyan-light disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {saving ? 'Saving…' : 'Save settings'}
              </button>
            </form>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-7 shadow-[0_22px_60px_rgba(15,23,42,0.85)]">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h2 className="font-headline font-semibold text-xl text-white">Leads</h2>
              <span className="text-xs text-slate-400">
                {loading ? 'Loading…' : `${leads.length} lead${leads.length === 1 ? '' : 's'}`}
              </span>
            </div>
            {leads.length === 0 ? (
              <p className="text-slate-500 text-sm">
                No leads yet. When someone submits the contact form, they’ll appear here.
              </p>
            ) : (
              <div className="space-y-3 max-h-[480px] overflow-auto pr-1">
                {leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 cursor-pointer hover:border-cyan/60 transition-colors"
                    onClick={() => setSelectedLead(lead)}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className="font-semibold">
                        {lead.name}{' '}
                        <span className="text-slate-400 text-xs">&lt;{lead.email}&gt;</span>
                      </p>
                      <span className="text-[11px] text-slate-500">
                        {new Date(lead.createdAt).toLocaleString()}
                      </span>
                    </div>
                    {(lead.company || lead.phone) && (
                      <p className="text-[11px] text-slate-400 mb-1.5">
                        {lead.company && <span>Company: {lead.company}</span>}
                        {lead.company && lead.phone && <span> • </span>}
                        {lead.phone && <span>Phone: {lead.phone}</span>}
                      </p>
                    )}
                    <p className="text-[12px] text-slate-200 whitespace-pre-line line-clamp-3">
                      {lead.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 shadow-[0_26px_80px_rgba(15,23,42,0.95)] p-6 md:p-7 relative">
            <button
              type="button"
              onClick={() => setSelectedLead(null)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-100"
              aria-label="Close"
            >
              ✕
            </button>
            <h3 className="font-headline font-semibold text-lg text-white mb-3">
              Lead details
            </h3>
            <div className="space-y-2 text-sm text-slate-100">
              <p className="font-semibold">
                {selectedLead.name}{' '}
                <span className="text-slate-400 text-xs">&lt;{selectedLead.email}&gt;</span>
              </p>
              <p className="text-[11px] text-slate-400">
                {new Date(selectedLead.createdAt).toLocaleString()}
              </p>
              {(selectedLead.company || selectedLead.phone) && (
                <p className="text-[12px] text-slate-300">
                  {selectedLead.company && <span>Company: {selectedLead.company}</span>}
                  {selectedLead.company && selectedLead.phone && <span> • </span>}
                  {selectedLead.phone && <span>Phone: {selectedLead.phone}</span>}
                </p>
              )}
              <div className="mt-3 rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-3 max-h-64 overflow-auto">
                <p className="text-[13px] text-slate-100 whitespace-pre-line">
                  {selectedLead.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

