'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/config/navigation.config';
import { salonConfig } from '@/config/salon.config';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageSwitcher } from './LanguageSwitcher';
import {
  XIcon,
  WhatsAppIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from '@/components/ui/Icons';
import { getWhatsAppHref, getPhoneHref } from '@/utils/contact';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { t } = useTranslation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const whatsappHref = getWhatsAppHref();
  const phoneHref = getPhoneHref();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      <div
        className="fixed inset-0 bg-ink/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-cream shadow-2xl flex flex-col z-10 overflow-y-auto border-l border-[#eee0e3]"
      >
        <div className="p-4 border-b border-primary-dark flex items-center justify-between bg-primary text-white">
          <div>
            <span className="font-extrabold text-base text-white block leading-tight">
              {salonConfig.name}
            </span>
            <span className="text-[11px] font-semibold text-gold-200">
              {t.common.femaleOnlyBadge}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.nav.closeMenu}
            className="w-8 h-8 rounded-lg bg-primary-dark text-white hover:bg-black/20 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="px-4 py-2.5 bg-white border-b border-[#f0e2e5] flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
            Language
          </span>
          <LanguageSwitcher />
        </div>

        <nav className="p-3.5 space-y-1 flex-1" aria-label="Mobile Navigation Menu">
          {navigationItems.map((item) => {
            const isActive =
              item.path === '/'
                ? pathname === '/'
                : pathname === item.path || pathname.startsWith(item.path);

            return (
              <Link
                key={item.id}
                href={item.path}
                onClick={onClose}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary-soft text-primary font-bold border border-[#f2d7dc]'
                    : 'text-muted hover:bg-white hover:text-ink'
                }`}
              >
                <span>{t.nav[item.labelKey]}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#f0e2e5] bg-white space-y-3">
          <div className="space-y-1.5 text-xs text-muted">
            <div className="flex items-center gap-1.5 font-medium">
              <ClockIcon className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{salonConfig.hours.timing} ({salonConfig.hours.days})</span>
            </div>
            <div className="flex items-start gap-1.5">
              <MapPinIcon className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>Sai Nagar, Badnera Road, Amravati</span>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <a
              href={phoneHref}
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 border-[1.5px] border-primary text-primary font-bold text-sm py-2 px-4 rounded-full hover:bg-primary-soft transition"
            >
              <PhoneIcon className="w-4 h-4 text-primary shrink-0" />
              <span>Call {salonConfig.contact.phoneDisplay}</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-bold text-sm py-2.5 px-4 rounded-full shadow-wa-btn hover:bg-whatsapp-hover transition"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
              <span>{t.nav.inquireWhatsApp}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
