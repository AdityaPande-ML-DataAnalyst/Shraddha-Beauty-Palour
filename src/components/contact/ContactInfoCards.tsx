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
  InfoIcon,
  ExternalLinkIcon,
} from '@/components/ui/Icons';

export const ContactInfoCards: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {/* Address Card */}
      <Card className="hoverEffect flex items-start gap-4 p-6">
        <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
          <MapPinIcon className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-base font-bold text-slate-900">{t.common.addressLabel}</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {salonConfig.address.fullFormatted}
          </p>
          <a
            href={salonConfig.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 hover:text-primary-800 pt-2"
          >
            <span>{t.common.getDirections} (Google Maps)</span>
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </Card>

      {/* Hours Card */}
      <Card className="hoverEffect flex items-start gap-4 p-6">
        <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
          <ClockIcon className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-base font-bold text-slate-900">{t.common.hoursLabel}</h4>
          <p className="text-sm font-semibold text-slate-800">
            {salonConfig.hours.timing}
          </p>
          <p className="text-xs text-slate-500">{salonConfig.hours.days}</p>
        </div>
      </Card>

      {/* Email Card */}
      <Card className="hoverEffect flex items-start gap-4 p-6">
        <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
          <MailIcon className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-base font-bold text-slate-900">{t.common.emailLabel}</h4>
          <a
            href={`mailto:${salonConfig.contact.email}`}
            className="text-sm text-primary-700 hover:underline block break-all font-medium"
          >
            {salonConfig.contact.email}
          </a>
          <p className="text-xs text-slate-500">For general inquiries and information</p>
        </div>
      </Card>

      {/* Phone & WhatsApp Card */}
      <Card className="hoverEffect flex items-start gap-4 p-6">
        <div className="w-12 h-12 rounded-2xl bg-whatsapp/10 text-whatsapp-dark flex items-center justify-center shrink-0">
          <WhatsAppIcon className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-base font-bold text-slate-900">Phone &amp; WhatsApp</h4>
          <p className="text-sm font-mono text-slate-800">
            {salonConfig.contact.phoneDisplay}
          </p>
          <p className="text-xs text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 inline-block">
            {t.common.placeholderPhoneNote}
          </p>
        </div>
      </Card>
    </div>
  );
};

