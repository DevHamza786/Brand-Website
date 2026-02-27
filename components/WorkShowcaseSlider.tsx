'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Project = {
  src: string;
  title: string;
  type: string;
  description: string;
};

type Props = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  projects?: Project[];
  imageOn?: 'left' | 'right';
};

const fallbackProjects: Project[] = [
  {
    src: '/Work/Generated Image February 27, 2026 - 2_10PM.png',
    title: 'Cross‑platform shopping experience',
    type: 'Mobile commerce',
    description: 'Flutter + React Native builds for an AU retailer, shipping iOS and Android together.',
  },
  {
    src: '/Work/Generated Image February 27, 2026 - 2_33PM.png',
    title: 'Operations dashboard across web & tablet',
    type: 'Multi‑device dashboards',
    description: 'Responsive admin tools designed for teams that bounce between laptop and tablet all day.',
  },
  {
    src: '/Work/Web/new3.webp',
    title: 'Product analytics at a glance',
    type: 'SaaS dashboards',
    description: 'High‑density dashboards that stay readable on wide screens and laptops.',
  },
];

export default function WorkShowcaseSlider({
  eyebrow,
  heading,
  body,
  projects,
  imageOn = 'left',
}: Props) {
  const items = (projects && projects.length ? projects : fallbackProjects) as Project[];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [items.length]);

  const current = items[activeIndex];

  const imageBlock = (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(15,23,42,0.95)] bg-slate-950">
        <div className="relative w-full pt-[65%]">
          <Image
            src={current.src}
            alt={current.title}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 520px, (min-width: 1024px) 45vw, 90vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-light mb-1">
              {current.type}
            </p>
            <p className="font-headline font-semibold text-sm md:text-base text-slate-50 line-clamp-2">
              {current.title}
            </p>
          </div>
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-900/70 text-[11px] text-slate-200 backdrop-blur">
            {activeIndex + 1}/{items.length}
          </span>
        </div>
      </div>
    </div>
  );

  const contentBlock = (
    <div className="max-w-xl">
      <p className="text-xs font-body font-semibold tracking-[0.28em] uppercase text-cyan-light mb-3">
        {eyebrow || 'Recent work'}
      </p>
      <h2 className="font-headline font-bold text-3xl md:text-4xl text-white mb-4">
        {heading || 'Web & mobile product experiences'}
      </h2>
      <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
        {body ||
          'A rotating look at the kind of web and mobile interfaces we design and build for brands in Australia, New Zealand and the US.'}
      </p>
      <div className="flex items-center gap-2">
        {items.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-200 ${
              activeIndex === index
                ? 'w-7 bg-cyan'
                : 'w-2.5 bg-slate-600 hover:bg-slate-400'
            }`}
            aria-label={project.title}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {imageOn === 'left' ? (
        <>
          {imageBlock}
          {contentBlock}
        </>
      ) : (
        <>
          {contentBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}

