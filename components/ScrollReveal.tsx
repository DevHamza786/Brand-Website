'use client';

import { useEffect, useRef, useState } from 'react';

type Variant = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scale' | 'fadeUpStagger';

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
};

const variantClasses: Record<Variant, { from: string; to: string }> = {
  fadeUp: { from: 'opacity-0 translate-y-10', to: 'opacity-100 translate-y-0' },
  fadeIn: { from: 'opacity-0', to: 'opacity-100' },
  fadeLeft: { from: 'opacity-0 -translate-x-8', to: 'opacity-100 translate-x-0' },
  fadeRight: { from: 'opacity-0 translate-x-8', to: 'opacity-100 translate-x-0' },
  scale: { from: 'opacity-0 scale-95', to: 'opacity-100 scale-100' },
  fadeUpStagger: { from: 'opacity-0 translate-y-10', to: 'opacity-100 translate-y-0' },
};

export default function ScrollReveal({ children, className = '', delay = 0, variant = 'fadeUp' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { from, to } = variantClasses[variant];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? to : from} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
