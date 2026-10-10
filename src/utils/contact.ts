import { salonConfig } from '@/config/salon.config';

/**
 * Returns direct WhatsApp wa.me URL.
 * If customText is provided, it is safely encoded in the text parameter.
 */
export function getWhatsAppHref(customText?: string): string {
  const phone = (salonConfig.contact.whatsappNumber || '919890159234').replace(/[^0-9]/g, '');
  if (customText) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(customText)}`;
  }
  return `https://wa.me/${phone}`;
}

/**
 * Returns direct telephone dial URI for mobile dialers and desktop calling apps.
 */
export function getPhoneHref(): string {
  const dial = (salonConfig.contact.phoneDial || '+919890159234').replace(/\s+/g, '');
  return `tel:${dial}`;
}
