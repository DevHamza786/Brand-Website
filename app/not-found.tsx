import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className="min-h-[75vh] flex items-center justify-center px-6 py-24 bg-slate-50">
      <div className="max-w-lg text-center">
        <div className="mb-8 flex justify-center">
          <Image src="/favicon.png" alt="" width={120} height={120} className="w-28 h-28 object-contain opacity-80" />
        </div>
        <h1 className="font-headline font-bold text-3xl md:text-4xl text-navy mb-4">That page took a wrong turn.</h1>
        <p className="text-slate-600 text-lg mb-10">Let’s get you back on track.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-xl transition-all duration-200"
          >
            Back to home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-navy text-navy font-body font-medium rounded-xl hover:bg-navy hover:text-white transition-colors"
          >
            See our services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-slate-600 hover:text-navy font-body font-medium"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
