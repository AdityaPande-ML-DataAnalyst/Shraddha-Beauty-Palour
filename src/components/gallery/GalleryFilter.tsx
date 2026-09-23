'use client';

import React, { useState } from 'react';
import { galleryCategories, galleryItems, GalleryCategoryId } from '@/content/gallery.data';
import { useTranslation } from '@/hooks/useTranslation';
import { GalleryCard } from './GalleryCard';

export const GalleryFilter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { t } = useTranslation();

  const filterTabs = [
    { id: 'all', label: t.galleryPage.allFilter },
    ...galleryCategories.map((c) => ({
      id: c.id,
      label:
        c.id === 'hair-styling'
          ? t.galleryPage.filterHair
          : c.id === 'makeup'
          ? t.galleryPage.filterMakeup
          : c.id === 'bridal-makeup'
          ? t.galleryPage.filterBridal
          : c.id === 'nail-art'
          ? t.galleryPage.filterNails
          : c.id === 'saree-styling'
          ? t.galleryPage.filterSaree
          : t.galleryPage.filterCertificates,
    })),
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.categoryId === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
        {filterTabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 ${
                isActive
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-cream-100 border border-cream-200'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

