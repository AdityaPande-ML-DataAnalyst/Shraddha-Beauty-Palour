'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/Card';
import { salonConfig } from '@/config/salon.config';
import { getWhatsAppHref } from '@/utils/contact';
import { InfoIcon, WhatsAppIcon } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';

export const PricingNotice: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card className="reveal bg-primary-soft/70 border border-primary-200/90 p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary flex items-center justify-center shrink-0 mt-0.5">
            <InfoIcon className="w-4 h-4" />
          </div>
          <div className="space-y-0.5 max-w-2xl">
            <h3 className="text-sm sm:text-base font-bold text-primary-950">
              {t.common.pricingNoticeTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {t.common.pricingNoticeBody}
            </p>
          </div>
        </div>
        <div className="shrink-0 w-full sm:w-auto">
          <Button
            href={getWhatsAppHref(
              `Hello ${salonConfig.name},\n\nI would like to inquire about service pricing and availability.`
            )}
            isExternal
            variant="whatsapp"
            size="sm"
            icon={<WhatsAppIcon className="w-3.5 h-3.5 fill-current" />}
          >
            {t.common.inquireViaWhatsApp}
          </Button>
        </div>
      </div>
    </Card>
  );
};
