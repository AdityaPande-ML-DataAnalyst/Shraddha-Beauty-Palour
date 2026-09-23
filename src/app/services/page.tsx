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
    <div className="py-12 sm:py-20 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-xs font-semibold text-secondary-800 uppercase tracking-wider bg-secondary-100/60 px-3.5 py-1 rounded-full border border-secondary-200">
              Treatment Catalog
            </span>
          }
          title={t.servicesPage.pageTitle}
          subtitle={t.servicesPage.pageSubtitle}
        />

        <div className="space-y-10">
          {/* Transparent Pricing Notice */}
          <PricingNotice />

          {/* Interactive Categories & Services Grid */}
          <ServiceCategoryTabs />
        </div>
      </Container>
    </div>
  );
}

