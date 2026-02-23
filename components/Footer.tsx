import Link from 'next/link';
import Image from 'next/image';

const offerings = [
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Mobile App Development', href: '/services/mobile-apps' },
  { label: 'UI/UX Design', href: '/services/ui-ux' },
  { label: 'Support & Maintenance', href: '/services/maintenance' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image src="/logo.png" alt="" width={160} height={44} className="h-10 w-auto object-contain opacity-95" />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Digital products that win—in your time zone. Serving Australia, USA & New Zealand.
            </p>
          </div>
          <div>
            <p className="font-body font-semibold text-white mb-5">Offerings</p>
            <ul className="space-y-3">
              {offerings.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-300 hover:text-cyan-light transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body font-semibold text-white mb-5">Company</p>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-300 hover:text-cyan-light transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body font-semibold text-white mb-5">Legal</p>
            <ul className="space-y-3">
              {legal.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-300 hover:text-cyan-light transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-400 text-sm">
              <a href="mailto:hello@aussieappstudio.com.au" className="hover:text-cyan-light transition-colors">
                hello@aussieappstudio.com.au
              </a>
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 px-5 py-2.5 border-2 border-cyan text-cyan rounded-xl font-body font-medium text-sm hover:bg-cyan hover:text-navy transition-colors"
            >
              Book a call
            </Link>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-navy-light flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {year} Aussie App Studio. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">Made in Australia</p>
        </div>
      </div>
    </footer>
  );
}
