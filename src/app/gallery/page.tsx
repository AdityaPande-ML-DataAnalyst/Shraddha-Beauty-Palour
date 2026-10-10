'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TransparencyNotice } from '@/components/gallery/TransparencyNotice';
import { GalleryFilter } from '@/components/gallery/GalleryFilter';

export default function GalleryPage() {
  const { t } = useTranslation();

  return (
    <div className="py-8 sm:py-12 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-[11px] font-semibold text-secondary-900 uppercase tracking-wider bg-secondary-100 px-3 py-0.5 rounded-full border border-secondary-300">
              Work Preview
            </span>
          }
          title={t.galleryPage.pageTitle}
          subtitle={t.galleryPage.pageSubtitle}
        />

        <div className="space-y-6">
          {/* Transparency Advisory */}
          <TransparencyNotice />

          {/* Filterable Categories Grid */}
          <GalleryFilter />
        </div>
      </Container>
    </div>
  );
}
