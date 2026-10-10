'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { GALLERY_CATEGORIES } from '@/lib/galleryCategories';
import { galleryItems as fallbackGalleryItems } from '@/content/gallery.data';
import { useTranslation } from '@/hooks/useTranslation';
import { GalleryCard } from './GalleryCard';

const categorySortOrder = Object.fromEntries(GALLERY_CATEGORIES.map((category, index) => [category.id, index]));

const normalizeCategoryId = (value: unknown): string | null => {
  if (typeof value !== 'string') {
    return null;
  }

  const trimmedValue = value.trim();
  return GALLERY_CATEGORIES.some((category) => category.id === trimmedValue) ? trimmedValue : null;
};

const normalizeTitle = (value: unknown): string => {
  if (typeof value !== 'string') {
    return 'Gallery Image';
  }

  const trimmedValue = value.trim();
  return trimmedValue || 'Gallery Image';
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
      window.setTimeout(() => reject(new Error('Gallery request timed out.')), timeoutMs);
    }),
  ]);
};

const mapFirestoreItem = (item: any) => {
  const categoryId = normalizeCategoryId(item?.category);
  const imageSrc = normalizeImageUrl(item?.imageUrl);
  const title = normalizeTitle(item?.title);

  if (!categoryId || !imageSrc) {
    return null;
  }

  return {
    id: String(item?.id ?? `gallery-${Date.now()}-${Math.random().toString(16).slice(2)}`),
    categoryId,
    categoryLabel: GALLERY_CATEGORIES.find((category) => category.id === categoryId)?.label || categoryId,
    title,
    placeholderSvg: '/images/placeholders/bridal.svg',
    imageSrc,
    isPlaceholder: false,
    alt: title,
    order: normalizeOrderValue(item?.order),
  };
};

export const GalleryFilter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    let isMounted = true;

    const fetchGalleryItems = async () => {
      setLoading(true);
      setErrorMessage(null);

      if (!db) {
        if (isMounted) {
          setItems([]);
          setLoading(false);
        }
        return;
      }

      try {
        const snapshot = await fetchWithTimeout(getDocs(collection(db, 'galleryItems')), 8000);

        if (!isMounted) {
          return;
        }

        const fetchedItems = snapshot.docs
          .map((docSnapshot) => ({ id: docSnapshot.id, ...docSnapshot.data() }))
          .map(mapFirestoreItem)
          .filter((item): item is NonNullable<typeof item> => item !== null)
          .sort((firstItem, secondItem) => {
            const categoryDifference =
              (categorySortOrder[firstItem.categoryId] ?? Number.MAX_SAFE_INTEGER) -
              (categorySortOrder[secondItem.categoryId] ?? Number.MAX_SAFE_INTEGER);

            if (categoryDifference !== 0) {
              return categoryDifference;
            }

            return firstItem.order - secondItem.order;
          });

        setItems(fetchedItems);
      } catch (error: any) {
        const errorCode = error?.code ?? 'unknown';
        const errorText = error?.message ?? 'Gallery could not be loaded right now.';
        console.error('Gallery fetch failed:', { code: errorCode, message: errorText, error });

        if (isMounted) {
          setItems([]);
          setErrorMessage('Unable to load the gallery right now. Please refresh or try again later.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGalleryItems();

    return () => {
      isMounted = false;
    };
  }, []);

  const availableItems = items.length > 0 ? items : fallbackGalleryItems;

  const filterTabs = useMemo(
    () => [
      { id: 'all', label: t.galleryPage.allFilter },
      ...GALLERY_CATEGORIES.map((category) => ({
        id: category.id,
        label:
          category.id === 'hair-styling'
            ? t.galleryPage.filterHair
            : category.id === 'makeup'
              ? t.galleryPage.filterMakeup
              : category.id === 'bridal-makeup'
                ? t.galleryPage.filterBridal
                : category.id === 'nail-art'
                  ? t.galleryPage.filterNails
                  : category.id === 'saree-styling'
                    ? t.galleryPage.filterSaree
                    : t.galleryPage.filterCertificates,
      })),
    ],
    [t],
  );

  const filteredItems =
    activeCategory === 'all'
      ? availableItems
      : availableItems.filter((item) => item.categoryId === activeCategory);

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
        return;
      }

      if (event.key === 'ArrowRight') {
        setLightboxIndex((currentIndex) => {
          if (currentIndex === null) {
            return null;
          }

          const lastIndex = filteredItems.length - 1;
          return currentIndex >= lastIndex ? 0 : currentIndex + 1;
        });
      }

      if (event.key === 'ArrowLeft') {
        setLightboxIndex((currentIndex) => {
          if (currentIndex === null) {
            return null;
          }

          const lastIndex = filteredItems.length - 1;
          return currentIndex <= 0 ? lastIndex : currentIndex - 1;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const openLightbox = (index: number) => {
    if (filteredItems.length === 0) {
      return;
    }

    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goToPrevious = () => {
    if (lightboxIndex === null || filteredItems.length === 0) {
      return;
    }

    const previousIndex = lightboxIndex <= 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(previousIndex);
  };

  const goToNext = () => {
    if (lightboxIndex === null || filteredItems.length === 0) {
      return;
    }

    const nextIndex = lightboxIndex >= filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIndex);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-1 scrollbar-none px-1">
        {filterTabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap min-h-[32px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 ${
                isActive
                  ? 'bg-primary-600 text-white shadow-2xs'
                  : 'bg-white/90 text-slate-700 hover:bg-cream-100 border border-cream-200'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
        {loading ? (
          <div className="col-span-full rounded-xl border border-dashed border-cream-300 bg-cream-50 p-6 text-center text-sm text-slate-600">
            Loading gallery…
          </div>
        ) : errorMessage ? (
          <div className="col-span-full rounded-xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
            {errorMessage}
          </div>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => openLightbox(idx)}
              style={{ transitionDelay: `${(idx % 8) * 60}ms` }}
            />
          ))
        ) : (
          <div className="col-span-full rounded-xl border border-dashed border-cream-300 bg-cream-50 p-6 text-center text-sm text-slate-600">
            {t.galleryPage.transparencyNotice}
          </div>
        )}
      </div>

      {currentLightboxItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-3 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={currentLightboxItem.title}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-2xl sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery image viewer"
              className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-xl font-semibold text-white shadow-lg transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              ×
            </button>

            <div className="relative flex items-center justify-center overflow-hidden rounded-xl bg-slate-900">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous gallery image"
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-2xl text-white shadow-lg transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:left-4"
              >
                ‹
              </button>

              <div
                className="relative w-full max-h-[75vh] overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{ touchAction: 'none' }}
              >
                <img
                  src={currentLightboxItem.imageSrc}
                  alt={currentLightboxItem.title}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next gallery image"
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-900/80 text-2xl text-white shadow-lg transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:right-4"
              >
                ›
              </button>
            </div>

            <div className="flex flex-col gap-1 px-2 pb-2 pt-4 text-left text-white sm:px-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold sm:text-lg">{currentLightboxItem.title}</h3>
                <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80">
                  {currentLightboxItem.categoryLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
