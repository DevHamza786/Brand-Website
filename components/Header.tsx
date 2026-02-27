'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile Apps', href: '/services/mobile-apps' },
      { label: 'UI/UX Design', href: '/services/ui-ux' },
      { label: 'Support & Maintenance', href: '/services/maintenance' },
    ],
  },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between h-18 md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="Aussie App Studio – Home"
        >
          <Image
            src="/logo.png"
            alt=""
            width={220}
            height={56}
            className="h-12 md:h-14 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="font-body font-medium text-slate-600 hover:text-navy transition-colors py-2"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                </button>
                {servicesOpen && (
                  <ul
                    className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-dropdown py-2 border border-slate-200"
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <li key={child.href} role="none">
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-slate-600 hover:bg-cyan/5 hover:text-cyan-dark font-body transition-colors"
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body font-medium py-2 transition-colors ${
                  pathname === item.href
                    ? 'text-cyan-dark'
                    : 'text-slate-600 hover:text-navy'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-4 px-6 py-3 bg-cyan hover:bg-cyan-dark text-navy font-body font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-navy"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-content mx-auto px-6 py-5 flex flex-col gap-1" aria-label="Mobile">
            <Link href="/services" className="font-body font-medium text-slate-700 py-3" onClick={() => setMobileOpen(false)}>Services</Link>
            <div className="pl-4 flex flex-col gap-1 border-l-2 border-cyan/30 ml-2">
              <Link href="/services/web-development" className="py-2 text-slate-600 hover:text-cyan-dark" onClick={() => setMobileOpen(false)}>Web Development</Link>
              <Link href="/services/mobile-apps" className="py-2 text-slate-600 hover:text-cyan-dark" onClick={() => setMobileOpen(false)}>Mobile Apps</Link>
              <Link href="/services/ui-ux" className="py-2 text-slate-600 hover:text-cyan-dark" onClick={() => setMobileOpen(false)}>UI/UX Design</Link>
              <Link href="/services/maintenance" className="py-2 text-slate-600 hover:text-cyan-dark" onClick={() => setMobileOpen(false)}>Support & Maintenance</Link>
            </div>
            <Link href="/work" className="font-body font-medium text-slate-700 py-3" onClick={() => setMobileOpen(false)}>Work</Link>
            <Link href="/about" className="font-body font-medium text-slate-700 py-3" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="font-body font-medium text-slate-700 py-3" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link
              href="/contact"
              className="mt-4 inline-flex justify-center px-6 py-3.5 bg-cyan text-navy font-body font-semibold rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
