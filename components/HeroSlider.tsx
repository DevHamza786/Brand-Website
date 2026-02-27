'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import HeroContactForm from './HeroContactForm';

export type HeroSlide = {
  subheading: string;
  headline: string;
  headlineHighlight: string;
  description: string;
};

type Props = {
  slides: HeroSlide[];
  autoPlayMs?: number;
};

export default function HeroSlider({ slides, autoPlayMs = 7000 }: Props) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => goTo(current + 1), autoPlayMs);
    return () => clearInterval(id);
  }, [slides.length, current, goTo, autoPlayMs]);

  if (!slides.length) return null;

  const slide = slides[current];

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-navy via-navy-deep to-navy-light text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.15),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

      <div className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-32 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left: sliding content */}
          <div className="order-2 lg:order-1 relative min-h-[320px] md:min-h-[380px]">
            {slides.map((s, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <p className="text-cyan-light font-body font-medium text-sm uppercase tracking-wider mb-6">
                  {s.subheading}
                </p>
                <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-8">
                  {s.headline} <span className="text-cyan-light">{s.headlineHighlight}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-cyan/25 hover:shadow-cyan/40"
                  >
                    Get a quote
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-400/60 hover:border-cyan-light hover:bg-white/5 text-white font-body font-semibold transition-all duration-300"
                  >
                    See our work
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right: form card (fixed) */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:ml-auto lg:mr-0 p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-navy/20">
              <div className="absolute right-0 bottom-0 w-1/2 h-1/2 rounded-tl-[100%] bg-gradient-to-tr from-cyan/10 to-transparent pointer-events-none" />
              <h2 className="font-headline font-bold text-xl md:text-2xl text-navy mb-1">
                Discuss your project
              </h2>
              <p className="font-headline font-bold text-xl md:text-2xl text-cyan mb-6">needs</p>
              <HeroContactForm />
            </div>
          </div>
        </div>

        {/* Slider controls: dots + arrows */}
        {slides.length > 1 && (
          <div className="mt-10 lg:mt-12 flex items-center justify-between gap-4 max-w-content mx-auto px-6 md:px-10">
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={`h-2 rounded-full transition-all ${
                    current === idx ? 'w-8 bg-cyan' : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/50 text-white hover:border-cyan-light hover:text-cyan-light transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/50 text-white hover:border-cyan-light hover:text-cyan-light transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
