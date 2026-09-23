'use client';

import React from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/types/services';
import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppIcon, SparklesIcon } from '@/components/ui/Icons';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { t } = useTranslation();

  return (
    <Card hoverEffect className="flex flex-col justify-between h-full p-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary" className="uppercase text-[11px] font-semibold tracking-wider">
            {service.category}
          </Badge>
          <span className="text-primary-600 opacity-60">
            <SparklesIcon className="w-4 h-4" />
          </span>
        </div>

        <div>
          <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
            {service.name}
          </h4>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {service.defaultDescription}
          </p>
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-cream-100 flex items-center justify-between gap-3">
        <span className="text-xs text-slate-500 italic">
          Price upon consultation
        </span>
        <Link
          href={`/contact/?service=${service.id}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-whatsapp text-white text-xs font-semibold hover:bg-whatsapp-hover transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          <span>Inquire</span>
        </Link>
      </div>
    </Card>
  );
};

