'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import {
  ShieldCheckIcon,
  SparklesIcon,
  ClockIcon,
  MapPinIcon,
} from '@/components/ui/Icons';

export const HighlightsSection: React.FC = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: t.home.highlight1Title,
      description: t.home.highlight1Desc,
    },
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: t.home.highlight2Title,
      description: t.home.highlight2Desc,
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: t.home.highlight3Title,
      description: t.home.highlight3Desc,
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: t.home.highlight4Title,
      description: t.home.highlight4Desc,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeader
          badge={
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              Our Commitments
            </span>
          }
          title={t.home.highlightsTitle}
          subtitle={t.home.highlightsSubtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((item, idx) => (
            <Card
              key={idx}
              hoverEffect
              className="p-6 bg-cream-50/40 border border-cream-200 text-center sm:text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center mx-auto sm:mx-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

