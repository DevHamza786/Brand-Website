'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

type FaqItem = { q: string; a: string };

type Props = {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
  fullWidth?: boolean;
  id?: string;
};

export default function ServiceFaqSection({
  title = 'Curious about our solutions? Get the answers.',
  subtitle,
  faqs,
  fullWidth = false,
  id,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="py-20 md:py-28 bg-white border-y border-slate-200 w-full">
      <div className={fullWidth ? 'w-full px-6 md:px-10' : 'max-w-content mx-auto px-6 md:px-10'}>
        <ScrollReveal variant="fadeUp" className={fullWidth ? 'mb-14 max-w-5xl mx-auto' : 'mb-14'}>
          <p className="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">
            FAQs
          </p>
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">{title}</h2>
          {subtitle && (
            <p className="text-slate-600 max-w-2xl text-lg">{subtitle}</p>
          )}
        </ScrollReveal>
        <div className={`space-y-4 ${fullWidth ? 'max-w-5xl mx-auto' : 'max-w-5xl'}`}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 40}>
              <div
                className={`rounded-2xl border-2 bg-slate-50/50 transition-all duration-200 ${
                  openIndex === i
                    ? 'border-cyan/40 shadow-lg shadow-cyan/5'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-headline font-semibold text-navy text-base md:text-lg pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg font-body font-medium transition-colors ${
                      openIndex === i
                        ? 'bg-cyan text-navy'
                        : 'bg-white border border-slate-200 text-slate-600'
                    }`}
                  >
                    {openIndex === i ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-600 leading-relaxed text-base border-t border-slate-200/80 pt-5">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
