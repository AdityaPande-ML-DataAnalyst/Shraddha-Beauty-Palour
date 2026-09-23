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
    <div className="py-12 sm:py-20 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider bg-primary-50 px-3.5 py-1 rounded-full border border-primary-200">
              Work Preview
            </span>
          }
          title={t.galleryPage.pageTitle}
          subtitle={t.galleryPage.pageSubtitle}
        />

        <div className="space-y-10">
          {/* Transparency Advisory */}
          <TransparencyNotice />

          {/* Filterable Categories Grid */}
          <GalleryFilter />
        </div>
      </Container>
    </div>
  );
}

