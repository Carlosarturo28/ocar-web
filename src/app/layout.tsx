// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Cinzel } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CursorStyles from '@/components/layout/CursorStyles';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Of Creatures and Realms – Guard your realm, rule for eternity',
  description:
    'Step into a realm of ancient magic and cunning strategy. Of Creatures and Realms is the epic card game where mythical creatures, legendary realms, and strategic battles shape the fate of your dominion.',
  keywords:
    'card game, TCG, fantasy, magic, mythical creatures, strategy, medieval, dragons, runes',
  authors: [{ name: 'Of Creatures and Realms Team' }],
  creator: 'Of Creatures and Realms',
  publisher: 'Of Creatures and Realms',
  openGraph: {
    title: 'Of Creatures and Realms – Guard your realm, rule for eternity',
    description:
      'Unleash legendary creatures, command mighty realms, and forge your path to eternal rule.',
    url: 'https://ofcreaturesandrealms.com',
    siteName: 'Of Creatures and Realms',
    images: [
      {
        url: '/images/og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Of Creatures and Realms – Guard your realm, rule for eternity',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Of Creatures and Realms – Guard your realm, rule for eternity',
    description:
      'Unleash legendary creatures, command mighty realms, and forge your path to eternal rule.',
    images: ['/images/twitter-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es' className={`${inter.variable} ${cinzel.variable}`}>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <meta name='theme-color' content='#171613' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=5'
        />
      </head>
      <body
        className={`${inter.className} bg-[#171613] text-white antialiased`}
      >
        <Header />
        <main className='min-h-screen'>{children}</main>
        <Footer />
        <CursorStyles />
      </body>
    </html>
  );
}
