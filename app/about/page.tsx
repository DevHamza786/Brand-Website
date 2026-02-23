import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Aussie App Studio - Digital Product Agency',
  description:
    'Australian-owned software studio building web and mobile apps for brands in Australia, the USA and NZ. Agile, secure, conversion-focused. Meet the team.',
};

const values = [
  {
    title: 'Transparency',
    body: 'Clear timelines, scope, and communication so you’re never in the dark. We share progress regularly and flag risks early.',
  },
  {
    title: 'Delivery discipline',
    body: 'We ship on time and on budget. No endless scope creep. Fixed phases and change control keep projects predictable.',
  },
  {
    title: 'Conversion focus',
    body: 'We build with your ROI in mind, not just pretty interfaces. Every screen is designed to move the needle.',
  },
  {
    title: 'Time-zone respect',
    body: 'Collaboration that fits your schedule, not ours. We align our availability to Sydney, Auckland, and US hours.',
  },
];

const highlights = [
  'Strategy & product discovery',
  'UI/UX design & prototyping',
  'Web & mobile development',
  'API & integration',
  'Launch & ongoing support',
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(6,182,212,0.12),transparent)]" />
        <div className="max-w-content mx-auto px-6 md:px-10 relative z-10">
          <nav className="text-sm text-slate-400 mb-10" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-cyan-light">Home</Link></li>
              <li aria-hidden>/</li>
              <li className="text-white font-medium">About</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                Australian Web and Mobile App Development Agency: Local Trust, Global Standards
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                We are a digital product agency that bridges Australian innovation with world class engineering. Web development, mobile app development, and UI/UX design for ambitious brands in Australia, the USA, and New Zealand.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Aussie App Studio exists because great ideas deserve great execution. We specialise in web and mobile app development for brands that want a partner who thinks in time zones, scales with growth, and designs for conversion.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-navy-light/80 border border-cyan/20 overflow-hidden flex items-center justify-center">
                <Image
                  src="/favicon.png"
                  alt=""
                  width={320}
                  height={240}
                  className="w-48 h-auto object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-12">Our story</h2>
          <div className="max-w-copy space-y-8">
            <p className="text-slate-700 leading-relaxed text-lg">
              Our team brings together strategy, UI/UX design, and full-stack development so you get one team from first sketch to launch and beyond. We work with clients across Australia, the USA, and New Zealand. Aligned to your hours, not the other way around.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              Whether you’re scaling an existing product or launching something new, we’re built to deliver agile, secure, and user-centric platforms that drive real business outcomes. We don’t do black-box outsourcing; we work as an extension of your team with clear ownership and communication.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              From discovery and wireframes to production and support, we cover the full product lifecycle. That means fewer handoffs, fewer surprises, and a single team that cares about your success as much as you do.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-6">What we stand for</h2>
          <p className="text-slate-600 max-w-2xl mb-16">The principles that guide how we work with every client.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan/20 transition-colors">
                <h3 className="font-headline font-semibold text-xl text-navy mb-4">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <h2 className="font-headline font-bold text-3xl md:text-4xl mb-6">What we do</h2>
          <p className="text-slate-300 max-w-2xl mb-12">End-to-end digital product capability: strategy, design, build, and support.</p>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-cyan shrink-0" />
                <span className="font-body font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <p className="text-slate-700 text-xl mb-10">See what we’ve built, or tell us what you want to build.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy text-navy font-body font-semibold rounded-xl hover:bg-navy hover:text-white transition-colors"
            >
              See our work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-cyan/20"
            >
              Start a project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
