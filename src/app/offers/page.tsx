'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { getWhatsAppHref } from '@/utils/contact';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import { GiftIcon, WhatsAppIcon } from '@/components/ui/Icons';

export default function OffersPage() {
  const { t } = useTranslation();

  return (
    <div className="py-8 sm:py-12 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-[11px] font-semibold text-secondary-900 uppercase tracking-wider bg-secondary-100 px-3 py-0.5 rounded-full border border-secondary-300">
              Seasonal Specials
            </span>
          }
          title={t.offersPage.pageTitle}
          subtitle={t.offersPage.pageSubtitle}
        />

        <div className="py-4">
          <EmptyState
            icon={<GiftIcon className="w-6 h-6" />}
            title={t.offersPage.emptyTitle}
            description={t.offersPage.emptyDescription}
            action={
              <Button
                href={getWhatsAppHref(
                  `Hello ${salonConfig.name},\n\nI would like to inquire about current seasonal specials and offers.`
                )}
                isExternal
                variant="whatsapp"
                size="sm"
                icon={<WhatsAppIcon className="w-3.5 h-3.5 fill-current" />}
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
