'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export type ServiceOffering = {
  title: string;
  description: string;
  href?: string;
};

type Props = {
  sectionLabel?: string;
  sectionTitle: string;
  sectionSubtitle?: string;
  offerings: ServiceOffering[];
  ctaLabel?: string;
};

export default function ServiceOfferingsSection({
  sectionLabel = 'Services',
  sectionTitle,
  sectionSubtitle,
  offerings,
  ctaLabel = 'Learn more',
}: Props) {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <ScrollReveal variant="fadeUp" className="mb-14">
          <p className="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">{sectionLabel}</p>
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">{sectionTitle}</h2>
          {sectionSubtitle && (
            <p className="text-slate-600 max-w-3xl text-lg">{sectionSubtitle}</p>
          )}
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((off, i) => (
            <ScrollReveal key={off.title} variant="fadeUp" delay={i * 60}>
              <div className="h-full p-8 rounded-2xl bg-white border border-slate-200 hover:border-cyan/30 hover:shadow-xl transition-all duration-300">
                <h3 className="font-headline font-bold text-xl text-navy mb-4">{off.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{off.description}</p>
                <Link
                  href={off.href || '/contact'}
                  className="inline-flex items-center gap-2 text-cyan font-body font-semibold text-sm hover:text-cyan-dark transition-colors"
                >
                  {ctaLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
