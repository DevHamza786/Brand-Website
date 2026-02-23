'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const interestOptions = [
  'Branding & Design',
  'Development',
  'Mobile app development',
  'Artificial intelligence (AI)',
  'Digital marketing',
  'Staff augmentation',
];

export default function ContactPageForm() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedInterest, setSelectedInterest] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = formData.get('firstName') || '';
    const lastName = formData.get('lastName') || '';
    const name = `${firstName} ${lastName}`.trim() || firstName || lastName;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || formData.get('firstName'),
          email: formData.get('email'),
          phone: formData.get('phone') || undefined,
          company: formData.get('company') || undefined,
          message: formData.get('message'),
          interest: selectedInterest || undefined,
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
      <div className="p-8 rounded-2xl bg-cyan/10 border border-cyan/20 text-navy text-center">
        <p className="font-headline font-semibold text-xl">Thanks! We'll be in touch soon.</p>
        <p className="text-slate-600 mt-2">Check your inbox for a confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-firstname" className="block font-body font-medium text-slate-700 mb-2">First Name <span className="text-coral">*</span></label>
          <input
            type="text"
            id="contact-firstname"
            name="firstName"
            required
            className="w-full h-12 px-4 rounded-lg border-0 border-b-2 border-slate-200 bg-transparent focus:border-cyan focus:ring-0 outline-none transition-colors placeholder:text-slate-400"
            placeholder="First Name"
          />
        </div>
        <div>
          <label htmlFor="contact-lastname" className="block font-body font-medium text-slate-700 mb-2">Last Name</label>
          <input
            type="text"
            id="contact-lastname"
            name="lastName"
            className="w-full h-12 px-4 rounded-lg border-0 border-b-2 border-slate-200 bg-transparent focus:border-cyan focus:ring-0 outline-none transition-colors placeholder:text-slate-400"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-email" className="block font-body font-medium text-slate-700 mb-2">Email Address <span className="text-coral">*</span></label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            className="w-full h-12 px-4 rounded-lg border-0 border-b-2 border-slate-200 bg-transparent focus:border-cyan focus:ring-0 outline-none transition-colors placeholder:text-slate-400"
            placeholder="Email Address"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block font-body font-medium text-slate-700 mb-2">Phone Number</label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            className="w-full h-12 px-4 rounded-lg border-0 border-b-2 border-slate-200 bg-transparent focus:border-cyan focus:ring-0 outline-none transition-colors placeholder:text-slate-400"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-company" className="block font-body font-medium text-slate-700 mb-2">Company Name</label>
        <input
          type="text"
          id="contact-company"
          name="company"
          className="w-full h-12 px-4 rounded-lg border-0 border-b-2 border-slate-200 bg-transparent focus:border-cyan focus:ring-0 outline-none transition-colors placeholder:text-slate-400"
          placeholder="Company Name"
        />
      </div>
      <div>
        <p className="font-body font-medium text-slate-700 mb-4">I'm interested in...</p>
        <div className="flex flex-wrap gap-3">
          {interestOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSelectedInterest(selectedInterest === option ? '' : option)}
              className={`px-4 py-2.5 rounded-lg font-body text-sm font-medium transition-all border ${
                selectedInterest === option
                  ? 'bg-slate-100 border-slate-300 text-navy'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <input type="hidden" name="interest" value={selectedInterest} />
      </div>
      <div>
        <label htmlFor="contact-message" className="block font-body font-medium text-slate-700 mb-2">Tell us about your project <span className="text-coral">*</span></label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border-0 border-b-2 border-slate-200 bg-transparent focus:border-cyan focus:ring-0 outline-none transition-colors resize-y min-h-[100px] placeholder:text-slate-400"
          placeholder="Tell us about your project..."
        />
      </div>
      {status === 'error' && (
        <p className="text-coral text-sm">{errorMessage}</p>
      )}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-2 px-8 py-4 bg-navy hover:bg-navy-deep disabled:opacity-50 disabled:cursor-not-allowed text-white font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          {status === 'loading' ? 'Sending…' : 'Submit'}
          <span className="w-2 h-2 rounded-full bg-white" />
        </button>
      </div>
    </form>
  );
}
