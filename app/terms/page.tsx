import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Aussie App Studio.',
};

export default function TermsPage() {
  return (
    <article className="py-16 md:py-24 bg-white">
      <div className="max-w-copy mx-auto px-6 md:px-10">
        <nav className="text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:text-ocean">Home</Link></li>
            <li aria-hidden>/</li>
            <li className="text-ocean font-medium">Terms & Conditions</li>
          </ol>
        </nav>
        <h1 className="font-headline font-bold text-h2 text-ocean mb-8">Terms & Conditions</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: February 2025</p>

        <div className="prose prose-slate max-w-none">
          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">1. Acceptance</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            By using aussieappstudio.com.au you accept these terms. If you are acting for a business, you warrant that you have authority to bind that business.
          </p>

          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">2. Services</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Our website describes our digital product development services in general. Specific projects are governed by separate agreements or statements of work agreed in writing.
          </p>

          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">3. Use of site</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            You must use this site lawfully. You may not misuse it (e.g. scraping, introducing malware, or impersonating us or others). Content on this site is owned by Aussie App Studio or its licensors; you may not copy or use it without our permission.
          </p>

          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">4. Enquiries and quotes</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Submitting an enquiry form does not create a contract. We will respond and may issue a proposal. A contract is formed only when both parties sign a separate agreement.
          </p>

          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">5. Disclaimer and limitation of liability</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            This site and its content are provided &quot;as is&quot;. We do not warrant that use will be uninterrupted or error-free. To the maximum extent permitted by law, we exclude liability for indirect or consequential loss arising from your use of this site. Liability for contracted services is governed by the relevant project agreement.
          </p>

          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">6. Governing law</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            These terms are governed by the laws of New South Wales, Australia. Disputes are subject to the courts of New South Wales.
          </p>

          <h2 className="font-headline font-semibold text-lg text-ocean mt-8 mb-2">7. Changes</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We may update these terms. Continued use of the site after changes constitutes acceptance. The &quot;Last updated&quot; date will be revised when we make changes.
          </p>

          <p className="text-slate-700 leading-relaxed mt-8">
            <strong>Contact:</strong> For questions about these terms, email hello@aussieappstudio.com.au.
          </p>
        </div>

          <p className="mt-12">
          <Link href="/" className="text-cyan hover:text-cyan-dark font-medium">← Back to home</Link>
        </p>
      </div>
    </article>
  );
}
