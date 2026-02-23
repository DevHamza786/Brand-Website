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
  title: 'Mobile App Development Australia | Flutter, React Native | iOS & Android | Aussie App Studio',
  description:
    'Mobile app development services in Australia. Flutter and React Native for iOS and Android. Cross platform apps. Get a free quote for your app idea.',
};

const processSteps = [
  { step: '01', title: 'Research', desc: 'We research your industry and market trends to understand opportunities and challenges.' },
  { step: '02', title: 'Project Scoping', desc: 'We determine scope, objectives, deliverables, and what we need from you.' },
  { step: '03', title: 'Discovery Session', desc: 'We dive into your needs, goals, and expectations for the project.' },
  { step: '04', title: 'Project Kickoff', desc: 'Our team starts the initial phase of work to turn your project into reality.' },
];

const appOfferings: ServiceOffering[] = [
  {
    title: 'Mobile App Development',
    description: 'Develop custom mobile apps with us, whether you are targeting iOS app development, Android app development, or native app development. Our mobile application design focuses on creating mobile software solutions that are both functional and user-friendly.',
  },
  {
    title: 'Mobile App Support',
    description: 'Ensure your app runs smoothly with our app maintenance and app updates. We offer comprehensive bug fixing, performance monitoring, and compatibility testing to keep your app performing at its best.',
  },
  {
    title: 'Flutter App Development',
    description: 'Our team excels in creating cross-platform apps using Flutter for web and mobile. From custom Flutter apps to Flutter UI/UX design and Flutter app testing, we deliver high-quality Flutter widgets that enhance user experiences.',
  },
  {
    title: 'Hybrid App Development',
    description: 'Expand your app’s reach with hybrid mobile apps that run seamlessly across platforms. We provide cross-platform solutions using HTML5 apps and hybrid app frameworks, ensuring smooth multi-platform development and consistent hybrid app design.',
  },
  {
    title: 'Wearable App Development',
    description: 'Tap into the wearable tech market with our smartwatch apps and fitness tracker apps. We develop innovative wearable technology solutions, including wearable software and health monitoring apps, designed for the future of connectivity.',
  },
  {
    title: 'Cross-Platform App Development',
    description: 'Our cross-platform mobile apps enable you to reach more users with Xamarin development and React Native apps. We specialize in cross-platform frameworks that ensure mobile compatibility across devices.',
  },
];

const whyPartnerItems = [
  {
    title: 'Innovative & user-centric designs',
    description: 'We create intuitive, visually appealing mobile apps that enhance user experience and boost engagement.',
  },
  {
    title: 'Cross-platform expertise',
    description: 'Our team excels in developing responsive apps for iOS, Android, and cross-platform environments.',
  },
  {
    title: 'End-to-end development process',
    description: 'We manage the entire app development lifecycle, from concept to launch, ensuring seamless execution.',
  },
  {
    title: 'Ongoing support & maintenance',
    description: 'We provide continuous support to keep your app updated, secure, and performing at its best.',
  },
];

const pricingTiers = [
  {
    name: 'MVP',
    description: 'Validate your idea with a minimal viable product.',
    features: ['Core features only', 'iOS + Android (cross-platform)', 'Basic backend', 'App store submission', '2–4 month timeline'],
    priceLabel: 'From $12,000',
  },
  {
    name: 'Full product',
    description: 'Production-ready app with polish and scale.',
    features: ['Full feature set', 'Native feel & performance', 'API + backend', 'Analytics & push', '4–8 month timeline'],
    priceLabel: 'From $25,000',
    highlighted: true,
  },
  {
    name: 'Ongoing',
    description: 'New features, updates, and dedicated support.',
    features: ['Sprint-based releases', 'Bug fixes & updates', 'New features', 'App store compliance', 'Monthly retainer'],
    priceLabel: 'Custom quote',
  },
];

const faqs = [
  {
    q: 'Which platforms do you develop mobile apps for?',
    a: 'We develop apps for both iOS and Android platforms, and we also specialize in cross-platform app development using frameworks like Flutter and React Native.',
  },
  {
    q: 'What is the difference between native and hybrid apps?',
    a: 'Native apps are built specifically for one platform (iOS or Android) and offer the best performance, while hybrid apps are built using web technologies and can run on multiple platforms with a single codebase.',
  },
  {
    q: 'How do you ensure the security of the apps you develop?',
    a: 'We follow industry best practices for app security, including data encryption, secure APIs, and regular security testing to protect your app from vulnerabilities.',
  },
  {
    q: 'Can you provide ongoing support after the app is launched?',
    a: 'Yes, we offer mobile app support services that include app maintenance, updates, and bug fixing to keep your app running smoothly post-launch.',
  },
  {
    q: 'What are wearable apps, and do you develop them?',
    a: 'Wearable apps are designed for devices like smartwatches and fitness trackers. We offer wearable app development to create apps specifically for these devices.',
  },
];

export default function MobileAppsPage() {
  return (
    <>
      <ServiceHeroWithForm
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Mobile App Development' },
        ]}
        subheading="iOS & Android app development"
        headline="Mobile App Development:"
        headlineHighlight="Flutter & React Native"
        description="We build native and cross platform mobile apps for Australian and international brands. One codebase for iOS and Android, faster launch and lower cost. From concept to app store and beyond. Get a free quote or discuss your app idea in the form."
        ctaText="Get a free quote"
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <ScrollReveal variant="fadeUp">
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl leading-relaxed">
              Set your organization apart with a sleek, smooth app that’s a cut above the rest. Our team uses the latest in UI/UX design principles and cutting-edge technologies to create beautiful, easy-to-use apps that draw in users and don’t let go. We specialize in creating high-performance mobile applications tailored to your business needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ServiceOfferingsSection
        sectionLabel="App Development Services"
        sectionTitle="App development to support business"
        sectionSubtitle="In an increasingly mobile-driven world, our App Development services are crucial for businesses looking to engage with their audience on the go. We specialize in creating custom mobile apps for iOS, Android, and cross-platform solutions using the latest frameworks like Flutter and React Native."
        offerings={appOfferings}
        ctaLabel="Learn more"
      />

      <WhyPartnerSection
        sectionTitle="Drive engagement with expert mobile app solutions"
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
        sectionTitle="Mobile app pricing"
        sectionSubtitle="One codebase for iOS and Android. Fixed scope and timeline. Get a detailed quote in 24 hours."
        tiers={pricingTiers}
      />

      <InnerWhySection title="Why businesses choose us for mobile app development">
        <ScrollReveal variant="fadeIn" delay={100}>
          <p>Building an app for both iOS and Android used to mean two separate codebases and two teams. Today we use Flutter and React Native so one codebase runs on both platforms. That cuts development time and cost while still delivering a native feel. Flutter gives you pixel perfect UI and fast performance; React Native lets you reuse web skills and ship quickly. We pick the right fit for your product and your timeline.</p>
        </ScrollReveal>
        <ScrollReveal variant="fadeIn" delay={150}>
          <p>Our mobile app development team has shipped apps for startups and enterprises in Australia, New Zealand, and the US. We handle the full journey: discovery and wireframes, UI design, development, testing, app store submission, and ongoing updates. You get a single team that owns the outcome. We also build and integrate the backend APIs and admin tools so your app has a solid foundation.</p>
        </ScrollReveal>
        <ScrollReveal variant="fadeIn" delay={200}>
          <p>We work in your time zone. If you are in Sydney or Melbourne you get calls and updates in your business hours. If you have an app idea and want a team that communicates clearly and delivers on time, get in touch. Tell us what you want to build and we will come back with a scope and a quote. No obligation.</p>
        </ScrollReveal>
      </InnerWhySection>

      <ServiceFaqSection
        title="Curious about our custom digital & marketing solutions? Get the answers."
        faqs={faqs}
      />

      <GetQuoteSection
        title="Let's build something great together"
        subtitle="Request a consultation. Share your idea and we will reply within 24 hours with next steps and a ballpark quote."
      />
    </>
  );
}
