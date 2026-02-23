'use client';

import ScrollReveal from './ScrollReveal';

type Props = {
  title: string;
  subtitle: string;
  tech: string[];
};

export default function InnerTechSection({ title, subtitle, tech }: Props) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      <div className="max-w-content mx-auto px-6 md:px-10 relative">
        <ScrollReveal variant="fadeUp" className="mb-10">
          <p className="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">Stack</p>
          <h2 className="font-headline font-bold text-2xl md:text-3xl text-navy mb-3">{title}</h2>
          <p className="text-slate-600 max-w-2xl">{subtitle}</p>
        </ScrollReveal>
        <div className="flex flex-wrap gap-3">
          {tech.map((t, i) => (
            <ScrollReveal key={t} variant="scale" delay={i * 40}>
              <span className="inline-flex px-5 py-3 rounded-2xl bg-white border-2 border-slate-200 text-slate-700 font-semibold text-sm shadow-sm hover:border-cyan hover:bg-cyan/5 hover:shadow-md hover:shadow-cyan/10 transition-all duration-300">
                {t}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
