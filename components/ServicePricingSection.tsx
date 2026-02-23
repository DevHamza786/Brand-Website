'use client';

import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export type PricingTier = {
  name: string;
  description: string;
  features: string[];
  priceLabel?: string;
  highlighted?: boolean;
};

type Props = {
  sectionTitle?: string;
  sectionSubtitle?: string;
  tiers: PricingTier[];
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-cyan flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function ServicePricingSection({
  sectionTitle = 'Flexible engagement',
  sectionSubtitle = 'We tailor scope and timeline to your needs. Transparent pricing, no hidden fees.',
  tiers,
}: Props) {
  return (
    <section className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <ScrollReveal variant="fadeUp" className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">{sectionTitle}</h2>
          <p className="text-slate-600 text-lg">{sectionSubtitle}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} variant="scale" delay={i * 100}>
              <div
                className={`relative h-full rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                  tier.highlighted
                    ? 'border-cyan bg-navy text-white shadow-lg shadow-cyan/20'
                    : 'border-slate-200 bg-white hover:border-cyan/40'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan text-navy font-body font-semibold text-sm">
                    Most popular
                  </div>
                )}
                <div className={tier.highlighted ? 'text-white' : ''}>
                  <h3 className="font-headline font-bold text-xl mb-2">{tier.name}</h3>
                  <p className={`text-sm mb-6 ${tier.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                    {tier.description}
                  </p>
                  {tier.priceLabel && (
                    <p className={`font-headline font-bold text-2xl mb-6 ${tier.highlighted ? 'text-cyan-light' : 'text-navy'}`}>
                      {tier.priceLabel}
                    </p>
                  )}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className={tier.highlighted ? 'text-slate-200 text-sm' : 'text-slate-700 text-sm'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-body font-semibold text-sm transition-all duration-200 hover:scale-[1.02] ${
                      tier.highlighted
                        ? 'bg-cyan hover:bg-cyan-light text-navy'
                        : 'bg-navy hover:bg-navy-deep text-white'
                    }`}
                  >
                    Get a quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
