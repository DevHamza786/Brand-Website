import Link from 'next/link';

type Props = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
};

export default function GetQuoteSection({ title = 'Get a free quote', subtitle = 'Tell us about your project. We reply within 24 hours with next steps and a ballpark quote. No obligation.', ctaText = 'Get a quote', ctaHref = '/contact', className = '' }: Props) {
  return (
    <section className={`py-16 md:py-20 bg-navy text-white ${className}`}>
      <div className="max-w-content mx-auto px-6 md:px-10 text-center">
        <h2 className="font-headline font-bold text-2xl md:text-3xl mb-3">{title}</h2>
        <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8">{subtitle}</p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan/25"
        >
          {ctaText}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
    </section>
  );
}
