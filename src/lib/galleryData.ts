import { GALLERY_CATEGORIES, type GalleryCategoryId } from '@/lib/galleryCategories';

export type GalleryRecord = {
  id: string;
  categoryId: GalleryCategoryId;
  categoryLabel: string;
  title: string;
  placeholderSvg: string;
  imageSrc?: string;
  isPlaceholder: boolean;
  alt: string;
};

export const galleryItems: GalleryRecord[] = [
  {
    id: 'gallery-bridal-1',
    categoryId: 'bridal-makeup',
    categoryLabel: 'Bridal Makeup',
    title: 'Bridal Styling Showcase',
    placeholderSvg: '/images/placeholders/bridal.svg',
    isPlaceholder: true,
    alt: 'Shraddha Beauty Parlour - Bridal Makeup Preview Placeholder',
  },
  {
    id: 'gallery-hair-1',
    categoryId: 'hair-styling',
    categoryLabel: 'Hair Styling',
    title: 'Hair Styling & Curls',
    placeholderSvg: '/images/placeholders/hair.svg',
    isPlaceholder: true,
    alt: 'Shraddha Beauty Parlour - Hair Styling Preview Placeholder',
  },
  {
    id: 'gallery-makeup-1',
    categoryId: 'makeup',
    categoryLabel: 'Makeup',
    title: 'Party & Festive Makeover',
    placeholderSvg: '/images/placeholders/makeup.svg',
    isPlaceholder: true,
    alt: 'Shraddha Beauty Parlour - Makeup Preview Placeholder',
  },
  {
    id: 'gallery-nails-1',
    categoryId: 'nail-art',
    categoryLabel: 'Nail Art',
    title: 'Creative Nail Styling',
    placeholderSvg: '/images/placeholders/nails.svg',
    isPlaceholder: true,
    alt: 'Shraddha Beauty Parlour - Nail Art Preview Placeholder',
  },
  {
    id: 'gallery-saree-1',
    categoryId: 'saree-styling',
    categoryLabel: 'Saree Styling',
    title: 'Traditional Saree Draping',
    placeholderSvg: '/images/placeholders/saree.svg',
    isPlaceholder: true,
    alt: 'Shraddha Beauty Parlour - Saree Styling Preview Placeholder',
  },
  {
    id: 'gallery-cert-1',
    categoryId: 'training-certificates',
    categoryLabel: 'Training & Certificates',
    title: 'Professional Certifications',
    placeholderSvg: '/images/placeholders/certificate.svg',
    isPlaceholder: true,
    alt: 'Shraddha Beauty Parlour - Training & Certificates Preview Placeholder',
  },
];

export const galleryCategories = GALLERY_CATEGORIES.map((category) => ({
  ...category,
  id: category.id,
  labelKey: category.id,
}));
