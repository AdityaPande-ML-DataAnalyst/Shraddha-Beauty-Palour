'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import {
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
  ArrowRightIcon,
} from '@/components/ui/Icons';

export const IntroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 bg-blush-50/60 border-b border-cream-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
          {/* Left: Short Content (7 cols) */}
          <div className="reveal lg:col-span-7 space-y-3.5 text-center lg:text-left">
            <span className="text-[11px] font-semibold text-primary uppercase tracking-wider bg-white/90 px-3 py-1 rounded-full border border-primary-200 inline-block shadow-2xs">
              About Our Parlour
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-semibold text-ink leading-tight">
              {t.home.introTitle}
            </h2>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>{t.home.introText1}</p>
              <p>{t.home.introText2}</p>
            </div>

            <div className="pt-2">
              <Link
                href="/about/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark hover:underline underline-offset-4 transition-colors"
              >
                <span>Learn more about our parlour</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: One Supporting Visual / Design Element (5 cols) */}
          <div className="reveal lg:col-span-5" style={{ transitionDelay: '150ms' }}>
            <div className="p-5 rounded-2xl bg-white/95 border border-cream-200 shadow-warm space-y-3.5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/5 hover:border-primary-200/60">
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-cream-100">
                <div className="w-8 h-8 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Female-Only Sanctuary</h3>
                  <p className="text-[11px] text-slate-500">Exclusively for women &amp; girls</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <HeartIcon className="w-3.5 h-3.5 text-secondary-500 shrink-0 mt-0.5" />
                  <span>Personalized consultation tailored to hair &amp; skin needs</span>
                </div>
                <div className="flex items-start gap-2">
                  <SparklesIcon className="w-3.5 h-3.5 text-secondary-500 shrink-0 mt-0.5" />
                  <span>Serene, private, and hygienic care environment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
