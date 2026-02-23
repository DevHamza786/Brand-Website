'use client';

import ScrollReveal from './ScrollReveal';

type Props = {
  title: string;
  subtitle: string;
  items: string[];
};

export default function InnerDeliverablesSection({ title, subtitle, items }: Props) {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-content mx-auto px-6 md:px-10 relative">
        <ScrollReveal variant="fadeUp">
          <p className="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">What we deliver</p>
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">{title}</h2>
          <p className="text-slate-600 max-w-2xl text-lg mb-12">{subtitle}</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
          {items.map((item, i) => (
            <ScrollReveal key={item} variant="fadeUp" delay={i * 60}>
              <div className="group flex items-start gap-5 p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-cyan/30 hover:bg-white hover:shadow-lg hover:shadow-cyan/5 transition-all duration-300">
                <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan to-cyan/80 flex items-center justify-center text-white font-headline font-bold text-sm shadow-lg shadow-cyan/25">
                  {i + 1}
                </span>
                <span className="font-body font-medium text-slate-700 pt-2 text-base">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
