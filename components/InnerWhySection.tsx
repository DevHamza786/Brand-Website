'use client';

import ScrollReveal from './ScrollReveal';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function InnerWhySection({ title, children }: Props) {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(6,182,212,0.06),transparent)] pointer-events-none" />
      <div className="max-w-copy mx-auto px-6 md:px-10 relative">
        <ScrollReveal variant="fadeUp">
          <div className="border-l-4 border-cyan pl-8 mb-10">
            <h2 className="font-headline font-bold text-2xl md:text-3xl text-navy">{title}</h2>
          </div>
        </ScrollReveal>
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed [&>p]:mb-6">
          {children}
        </div>
      </div>
    </section>
  );
}
