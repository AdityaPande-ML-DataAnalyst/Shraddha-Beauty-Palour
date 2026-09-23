'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  ShieldCheckIcon,
  SparklesIcon,
  HeartIcon,
  MapPinIcon,
  WhatsAppIcon,
} from '@/components/ui/Icons';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="py-12 sm:py-20 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider bg-primary-50 px-3.5 py-1 rounded-full border border-primary-200">
              Female-Only Salon
            </span>
          }
          title={t.about.pageTitle}
          subtitle={t.about.pageSubtitle}
        />

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Main Story Card */}
          <Card className="p-8 sm:p-10 space-y-6">
            <div className="flex items-center gap-3 border-b border-cream-200 pb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                <SparklesIcon className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {t.about.storyTitle}
              </h2>
            </div>
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>{t.about.storyText1}</p>
              <p>{t.about.storyText2}</p>
            </div>
          </Card>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Female Only Pillar */}
            <Card hoverEffect className="p-7 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t.about.femaleOnlyTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.femaleOnlyText}
              </p>
            </Card>

            {/* Approach Pillar */}
            <Card hoverEffect className="p-7 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary-100 text-secondary-900 flex items-center justify-center">
                <SparklesIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {t.about.approachTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.approachText}
              </p>
            </Card>
          </div>

          {/* Community & Location Card */}
          <Card className="p-8 sm:p-10 space-y-4 bg-white border border-cream-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {t.about.communityTitle}
              </h3>
            </div>
            <p className="text-base text-slate-700 leading-relaxed">
              {t.about.communityText}
            </p>
          </Card>

          {/* CTA Box */}
          <div className="text-center pt-4">
            <Button
              href="/contact/"
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon className="w-5 h-5" />}
            >
              {t.nav.inquireWhatsApp}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

