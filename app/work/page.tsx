import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Case Studies & Portfolio | Aussie App Studio',
  description:
    'See how we build web and mobile products for brands across Australia, New Zealand and the US. Real projects, real results.',
};

const placeholderItems = [
  {
    title: 'E‑commerce platform',
    sector: 'Retail',
    outcome: 'Scalable storefront and admin for a growing Australian retailer.',
    href: '/work',
  },
  {
    title: 'Mobile app for field teams',
    sector: 'Logistics',
    outcome: 'Cross-platform app that reduced reporting time by 40%.',
    href: '/work',
  },
  {
    title: 'Customer portal',
    sector: 'B2B',
    outcome: 'Self-service portal with integrated billing and support.',
    href: '/work',
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(6,182,212,0.12),transparent)]" />
        <div className="max-w-content mx-auto px-6 md:px-10 relative z-10">
          <nav className="text-sm text-slate-400 mb-10" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-cyan-light">Home</Link></li>
              <li aria-hidden>/</li>
              <li className="text-white font-medium">Work</li>
            </ol>
          </nav>
          <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 max-w-4xl">
            Web and Mobile App Projects: Case Studies and Portfolio
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            A selection of web development and mobile app development projects we have delivered for brands in Australia and beyond. Each one built for scale, conversion, and long term success.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {placeholderItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover hover:border-cyan/20 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-navy/5 to-cyan/5 flex items-center justify-center">
                  <Image src="/favicon.png" alt="" width={120} height={120} className="w-24 h-24 object-contain opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                <div className="p-8">
                  <span className="text-cyan font-medium text-sm">{item.sector}</span>
                  <h2 className="font-headline font-semibold text-xl text-navy mt-2 group-hover:text-cyan-dark transition-colors">{item.title}</h2>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">{item.outcome}</p>
                  <span className="inline-flex items-center gap-2 mt-4 text-cyan font-medium text-sm">
                    Read case study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto rounded-2xl bg-slate-50 border border-slate-200 p-12 md:p-16 text-center">
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              We’re currently updating our portfolio with full case studies. In the meantime, tell us about your project and we’ll show you how we work, and share relevant examples from our experience.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan/20"
            >
              Tell us about your project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
