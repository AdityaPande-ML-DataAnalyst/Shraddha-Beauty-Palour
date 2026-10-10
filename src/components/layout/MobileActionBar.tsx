'use client';

import React from 'react';
import { salonConfig } from '@/config/salon.config';
import { useTranslation } from '@/hooks/useTranslation';
import { PhoneIcon, WhatsAppIcon } from '@/components/ui/Icons';
import { getWhatsAppHref, getPhoneHref } from '@/utils/contact';

export const MobileActionBar: React.FC = () => {
  const { t } = useTranslation();
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsAppHref();

  return (
    <aside
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#eee0e3] px-3.5 py-2.5 flex items-center gap-2.5 lg:hidden shadow-[0_-4px_16px_rgba(35,31,32,0.08)]"
      aria-label="Quick Mobile Actions"
    >
      {/* Call Button - Native dialer link */}
      <a
        href={phoneHref}
        className="flex-1 min-h-[46px] inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full border-[1.5px] border-primary text-primary font-bold text-[13.5px] bg-white hover:bg-primary-soft active:scale-[0.98] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <PhoneIcon className="w-4 h-4 text-primary shrink-0" />
        <span>{t.common.callNow || 'Call Now'}</span>
      </a>

      {/* WhatsApp Button - Direct wa.me link */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-h-[46px] inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-whatsapp text-white font-bold text-[13.5px] shadow-wa-btn hover:bg-whatsapp-hover active:scale-[0.98] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp"
      >
        <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
};

