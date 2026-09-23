'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/Card';
import { InfoIcon, WhatsAppIcon } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';

export const PricingNotice: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card className="bg-primary-50/50 border border-primary-200/80 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center shrink-0 mt-0.5">
            <InfoIcon className="w-5 h-5" />
          </div>
          <div className="space-y-1 max-w-2xl">
            <h3 className="text-base sm:text-lg font-bold text-primary-950">
              {t.common.pricingNoticeTitle}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {t.common.pricingNoticeBody}
            </p>
          </div>
        </div>
        <div className="shrink-0 w-full sm:w-auto">
          <Button
            href="/contact/"
            variant="whatsapp"
            size="md"
            icon={<WhatsAppIcon className="w-4 h-4" />}
          >
            {t.common.inquireViaWhatsApp}
          </Button>
        </div>
      </div>
    </Card>
  );
};

