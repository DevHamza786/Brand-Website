import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import WorkShowcaseSlider from '@/components/WorkShowcaseSlider';
import HeroDeviceSlider from '@/components/HeroDeviceSlider';

export const metadata: Metadata = {
  title: 'Case Studies & Portfolio | Aussie App Studio',
  description:
    'See how we build web and mobile products for brands across Australia, New Zealand and the US. Real projects, real results.',
};

const webProjects = [
  {
    src: '/Work/Web/new1.webp',
    title: 'Marketing website for a growing brand',
    type: 'Web app',
    description: 'Responsive marketing site with clear funnels and conversion-focused layouts.',
    highlight: true,
  },
  {
    src: '/Work/Web/new2.webp',
    title: 'B2B product dashboard UI',
    type: 'Web app',
    description: 'Clean analytics views designed for busy teams that live in their browser.',
  },
  {
    src: '/Work/Web/new3.webp',
    title: 'SaaS platform interface',
    type: 'Web app',
    description: 'Multi-panel interface that scales from laptop to ultra-wide setups.',
  },
  {
    src: '/Work/Web/new4.webp',
    title: 'Content-rich landing experience',
    type: 'Web app',
    description: 'Story-driven landing page optimised for scroll depth and engagement.',
  },
];

const mobileProjects = [
  {
    src: '/Work/Mob/android-developmentb.png',
    title: 'Android app experience',
    type: 'Mobile app',
    description: 'Modern Android UI with clear navigation and native-feeling interactions.',
    highlight: true,
  },
  {
    src: '/Work/Mob/android-developmentb (1).png',
    title: 'Play Store-ready app screens',
    type: 'Mobile app',
    description: 'High-fidelity screens prepared for app store listings and marketing.',
  },
  {
    src: '/Work/Mob/image (3).png',
    title: 'Feature-rich mobile dashboard',
    type: 'Mobile app',
    description: 'At-a-glance metrics and actions for on-the-go teams.',
  },
  {
    src: '/Work/Mob/image (4).png',
    title: 'Onboarding & sign-up flow',
    type: 'Mobile app',
    description: 'Frictionless first-time experience that gets users to value faster.',
  },
  {
    src: '/Work/Mob/image (5).png',
    title: 'Operational tools on mobile',
    type: 'Mobile app',
    description: 'Interfaces designed for field staff and operational teams in motion.',
  },
  {
    src: '/Work/Mob/image (6).png',
    title: 'Multi-screen app journeys',
    type: 'Mobile app',
    description: 'End-to-end journeys that feel cohesive across every screen.',
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(6,182,212,0.12),transparent)]" />
        <div className="max-w-content mx-auto px-6 md:px-10 relative z-10">
          <nav className="text-sm text-slate-400 mb-10" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-cyan-light">Home</Link></li>
              <li aria-hidden>/</li>
              <li className="text-white font-medium">Work</li>
            </ol>
          </nav>
          <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 max-w-4xl">
            Web and Mobile App Projects: Case Studies and Portfolio
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            A selection of web development and mobile app development projects we have delivered for brands in Australia and beyond. Each one built for scale, conversion, and long term success.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-950">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center mb-12 md:mb-16">
            <div>
              <p className="text-xs font-body font-semibold tracking-[0.28em] uppercase text-cyan-light mb-3">
                Portfolio
              </p>
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-white mb-4">
                Web & mobile product experiences in the wild
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                Instead of static thumbnails, here’s a closer look at real interface work we’ve shipped for brands
                across Australia, New Zealand and the US&mdash;from browser-based platforms to app‑store ready screens.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                We’re opinionated about clarity, hierarchy and performance. Every screen here is designed to feel fast,
                legible and conversion‑focused on the devices your customers actually use.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan/20 blur-3xl opacity-70" />
              <div className="absolute -left-8 -bottom-10 h-32 w-32 rounded-full bg-navy/50 blur-3xl opacity-60" />
              <HeroDeviceSlider />
            </div>
          </div>

          <div className="space-y-12 md:space-y-16">
            <WorkShowcaseSlider
              eyebrow="Mobile apps"
              heading="Mobile app interfaces and flows"
              body="Left side you can see a rotating view of real mobile UI work—from onboarding to core flows—designed to feel fast and native on both Android and iOS. On the right, we break down how we approach mobile product design and development."
              projects={mobileProjects}
              imageOn="left"
            />
            <WorkShowcaseSlider
              eyebrow="Web development"
              heading="Web app and platform UI"
              body="Here the layout flips: on the left we talk about how we design and build modern web platforms, while on the right the slider cycles through marketing sites, dashboards and SaaS interfaces we’ve delivered for clients."
              projects={webProjects}
              imageOn="right"
            />
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_55%)]" />
        <div className="max-w-content mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-4xl mx-auto rounded-3xl border border-slate-700/70 bg-slate-900/80 backdrop-blur-xl p-10 md:p-14 shadow-[0_32px_100px_rgba(15,23,42,0.95)]">
            <p className="text-xs font-body font-semibold tracking-[0.28em] uppercase text-cyan-light mb-4 text-center">
              Next project
            </p>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-white text-center mb-5">
              Want your product to be the next project on this page?
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed text-center mb-8">
              We’re currently turning these snapshots into full case studies. Share a bit about what
              you’re building and we’ll walk you through exactly how we’d approach it—plus examples
              that match your industry and stage.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                  ✓
                </span>
                <span>2–3 relevant case examples, not a generic sales deck.</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                  ✓
                </span>
                <span>Clear next steps, timelines and rough investment range.</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-2xl transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-cyan/30"
              >
                Tell us about your project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
