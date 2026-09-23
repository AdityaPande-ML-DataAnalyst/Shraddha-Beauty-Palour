import { ServiceCategory } from '@/types/services';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'hair',
    name: 'Hair',
    titleKey: 'hairTitle',
    descriptionKey: 'hairDesc',
    services: [
      {
        id: 'haircut',
        name: 'Haircut',
        category: 'hair',
        descriptionKey: 'haircutDesc',
        defaultDescription: 'Custom haircuts tailored to your face shape, style, and personal preference.',
      },
      {
        id: 'hair-styling',
        name: 'Hair Styling',
        category: 'hair',
        descriptionKey: 'hairStylingDesc',
        defaultDescription: 'Occasion and event hair styling, curls, blow-dry, and elegant updos.',
      },
      {
        id: 'hair-coloring',
        name: 'Hair Coloring',
        category: 'hair',
        descriptionKey: 'hairColoringDesc',
        defaultDescription: 'Global coloring, root touch-up, highlights, and shade enhancement.',
      },
      {
        id: 'hair-spa',
        name: 'Hair Spa',
        category: 'hair',
        descriptionKey: 'hairSpaDesc',
        defaultDescription: 'Deep conditioning and nourishing hair spa treatments to revive dry and damaged hair.',
      },
      {
        id: 'hair-treatment',
        name: 'Hair Treatment',
        category: 'hair',
        descriptionKey: 'hairTreatmentDesc',
        defaultDescription: 'Targeted hair treatments for strengthening, frizz control, and smooth texture.',
      },
    ],
  },
  {
    id: 'makeup',
    name: 'Makeup',
    titleKey: 'makeupTitle',
    descriptionKey: 'makeupDesc',
    services: [
      {
        id: 'bridal-makeup',
        name: 'Bridal Makeup',
        category: 'makeup',
        descriptionKey: 'bridalMakeupDesc',
        defaultDescription: 'Complete traditional and contemporary bridal makeup customized for your special day.',
      },
      {
        id: 'party-makeup',
        name: 'Party Makeup',
        category: 'makeup',
        descriptionKey: 'partyMakeupDesc',
        defaultDescription: 'Glamorous and subtle party looks designed for festive events, receptions, and celebrations.',
      },
      {
        id: 'engagement-makeup',
        name: 'Engagement Makeup',
        category: 'makeup',
        descriptionKey: 'engagementMakeupDesc',
        defaultDescription: 'Elegantly curated makeup and hair styling for engagement functions and ring ceremonies.',
      },
    ],
  },
  {
    id: 'skin',
    name: 'Skin',
    titleKey: 'skinTitle',
    descriptionKey: 'skinDesc',
    services: [
      {
        id: 'facial',
        name: 'Facial',
        category: 'skin',
        descriptionKey: 'facialDesc',
        defaultDescription: 'Rejuvenating skin facials designed to cleanse, hydrate, and restore a healthy glow.',
      },
      {
        id: 'cleanup',
        name: 'Cleanup',
        category: 'skin',
        descriptionKey: 'cleanupDesc',
        defaultDescription: 'Deep pore cleansing, gentle exfoliation, and impurity removal for refreshed skin.',
      },
      {
        id: 'bleach',
        name: 'Bleach',
        category: 'skin',
        descriptionKey: 'bleachDesc',
        defaultDescription: 'Gentle skin bleaching treatments to brighten complexion and even out skin tone.',
      },
    ],
  },
  {
    id: 'nails',
    name: 'Nails',
    titleKey: 'nailsTitle',
    descriptionKey: 'nailsDesc',
    services: [
      {
        id: 'manicure',
        name: 'Manicure',
        category: 'nails',
        descriptionKey: 'manicureDesc',
        defaultDescription: 'Complete hand care, cuticle grooming, nail shaping, and relaxing massage.',
      },
      {
        id: 'pedicure',
        name: 'Pedicure',
        category: 'nails',
        descriptionKey: 'pedicureDesc',
        defaultDescription: 'Therapeutic foot soak, exfoliation, nail care, and relaxing foot massage.',
      },
      {
        id: 'nail-art',
        name: 'Nail Art',
        category: 'nails',
        descriptionKey: 'nailArtDesc',
        defaultDescription: 'Creative and elegant nail designs, polish styling, and decorative nail accents.',
      },
    ],
  },
  {
    id: 'other',
    name: 'Other',
    titleKey: 'otherTitle',
    descriptionKey: 'otherDesc',
    services: [
      {
        id: 'threading',
        name: 'Threading',
        category: 'other',
        descriptionKey: 'threadingDesc',
        defaultDescription: 'Precise eyebrow shaping, upper lip, chin, and full-face threading services.',
      },
      {
        id: 'waxing',
        name: 'Waxing',
        category: 'other',
        descriptionKey: 'waxingDesc',
        defaultDescription: 'Gentle and hygienic hair removal for arms, legs, underarms, and full body.',
      },
    ],
  },
];

export const allServicesList = serviceCategories.flatMap((category) => category.services);

