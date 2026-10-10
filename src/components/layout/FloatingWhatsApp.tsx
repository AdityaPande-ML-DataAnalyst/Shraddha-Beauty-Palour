'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { getWhatsAppHref } from '@/utils/contact';

export const FloatingWhatsApp: React.FC = () => {
  const { t } = useTranslation();
  const whatsappHref = getWhatsAppHref();

  return (
    <aside
      className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-30"
      aria-label="WhatsApp Appointment Assistance"
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.common.inquireViaWhatsApp}
        className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-full bg-whatsapp text-white flex items-center justify-center shadow-wa-fab animate-wa-pulse hover:scale-105 active:scale-95 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
      </a>
    </aside>
  );
};
