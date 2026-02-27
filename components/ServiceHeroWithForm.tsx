import Link from 'next/link';
import Image from 'next/image';
import HeroContactForm from './HeroContactForm';

export type BreadcrumbItem = { label: string; href?: string };

type HeroImage = {
  src: string;
  alt: string;
};

type Props = {
  breadcrumb: BreadcrumbItem[];
  subheading?: string;
  headline: string;
  headlineHighlight?: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  heroImage?: HeroImage;
};

export default function ServiceHeroWithForm({
  breadcrumb,
  subheading,
  headline,
  headlineHighlight,
  description,
  ctaText = 'Get a quote',
  ctaHref = '/contact',
  heroImage,
}: Props) {
  return (
    <section className="relative pt-24 md:pt-28 pb-16 md:pb-24 bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(6,182,212,0.12),transparent)]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="max-w-content mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left: content */}
          <div className="order-2 lg:order-1">
            <nav className="text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
              <ol className="flex flex-wrap gap-2 items-center">
                {breadcrumb.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden>/</span>}
                    {item.href ? (
                      <Link href={item.href} className="hover:text-cyan-light transition-colors">{item.label}</Link>
                    ) : (
                      <span className="text-white font-medium">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            {subheading && (
              <p className="text-cyan-light font-body font-medium text-sm uppercase tracking-wider mb-4">
                {subheading}
              </p>
            )}
            <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              {headlineHighlight ? (
                <>
                  {headline}
                  <span className="text-cyan-light"> {headlineHighlight}</span>
                </>
              ) : (
                headline
              )}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              {description}
            </p>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan/25"
            >
              {ctaText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          {/* Right: visual + form card */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:ml-auto lg:mr-0 space-y-5 md:space-y-6">
              {heroImage && (
                <div className="relative rounded-3xl bg-slate-900/70 border border-slate-700/70 shadow-[0_22px_55px_rgba(15,23,42,0.9)] overflow-hidden">
                  <div className="relative w-full pt-[70%]">
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 1280px) 420px, (min-width: 1024px) 360px, 90vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 md:p-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan/90 mb-1">
                      Web & mobile app studio
                    </p>
                    <p className="text-[11px] text-slate-100/95">
                      Multi-device product views designed for real teams in AU, NZ & the US.
                    </p>
                  </div>
                </div>
              )}

              <div className="relative p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-navy/20">
                <div className="absolute right-0 bottom-0 w-1/2 h-1/2 rounded-tl-[100%] bg-gradient-to-tr from-cyan/10 to-transparent pointer-events-none" />
                <h2 className="font-headline font-bold text-xl md:text-2xl text-navy mb-1">Discuss your project</h2>
                <p className="font-headline font-bold text-xl md:text-2xl text-cyan mb-6">needs</p>
                <HeroContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
