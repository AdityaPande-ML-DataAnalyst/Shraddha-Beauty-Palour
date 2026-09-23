'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheckIcon } from '@/components/ui/Icons';

export const TransparencyNotice: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card className="bg-cream-100/70 border border-cream-300 p-6 sm:p-7">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
          <ShieldCheckIcon className="w-6 h-6" />
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-2">
            <Badge variant="primary" className="text-xs">
              {t.galleryPage.noticeBadge}
            </Badge>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Work In Progress
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {t.galleryPage.transparencyNotice}
          </p>
        </div>
      </div>
    </Card>
  );
};

