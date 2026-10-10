'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
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
      icon: <ShieldCheckIcon className="w-5 h-5 text-primary" />,
      title: t.home.highlight1Title,
      description: t.home.highlight1Desc,
    },
    {
      icon: <SparklesIcon className="w-5 h-5 text-primary" />,
      title: t.home.highlight2Title,
      description: t.home.highlight2Desc,
    },
    {
      icon: <ClockIcon className="w-5 h-5 text-primary" />,
      title: t.home.highlight3Title,
      description: t.home.highlight3Desc,
    },
    {
      icon: <MapPinIcon className="w-5 h-5 text-primary" />,
      title: t.home.highlight4Title,
      description: t.home.highlight4Desc,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-cream">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[18px]">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="reveal bg-white border border-[#f1e5e8] rounded-[18px] p-5 sm:p-6 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/5 hover:border-primary-200/60"
            >
              <div className="w-11 h-11 mx-auto mb-3.5 rounded-xl bg-primary-soft flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-[14px] sm:text-[14.5px] font-bold text-ink mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[12.5px] text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
