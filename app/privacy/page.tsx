import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Aussie App Studio.',
};

export default function PrivacyPage() {
  return (
    <article className="py-16 md:py-24 bg-white">
      <div className="max-w-copy mx-auto px-6 md:px-10">
        <nav className="text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:text-ocean">Home</Link></li>
            <li aria-hidden>/</li>
            <li className="text-ocean font-medium">Privacy Policy</li>
          </ol>
        </nav>
        <h1 className="font-headline font-bold text-h2 text-ocean mb-8">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: February 2025</p>

        <div className="prose prose-slate max-w-none">
          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">1. Introduction</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Aussie App Studio (&quot;we&quot;, &quot;us&quot;) operates aussieappstudio.com.au. This policy explains how we collect, use, and protect your personal data when you use our website or contact us.
          </p>

          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">2. Data we collect</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We collect information you provide when contacting us (name, email, company, message, and preferred region). We may also collect usage data such as IP address, browser type, and pages visited when you use our site, and we use cookies as described in our cookie notice.
          </p>

          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">3. How we use your data</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We use your data to respond to enquiries, send requested information, improve our website, and comply with legal obligations. We do not sell your personal data.
          </p>

          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">4. Sharing and retention</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We may share data with service providers (e.g. hosting, email delivery) under contract. We retain contact form data as needed to fulfil your enquiry and any subsequent contract, typically for up to 24–36 months unless a longer period is required by law.
          </p>

          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">5. Your rights</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Depending on your location, you may have rights to access, correct, delete, or restrict use of your data, or to object to processing. You may also withdraw consent or complain to a supervisory authority. To exercise your rights, contact us at hello@aussieappstudio.com.au.
          </p>

          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">6. Security and changes</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We take reasonable steps to protect your data. We may update this policy from time to time; the &quot;Last updated&quot; date will be revised, and material changes may be communicated on the site.
          </p>

          <p className="text-slate-700 leading-relaxed mt-8">
            <strong>Contact:</strong> For privacy requests or questions, email hello@aussieappstudio.com.au.
          </p>
        </div>

          <p className="mt-12">
          <Link href="/" className="text-cyan hover:text-cyan-dark font-medium">← Back to home</Link>
        </p>
      </div>
    </article>
  );
}
