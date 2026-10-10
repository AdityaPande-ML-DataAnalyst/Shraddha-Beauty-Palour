'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import { MessageSquareQuoteIcon, ArrowRightIcon } from '@/components/ui/Icons';

export default function TestimonialsPage() {
  const { t } = useTranslation();

  return (
    <div className="py-8 sm:py-12 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-[11px] font-semibold text-primary-800 uppercase tracking-wider bg-primary-50 px-3 py-0.5 rounded-full border border-primary-200">
              Client Experiences
            </span>
          }
          title={t.testimonialsPage.pageTitle}
          subtitle={t.testimonialsPage.pageSubtitle}
        />

        <div className="py-4">
          <EmptyState
            icon={<MessageSquareQuoteIcon className="w-6 h-6" />}
            title={t.testimonialsPage.emptyTitle}
            description={t.testimonialsPage.emptyDescription}
            action={
              <Button
                href="/services/"
                variant="primary"
                size="sm"
                icon={<ArrowRightIcon className="w-3.5 h-3.5" />}
              >
                {t.testimonialsPage.emptyAction}
              </Button>
            }
          />
        </div>
      </Container>
    </div>
  );
}
