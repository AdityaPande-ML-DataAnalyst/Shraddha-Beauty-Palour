'use client';

import React from 'react';
import { galleryItems } from '@/content/gallery.data';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GalleryCard } from '@/components/gallery/GalleryCard';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowRightIcon, InfoIcon } from '@/components/ui/Icons';

export const GalleryPreview: React.FC = () => {
  const { t } = useTranslation();
  const previewItems = galleryItems.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-cream-50/50 border-t border-cream-200">
      <Container>
        <SectionHeader
          badge={
            <span className="text-xs font-semibold text-secondary-800 uppercase tracking-wider bg-secondary-100/60 px-3 py-1 rounded-full border border-secondary-200">
              Work Preview
            </span>
          }
          title={t.home.galleryPreviewTitle}
          subtitle={t.home.galleryPreviewSubtitle}
        />

        {/* Transparency Banner */}
        <div className="max-w-3xl mx-auto mb-10">
          <Card className="bg-white border border-cream-300 p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <InfoIcon className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{t.home.galleryPreviewNotice}</p>
          </Card>
        </div>

        {/* 3 Preview Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {previewItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/gallery/"
            variant="outline"
            size="lg"
            icon={<ArrowRightIcon className="w-4 h-4" />}
          >
            Explore Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
};

