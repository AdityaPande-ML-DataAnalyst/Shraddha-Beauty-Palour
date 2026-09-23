export type ServiceCategoryId = 'hair' | 'makeup' | 'skin' | 'nails' | 'other';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategoryId;
  descriptionKey: string;
  defaultDescription: string;
  suitableFor?: string;
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  name: string;
  titleKey: string;
  descriptionKey: string;
  services: ServiceItem[];
}

