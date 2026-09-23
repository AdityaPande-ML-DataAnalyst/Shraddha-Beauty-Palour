'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SparklesIcon, ShieldCheckIcon, ArrowRightIcon } from '@/components/ui/Icons';

export const IntroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeader
          badge={
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              About Our Parlour
            </span>
          }
          title={t.home.introTitle}
          subtitle={t.home.introSubtitle}
        />

        <div className="max-w-4xl mx-auto">
          <Card className="bg-cream-50/60 border border-cream-200 p-8 sm:p-12 space-y-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                <SparklesIcon className="w-8 h-8" />
              </div>
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>{t.home.introText1}</p>
                <p>{t.home.introText2}</p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cream-200">
                  <div className="flex items-center gap-2 text-primary-800 text-sm font-semibold">
                    <ShieldCheckIcon className="w-4 h-4 text-primary-600" />
                    <span>100% Dedicated Female-Only Parlour</span>
                  </div>
                  <Button
                    href="/about/"
                    variant="ghost"
                    size="sm"
                    icon={<ArrowRightIcon className="w-4 h-4" />}
                    className="text-primary-700 font-semibold"
                  >
                    Read Our Full Story
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

