'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { WhatsAppIcon, SparklesIcon } from '@/components/ui/Icons';
import { getWhatsAppHref } from '@/utils/contact';

export const CtaBanner: React.FC = () => {
  const { t } = useTranslation();
  const whatsappHref = getWhatsAppHref();

  return (
    <section className="py-12 sm:py-16 bg-cream">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="reveal relative rounded-[26px] bg-gradient-to-r from-primary to-primary-dark py-14 px-6 sm:px-10 text-center text-white overflow-hidden shadow-warm-lg">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(197,155,99,0.35),transparent_55%)] pointer-events-none"
            aria-hidden="true"
          />

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-semibold mb-2.5 relative z-10 leading-tight">
            {t.home.ctaBannerTitle}
          </h2>

          <p className="text-white/90 text-sm max-w-lg mx-auto mb-7 relative z-10 leading-relaxed">
            {t.home.ctaBannerDesc}
          </p>

          <div className="relative z-10 flex justify-center">
            {whatsappHref.startsWith('http') ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-whatsapp font-extrabold text-[13.5px] sm:text-[14px] px-6 py-3 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:bg-cream-100 transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>{t.nav.inquireWhatsApp}</span>
              </a>
            ) : (
              <Link
                href={whatsappHref}
                className="inline-flex items-center gap-2 bg-white text-whatsapp font-extrabold text-[13.5px] sm:text-[14px] px-6 py-3 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:bg-cream-100 transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>{t.nav.inquireWhatsApp}</span>
              </Link>
            )}
          </div>

          <p className="mt-4 text-[11.5px] text-white/70 relative z-10 flex items-center justify-center gap-1.5">
            <SparklesIcon className="w-3.5 h-3.5 text-gold-300" />
            <span>{t.common.disclaimerSubjectToConfirmation}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
