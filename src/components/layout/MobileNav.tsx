'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/config/navigation.config';
import { salonConfig } from '@/config/salon.config';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  XIcon,
  WhatsAppIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  SparklesIcon,
} from '@/components/ui/Icons';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { t } = useTranslation();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close drawer on escape key press
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
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10 overflow-y-auto"
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-cream-200 flex items-center justify-between bg-cream-50/50">
          <div>
            <span className="font-bold text-lg text-slate-900 block leading-tight">
              {salonConfig.name}
            </span>
            <span className="text-xs font-medium text-primary-700">
              {t.common.femaleOnlyBadge}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.nav.closeMenu}
            className="w-10 h-10 rounded-xl bg-white border border-cream-200 text-slate-700 hover:text-slate-900 hover:bg-cream-100 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Language Selection Bar */}
        <div className="px-4 py-3 bg-cream-50 border-b border-cream-200 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Language
          </span>
          <LanguageSwitcher />
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-1 flex-1" aria-label="Mobile Navigation Menu">
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
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium min-h-[48px] transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-800 font-semibold'
                    : 'text-slate-700 hover:bg-cream-100 hover:text-slate-900'
                }`}
              >
                <span>{t.nav[item.labelKey]}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-primary-600" />}
              </Link>
            );
          })}
        </nav>

        {/* Parlour Info & CTAs */}
        <div className="p-4 border-t border-cream-200 bg-cream-50/70 space-y-4">
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <ClockIcon className="w-4 h-4 text-primary-600 shrink-0" />
              <span>{salonConfig.hours.timing} ({salonConfig.hours.days})</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPinIcon className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
              <span>Sai Nagar, Badnera Road, Amravati</span>
            </div>
          </div>

          <div className="space-y-2">
            <Button
              href="/contact/"
              variant="whatsapp"
              fullWidth
              size="md"
              icon={<WhatsAppIcon className="w-5 h-5" />}
              onClick={onClose}
            >
              {t.nav.inquireWhatsApp}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

