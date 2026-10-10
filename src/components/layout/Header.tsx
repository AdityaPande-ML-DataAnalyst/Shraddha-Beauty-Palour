'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { salonConfig } from '@/config/salon.config';
import { useTranslation } from '@/hooks/useTranslation';
import { Navbar } from './Navbar';
import { MobileNav } from './MobileNav';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MenuIcon, WhatsAppIcon, SparklesIcon, PhoneIcon } from '@/components/ui/Icons';
import { getWhatsAppHref, getPhoneHref } from '@/utils/contact';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const whatsappHref = getWhatsAppHref();
  const phoneHref = getPhoneHref();

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#FBF9F7]/95 backdrop-blur-[10px] border-b border-[#eee0e3] transition-shadow duration-200">
        <div className="bg-primary-dark text-white/95 py-1 px-4 text-center text-[11.5px] font-medium flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="inline-flex items-center gap-1.5 font-bold text-gold-300">
            <SparklesIcon className="w-3.5 h-3.5 text-gold" />
            {t.common.femaleOnlyBadge}
          </span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="text-white/90">
            {salonConfig.hours.timing} ({salonConfig.hours.days})
          </span>
          <span className="hidden md:inline text-white/40">•</span>
          <span className="hidden md:inline text-white/80">
            Sai Nagar, Amravati
          </span>
        </div>

        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[68px] sm:h-[76px] gap-2 sm:gap-4">
            {/* Logo / Brand Name - Protected from wrapping & shrinking */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl py-1 group select-none"
            >
              <div className="w-[36px] h-[36px] sm:w-[38px] sm:h-[38px] rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-white font-serif font-semibold text-base sm:text-lg shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                S
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-bold text-[14.5px] sm:text-[16px] lg:text-[17px] text-ink leading-tight tracking-tight whitespace-nowrap block">
                  {salonConfig.name}
                </span>
                <span className="text-[10.5px] sm:text-[11px] text-muted tracking-[0.03em] leading-none mt-0.5 whitespace-nowrap block">
                  Sai Nagar · Amravati
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <Navbar />

            {/* Desktop Right Controls */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
              <LanguageSwitcher isCompact />

              {/* Direct native tel: link */}
              <a
                href={phoneHref}
                className="hidden xl:inline-flex items-center gap-1.5 text-[13.5px] font-bold text-primary border-[1.5px] border-primary px-4 py-2 rounded-full hover:bg-primary-soft hover:-translate-y-0.5 transition"
              >
                <PhoneIcon className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>

              {/* Direct wa.me link */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-whatsapp text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-[13px] sm:text-[13.5px] shadow-[0_6px_18px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 hover:bg-whatsapp-hover transition shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>{t.nav.inquireWhatsApp}</span>
              </a>
            </div>

            {/* Mobile Controls: clean & compact, no header overcrowding */}
            <div className="flex lg:hidden items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-label={t.nav.menu}
                className="w-9 h-9 rounded-lg bg-white border border-[#eee0e3] text-ink hover:bg-primary-soft flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95 transition"
              >
                <MenuIcon className="w-5 h-5" />
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
