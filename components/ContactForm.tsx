'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
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
      // Use Formspree or your API endpoint. Example: form action or fetch to /api/contact
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          message: formData.get('message'),
          region: formData.get('region'),
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
        <p className="font-semibold">Thanks! We’ll be in touch soon.</p>
        <p className="text-slate-600 text-sm mt-1">Check your inbox for a confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-body font-medium text-slate-700 mb-1.5">
          Name <span className="text-coral">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-body font-medium text-slate-700 mb-1.5">
          Email <span className="text-coral">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="company" className="block font-body font-medium text-slate-700 mb-1.5">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all"
          placeholder="Optional"
        />
      </div>
      <div>
        <label htmlFor="region" className="block font-body font-medium text-slate-700 mb-1.5">
          Preferred region
        </label>
        <select
          id="region"
          name="region"
          className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all bg-white"
        >
          <option value="">Select</option>
          <option value="AUS">Australia</option>
          <option value="USA">USA</option>
          <option value="NZ">New Zealand</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block font-body font-medium text-slate-700 mb-1.5">
          Message <span className="text-coral">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all resize-y min-h-[120px]"
          placeholder="Tell us about your project..."
        />
      </div>
      {status === 'error' && (
        <p className="text-coral text-sm">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full md:w-auto px-8 py-4 bg-cyan hover:bg-cyan-dark disabled:opacity-50 disabled:cursor-not-allowed text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        {status === 'loading' ? 'Sending…' : 'Send'}
      </button>
    </form>
  );
}
