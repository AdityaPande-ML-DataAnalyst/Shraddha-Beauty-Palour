'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PricingNotice } from '@/components/services/PricingNotice';
import { ServiceCategoryTabs } from '@/components/services/ServiceCategoryTabs';

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <div className="py-8 sm:py-12 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-[11px] font-semibold text-secondary-900 uppercase tracking-wider bg-secondary-100 px-3 py-0.5 rounded-full border border-secondary-300">
              Treatment Catalog
            </span>
          }
          title={t.servicesPage.pageTitle}
          subtitle={t.servicesPage.pageSubtitle}
        />

        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Transparent Pricing Notice */}
          <PricingNotice />

          {/* Interactive Categories & Services Grid */}
          <ServiceCategoryTabs />
        </div>
      </Container>
    </div>
  );
}
