import React from 'react';
import { salonConfig } from '@/config/salon.config';

export const JsonLd: React.FC = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: salonConfig.name,
    description:
      'Female-only beauty parlour in Sai Nagar, Amravati offering hair, skin, makeup, and nail services exclusively for women.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: salonConfig.address.plot + ', ' + salonConfig.address.area,
      addressLocality: salonConfig.address.city,
      addressRegion: salonConfig.address.state,
      postalCode: salonConfig.address.pincode,
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: salonConfig.hours.openTime,
        closes: salonConfig.hours.closeTime,
      },
    ],
    email: salonConfig.contact.email,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

