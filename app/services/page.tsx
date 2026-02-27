import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GetQuoteSection from '@/components/GetQuoteSection';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceHeroWithForm from '@/components/ServiceHeroWithForm';
import TechnologyStackSection from '@/components/TechnologyStackSection';

export const metadata: Metadata = {
  title: 'Web & Mobile App Development Services Australia | Custom Software | Aussie App Studio',
  description:
    'Full stack web development and mobile app development services in Australia. React, Flutter, Node.js. Strategy, UI/UX design, support. Get a quote for your project.',
};

const services = [
  {
    title: 'Web Development',
    href: '/services/web-development',
    description: 'Scalable web apps with React and Node.js. From dashboards to e‑commerce, built for performance and growth.',
    features: ['Custom web apps', 'E‑commerce', 'Dashboards', 'APIs'],
    image: {
      src: '/Services/Generated Image February 27, 2026 - 1_54PM.png',
      alt: 'Triple monitor dark web development workstation with code and dashboards.',
    },
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    ),
  },
  {
    title: 'Mobile App Development',
    href: '/services/mobile-apps',
    description: 'Native and cross-platform apps with Flutter and React Native. Fast, reliable, ready for global app stores.',
    features: ['iOS & Android', 'Cross-platform', 'App store ready', 'Backend integration'],
    image: {
      src: '/Services/Generated Image February 27, 2026 - 1_47PM.png',
      alt: 'Two modern smartphones on a white desk showing app screens.',
    },
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
  },
  {
    title: 'UI/UX Design',
    href: '/services/ui-ux',
    description: 'Interfaces that users love and that convert. Research, wireframes, and high-fidelity design aligned to your goals.',
    features: ['Discovery', 'Wireframes', 'Visual design', 'Design systems'],
    image: {
      src: '/Services/Generated Image February 27, 2026 - 2_05PM.png',
      alt: 'Tablet with user flows and a stylus for UI/UX design work.',
    },
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    ),
  },
  {
    title: 'Support & Maintenance',
    href: '/services/maintenance',
    description: 'Keep your product secure, up to date, and improving. Updates, monitoring, and optimisation so you can focus on the business.',
    features: ['Bug fixes', 'Security', 'Performance', 'Feature iterations'],
    image: {
      src: '/Services/Generated Image February 27, 2026 - 1_45PM.png',
      alt: 'Evening development setup with dashboards and code on screen.',
    },
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
];

const processSteps = [
  { step: '01', title: 'Discovery & strategy', desc: 'We align on goals, scope, and success metrics so everyone is on the same page from day one.' },
  { step: '02', title: 'Design & prototype', desc: 'Wireframes and high-fidelity UI so you see exactly what we\'re building before a line of code is written.' },
  { step: '03', title: 'Build & test', desc: 'Agile sprints with regular demos. Quality assurance and performance testing built into every release.' },
  { step: '04', title: 'Launch & support', desc: 'Smooth go-live and ongoing maintenance so your product stays secure, fast, and aligned with your roadmap.' },
];

const whyChoose = [
  { title: 'Time zone aligned', desc: 'We work in your business hours. Sydney, Melbourne, Auckland, and the US. No more waiting for replies across continents.' },
  { title: 'Fixed scope & timeline', desc: 'Clear milestones and transparent pricing. No surprise scope creep or hidden costs.' },
  { title: 'Built for conversion', desc: 'Every screen and flow is designed with your ROI in mind. We combine UX best practices with measurable outcomes.' },
];

const techStack = ['React', 'Next.js', 'Node.js', 'Flutter', 'React Native', 'TypeScript', 'PostgreSQL', 'AWS', 'Figma'];

const stats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '3', label: 'Regions served' },
  { value: '24h', label: 'Response time' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero: left content, right form */}
      <ServiceHeroWithForm
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
        subheading="Full stack development for Australia, USA & NZ"
        headline="Web & mobile app"
        headlineHighlight="development services"
        description="From strategy and UI/UX design to full stack development and ongoing support. We build software that converts and scales for Australian businesses and beyond. Get a quote or discuss your project in the form."
      />

      {/* What we offer – service cards */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal variant="fadeUp" className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">What we offer</h2>
            <p className="text-slate-600 text-lg">
              Four core services that cover the full product lifecycle, from idea to launch and beyond.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7 md:gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.href} variant="fadeUp" delay={i * 80}>
                <div className="group h-full bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan/30 transition-all duration-300 overflow-hidden flex flex-col">
                  {s.image && (
                    <div className="relative w-full pt-[70%] overflow-hidden">
                      <Image
                        src={s.image.src}
                        alt={s.image.alt}
                        fill
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                        sizes="(min-width: 1280px) 260px, (min-width: 1024px) 22vw, 100vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                      <div className="absolute inset-x-0 bottom-0 px-4 pb-3 flex items-center justify-between gap-2">
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/90 text-cyan shadow-sm">
                          {s.icon}
                        </span>
                        <span className="text-[10px] font-headline font-semibold uppercase tracking-[0.18em] text-cyan/90">
                          0{i + 1} · {s.title}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="flex-1 flex flex-col px-5 md:px-6 py-5 md:py-6">
                    {!s.image && (
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan/10 text-cyan mb-4">
                        {s.icon}
                      </span>
                    )}
                    <h3 className="font-headline font-bold text-lg md:text-xl text-navy mb-2">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{s.description}</p>
                    <ul className="flex flex-wrap gap-2 mb-5">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-3 mt-auto">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-lg text-sm transition-colors"
                      >
                        Get a quote
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <Link
                        href={s.href}
                        className="inline-flex items-center gap-1.5 text-cyan font-body font-medium text-sm hover:text-cyan-dark"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full stack intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal variant="fadeLeft" className="">
              <h2 className="font-headline font-bold text-2xl md:text-3xl text-navy mb-6">Full stack services, from strategy to launch</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We cover the full product lifecycle: web development with React and Node.js, mobile app development with Flutter and React Native, UI/UX design, and ongoing support. Australian businesses and startups choose us for time zone aligned collaboration and a conversion first approach.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Not sure whether you need a web app, a mobile app, or both? We will review your goals and timeline, then recommend the right mix. No obligation, just a straight conversation about what you need.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-cyan font-body font-semibold hover:text-cyan-dark">
                Get a free consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight" className="grid grid-cols-2 gap-4">
              {['Web apps & dashboards', 'Mobile (iOS & Android)', 'UI/UX design', 'Support & maintenance'].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-8 h-8 rounded-lg bg-cyan/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-cyan" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <span className="font-body font-medium text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal variant="fadeUp" className="max-w-3xl mx-auto mb-14">
            <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-[0_18px_55px_rgba(148,163,184,0.35)]">
              <div className="absolute inset-0 opacity-70">
                <Image
                  src="/Services/Generated Image February 27, 2026 - 1_48PM.png"
                  alt="Team collaborating over sketches and strategy notes."
                  fill
                  className="object-cover blur-sm scale-105"
                  sizes="(min-width: 1280px) 720px, (min-width: 1024px) 70vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/92 to-white/96" />
              </div>
              <div className="relative px-6 md:px-10 py-8 md:py-10 text-center">
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-cyan mb-3">
                  How we work
                </p>
                <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-3">
                  A clear, transparent delivery process
                </h2>
                <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
                  From first conversation to launch and beyond, you always know what’s happening next and who is doing
                  what. No black‑box development, ever.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ step, title, desc }, i) => (
              <ScrollReveal key={step} variant="fadeUp" delay={i * 80}>
                <div className="relative h-full rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm">
                  <span className="font-headline font-bold text-4xl text-cyan/20 mb-4 block">
                    {step}
                  </span>
                  <h3 className="font-headline font-semibold text-lg text-navy mb-3">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                  {step !== '04' && (
                    <span className="hidden lg:block absolute top-8 -right-4 text-slate-300">→</span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why brands choose us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal variant="fadeUp">
            <h2 className="font-headline font-bold text-2xl md:text-3xl text-navy mb-12">Why brands choose us</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-8">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} variant="scale" delay={i * 100}>
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan/20 transition-colors">
                  <h3 className="font-headline font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies we use – same tabbed section as homepage */}
      <TechnologyStackSection />

      {/* Stats strip */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-3 gap-8">
            {stats.map(({ value, label }, i) => (
              <ScrollReveal key={label} variant="fadeUp" delay={i * 100}>
              <div className="text-center">
                <p className="font-headline font-bold text-4xl md:text-5xl text-cyan mb-2">{value}</p>
                <p className="text-slate-600 font-body text-sm md:text-base">{label}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GetQuoteSection
        title="Get a free quote"
        subtitle="Tell us about your project. We reply within 24 hours with next steps and a ballpark quote. No obligation."
      />
    </>
  );
}
