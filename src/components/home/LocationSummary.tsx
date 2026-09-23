'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  MapPinIcon,
  ClockIcon,
  ExternalLinkIcon,
  InfoIcon,
} from '@/components/ui/Icons';

export const LocationSummary: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeader
          badge={
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              Visit Us
            </span>
          }
          title={t.home.locationTitle}
          subtitle={t.home.locationSubtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Details Card */}
          <div className="lg:col-span-6 space-y-6">
            <Card className="p-6 sm:p-8 bg-cream-50/60 border border-cream-200 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{t.common.addressLabel}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1">
                      {salonConfig.address.fullFormatted}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-cream-200">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{t.common.hoursLabel}</h3>
                    <p className="text-base font-bold text-slate-900 mt-1">
                      {salonConfig.hours.timing}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      {salonConfig.hours.days}
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Advisory (displayed only if exact pin is pending) */}
              {!salonConfig.maps.isExactPin && (
                <div className="p-3 bg-white rounded-xl border border-cream-200 flex items-start gap-2 text-xs text-slate-600">
                  <InfoIcon className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                  <p>{t.common.locationNoteGeneral}</p>
                </div>
              )}

              <div className="pt-2">
                <Button
                  href={salonConfig.maps.directionsUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  fullWidth
                  icon={<ExternalLinkIcon className="w-4 h-4" />}
                >
                  {t.common.getDirections} (Google Maps)
                </Button>
              </div>
            </Card>
          </div>

          {/* Map Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-cream-200 overflow-hidden shadow-warm h-[340px] sm:h-[380px] bg-cream-100">
              <iframe
                title="Shraddha Beauty Parlour General Map Location"
                src={salonConfig.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

