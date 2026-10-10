'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { useTranslation } from '@/hooks/useTranslation';
import {
  MapPinIcon,
  ClockIcon,
  WhatsAppIcon,
  PhoneIcon,
  ExternalLinkIcon,
} from '@/components/ui/Icons';
import { getWhatsAppHref, getPhoneHref } from '@/utils/contact';

export const LocationSummary: React.FC = () => {
  const { t } = useTranslation();
  const whatsappHref = getWhatsAppHref();
  const phoneHref = getPhoneHref();

  return (
    <section id="contact" className="py-16 sm:py-20 bg-cream">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-11 reveal">
          <span className="text-xs font-extrabold tracking-[0.12em] uppercase text-gold block mb-2">
            Find Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-ink">
            {t.home.locationTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-9 items-stretch">
          <div className="space-y-3.5">
            <div
              style={{ transitionDelay: '50ms' }}
              className="reveal bg-white border border-[#f1e5e8] rounded-2xl p-4 sm:p-5 flex gap-3.5 items-start shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/5 hover:border-primary-200/60"
            >
              <div className="w-[38px] h-[38px] rounded-[10px] bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <MapPinIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-ink mb-1">
                  {t.common.addressLabel}
                </h3>
                <p className="text-[12.5px] text-muted leading-relaxed">
                  {salonConfig.address.fullFormatted}
                </p>
              </div>
            </div>

            <div
              style={{ transitionDelay: '150ms' }}
              className="reveal bg-white border border-[#f1e5e8] rounded-2xl p-4 sm:p-5 flex gap-3.5 items-start shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/5 hover:border-primary-200/60"
            >
              <div className="w-[38px] h-[38px] rounded-[10px] bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <ClockIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-ink mb-1">
                  {t.common.hoursLabel}
                </h3>
                <p className="text-[12.5px] text-muted leading-relaxed">
                  {salonConfig.hours.timing}, {salonConfig.hours.days}
                </p>
              </div>
            </div>

            {/* WhatsApp Card - Direct wa.me link */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: '250ms' }}
              className="reveal bg-white border border-[#f1e5e8] rounded-2xl p-4 sm:p-5 flex gap-3.5 items-start shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/5 hover:border-primary-200/60 group block"
            >
              <div className="w-[38px] h-[38px] rounded-[10px] bg-primary-soft text-primary flex items-center justify-center shrink-0 group-hover:bg-whatsapp group-hover:text-white transition-colors">
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-ink mb-1 group-hover:text-primary transition-colors">
                  WhatsApp
                </h3>
                <p className="text-[12.5px] text-muted leading-relaxed">
                  Fastest way to reach us for inquiries &amp; appointment confirmation
                </p>
              </div>
            </a>

            {/* Phone Card - Direct tel: dialer link */}
            <a
              href={phoneHref}
              style={{ transitionDelay: '350ms' }}
              className="reveal bg-white border border-[#f1e5e8] rounded-2xl p-4 sm:p-5 flex gap-3.5 items-start shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/5 hover:border-primary-200/60 group block"
            >
              <div className="w-[38px] h-[38px] rounded-[10px] bg-primary-soft text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <PhoneIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-ink mb-1 group-hover:text-primary transition-colors">
                  {t.common.phoneLabel}
                </h3>
                <p className="text-[12.5px] text-muted leading-relaxed">
                  {salonConfig.contact.phoneDisplay}
                </p>
              </div>
            </a>
          </div>

          <div
            style={{ transitionDelay: '200ms' }}
            className="reveal rounded-2xl overflow-hidden border border-[#f1e5e8] min-h-[340px] h-full bg-gradient-to-br from-[#f5eced] to-white flex flex-col justify-between p-3.5 shadow-2xs"
          >
            <div className="rounded-xl overflow-hidden border border-[#f1e5e8] flex-1 min-h-[260px] bg-cream relative">
              <iframe
                title="Shraddha Beauty Parlour Map Location"
                src={salonConfig.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[260px]"
              />
            </div>

            <div className="pt-3">
              <a
                href={salonConfig.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white text-[13.5px] font-bold py-2.5 px-4 rounded-xl hover:bg-primary-dark transition shadow-sm"
              >
                <span>{t.common.getDirections} (Google Maps)</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
