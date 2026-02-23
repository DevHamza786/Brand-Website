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
  title: 'UI/UX Design Agency Australia | User Experience & Interface Design | Aussie App Studio',
  description:
    'UI/UX design services in Australia. User research, wireframes, prototypes, design systems. Conversion focused interfaces. Get a free quote.',
};

const processSteps = [
  { step: '01', title: 'Research', desc: 'We research your industry and market trends to understand opportunities and challenges.' },
  { step: '02', title: 'Project Scoping', desc: 'We determine scope, objectives, deliverables, and what we need from you.' },
  { step: '03', title: 'Discovery Session', desc: 'We dive into your needs, goals, and expectations for the project.' },
  { step: '04', title: 'Project Kickoff', desc: 'Our team starts the initial phase of work to turn your project into reality.' },
];

const uiOfferings: ServiceOffering[] = [
  {
    title: 'Website Design',
    description: 'Our website design services focus on creating visually appealing, user-friendly layouts. We design websites that reflect your brand identity while providing a seamless and enjoyable user experience across all devices.',
  },
  {
    title: 'Web Application Design',
    description: 'We specialize in designing intuitive web applications tailored to your business needs. Our designs emphasize functionality, usability, and aesthetics, ensuring users have a seamless and engaging experience on every platform.',
  },
  {
    title: 'Responsive Design',
    description: 'Our responsive design services ensure your website or app looks and functions flawlessly across all devices. We create adaptable layouts that provide an optimal user experience on desktops, tablets, and smartphones.',
  },
  {
    title: 'Interaction Design',
    description: 'We focus on creating dynamic, interactive elements that enhance user engagement. Our interaction design includes animations, transitions, and intuitive touch gestures, making your digital platform more immersive and user-friendly.',
  },
  {
    title: 'User Journey Mapping',
    description: 'Our user journey mapping visualizes the paths users take on your website or app. We optimize every step of the journey, ensuring a smooth, intuitive experience that encourages engagement and conversions.',
  },
  {
    title: 'Information Architecture',
    description: 'We organize and structure your website’s content for easy navigation. Our information architecture services create intuitive layouts, helping users find what they need quickly, enhancing usability, and improving the overall user experience.',
  },
];

const whyPartnerItems = [
  {
    title: 'User-centred & conversion-focused',
    description: 'We blend aesthetics with functionality, ensuring every element is user-friendly and aligned with your business goals.',
  },
  {
    title: 'Research-driven design',
    description: 'We start with discovery and user research so we understand your audience and design with data, not assumptions.',
  },
  {
    title: 'Seamless dev handoff',
    description: 'We provide design systems, specs, and assets so development matches the design and ships without guesswork.',
  },
  {
    title: 'Web & mobile expertise',
    description: 'From marketing sites to complex web apps and native mobile UI, we deliver consistent, high-quality experiences.',
  },
];

const pricingTiers = [
  {
    name: 'Discovery & wireframes',
    description: 'Validate flows and structure before build.',
    features: ['User research', 'User flows', 'Wireframes (key screens)', 'Feedback round', '1–2 week timeline'],
    priceLabel: 'From $2,500',
  },
  {
    name: 'Full UI/UX',
    description: 'End-to-end design for web or mobile.',
    features: ['Discovery + wireframes', 'High-fidelity UI', 'Design system', 'Prototype', '4–8 week timeline'],
    priceLabel: 'From $8,000',
    highlighted: true,
  },
  {
    name: 'Ongoing design',
    description: 'Iterative design support and new features.',
    features: ['Sprint-based design', 'New screens & flows', 'Design system updates', 'Dev handoff', 'Monthly retainer'],
    priceLabel: 'Custom quote',
  },
];

const faqs = [
  {
    q: 'What is included in a typical UI/UX project?',
    a: 'A typical project includes discovery and user research, wireframes or user flows, high-fidelity UI design, and a design system with specs and assets for development. We can also provide interactive prototypes and ongoing design support.',
  },
  {
    q: 'Do you work with our development team or build the product too?',
    a: 'We work with both. You can use us for design only and hand off to your own dev team, or we can handle design and development so one team owns the full product.',
  },
  {
    q: 'How long does a UI/UX project take?',
    a: 'Discovery and wireframes usually take 1–2 weeks. A full UI/UX project (research through to design system and handoff) typically runs 4–8 weeks depending on scope and number of screens.',
  },
  {
    q: 'Do you design for accessibility?',
    a: 'Yes. We consider contrast, focus states, and readable typography, and we can align deliverables with WCAG guidelines so more users can access your product.',
  },
];

export default function UiUxPage() {
  return (
    <>
      <ServiceHeroWithForm
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'UI/UX Design' },
        ]}
        subheading="User experience & interface design"
        headline="UI/UX Design Services:"
        headlineHighlight="Web & Mobile"
        description="We design web and mobile experiences that users love and that drive results. From discovery and user research to wireframes, prototypes, and high fidelity UI. Conversion focused design that looks good and performs. Get a free quote or discuss your project in the form."
        ctaText="Get a free quote"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal variant="fadeUp">
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed">
              UI/UX design focuses on creating visually appealing, intuitive interfaces that enhance user interaction with websites or apps. We blend aesthetics with functionality, ensuring every element is user-friendly and engaging. Our approach prioritizes seamless navigation and optimal user journeys to create memorable and effective digital experiences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ServiceOfferingsSection
        sectionLabel="Our UI/UX Design Services"
        sectionTitle="Intuitive and engaging UI/UX design for your digital success"
        sectionSubtitle="We offer comprehensive UI/UX design services, from website and app design to interaction design. Our goal is to craft seamless, engaging experiences that align with your brand and keep users coming back."
        offerings={uiOfferings}
        ctaLabel="Learn more"
      />

      <WhyPartnerSection
        sectionTitle="Enhancing user experience with exceptional UI/UX design services"
        items={whyPartnerItems}
        ctaText="Request a consultation"
        ctaHref="/contact"
      />

      <ProcessSection
        sectionTitle="How we create digital and marketing solutions"
        sectionSubtitle="A custom design or marketing plan could help your organization perform on a new level. We work closely to determine your needs and deliver the desired outcome."
        steps={processSteps}
      />

      <TechnologyStackSection />

      <ServicePricingSection
        sectionTitle="UI/UX pricing"
        sectionSubtitle="Clear deliverables and timeline. Get a proposal and quote in 24 hours."
        tiers={pricingTiers}
      />

      <InnerWhySection title="User centred design that converts">
        <ScrollReveal variant="fadeIn" delay={100}>
          <p>Good UI/UX design is not just about how things look. It is about how users move through your product and where they get stuck. We start with discovery and user research so we understand your audience and your goals. Then we map flows and build wireframes so you can see the structure before any visual design. That way we catch problems early and avoid expensive changes later.</p>
        </ScrollReveal>
        <ScrollReveal variant="fadeIn" delay={150}>
          <p>We design for conversion. Every screen has a job: inform, persuade, or convert. We use clear hierarchy, obvious calls to action, and friction free forms. We also think about accessibility so more people can use your product. When we hand off to development we provide a design system and specs so the build matches the design. Australian and international clients choose us when they want one team for both design and development, or when they need a dedicated design phase before they commit to build.</p>
        </ScrollReveal>
      </InnerWhySection>

      <ServiceFaqSection
        title="Curious about our custom digital & marketing solutions? Get the answers."
        faqs={faqs}
      />

      <GetQuoteSection
        title="Let's build something great together"
        subtitle="Request a consultation. Share your project and we will reply within 24 hours with next steps and a quote."
      />
    </>
  );
}
