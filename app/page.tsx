import Link from 'next/link';
import Image from 'next/image';
import FaqSchema from '@/components/FaqSchema';
import GetQuoteSection from '@/components/GetQuoteSection';
import HeroSlider from '@/components/HeroSlider';
import ServiceFaqSection from '@/components/ServiceFaqSection';
import TechnologyStackSection from '@/components/TechnologyStackSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import WorkShowcaseSlider from '@/components/WorkShowcaseSlider';

const heroSlides = [
  {
    subheading: 'WEB & MOBILE APP DEVELOPMENT FOR AUSTRALIA, USA & NZ',
    headline: 'Digital products that win, ',
    headlineHighlight: 'in your time zone.',
    description:
      'We build high-performance web and mobile apps for ambitious brands in Australia, the USA, and New Zealand. Custom web development, mobile app development, UI/UX design, and ongoing support. Strategy to launch, in sync with your local hours.',
  },
  {
    subheading: 'CUSTOM SOFTWARE & UI/UX',
    headline: 'From idea to launch, ',
    headlineHighlight: 'faster.',
    description:
      'Discovery, design, and development in one place. We help you validate, prototype, and ship products that users love—with clear timelines and transparent pricing.',
  },
  {
    subheading: 'TRUSTED BY BRANDS IN AU, USA & NZ',
    headline: 'Local partnership, ',
    headlineHighlight: 'global capability.',
    description:
      'An Australian-owned studio with the technical firepower to compete anywhere. Get the reliability of a local partner and the scale of a global team.',
  },
];

const stats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '3', label: 'Regions served' },
  { value: '24h', label: 'Response time' },
  { value: '100%', label: 'Client-focused' },
];

const pillars = [
  {
    title: 'Time-zone aligned',
    body: 'Seamless communication in your business hours, whether you’re in Sydney, New York, or Auckland. No more waiting for replies across continents. We sync our availability to yours.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: 'Scalable architecture',
    body: 'Web and mobile apps built with modern stacks (React, Flutter, Node.js) so they grow with your users. We design for scale from day one. No painful rewrites later.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
    ),
  },
  {
    title: 'Conversion-first',
    body: 'Every line of code is written with your ROI in mind. Your product isn’t just polished; it’s a lead-generating machine. We combine UX best practices with measurable outcomes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
  },
  {
    title: 'Local trust, global reach',
    body: 'An Australian-owned studio with the technical firepower to launch in the world’s most competitive markets. You get the reliability of a local partner and the capability of a global team.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
];

const processSteps = [
  { step: '01', title: 'Discovery & strategy', desc: 'We align on goals, scope, and success metrics so everyone is on the same page.' },
  { step: '02', title: 'Design & prototype', desc: 'Wireframes and high-fidelity UI so you see exactly what we’re building before a line of code.' },
  { step: '03', title: 'Build & test', desc: 'Agile sprints with regular demos. Quality assurance and performance testing built in.' },
  { step: '04', title: 'Launch & support', desc: 'Smooth go-live and ongoing maintenance so your product stays secure and fast.' },
];

const testimonials = [
  {
    quote: 'They delivered on time and on budget. The app is fast, looks great, and our users love it. Couldn’t ask for a better partner.',
    author: 'Sarah M.',
    role: 'Product Lead, Sydney',
  },
  {
    quote: 'Finally a dev team that gets time zones. We’re in Auckland and they made collaboration feel local. The quality of work is outstanding.',
    author: 'James K.',
    role: 'CTO, Auckland',
  },
  {
    quote: 'From strategy to launch, they were transparent and professional. Our conversion rates improved within the first quarter post-launch.',
    author: 'Rachel T.',
    role: 'Marketing Director, Melbourne',
  },
];

const homeFaqs = [
  { q: 'Do you work with clients outside Australia?', a: 'Yes. We serve brands in Australia, the USA, and New Zealand with collaboration timed to your time zone.' },
  { q: 'What tech stack do you use?', a: 'We build with React, Flutter, Node.js, and proven modern tools so your product is scalable and maintainable.' },
  { q: 'How do you handle time zones?', a: 'We align our availability to your business hours so you\'re not waiting on replies across continents.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. From launch we offer maintenance, updates, and support so your product stays secure and performant.' },
  { q: "What's the typical project timeline?", a: "It depends on scope. We'll give you a clear timeline and milestones after we understand your brief." },
];

const whyChoose = [
  {
    title: 'Agile delivery',
    description: 'Short sprints, regular demos, and clear communication so you always know what\'s shipping next.',
  },
  {
    title: 'Security-first',
    description: 'Best practices from day one: secure auth, hardened infrastructure, and ongoing monitoring.',
  },
  {
    title: 'ROI-focused',
    description: 'We prioritise features that move the needle on revenue, retention, and efficiency.',
  },
  {
    title: 'Time-zone overlap you can count on',
    description: 'Daylight-friendly standups, async updates, and support that lines up with your workday.',
  },
];

const homeShowcase = [
  {
    src: '/Home/Generated Image February 27, 2026 - 12_47PM.png',
    alt: 'Laptop and phone showing Aussie App Studio projects on a clean desk setup.',
    label: 'Product launches',
    caption: 'App Store-ready visuals and polished marketing sites for your launch.',
  },
  {
    src: '/Home/Generated Image February 27, 2026 - 1_40PM.png',
    alt: 'Ultra-wide monitor with dark UI design boards open in a design tool.',
    label: 'UX flows',
    caption: 'Deep UX thinking with detailed user flows before we write code.',
  },
  {
    src: '/Home/Generated Image February 27, 2026 - 1_41PM (1).png',
    alt: 'Hand holding a phone with analytics dashboard in front of a laptop.',
    label: 'Live dashboards',
    caption: 'Real-time metrics and dashboards so you can see performance at a glance.',
  },
  {
    src: '/Home/Generated Image February 27, 2026 - 1_42PM.png',
    alt: 'Tablet and notebook on a wooden desk showing system architecture diagrams.',
    label: 'System architecture',
    caption: 'Scalable backend architectures planned out before implementation.',
  },
];

export default function HomePage() {
  const [primaryShowcase, ...otherShowcase] = homeShowcase;
  return (
    <>
      <FaqSchema />
      <HeroSlider slides={heroSlides} autoPlayMs={7000} />

      {/* Stats strip */}
      <section className="relative -mt-px py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-headline font-bold text-4xl md:text-5xl text-cyan mb-2">{value}</p>
                <p className="text-slate-600 font-body text-sm md:text-base">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section id="difference" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-20">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-6">The Aussie App Studio difference</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don’t just deliver code. We deliver agile, secure, and user-centric platforms designed to compete on the world stage. Here’s what sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="group p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-xl hover:shadow-cyan/5 hover:-translate-y-1 hover:border-cyan/20 transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan/10 text-cyan mb-6 group-hover:bg-cyan/20 group-hover:scale-105 transition-all duration-300">
                  {item.icon}
                </span>
                <h3 className="font-headline font-semibold text-xl text-navy mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="relative py-18 md:py-20 bg-gradient-to-r from-slate-50 via-slate-50 to-slate-100 border-y border-slate-100 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[480px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.14),transparent_65%)] opacity-70" />
        <div className="max-w-content mx-auto px-6 md:px-10 relative">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.15fr_minmax(0,0.95fr)] items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-cyan mb-3">
                Trusted in multiple time zones
              </p>
              <h2 className="font-headline font-bold text-2xl md:text-3xl text-navy mb-3">
                A distributed studio that still feels local
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                Teams in{' '}
                <span className="font-semibold text-navy">Sydney</span>,{' '}
                <span className="font-semibold text-navy">Melbourne</span>,{' '}
                <span className="font-semibold text-navy">Auckland</span>, and across the{' '}
                <span className="font-semibold text-navy">US</span> rely on us for web and mobile product work that ships
                on time&mdash;without late-night calls.
              </p>
              <p className="text-slate-500 text-sm mt-3 max-w-xl">
                We plan around your calendar, not the other way around: shared stand‑ups in your daylight hours,
                async updates, and response times measured in hours, not days.
              </p>
            </div>

            <div className="rounded-3xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-[0_18px_60px_rgba(15,23,42,0.15)] p-5 md:p-6">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500">
                    Regions we overlap with
                  </p>
                  <p className="font-headline font-semibold text-lg text-navy mt-1">
                    AU, NZ & US time zones
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan/10 text-cyan px-3 py-1 text-[11px] font-medium">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online in your workday
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Product teams', detail: 'Roadmap-heavy, outcomes first.' },
                  { label: 'Scale-ups', detail: 'Shipping fast without breaking things.' },
                  { label: 'Agencies', detail: 'White-label delivery partner.' },
                  { label: 'Innovation squads', detail: 'Experimental bets with clear guardrails.' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50/60 px-3 py-2.5 flex flex-col gap-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                      <p className="text-[11px] font-medium text-slate-800">{item.label}</p>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-snug">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200/80 mt-2">
                <p className="text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">24h</span> average response time for new enquiries.
                </p>
                <p className="text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">100%</span> of projects run with time‑zone overlap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-6">How we work</h2>
            <p className="text-lg text-slate-600">
              From first conversation to launch and beyond, clear phases, clear communication.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <span className="font-headline font-bold text-5xl text-cyan/20 mb-4 block">{step}</span>
                <h3 className="font-headline font-semibold text-lg text-navy mb-3">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                {step !== '04' && (
                  <span className="hidden lg:block absolute top-8 -right-4 text-slate-300">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack - Tabbed */}
      <TechnologyStackSection />

      {/* Why choose us */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-cyan/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-2xl" />
        <div className="max-w-content mx-auto px-6 md:px-10 relative">
          <div className="grid lg:grid-cols-[1.05fr_1.1fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-cyan font-body font-semibold text-xs uppercase tracking-[0.25em] mb-4">
                Why global brands choose us
              </p>
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-5">
                A partner that feels in‑house, not offshore
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                We combine local time‑zone overlap with senior engineering, design craft, and a ruthless focus on
                outcomes. You get the reliability of an in‑house team, without the overhead.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Transparent roadmaps, weekly check‑ins, and async updates that fit your workday.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Design, engineering, QA and DevOps under one roof for smoother launches.</span>
                </li>
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {whyChoose.map(({ title, description }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-card hover:-translate-y-1.5 hover:shadow-card-hover hover:border-cyan/40 transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan/5 via-transparent to-navy/5 transition-opacity duration-300" />
                  <div className="relative p-5 md:p-6">
                    <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan/10 text-cyan group-hover:bg-cyan group-hover:text-white transition-colors">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="font-headline font-semibold text-base md:text-lg text-navy mb-2">{title}</h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Studio visuals using Home images */}
      <section className="relative py-20 md:py-24 bg-slate-950 overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-10 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 -bottom-10 h-80 w-80 rounded-full bg-navy/40 blur-3xl" />
        <div className="max-w-content mx-auto px-6 md:px-10 relative">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <p className="text-cyan-light font-body font-semibold text-xs uppercase tracking-[0.24em] mb-3">
              Inside the studio
            </p>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-white mb-4">
              A closer look at the products we design
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Realistic snapshots from our day‑to‑day work: product dashboards, app flows and architecture views that
              turn ideas into interfaces your team can actually ship.
            </p>
          </div>

          {/* Mosaic collage */}
          <div className="grid gap-4 md:gap-6 lg:gap-8 lg:grid-cols-12 items-stretch">
            {/* Main feature image */}
            <div className="lg:col-span-7">
              <div className="group relative h-full rounded-3xl bg-slate-900 border border-slate-700/80 shadow-[0_26px_70px_rgba(15,23,42,0.95)] overflow-hidden">
                <div className="relative w-full pt-[60%] md:pt-[55%]">
                  <Image
                    src={primaryShowcase.src}
                    alt={primaryShowcase.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(min-width: 1280px) 720px, (min-width: 1024px) 60vw, 100vw"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-light mb-1.5">
                    {primaryShowcase.label}
                  </p>
                  <p className="text-sm text-slate-100 leading-relaxed">
                    {primaryShowcase.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Supporting images in a staggered grid */}
            <div className="lg:col-span-5 flex flex-col gap-4 md:gap-5">
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {otherShowcase.slice(0, 2).map((item) => (
                  <div
                    key={item.alt}
                    className="group relative rounded-2xl bg-slate-900 border border-slate-700/70 overflow-hidden hover:border-cyan/50 hover:shadow-[0_18px_45px_rgba(15,23,42,0.9)] transition-all duration-300"
                  >
                    <div className="relative w-full pt-[70%]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                        sizes="(min-width: 1280px) 320px, (min-width: 1024px) 28vw, 50vw"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-light mb-1">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-slate-100/95 line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom wide card */}
              {otherShowcase[2] && (
                <div className="group relative rounded-2xl bg-slate-900 border border-slate-700/70 overflow-hidden hover:border-cyan/50 hover:shadow-[0_18px_45px_rgba(15,23,42,0.9)] transition-all duration-300">
                  <div className="relative w-full pt-[48%]">
                    <Image
                      src={otherShowcase[2].src}
                      alt={otherShowcase[2].alt}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      sizes="(min-width: 1280px) 420px, (min-width: 1024px) 32vw, 90vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-light mb-1">
                      {otherShowcase[2].label}
                    </p>
                    <p className="text-[11px] md:text-xs text-slate-100/95 line-clamp-2">
                      {otherShowcase[2].caption}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-6">What our clients say</h2>
            <p className="text-slate-600">Real feedback from teams we’ve worked with across Australia and New Zealand.</p>
          </div>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* Work preview */}
      <section id="work" className="py-24 md:py-32 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">Products we’re proud of</h2>
              <p className="text-slate-600 max-w-xl">From web platforms to mobile apps, see how we help brands scale and compete.</p>
            </div>
            <Link href="/work" className="font-body font-semibold text-cyan hover:text-cyan-dark transition-colors shrink-0">
              View all work →
            </Link>
          </div>
          <div className="grid gap-8">
            <WorkShowcaseSlider />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ServiceFaqSection
        id="faq"
        title="Curious about working with us?"
        subtitle="Get the answers to common questions about working with Aussie App Studio."
        faqs={homeFaqs}
        fullWidth
      />

      <GetQuoteSection
        title="Let's build something great together"
        subtitle="Tell us your idea; we'll reply within 24 hours with next steps and a ballpark quote."
      />

    </>
  );
}