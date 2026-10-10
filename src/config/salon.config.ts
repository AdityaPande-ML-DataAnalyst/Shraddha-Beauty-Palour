import { SalonConfig } from '@/types/config';

export const salonConfig: SalonConfig = {
  name: 'Shraddha Beauty Parlour',
  tagline: 'Beauty, Style & Confidence',
  type: 'Female-only Beauty Parlour',
  address: {
    plot: 'Plot No. 7, House No. 2270',
    area: 'Vrundavan Vasahat, Badnera Road, MH MSH 6, Dande Colony, Guruchhaya Colony, Sai Nagar',
    city: 'Amravati',
    state: 'Maharashtra',
    pincode: '444607',
    country: 'India',
    fullFormatted:
      'Plot No. 7, House No. 2270, Vrundavan Vasahat, Badnera Road, MH MSH 6, Dande Colony, Guruchhaya Colony, Sai Nagar, Amravati, Maharashtra 444607',
  },
  contact: {
    phoneDisplay: '+91 9890159234',
    isPhonePlaceholder: false,
    phoneDial: '+919890159234',
    whatsappDisplay: '+91 9890159234',
    whatsappNumber: '919890159234',
    email: 'shraddhabeautyparlour.amravati@gmail.com',
  },
  hours: {
    days: 'All days',
    timing: '9:00 AM – 9:00 PM',
    openTime: '09:00',
    closeTime: '21:00',
  },
  maps: {
    isExactPin: true, // Verified Google Maps destination provided
    queryAddress:
      'Plot No. 7, House No. 2270, Vrundavan Vasahat, Badnera Road, MH MSH 6, Dande Colony, Guruchhaya Colony, Sai Nagar, Amravati, Maharashtra 444607',
    directionsUrl:
      'https://www.google.com/maps?vet=10CAAQoqAOahcKEwiQ8Ozh_YOXAxUAAAAAHQAAAAAQGA..i&fvr=1&pvq=Cg0vZy8xMWYydjh6YmR0Ih0KF3NocmFkZGhhIGJlYXV0eSBwYXJsb3VyEAIYAw&lqi=ChdzaHJhZGRoYSBiZWF1dHkgcGFybG91ckiZ07yki62AgAhaJRAAEAEQAhgAGAEYAiIXc2hyYWRkaGEgYmVhdXR5IHBhcmxvdXKSAQxiZWF1dHlfc2Fsb24&cs=1&um=1&ie=UTF8&fb=1&gl=in&sa=X&geocode=KXf76Nssu9Y7MXQxj8cSo_6T&daddr=Plot+no.+7,house+no.+2270,+Vrundavan+Vasahat,+Badnera+road,+MH+MSH+6,+Dande+Colony,+Guruchhaya+Colony,+Sai+Nagar,+Amravati,+Maharashtra+444607',
    embedUrl:
      'https://maps.google.com/maps?q=Sai+Nagar,+Amravati,+Maharashtra+444607&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
};
