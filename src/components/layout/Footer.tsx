'use client';

import React from 'react';
import Link from 'next/link';
import { salonConfig } from '@/config/salon.config';
import { navigationItems } from '@/config/navigation.config';
import { useTranslation } from '@/hooks/useTranslation';
import { ExternalLinkIcon } from '@/components/ui/Icons';
import { getWhatsAppHref, getPhoneHref } from '@/utils/contact';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-[#efe6e8] pt-12 pb-7 mt-5 border-t border-[#3a3436]/60">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8 mb-8">
          <div>
            <h5 className="text-[13px] tracking-[0.06em] uppercase text-gold font-bold mb-3.5">
              {salonConfig.name}
            </h5>
            <p className="text-[13px] text-[#cdbfc3] leading-relaxed max-w-sm mb-3">
              A female-only beauty parlour in Sai Nagar, Amravati — beauty, style &amp; confidence for every woman.
            </p>
            <p className="text-xs text-[#8a7d80]">
              {salonConfig.hours.timing} ({salonConfig.hours.days})
            </p>
          </div>

          <div>
            <h5 className="text-[13px] tracking-[0.06em] uppercase text-gold font-bold mb-3.5">
              {t.common.quickLinks}
            </h5>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className="text-[13px] text-[#cdbfc3] hover:text-white transition-colors leading-loose block"
                >
                  {t.nav[item.labelKey]}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-[13px] tracking-[0.06em] uppercase text-gold font-bold mb-3.5">
              Contact &amp; Location
            </h5>
            <p className="text-[13px] text-[#cdbfc3] leading-loose">
              {salonConfig.hours.timing}, {salonConfig.hours.days}
            </p>
            <p className="text-[13px] text-[#cdbfc3] leading-loose">
              Plot No. 7, Vrundavan Vasahat, Sai Nagar, Amravati 444607
            </p>
            <div className="pt-1.5 space-y-1">
              <a
                href={getPhoneHref()}
                className="text-[13px] text-[#cdbfc3] hover:text-white transition-colors leading-loose block font-medium"
              >
                Call: {salonConfig.contact.phoneDisplay}
              </a>
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-whatsapp hover:underline transition-colors leading-loose block font-semibold"
              >
                WhatsApp: {salonConfig.contact.whatsappDisplay}
              </a>
            </div>
            <div className="pt-2">
              <a
                href={salonConfig.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:underline font-semibold"
              >
                <span>{t.common.getDirections} (Google Maps)</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3a3436] pt-4.5 text-[11.5px] text-[#8a7d80] text-center leading-relaxed">
          <span>Appointment inquiries are subject to availability and confirmation by the parlour.</span>
          <span className="block mt-1">
            &copy; {currentYear} {salonConfig.name}. {t.common.allRightsReserved}
          </span>
        </div>
      </div>
    </footer>
  );
};
