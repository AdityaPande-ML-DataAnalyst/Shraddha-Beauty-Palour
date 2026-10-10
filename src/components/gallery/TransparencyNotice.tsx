'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheckIcon } from '@/components/ui/Icons';

export const TransparencyNotice: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card className="reveal bg-blush-50/70 border border-primary-200/80 p-3.5 sm:p-4 max-w-4xl mx-auto">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
          <ShieldCheckIcon className="w-4 h-4" />
        </div>
        <div className="space-y-1 flex-1">
          <div className="flex items-center gap-2">
            <Badge variant="primary" className="text-[10px] py-0 px-2">
              {t.galleryPage.noticeBadge}
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {t.galleryPage.transparencyNotice}
          </p>
        </div>
      </div>
    </Card>
  );
};
