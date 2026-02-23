'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone') || undefined,
          company: formData.get('company') || undefined,
          message: formData.get('message'),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Something went wrong.');
      }
      router.push('/thank-you');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Please try again or email us directly.');
    }
  }

  if (status === 'success') {
    return (
      <div className="p-6 rounded-xl bg-cyan/10 border border-cyan/20 text-navy">
        <p className="font-semibold">Thanks! We'll be in touch soon.</p>
        <p className="text-slate-600 text-sm mt-1">Check your inbox for a confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        required
        placeholder="Name"
        className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-navy placeholder:text-slate-400"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-navy placeholder:text-slate-400"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-navy placeholder:text-slate-400"
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all text-navy placeholder:text-slate-400"
      />
      <textarea
        name="message"
        required
        rows={3}
        placeholder="Write your message..."
        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all resize-y min-h-[80px] text-navy placeholder:text-slate-400"
      />
      {status === 'error' && (
        <p className="text-red-600 text-sm">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full h-12 px-6 bg-cyan hover:bg-cyan-dark disabled:opacity-50 disabled:cursor-not-allowed text-navy font-body font-semibold rounded-lg transition-colors"
      >
        {status === 'loading' ? 'Sending…' : 'Submit'}
      </button>
    </form>
  );
}
