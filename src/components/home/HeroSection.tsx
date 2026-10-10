'use client';

import React from 'react';
import Link from 'next/link';
import { salonConfig } from '@/config/salon.config';
import { useTranslation } from '@/hooks/useTranslation';
import { WhatsAppIcon, SparklesIcon } from '@/components/ui/Icons';
import { getWhatsAppHref } from '@/utils/contact';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const whatsappHref = getWhatsAppHref();

  const renderStyledHeadline = (headline: string) => {
    const trimmed = headline.trim();
    const lastSpaceIndex = trimmed.lastIndexOf(' ');
    if (lastSpaceIndex === -1) {
      return <em className="italic text-primary">{trimmed}</em>;
    }
    const firstPart = trimmed.substring(0, lastSpaceIndex);
    const lastWord = trimmed.substring(lastSpaceIndex + 1);
    return (
      <>
        {firstPart} <em className="italic text-primary">{lastWord}</em>
      </>
    );
  };

  return (
    <section
      id="home"
      className="relative py-16 sm:py-24 lg:py-28 overflow-hidden bg-cream"
    >
      <div
        className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-[radial-gradient(circle,#FDF2F4_0%,transparent_70%)] pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[radial-gradient(circle,#FDF2F4_0%,transparent_70%)] pointer-events-none -z-0 opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-[780px] mx-auto text-center px-4 sm:px-6 relative z-10">
        <div
          className="reveal inline-flex items-center gap-1.5 text-[11.5px] font-bold tracking-[0.04em] uppercase text-primary bg-primary-soft border border-[#f2d7dc] px-3.5 py-1.5 rounded-full mb-5"
          style={{ transitionDelay: '50ms' }}
        >
          <SparklesIcon className="w-3.5 h-3.5 text-primary" />
          <span>{t.home.heroBadge}</span>
        </div>

        <h1
          className="reveal font-serif font-semibold text-ink text-4xl sm:text-5xl lg:text-[64px] leading-[1.08] mb-5 tracking-tight"
          style={{ transitionDelay: '150ms' }}
        >
          {renderStyledHeadline(t.home.heroHeadline)}
        </h1>

        <p
          className="reveal text-muted text-base sm:text-[17px] leading-[1.7] max-w-[560px] mx-auto mb-9"
          style={{ transitionDelay: '250ms' }}
        >
          {t.home.heroSubheadline}
        </p>

        <div
          className="reveal flex gap-3.5 justify-center flex-wrap mb-11"
          style={{ transitionDelay: '350ms' }}
        >
          {whatsappHref.startsWith('http') ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold text-[13.5px] sm:text-[14px] px-6 py-3 rounded-full shadow-wa-btn hover:-translate-y-0.5 hover:bg-whatsapp-hover transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>{t.nav.inquireWhatsApp}</span>
            </a>
          ) : (
            <Link
              href={whatsappHref}
              className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold text-[13.5px] sm:text-[14px] px-6 py-3 rounded-full shadow-wa-btn hover:-translate-y-0.5 hover:bg-whatsapp-hover transition-all duration-200"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>{t.nav.inquireWhatsApp}</span>
            </Link>
          )}

          <Link
            href="/services/"
            className="inline-flex items-center gap-2 border-[1.5px] border-primary text-primary font-bold text-[13.5px] sm:text-[14px] px-6 py-3 rounded-full hover:bg-primary-soft hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>{t.common.exploreServices}</span>
          </Link>
        </div>

        <div
          className="reveal flex gap-6 sm:gap-8 justify-center flex-wrap text-xs sm:text-[13px] text-muted font-semibold"
          style={{ transitionDelay: '450ms' }}
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
            <span>{t.common.femaleOnlyBadge}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
            <span>{salonConfig.hours.days}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
            <span>{salonConfig.hours.timing}</span>
          </span>
        </div>
      </div>
    </section>
  );
};
