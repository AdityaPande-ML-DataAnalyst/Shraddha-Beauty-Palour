import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { SkipToContent } from '@/components/common/SkipToContent';
import { JsonLd } from '@/components/common/JsonLd';
import { ScrollRevealInit } from '@/components/common/ScrollRevealInit';
import { AdminAuthProvider } from '@/context/AdminAuthContext';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shraddha-beauty-parlour.vercel.app'),
  title: {
    default: 'Shraddha Beauty Parlour | Female-only Beauty Parlour in Sai Nagar, Amravati',
    template: '%s | Shraddha Beauty Parlour',
  },
  description:
    'Shraddha Beauty Parlour is a dedicated female-only beauty parlour located in Sai Nagar, Amravati, Maharashtra. We provide hair styling, makeup, facials, skin care, and nail treatments exclusively for women.',
  keywords: [
    'Beauty Parlour in Amravati',
    'Beauty Parlour in Sai Nagar',
    "Women's Beauty Parlour Amravati",
    'Female Beauty Parlour Badnera Road',
    'Bridal Makeup Amravati',
    'Hair and Skin Care Amravati',
    'Ladies Salon in Sai Nagar Amravati',
    'Shraddha Beauty Parlour',
  ],
  authors: [{ name: 'Shraddha Beauty Parlour' }],
  creator: 'Shraddha Beauty Parlour',
  publisher: 'Shraddha Beauty Parlour',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shraddha-beauty-parlour.vercel.app',
    siteName: 'Shraddha Beauty Parlour',
    title: 'Shraddha Beauty Parlour | Female-only Beauty Parlour in Sai Nagar, Amravati',
    description:
      'Female-only beauty parlour in Sai Nagar, Amravati. Professional hair, skin, nail, and bridal makeup services exclusively for women.',
    images: [
      {
        url: '/images/hero/hero-illustration.svg',
        width: 1200,
        height: 630,
        alt: 'Shraddha Beauty Parlour - Beauty, Style & Confidence in Sai Nagar, Amravati',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shraddha Beauty Parlour | Sai Nagar, Amravati',
    description:
      'Female-only beauty parlour in Sai Nagar, Amravati. Beauty, style, and confidence exclusively for women.',
    images: ['/images/hero/hero-illustration.svg'],
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

export const viewport: Viewport = {
  themeColor: '#9D3850',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="flex min-h-screen flex-col bg-cream text-ink font-sans">
        <AdminAuthProvider>
          <LanguageProvider>
            <ScrollRevealInit />
            <SkipToContent />
            <Header />
            <main id="main-content" className="flex-1 focus:outline-none pb-16 lg:pb-0">
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
            <MobileActionBar />
          </LanguageProvider>
        </AdminAuthProvider>
      </body>
    </html>
  );
}
