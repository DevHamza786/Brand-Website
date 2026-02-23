import Link from 'next/link';
import FaqSchema from '@/components/FaqSchema';
import GetQuoteSection from '@/components/GetQuoteSection';
import HeroContactForm from '@/components/HeroContactForm';
import ServiceFaqSection from '@/components/ServiceFaqSection';
import TechnologyStackSection from '@/components/TechnologyStackSection';

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

export default function HomePage() {
  return (
    <>
      <FaqSchema />
      {/* Hero: left = form, right = content */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-navy via-navy-deep to-navy-light text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.15),transparent)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
        <div className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-32 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left: content */}
            <div className="order-2 lg:order-1">
              <p className="text-cyan-light font-body font-medium text-sm uppercase tracking-wider mb-6 animate-fade-in">
                Web & mobile app development for Australia, USA & NZ
              </p>
              <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-8 animate-fade-in">
                Digital products that win, <span className="text-cyan-light">in your time zone.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed">
                We build high-performance web and mobile apps for ambitious brands in Australia, the USA, and New Zealand. Custom web development, mobile app development, UI/UX design, and ongoing support. Strategy to launch, in sync with your local hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan hover:bg-cyan-light text-navy font-body font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-cyan/25 hover:shadow-cyan/40"
                >
                  Get a quote
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-400/60 hover:border-cyan-light hover:bg-white/5 text-white font-body font-semibold transition-all duration-300"
                >
                  See our work
                </Link>
              </div>
            </div>
            {/* Right: form card */}
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
        </div>
      </section>

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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <p className="text-slate-600 text-lg font-body">
            Trusted by teams across <span className="font-semibold text-navy">Sydney</span>, <span className="font-semibold text-navy">Melbourne</span>, <span className="font-semibold text-navy">Auckland</span>, and the <span className="font-semibold text-navy">US</span>.
          </p>
          <p className="text-slate-500 text-sm mt-2">Time-zone aligned collaboration for ambitious brands.</p>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-6">How we work</h2>
            <p className="text-lg text-slate-600">From first conversation to launch and beyond, clear phases, clear communication.</p>
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
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-16 text-center">Why global brands choose us</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Agile delivery', 'Security-first', 'ROI-focused', 'Time-zone overlap you can count on'].map((item) => (
              <li key={item} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="font-body font-semibold text-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-6">What our clients say</h2>
            <p className="text-slate-600">Real feedback from teams we’ve worked with across Australia and New Zealand.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card">
                <p className="text-slate-700 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-navy">{t.author}</p>
                <p className="text-slate-500 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
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
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/work"
              className="group block overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-navy/5 to-cyan/5 flex items-center justify-center">
                <div className="text-slate-400 group-hover:text-cyan transition-colors">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <p className="text-sm font-medium">Case studies</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-headline font-semibold text-xl text-navy group-hover:text-cyan transition-colors">View our work</h3>
                <p className="text-slate-600 text-sm mt-2">Web and mobile projects for brands in AU, NZ & US.</p>
                <span className="inline-flex items-center gap-2 mt-4 text-cyan font-medium text-sm">
                  View all work
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
            <Link
              href="/contact"
              className="group block overflow-hidden rounded-2xl bg-navy border border-navy-light text-white shadow-card hover:shadow-card-glow hover:border-cyan/30 transition-all duration-300"
            >
              <div className="aspect-[16/10] bg-navy-light/50 flex items-center justify-center">
                <div className="text-cyan-light/80 group-hover:text-cyan-light transition-colors">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                  <p className="text-sm font-medium">Your project</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-headline font-semibold text-xl group-hover:text-cyan-light transition-colors">Start your project</h3>
                <p className="text-slate-300 text-sm mt-2">Tell us your idea; we’ll reply within 24 hours.</p>
                <span className="inline-flex items-center gap-2 mt-4 text-cyan-light font-medium text-sm">
                  Get in touch
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
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