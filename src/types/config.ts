export interface SalonAddress {
  plot: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  fullFormatted: string;
}

export interface SalonContact {
  phoneDisplay: string;
  isPhonePlaceholder: boolean;
  phoneDial: string;
  whatsappDisplay: string;
  whatsappNumber: string;
  email: string;
}

export interface SalonHours {
  days: string;
  timing: string;
  openTime: string;
  closeTime: string;
}

export interface SalonMaps {
  isExactPin: boolean;
  queryAddress: string;
  directionsUrl: string;
  embedUrl: string;
}

export interface SalonConfig {
  name: string;
  tagline: string;
  type: string;
  address: SalonAddress;
  contact: SalonContact;
  hours: SalonHours;
  maps: SalonMaps;
}

