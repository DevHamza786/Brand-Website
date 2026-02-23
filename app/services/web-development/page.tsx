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
  title: 'Custom Web Development Australia | React, Node.js, Full Stack | Aussie App Studio',
  description:
    'Custom web development services in Australia. React, Next.js, Node.js. E‑commerce, dashboards, SaaS. Scalable and conversion focused. Get a free quote.',
};

const processSteps = [
  { step: '01', title: 'Research', desc: 'We research your industry and market trends to understand opportunities and challenges.' },
  { step: '02', title: 'Project Scoping', desc: 'We determine scope, objectives, deliverables, and what we need from you.' },
  { step: '03', title: 'Discovery Session', desc: 'We dive into your needs, goals, and expectations for the project.' },
  { step: '04', title: 'Project Kickoff', desc: 'Our team starts the initial phase of work to turn your project into reality.' },
];

const webOfferings: ServiceOffering[] = [
  {
    title: 'Custom Web Development',
    description: 'Our custom websites are designed to meet your specific needs. We specialize in bespoke web solutions tailor-made to reflect your brand identity, using unique website design and custom coding to create personalized solutions that stand out.',
  },
  {
    title: 'E-Commerce Development',
    description: 'Transform your online business with e-commerce websites designed to optimize the shopping experience. From online store development to payment gateway integration, our digital storefront solutions provide seamless online retail platforms that drive sales.',
  },
  {
    title: 'Full-Stack Development',
    description: 'Our full-stack solutions encompass both front-end and back-end development, ensuring a cohesive and comprehensive end-to-end web development. Whether MEAN stack or MERN stack, we deliver top-tier development across all layers.',
  },
  {
    title: 'Content Management Systems (CMS)',
    description: 'Leverage our expertise in WordPress development, Drupal development, and other CMS integration. Whether you need custom CMS development or an overhaul of your current setup, we create flexible and scalable systems tailored to your needs.',
  },
  {
    title: 'API Development and Integration',
    description: 'We specialize in custom API development and third-party API integration, offering robust RESTful APIs and GraphQL APIs. Our services include thorough API documentation and API testing to ensure seamless connectivity across platforms.',
  },
  {
    title: 'Web Hosting and Security',
    description: 'Our comprehensive web hosting services cover everything from domain registration to SSL certificates and website migration. With our security audits and DDoS protection, your website will remain secure and reliable.',
  },
];

const whyPartnerItems = [
  {
    title: 'Skilled team & proven methods',
    description: 'Our experienced team utilizes industry best practices to deliver reliable, high-performing websites tailored to your unique needs.',
  },
  {
    title: 'User-focused, responsive design',
    description: 'We design websites that prioritize user experience, ensuring responsive layouts that adapt seamlessly to any device or screen size.',
  },
  {
    title: 'Rigorous QA & ongoing support',
    description: 'Our meticulous quality assurance process guarantees flawless functionality, while our support services keep your website up-to-date and secure.',
  },
  {
    title: 'Scalable solutions with top-tier security',
    description: 'Our websites are built to scale with your business, incorporating robust security measures to protect your data and users.',
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Landing pages, marketing sites, or small web apps.',
    features: ['Up to 5–8 pages', 'Responsive design', 'SEO basics', 'Contact form', '1–2 month timeline'],
    priceLabel: 'From $4,500',
  },
  {
    name: 'Growth',
    description: 'Full web apps: dashboards, e‑commerce, or SaaS.',
    features: ['Custom frontend & backend', 'Auth & user management', 'API integration', 'Admin panel', '3–6 month timeline'],
    priceLabel: 'From $15,000',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Large-scale platforms and ongoing development.',
    features: ['Complex workflows', 'Multi-tenant or white-label', 'Dedicated team', 'SLA & support', 'Custom timeline'],
    priceLabel: 'Custom quote',
  },
];

const faqs = [
  {
    q: 'What is the typical timeline for developing a custom website?',
    a: 'The timeline varies depending on the complexity of the project, but on average, a custom website takes 6–12 weeks from the initial consultation to final deployment.',
  },
  {
    q: 'Can you integrate third-party services into my website?',
    a: 'Yes, we specialize in API development and integration, allowing us to seamlessly connect your website with third-party services like payment gateways, CRM systems, and more.',
  },
  {
    q: 'Do you offer ongoing maintenance and support for websites?',
    a: 'We provide comprehensive web hosting and security services, including ongoing maintenance to ensure your website remains secure and up-to-date.',
  },
  {
    q: 'How do you ensure my website will be mobile-friendly?',
    a: 'All our websites are developed using responsive design techniques, ensuring they look and function perfectly on all devices, including smartphones and tablets.',
  },
  {
    q: 'Can you help with SEO for my new website?',
    a: 'Yes, we incorporate SEO best practices into the development process and can provide additional SEO services to help your website rank well in search engines.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <ServiceHeroWithForm
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Web Development' },
        ]}
        subheading="Custom web development for Australia, NZ & US"
        headline="Custom Web Development:"
        headlineHighlight="React, Node.js, Full Stack"
        description="We build scalable web applications with React and Node.js for startups and enterprises across Australia, New Zealand, and the US. From e‑commerce and SaaS dashboards to customer portals and internal tools. Get a free quote or discuss your project in the form."
        ctaText="Get a free quote"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal variant="fadeUp">
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed">
              In a crowded digital landscape, standing out is crucial. We are a best-in-class web development company dedicated to helping you make a lasting impression. We focus on creating unique, user-friendly websites that capture your brand’s essence and engage your audience. Our team of skilled developers, designers, and strategists work collaboratively to ensure your website not only looks great but also delivers an exceptional user experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ServiceOfferingsSection
        sectionLabel="Web Development Services"
        sectionTitle="Achieve your business goals with web development"
        sectionSubtitle="Our Web Development services are designed to create custom, user-friendly websites that are both functional and visually appealing. Whether you need a bespoke solution tailored to your brand’s identity or a robust e-commerce platform to boost sales, we have the expertise to deliver."
        offerings={webOfferings}
        ctaLabel="Learn more"
      />

      <WhyPartnerSection
        sectionTitle="Why websites we develop are reliable"
        sectionSubtitle="Request a consultation to discuss your project."
        items={whyPartnerItems}
        ctaText="Request a consultation"
        ctaHref="/contact"
      />

      <ProcessSection
        sectionTitle="How we create digital and marketing solutions"
        sectionSubtitle="A custom software solution could help your organization perform on a new level. We work closely to determine your needs and deliver the desired performance."
        steps={processSteps}
      />

      <TechnologyStackSection />

      <ServicePricingSection
        sectionTitle="Transparent pricing"
        sectionSubtitle="Fixed scope and timeline. No surprise invoices. Get a detailed quote in 24 hours."
        tiers={pricingTiers}
      />

      <InnerWhySection title="Why choose our web development team">
        <ScrollReveal variant="fadeIn" delay={100}>
          <p>
            Our web development services are built around modern, proven technology. We use React and Next.js for the front end so your users get a fast, responsive experience on any device. On the server side we use Node.js and TypeScript so your application is maintainable and easy to extend. When we need a database we typically choose PostgreSQL for relational data or MongoDB when a document store fits better. Every stack decision is made with your long term goals in mind, not just the quickest path to launch.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fadeIn" delay={150}>
          <p>
            Australian businesses come to us when they need more than a basic website. They need a web application that handles real users, real data, and real transactions. That might be an e‑commerce platform with custom checkout and inventory logic, a SaaS product with subscriptions and dashboards, or an internal tool that streamlines operations. We have built all of these and we know how to scope them so you get a clear timeline and a fixed price. No endless iterations or surprise invoices.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fadeIn" delay={200}>
          <p>
            Performance and SEO are part of every web development project we deliver. Security is non-negotiable: we follow OWASP guidelines, use parameterised queries, and ensure authentication and authorisation are implemented correctly. We work with clients in Sydney, Melbourne, Brisbane, Auckland, and the United States. Time zone aligned so you get responses and calls in your business hours.
          </p>
        </ScrollReveal>
      </InnerWhySection>

      <ServiceFaqSection
        title="Curious about our custom digital & marketing solutions? Get the answers."
        subtitle="Software development is a field defined by change. Learn about the latest developments here to make the best decisions for your organization."
        faqs={faqs}
      />

      <GetQuoteSection
        title="Let's build something great together"
        subtitle="Request a consultation. Share your brief and we will reply within 24 hours with a ballpark quote and next steps."
      />
    </>
  );
}
