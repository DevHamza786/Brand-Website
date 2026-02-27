'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    src: '/Work/Generated Image February 27, 2026 - 2_10PM.png',
    alt: 'Analytics dashboards across tablet and phone',
  },
  {
    src: '/Work/Generated Image February 27, 2026 - 2_33PM.png',
    alt: 'System health dashboard on desktop with harbour view',
  },
  {
    src: '/Work/Generated Image February 27, 2026 - 2_32PM.png',
    alt: 'Mobile banking experience in a cafe',
  },
  {
    src: '/Work/Generated Image February 27, 2026 - 2_30PM.png',
    alt: 'E‑commerce dashboard across multiple devices',
  },
];

export default function HeroDeviceSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto max-w-md rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-[0_24px_70px_rgba(15,23,42,0.95)]">
      <div className="overflow-hidden rounded-3xl bg-slate-950 border border-slate-700/80 relative">
        <div className="relative w-full pt-[60%]">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 420px, (min-width: 1024px) 360px, 80vw"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                index === activeIndex ? 'w-6 bg-cyan' : 'w-2.5 bg-slate-600/80 hover:bg-slate-400'
              }`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

