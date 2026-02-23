const faqs = [
  { q: 'Do you work with clients outside Australia?', a: 'Yes. We serve brands in Australia, the USA, and New Zealand with collaboration timed to your time zone.' },
  { q: 'What tech stack do you use?', a: 'We build with React, Flutter, Node.js, and proven modern tools so your product is scalable and maintainable.' },
  { q: 'How do you handle time zones?', a: 'We align our availability to your business hours so you\'re not waiting on replies across continents.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. From launch we offer maintenance, updates, and support so your product stays secure and performant.' },
  { q: "What's the typical project timeline?", a: "It depends on scope. We'll give you a clear timeline and milestones after we understand your brief." },
];

export default function FaqSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
