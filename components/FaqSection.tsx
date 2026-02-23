'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do you work with clients outside Australia?',
    a: 'Yes. We serve brands in Australia, the USA, and New Zealand with collaboration timed to your time zone.',
  },
  {
    q: 'What tech stack do you use?',
    a: 'We build with React, Flutter, Node.js, and proven modern tools so your product is scalable and maintainable.',
  },
  {
    q: 'How do you handle time zones?',
    a: 'We align our availability to your business hours so you’re not waiting on replies across continents.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes. From launch we offer maintenance, updates, and support so your product stays secure and performant.',
  },
  {
    q: "What's the typical project timeline?",
    a: "It depends on scope. We'll give you a clear timeline and milestones after we understand your brief.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <h2 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-14">
          Curious about working with us?
        </h2>
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-slate-200 last:border-0"
            >
              <button
                type="button"
                className="w-full py-6 flex justify-between items-start text-left font-body font-medium text-navy hover:text-cyan-dark transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <span className="flex-shrink-0 ml-4 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="pb-6 text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
