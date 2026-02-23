import type { Metadata } from 'next';
import GetQuoteSection from '@/components/GetQuoteSection';
import InnerWhySection from '@/components/InnerWhySection';
import ProcessSection from '@/components/ProcessSection';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceFaqSection from '@/components/ServiceFaqSection';
import ServiceHeroWithForm from '@/components/ServiceHeroWithForm';
import ServiceOfferingsSection from '@/components/ServiceOfferingsSection';
import type { ServiceOffering } from '@/components/ServiceOfferingsSection';
import ServicePricingSection from '@/components/ServicePricingSection';
import TechnologyStackSection from '@/components/TechnologyStackSection';
import WhyPartnerSection from '@/components/WhyPartnerSection';

export const metadata: Metadata = {
  title: 'App & Web Support and Maintenance Australia | Ongoing Development | Aussie App Studio',
  description:
    'Ongoing support and maintenance for web and mobile apps. Bug fixes, security, performance. Australia, NZ, US. Get a quote for support.',
};

const processSteps = [
  { step: '01', title: 'Research', desc: 'We research your current setup and support needs to understand priorities and constraints.' },
  { step: '02', title: 'Project Scoping', desc: 'We determine scope of support, SLAs, response times, and what we need from you.' },
  { step: '03', title: 'Discovery Session', desc: 'We review your codebase, environments, and processes so we can support effectively.' },
  { step: '04', title: 'Project Kickoff', desc: 'We set up channels, access, and cadence so support runs smoothly from day one.' },
];

const maintenanceOfferings: ServiceOffering[] = [
  {
    title: 'Bug fixes & updates',
    description: 'We fix bugs, apply dependency updates, and keep your product stable. You send requests through a dedicated channel and we prioritise, estimate, and deliver in regular releases.',
  },
  {
    title: 'Security patches & monitoring',
    description: 'We apply security patches, monitor for vulnerabilities, and help you stay compliant. Your product stays secure without you managing every update yourself.',
  },
  {
    title: 'Performance tuning',
    description: 'We analyse and improve load times, database queries, and resource usage. Performance tuning keeps your app fast as traffic and data grow.',
  },
  {
    title: 'Feature iterations',
    description: 'Small features and improvements delivered in the same support pipeline. We scope, estimate, and ship so your product evolves with your business.',
  },
  {
    title: 'Dedicated support channel',
    description: 'One place to report issues and request work. Clear priorities, realistic timelines, and a single team that owns the outcome so you are never left waiting.',
  },
  {
    title: 'Retainer arrangements',
    description: 'Fixed monthly hours and a predictable budget. We work in your time zone so when something breaks you get a fast response and a clear path to resolution.',
  },
];

const whyPartnerItems = [
  {
    title: 'Experienced with your stack',
    description: 'We work on React, Node.js, Flutter, and common backends. We can support what you already have or what we built for you.',
  },
  {
    title: 'Predictable capacity & cost',
    description: 'Retainer plans give you a fixed monthly budget and guaranteed capacity so you can plan without surprise invoices.',
  },
  {
    title: 'Same time zone',
    description: 'Australian and international clients get responses and fixes in their business hours. No overnight handoffs or delayed replies.',
  },
  {
    title: 'Clear process',
    description: 'Dedicated channel, prioritisation, and regular releases. You always know what is in progress and what is next.',
  },
];

const pricingTiers = [
  {
    name: 'Starter support',
    description: 'Peace of mind for small products.',
    features: ['Up to 10 hours/month', 'Bug fixes & small updates', 'Security patches', 'Email support', '48h response'],
    priceLabel: 'From $800/mo',
  },
  {
    name: 'Growth support',
    description: 'Ongoing care for growing products.',
    features: ['Up to 30 hours/month', 'Bug fixes & feature iterations', 'Performance tuning', 'Dedicated channel', '24h response'],
    priceLabel: 'From $2,200/mo',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Dedicated capacity and SLA.',
    features: ['Custom hours', 'Priority support', 'SLA & uptime', 'Sprint planning', 'Dedicated team'],
    priceLabel: 'Custom quote',
  },
];

const faqs = [
  {
    q: 'Do you support apps or websites you did not build?',
    a: 'Yes. We work with clients who built their product with us and clients who built elsewhere. We review the codebase and stack during onboarding and then support it like our own.',
  },
  {
    q: 'What is included in a typical support retainer?',
    a: 'Typically: bug fixes, security patches, dependency updates, small feature work, and a dedicated channel for requests. Hours and response times depend on the plan you choose.',
  },
  {
    q: 'How do we report issues and request work?',
    a: 'You get a dedicated support channel (e.g. email or Slack). You send requests there; we prioritise, estimate, and schedule work. We keep you updated on progress and release in regular cycles.',
  },
  {
    q: 'What response times do you offer?',
    a: 'Starter plans usually include a 48-hour response time. Growth and enterprise plans can include 24-hour or faster response, depending on your needs and SLA.',
  },
];

export default function MaintenancePage() {
  return (
    <>
      <ServiceHeroWithForm
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Support & Maintenance' },
        ]}
        subheading="Ongoing support for web & mobile"
        headline="Support & Maintenance:"
        headlineHighlight="Keep your product secure & fast"
        description="Launch is just the start. We offer ongoing support, updates, and optimisation so your web or mobile product stays secure, fast, and aligned with your roadmap. Bug fixes, security patches, performance tuning, and small feature work. Get a quote or discuss your needs in the form."
        ctaText="Get a quote"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal variant="fadeUp">
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed">
              Your organization runs on software. Our support and maintenance services can make your existing software serve your organization better. Tell us your goals, and our team can get to work to improve your existing software or keep it secure and fast while you focus on your business.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ServiceOfferingsSection
        sectionLabel="Support & Maintenance"
        sectionTitle="Streamline operations with expert support tailored to you"
        sectionSubtitle="Enhance your product’s reliability with our support services. We handle bug fixes, security patches, performance tuning, and small feature work so your web or mobile app stays secure, fast, and aligned with your roadmap."
        offerings={maintenanceOfferings}
        ctaLabel="Learn more"
      />

      <WhyPartnerSection
        sectionTitle="Why choose us for support and maintenance"
        items={whyPartnerItems}
        ctaText="Request a consultation"
        ctaHref="/contact"
      />

      <ProcessSection
        sectionTitle="How we set up support"
        sectionSubtitle="We work closely to understand your product and processes so support runs smoothly from day one."
        steps={processSteps}
      />

      <TechnologyStackSection />

      <ServicePricingSection
        sectionTitle="Support & maintenance pricing"
        sectionSubtitle="Fixed monthly hours. Predictable budget. We work in your time zone."
        tiers={pricingTiers}
      />

      <InnerWhySection title="Why ongoing support and maintenance matter">
        <ScrollReveal variant="fadeIn" delay={100}>
          <p>Software does not stand still. Browsers and mobile operating systems change. Security vulnerabilities get discovered. Users find bugs. Our support and maintenance services keep your web or mobile app current. We apply security patches, fix bugs, and tune performance so your product stays reliable and fast. We also add small features and improvements so the product evolves with your business.</p>
        </ScrollReveal>
        <ScrollReveal variant="fadeIn" delay={150}>
          <p>We work with clients who built their product with us and clients who built elsewhere. We use a dedicated support channel so you have one place to report issues and request work. You get clear priorities, realistic timelines, and a single team that owns the outcome. We also offer retainer arrangements so you have a fixed monthly budget and a predictable capacity. Australian and international businesses choose us because we work in their time zone. When something breaks you want a fix fast.</p>
        </ScrollReveal>
      </InnerWhySection>

      <ServiceFaqSection
        title="Curious about our support & maintenance solutions? Get the answers."
        faqs={faqs}
      />

      <GetQuoteSection
        title="Let's build something great together"
        subtitle="Need ongoing support for your product? Tell us about your app or website and we will propose a support plan and quote."
      />
    </>
  );
}
