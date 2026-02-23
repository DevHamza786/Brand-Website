'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

type PartnerItem = { title: string; description: string };

type Props = {
  sectionTitle: string;
  sectionSubtitle?: string;
  items: PartnerItem[];
  ctaText?: string;
  ctaHref?: string;
};

export default function WhyPartnerSection({
  sectionTitle,
  sectionSubtitle,
  items,
  ctaText = 'Request a consultation',
  ctaHref = '/contact',
}: Props) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <ScrollReveal variant="fadeUp" className="text-center mb-14">
          <p className="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">Why Partner with Us</p>
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">{sectionTitle}</h2>
          {sectionSubtitle && <p className="text-slate-600 max-w-2xl mx-auto">{sectionSubtitle}</p>}
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} variant="scale" delay={i * 80}>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan/20 hover:shadow-lg transition-all duration-300 text-center">
                <h3 className="font-headline font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal variant="fadeUp" className="text-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan/25"
          >
            {ctaText}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
