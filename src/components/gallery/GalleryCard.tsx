'use client';

import React from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/content/gallery.data';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface GalleryCardProps {
  item: GalleryItem;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  return (
    <Card hoverEffect className="overflow-hidden p-0 flex flex-col h-full border border-cream-200">
      {/* Image Container with explicit aspect ratio */}
      <div className="relative aspect-[3/2] w-full bg-cream-100 overflow-hidden">
        {/* Next.js Image with unoptimized flag for 100% static export compatibility */}
        <Image
          src={item.imageSrc || item.placeholderSvg}
          alt={item.alt}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        {item.isPlaceholder && (
          <div className="absolute top-3 right-3">
            <Badge variant="primary" className="bg-primary-900/90 text-white border-0 shadow-sm text-[11px]">
              Preview
            </Badge>
          </div>
        )}
      </div>

      {/* Info Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary-600 block mb-1">
            {item.categoryLabel}
          </span>
          <h4 className="text-base font-bold text-slate-900 leading-snug">
            {item.title}
          </h4>
        </div>

        {item.isPlaceholder && (
          <p className="text-xs text-slate-500 italic pt-2 border-t border-cream-100">
            Placeholder preview • Studio photography in progress
          </p>
        )}
      </div>
    </Card>
  );
};

