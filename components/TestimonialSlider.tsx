'use client';

import { useEffect, useState } from 'react';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type Props = {
  items: Testimonial[];
};

export default function TestimonialSlider({ items }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(id);
  }, [items.length]);

  function goTo(index: number) {
    setCurrent((index + items.length) % items.length);
  }

  if (!items.length) return null;

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((t) => (
            <div key={t.author} className="w-full flex-shrink-0 px-1">
              <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-card">
                <p className="text-slate-700 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-navy">{t.author}</p>
                <p className="text-slate-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Controls */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              className={`h-1.5 rounded-full transition-all ${
                current === idx ? 'w-6 bg-cyan' : 'w-2 bg-slate-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 text-slate-600 hover:border-cyan hover:text-cyan transition-colors"
            aria-label="Previous testimonial"
          >
            <span className="sr-only">Previous</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 text-slate-600 hover:border-cyan hover:text-cyan transition-colors"
            aria-label="Next testimonial"
          >
            <span className="sr-only">Next</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

