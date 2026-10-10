'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { getWhatsAppHref } from '@/utils/contact';
import { ServiceItem } from '@/types/services';
import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppIcon, SparklesIcon } from '@/components/ui/Icons';

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  style?: React.CSSProperties;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = '', style }) => {
  const { t } = useTranslation();

  return (
    <Card
      hoverEffect
      style={style}
      className={`reveal flex flex-col justify-between h-full p-4 sm:p-4.5 bg-white/95 rounded-xl border border-cream-200/90 shadow-2xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/5 hover:border-primary-200/60 ${className}`}
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary" className="uppercase text-[10px] font-bold tracking-wider py-0 px-2">
            {service.category}
          </Badge>
          <span className="text-secondary-500 opacity-70">
            <SparklesIcon className="w-3.5 h-3.5" />
          </span>
        </div>

        <div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-primary-800 transition-colors">
            {service.name}
          </h4>
          <p className="mt-1 text-xs text-slate-600 leading-relaxed line-clamp-2">
            {service.defaultDescription}
          </p>
        </div>
      </div>

      <div className="pt-3 mt-3 border-t border-cream-100 flex items-center justify-between gap-2">
        <span className="text-[11px] text-slate-500 italic">
          Upon consultation
        </span>
        <a
          href={getWhatsAppHref(
            `Hello ${salonConfig.name},\n\nI would like to inquire about the ${service.name} service.\n\nPlease let me know the availability.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-whatsapp text-white text-xs font-semibold hover:bg-whatsapp-hover transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp"
        >
          <WhatsAppIcon className="w-3 h-3 fill-current" />
          <span>Inquire</span>
        </a>
      </div>
    </Card>
  );
};
