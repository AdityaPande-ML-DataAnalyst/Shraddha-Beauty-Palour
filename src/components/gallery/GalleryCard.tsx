'use client';

import React from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/content/gallery.data';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface GalleryCardProps {
  item: GalleryItem;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, className = '', style, onClick }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <Card
      hoverEffect
      style={style}
      className={`reveal overflow-hidden p-0 flex flex-col h-full border border-cream-200/90 rounded-xl bg-white/95 shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/5 hover:border-primary-200/60 ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className={onClick ? 'outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-xl' : undefined}
        aria-label={onClick ? `Open ${item.title}` : undefined}
      >
        {/* Image Container with compact aspect ratio */}
        <div className="relative aspect-[4/3] w-full bg-cream-100 overflow-hidden">
          <Image
            src={item.imageSrc || item.placeholderSvg}
            alt={item.alt}
            fill
            unoptimized
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />

          {item.isPlaceholder && (
            <div className="absolute top-2 right-2">
              <Badge variant="primary" className="bg-primary-900/90 text-white border-0 shadow-2xs text-[10px] py-0 px-2">
                Preview
              </Badge>
            </div>
          )}
        </div>

        {/* Info Container */}
        <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-secondary-600 block">
              {item.categoryLabel}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mt-0.5">
              {item.title}
            </h4>
          </div>
        </div>
      </div>
    </Card>
  );
};
