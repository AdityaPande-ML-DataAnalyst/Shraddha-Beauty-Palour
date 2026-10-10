'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { getWhatsAppHref } from '@/utils/contact';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheckIcon,
  SparklesIcon,
  MapPinIcon,
  WhatsAppIcon,
} from '@/components/ui/Icons';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="py-8 sm:py-12 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-[11px] font-semibold text-primary uppercase tracking-wider bg-primary-soft px-3 py-0.5 rounded-full border border-primary-200">
              Female-Only Salon
            </span>
          }
          title={t.about.pageTitle}
          subtitle={t.about.pageSubtitle}
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Story Card */}
          <Card
            hoverEffect
            className="reveal p-5 sm:p-6 space-y-4 bg-white/95"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-center gap-2.5 border-b border-cream-200 pb-3">
              <div className="w-8 h-8 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <SparklesIcon className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-ink">
                {t.about.storyTitle}
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>{t.about.storyText1}</p>
              <p>{t.about.storyText2}</p>
            </div>
          </Card>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Female Only Pillar */}
            <Card
              hoverEffect
              className="reveal p-5 space-y-2.5 bg-white/95"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-9 h-9 rounded-lg bg-primary-soft text-primary flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {t.about.femaleOnlyTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.about.femaleOnlyText}
              </p>
            </Card>

            {/* Approach Pillar */}
            <Card
              hoverEffect
              className="reveal p-5 space-y-2.5 bg-white/95"
              style={{ transitionDelay: '300ms' }}
            >
              <div className="w-9 h-9 rounded-lg bg-secondary-100 text-secondary-900 flex items-center justify-center">
                <SparklesIcon className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {t.about.approachTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.about.approachText}
              </p>
            </Card>
          </div>

          {/* Community & Location Card */}
          <Card
            hoverEffect
            className="reveal p-5 space-y-3 bg-white/95 border border-cream-200"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <MapPinIcon className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {t.about.communityTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {t.about.communityText}
            </p>
          </Card>

          <div className="reveal text-center pt-2" style={{ transitionDelay: '450ms' }}>
            <Button
              href={getWhatsAppHref(
                `Hello ${salonConfig.name},\n\nI would like to enquire about an appointment.`
              )}
              isExternal
              variant="whatsapp"
              size="md"
              icon={<WhatsAppIcon className="w-4 h-4 fill-current" />}
            >
              {t.nav.inquireWhatsApp}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
