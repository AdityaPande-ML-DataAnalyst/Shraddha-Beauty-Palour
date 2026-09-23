'use client';

import React from 'react';
import Image from 'next/image';
import { salonConfig } from '@/config/salon.config';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  WhatsAppIcon,
  SparklesIcon,
  ClockIcon,
  MapPinIcon,
  ArrowRightIcon,
} from '@/components/ui/Icons';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 via-white to-cream-50 pt-10 pb-16 sm:pt-16 sm:pb-24">
      {/* Decorative background glows */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary-100/30 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Female Only Tag */}
            <div>
              <Badge variant="primary" className="py-1.5 px-4 text-xs sm:text-sm font-semibold shadow-sm">
                <SparklesIcon className="w-4 h-4 text-primary-600" />
                <span>{t.home.heroBadge}</span>
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-sans">
              {t.home.heroHeadline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.home.heroSubheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                href="/contact/"
                variant="whatsapp"
                size="lg"
                icon={<WhatsAppIcon className="w-5 h-5" />}
              >
                {t.nav.inquireWhatsApp}
              </Button>

              <Button
                href="/services/"
                variant="outline"
                size="lg"
                icon={<ArrowRightIcon className="w-4 h-4" />}
              >
                {t.common.exploreServices}
              </Button>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-6 border-t border-cream-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-cream-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                  <SparklesIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Female-Only</span>
                  <span className="text-[11px] text-slate-500">Exclusively for women</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-cream-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                  <ClockIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">9:00 AM – 9:00 PM</span>
                  <span className="text-[11px] text-slate-500">Open all 7 days</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-cream-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Sai Nagar</span>
                  <span className="text-[11px] text-slate-500">Amravati, MH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Branded Graphic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[6/5]">
              <Image
                src="/images/hero/hero-illustration.svg"
                alt="Shraddha Beauty Parlour - Beauty, Style & Confidence in Sai Nagar, Amravati"
                fill
                unoptimized
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

