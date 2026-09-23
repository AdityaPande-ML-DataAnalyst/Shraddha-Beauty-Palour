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
    <div className="py-12 sm:py-20 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider bg-primary-50 px-3.5 py-1 rounded-full border border-primary-200">
              Client Experiences
            </span>
          }
          title={t.testimonialsPage.pageTitle}
          subtitle={t.testimonialsPage.pageSubtitle}
        />

        <div className="py-8">
          <EmptyState
            icon={<MessageSquareQuoteIcon className="w-8 h-8" />}
            title={t.testimonialsPage.emptyTitle}
            description={t.testimonialsPage.emptyDescription}
            action={
              <Button
                href="/services/"
                variant="primary"
                size="md"
                icon={<ArrowRightIcon className="w-4 h-4" />}
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

