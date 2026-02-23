'use client';

import ScrollReveal from './ScrollReveal';

type ProcessStep = { step: string; title: string; desc: string };

type Props = {
  sectionTitle?: string;
  sectionSubtitle?: string;
  steps: ProcessStep[];
};

export default function ProcessSection({
  sectionTitle = 'How we create digital solutions',
  sectionSubtitle = 'We work closely to determine your needs and deliver the desired outcome.',
  steps,
}: Props) {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <ScrollReveal variant="fadeUp" className="text-center mb-14">
          <p className="font-headline font-semibold text-cyan text-sm uppercase tracking-wider mb-2">Our Process</p>
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">{sectionTitle}</h2>
          {sectionSubtitle && (
            <p className="text-slate-600 max-w-2xl mx-auto">{sectionSubtitle}</p>
          )}
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} variant="fadeUp" delay={i * 80}>
              <div className="relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan/20 hover:shadow-lg transition-all duration-300">
                <span className="font-headline font-bold text-4xl text-cyan/20 block mb-3">{s.step}</span>
                <h3 className="font-headline font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-slate-300">→</span>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
