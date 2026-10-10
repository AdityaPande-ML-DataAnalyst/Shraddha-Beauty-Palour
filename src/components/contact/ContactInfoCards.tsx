'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/Card';
import {
  MapPinIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
  ExternalLinkIcon,
} from '@/components/ui/Icons';
import { getWhatsAppHref, getPhoneHref } from '@/utils/contact';

export const ContactInfoCards: React.FC = () => {
  const { t } = useTranslation();
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsAppHref();

  return (
    <div className="space-y-3.5">
      {/* Address Card */}
      <Card
        hoverEffect
        style={{ transitionDelay: '50ms' }}
        className="reveal flex items-start gap-3 p-4 bg-white/95"
      >
        <div className="w-8 h-8 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
          <MapPinIcon className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t.common.addressLabel}
          </h4>
          <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
            {salonConfig.address.fullFormatted}
          </p>
          <a
            href={salonConfig.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark pt-1 transition-colors"
          >
            <span>{t.common.getDirections} (Google Maps)</span>
            <ExternalLinkIcon className="w-3 h-3" />
          </a>
        </div>
      </Card>

      {/* Hours Card */}
      <Card
        hoverEffect
        style={{ transitionDelay: '125ms' }}
        className="reveal flex items-start gap-3 p-4 bg-white/95"
      >
        <div className="w-8 h-8 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
          <ClockIcon className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t.common.hoursLabel}
          </h4>
          <p className="text-xs sm:text-sm font-bold text-slate-900">
            {salonConfig.hours.timing}
          </p>
          <p className="text-[11px] text-slate-500">{salonConfig.hours.days}</p>
        </div>
      </Card>

      {/* Email Card */}
      <Card
        hoverEffect
        style={{ transitionDelay: '200ms' }}
        className="reveal flex items-start gap-3 p-4 bg-white/95"
      >
        <div className="w-8 h-8 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
          <MailIcon className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t.common.emailLabel}
          </h4>
          <a
            href={`mailto:${salonConfig.contact.email}`}
            className="text-xs text-primary hover:text-primary-dark hover:underline break-all block transition-colors"
          >
            {salonConfig.contact.email}
          </a>
        </div>
      </Card>

      {/* Phone Call Card - Native dialer link */}
      <Card
        hoverEffect
        style={{ transitionDelay: '275ms' }}
        className="reveal flex items-start gap-3 p-4 bg-white/95"
      >
        <div className="w-8 h-8 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
          <PhoneIcon className="w-4 h-4" />
        </div>
        <div className="space-y-0.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {t.common.phoneLabel}
          </h4>
          <a
            href={phoneHref}
            className="text-xs sm:text-sm font-bold text-primary hover:text-primary-dark hover:underline block transition-colors"
          >
            {salonConfig.contact.phoneDisplay}
          </a>
          <p className="text-[11px] text-slate-500">
            {salonConfig.hours.timing} ({salonConfig.hours.days})
          </p>
        </div>
      </Card>

      {/* WhatsApp Card - Direct wa.me link */}
      <Card
        hoverEffect
        style={{ transitionDelay: '350ms' }}
        className="reveal flex items-start gap-3 p-4 bg-white/95"
      >
        <div className="w-8 h-8 rounded-lg bg-[#e7f9ee] text-whatsapp flex items-center justify-center shrink-0 mt-0.5">
          <WhatsAppIcon className="w-4 h-4 fill-current" />
        </div>
        <div className="space-y-0.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            WhatsApp
          </h4>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-whatsapp hover:underline block"
          >
            {salonConfig.contact.whatsappDisplay}
          </a>
          <p className="text-[11px] text-slate-500">
            Quick inquiries &amp; appointment availability
          </p>
        </div>
      </Card>
    </div>
  );
};
