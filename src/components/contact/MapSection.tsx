'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/Button';
import { ExternalLinkIcon, InfoIcon } from '@/components/ui/Icons';

export const MapSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="reveal bg-white/95 rounded-2xl border border-cream-200 overflow-hidden shadow-warm transition-all duration-300 ease-out hover:shadow-lg hover:border-primary-200/60">
      <div className="p-4 sm:p-5 border-b border-cream-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-ink">
            {t.contactPage.mapSectionTitle}
          </h3>
          <p className="text-xs text-slate-600 mt-0.5">
            {t.contactPage.mapSectionSubtitle}
          </p>
        </div>
        <Button
          href={salonConfig.maps.directionsUrl}
          isExternal
          variant="outline"
          size="sm"
          icon={<ExternalLinkIcon className="w-3.5 h-3.5" />}
        >
          {t.common.getDirections}
        </Button>
      </div>

      {/* Location Advisory (displayed only if exact pin is pending) */}
      {!salonConfig.maps.isExactPin && (
        <div className="px-4 py-2 bg-cream-50 border-b border-cream-200 flex items-start gap-2 text-xs text-slate-600">
          <InfoIcon className="w-3.5 h-3.5 text-primary-600 shrink-0 mt-0.5" />
          <p>{t.common.locationNoteGeneral}</p>
        </div>
      )}

      {/* Embedded Map */}
      <div className="relative w-full h-[260px] sm:h-[320px] bg-cream-100">
        <iframe
          title="Shraddha Beauty Parlour Map Location"
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
