'use client';

import React from 'react';
import Link from 'next/link';
import { serviceCategories } from '@/content/services.data';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  ScissorsIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@/components/ui/Icons';

export const ServicePreview: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-24 bg-cream-50/50 border-y border-cream-200">
      <Container>
        <SectionHeader
          badge={
            <span className="text-xs font-semibold text-secondary-800 uppercase tracking-wider bg-secondary-100/60 px-3 py-1 rounded-full border border-secondary-200">
              Services
            </span>
          }
          title={t.home.categoriesTitle}
          subtitle={t.home.categoriesSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCategories.map((category) => (
            <Card
              key={category.id}
              hoverEffect
              className="flex flex-col justify-between p-6 sm:p-7 bg-white"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center">
                  {category.id === 'hair' ? (
                    <ScissorsIcon className="w-6 h-6" />
                  ) : (
                    <SparklesIcon className="w-6 h-6" />
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 capitalize">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {category.services.length} Specialized Treatments
                  </p>
                </div>

                <ul className="space-y-2 text-sm text-slate-600 pt-2 border-t border-cream-100">
                  {category.services.slice(0, 3).map((item) => (
                    <li key={item.id} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                      <span>{item.name}</span>
                    </li>
                  ))}
                  {category.services.length > 3 && (
                    <li className="text-xs text-primary-700 font-semibold pt-1">
                      + {category.services.length - 3} more treatments
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-cream-100">
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
                >
                  <span>View {category.name} Services</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/services/"
            variant="outline"
            size="lg"
            icon={<ArrowRightIcon className="w-4 h-4" />}
          >
            {t.common.exploreServices}
          </Button>
        </div>
      </Container>
    </section>
  );
};

