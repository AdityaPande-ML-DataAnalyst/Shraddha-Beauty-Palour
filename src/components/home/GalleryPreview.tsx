'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { GALLERY_CATEGORIES } from '@/lib/galleryCategories';
import { useTranslation } from '@/hooks/useTranslation';

const fallbackPreviewItems = [
  { id: '1', title: 'Hair Styling', icon: '📷' },
  { id: '2', title: 'Bridal Makeup', icon: '📷' },
  { id: '3', title: 'Nail Art', icon: '📷' },
  { id: '4', title: 'Saree Styling', icon: '📷' },
];

const categorySortOrder = Object.fromEntries(GALLERY_CATEGORIES.map((category, index) => [category.id, index]));

const normalizeCategoryId = (value: unknown): string | null => {
  if (typeof value !== 'string') {
    return null;
  }

  const trimmedValue = value.trim();
  return GALLERY_CATEGORIES.some((category) => category.id === trimmedValue) ? trimmedValue : null;
};

const normalizeImageUrl = (value: unknown): string | null => {
  if (typeof value !== 'string') {
    return null;
  }

  const trimmedValue = value.trim();
  return trimmedValue || null;
};

const normalizeOrderValue = (value: unknown): number => {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : Number.MAX_SAFE_INTEGER;
};

const fetchWithTimeout = async <T,>(request: Promise<T>, timeoutMs: number): Promise<T> => {
  return Promise.race([
    request,
    new Promise<T>((_, reject) => {
      window.setTimeout(() => reject(new Error('Gallery preview request timed out.')), timeoutMs);
    }),
  ]);
};

export const GalleryPreview: React.FC = () => {
  const { t } = useTranslation();
  const [previewItems, setPreviewItems] = useState<Array<{ id: string; title: string; imageUrl?: string }>>([]);

  useEffect(() => {
    let isMounted = true;

    const loadPreview = async () => {
      if (!db) {
        return;
      }

      try {
        const snapshot = await fetchWithTimeout(getDocs(collection(db, 'galleryItems')), 8000);

        if (!isMounted) {
          return;
        }

        type RawPreviewItem = {
          id: string;
          category?: unknown;
          imageUrl?: unknown;
          title?: unknown;
          order?: unknown;
        };

        const items = snapshot.docs
          .map((doc): RawPreviewItem => ({ id: doc.id, ...(doc.data() as Record<string, unknown>) }))
          .filter((item) => normalizeCategoryId(item.category) && normalizeImageUrl(item.imageUrl))
          .sort((firstItem, secondItem) => {
            const categoryDifference =
              (categorySortOrder[normalizeCategoryId(firstItem.category) ?? ''] ?? Number.MAX_SAFE_INTEGER) -
              (categorySortOrder[normalizeCategoryId(secondItem.category) ?? ''] ?? Number.MAX_SAFE_INTEGER);

            if (categoryDifference !== 0) {
              return categoryDifference;
            }

            return normalizeOrderValue(firstItem.order ?? Number.MAX_SAFE_INTEGER) - normalizeOrderValue(secondItem.order ?? Number.MAX_SAFE_INTEGER);
          })
          .slice(0, 4)
          .map((item) => ({
            id: item.id,
            title: typeof item.title === 'string' && item.title.trim() ? item.title.trim() : 'Gallery Item',
            imageUrl: normalizeImageUrl(item.imageUrl) ?? undefined,
          }));

        setPreviewItems(items);
      } catch (error: any) {
        const errorCode = error?.code ?? 'unknown';
        const errorText = error?.message ?? 'Preview could not be loaded.';
        console.error('Gallery preview load failed:', { code: errorCode, message: errorText, error });

        if (isMounted) {
          setPreviewItems([]);
        }
      }
    };

    loadPreview();

    return () => {
      isMounted = false;
    };
  }, []);

  const displayItems = previewItems.length > 0 ? previewItems : fallbackPreviewItems;

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-cream">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-11 reveal">
          <span className="text-xs font-extrabold tracking-[0.12em] uppercase text-gold block mb-2">
            Our Work
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-ink">
            {t.home.galleryPreviewTitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-[1180px] mx-auto">
          {displayItems.map((item, idx) => {
            const hasRealImage = 'imageUrl' in item && !!item.imageUrl;

            return (
              <Link
                key={item.id}
                href="/gallery/"
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="reveal overflow-hidden rounded-2xl border-[1.5px] border-dashed border-[#e5c3ca] bg-gradient-to-br from-primary-soft to-white text-primary transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/5 hover:border-solid hover:border-primary cursor-pointer group shadow-2xs"
              >
                {hasRealImage ? (
                  <div className="relative aspect-square overflow-hidden">
                    <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </div>
                ) : (
                  <div className="aspect-square flex flex-col items-center justify-center gap-1.5">
                    <span className="text-[26px] group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      📷
                    </span>
                    <span className="text-[10.5px] font-bold tracking-[0.04em] uppercase text-muted group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        <p
          className="reveal text-center text-xs sm:text-[12.5px] text-muted mt-6 max-w-[560px] mx-auto leading-relaxed"
          style={{ transitionDelay: '250ms' }}
        >
          {t.galleryPage.transparencyNotice}
        </p>
      </div>
    </section>
  );
};
