'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/Button';
import { MapPinIcon, ExternalLinkIcon, InfoIcon } from '@/components/ui/Icons';

export const MapSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-3xl border border-cream-200 overflow-hidden shadow-warm">
      <div className="p-6 sm:p-8 border-b border-cream-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            {t.contactPage.mapSectionTitle}
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            {t.contactPage.mapSectionSubtitle}
          </p>
        </div>
        <Button
          href={salonConfig.maps.directionsUrl}
          isExternal
          variant="outline"
          size="md"
          icon={<ExternalLinkIcon className="w-4 h-4" />}
        >
          {t.common.getDirections}
        </Button>
      </div>

      {/* Location Advisory (displayed only if exact pin is pending) */}
      {!salonConfig.maps.isExactPin && (
        <div className="px-6 py-3 bg-cream-50 border-b border-cream-200 flex items-start gap-2.5 text-xs text-slate-600">
          <InfoIcon className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
          <p>{t.common.locationNoteGeneral}</p>
        </div>
      )}

      {/* Embedded Map (Zero API Key) */}
      <div className="relative w-full h-[360px] sm:h-[420px] bg-cream-100">
        <iframe
          title="Shraddha Beauty Parlour General Location"
          src={salonConfig.maps.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

