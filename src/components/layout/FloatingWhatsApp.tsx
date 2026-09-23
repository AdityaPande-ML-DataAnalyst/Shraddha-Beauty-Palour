'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { WhatsAppIcon } from '@/components/ui/Icons';

export const FloatingWhatsApp: React.FC = () => {
  const { t } = useTranslation();

  return (
    <aside
      className="fixed bottom-6 right-6 z-40 flex items-center group"
      aria-label="WhatsApp Appointment Assistance"
    >
      <Link
        href="/contact/"
        className="flex items-center gap-2.5 bg-whatsapp text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-whatsapp-hover transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40 active:scale-95"
        aria-label={t.common.inquireViaWhatsApp}
      >
        <WhatsAppIcon className="w-6 h-6 shrink-0" />
        <span className="text-sm font-semibold tracking-wide hidden sm:inline-block pr-1">
          {t.nav.inquireWhatsApp}
        </span>
      </Link>
    </aside>
  );
};

