import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'We’ve received your message.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-slate-50">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 rounded-full bg-cyan/20 flex items-center justify-center mx-auto mb-8">
          <svg className="w-8 h-8 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-6">Thanks—we’ve got it.</h1>
        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
          We’ll be in touch within 24 hours. In the meantime, take a look at our work or add us on LinkedIn.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-navy text-navy font-body font-semibold rounded-xl hover:bg-navy hover:text-white transition-colors"
          >
            See our work
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-xl transition-all duration-200"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
