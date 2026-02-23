import type { Metadata } from 'next';
import { Outfit, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aussieappstudio.com.au'),
  title: {
    default: 'Aussie App Studio | Web & Mobile App Development | Australia, USA, NZ',
    template: '%s | Aussie App Studio',
  },
  description:
    'Premier digital product agency in Australia. We build high-performance web and mobile apps with React, Flutter & Node.js. Time-zone aligned for Sydney, Auckland & the US. Get a quote.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Aussie App Studio',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${outfit.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
