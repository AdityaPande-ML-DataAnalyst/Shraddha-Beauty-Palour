'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { salonConfig } from '@/config/salon.config';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from './Navbar';
import { MobileNav } from './MobileNav';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { MenuIcon, WhatsAppIcon, SparklesIcon } from '@/components/ui/Icons';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-cream-200 transition-shadow duration-200 shadow-sm">
        {/* Top Mini-Banner for Female-Only reassurance and Hours */}
        <div className="bg-primary-50 border-b border-primary-100 py-1 px-4 text-center text-xs font-medium text-primary-900 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1 font-semibold">
            <SparklesIcon className="w-3.5 h-3.5 text-primary-600" />
            {t.common.femaleOnlyBadge}
          </span>
          <span className="hidden sm:inline text-primary-300">•</span>
          <span className="text-primary-800">
            {salonConfig.hours.timing} ({salonConfig.hours.days})
          </span>
          <span className="hidden md:inline text-primary-300">•</span>
          <span className="hidden md:inline text-primary-800">
            Sai Nagar, Amravati
          </span>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Logo / Brand Name */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded-xl p-1"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-sm shrink-0">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg md:text-xl text-slate-900 tracking-tight leading-tight">
                  {salonConfig.name}
                </span>
                <span className="text-xs text-primary-700 font-medium hidden sm:block">
                  {salonConfig.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <Navbar />

            {/* Desktop Language Switcher & Quick WhatsApp CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher isCompact />
              <Button
                href="/contact/"
                variant="whatsapp"
                size="sm"
                icon={<WhatsAppIcon className="w-4 h-4" />}
              >
                {t.nav.inquireWhatsApp}
              </Button>
            </div>

            {/* Mobile Controls (Language Switcher button + Hamburger) */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher isCompact className="text-xs" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-label={t.nav.menu}
                className="w-11 h-11 rounded-xl bg-cream-50 border border-cream-200 text-slate-800 hover:bg-cream-100 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 active:bg-cream-200"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-over Mobile Navigation Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

