'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import { GiftIcon, WhatsAppIcon } from '@/components/ui/Icons';

export default function OffersPage() {
  const { t } = useTranslation();

  return (
    <div className="py-12 sm:py-20 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-xs font-semibold text-secondary-800 uppercase tracking-wider bg-secondary-100/60 px-3.5 py-1 rounded-full border border-secondary-200">
              Seasonal Specials
            </span>
          }
          title={t.offersPage.pageTitle}
          subtitle={t.offersPage.pageSubtitle}
        />

        <div className="py-8">
          <EmptyState
            icon={<GiftIcon className="w-8 h-8" />}
            title={t.offersPage.emptyTitle}
            description={t.offersPage.emptyDescription}
            action={
              <Button
                href="/contact/"
                variant="whatsapp"
                size="md"
                icon={<WhatsAppIcon className="w-4 h-4" />}
              >
                {t.offersPage.emptyAction}
              </Button>
            }
          />
        </div>
      </Container>
    </div>
  );
}

