'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon, SparklesIcon, InfoIcon } from '@/components/ui/Icons';

export const CtaBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white relative overflow-hidden">
      {/* Decorative floral circles */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-secondary-500/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-500/20 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/20">
            <SparklesIcon className="w-3.5 h-3.5 text-secondary-300" />
            <span>{t.common.femaleOnlyBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {t.home.ctaBannerTitle}
          </h2>

          <p className="text-sm sm:text-base text-primary-100 max-w-xl mx-auto leading-relaxed">
            {t.home.ctaBannerDesc}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/contact/"
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon className="w-5 h-5" />}
            >
              {t.nav.inquireWhatsApp}
            </Button>
          </div>

          {/* Confirmation Notice */}
          <div className="pt-4 max-w-lg mx-auto flex items-center justify-center gap-2 text-xs text-primary-200">
            <InfoIcon className="w-4 h-4 shrink-0 text-secondary-300" />
            <span>{t.common.disclaimerSubjectToConfirmation}</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

