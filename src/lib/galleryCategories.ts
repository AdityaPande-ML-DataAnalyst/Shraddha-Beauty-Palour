export type GalleryCategoryId =
  | 'hair-styling'
  | 'makeup'
  | 'bridal-makeup'
  | 'nail-art'
  | 'saree-styling'
  | 'training-certificates';

export const GALLERY_CATEGORIES: ReadonlyArray<{ id: GalleryCategoryId; label: string }> = [
  { id: 'hair-styling', label: 'Hair Styling' },
  { id: 'makeup', label: 'Makeup' },
  { id: 'bridal-makeup', label: 'Bridal Makeup' },
  { id: 'nail-art', label: 'Nail Art' },
  { id: 'saree-styling', label: 'Saree Styling' },
  { id: 'training-certificates', label: 'Training & Certificates' },
];
