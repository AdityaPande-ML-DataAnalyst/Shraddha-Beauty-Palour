'use client';

import React from 'react';
import Link from 'next/link';
import { salonConfig } from '@/config/salon.config';
import { navigationItems } from '@/config/navigation.config';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import {
  MapPinIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
  SparklesIcon,
  ExternalLinkIcon,
} from '@/components/ui/Icons';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                S
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {salonConfig.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {salonConfig.tagline}. A dedicated, peaceful beauty parlour exclusively for women and girls in Sai Nagar, Amravati.
            </p>
            <div className="pt-1">
              <Badge variant="primary" className="bg-primary-950/80 text-primary-200 border-primary-800">
                <SparklesIcon className="w-3.5 h-3.5" />
                {t.common.femaleOnlyBadge}
              </Badge>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {t.common.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 py-1"
                  >
                    <span>{t.nav[item.labelKey]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Address */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {t.common.hoursLabel} &amp; Location
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <ClockIcon className="w-4 h-4 text-primary-400 shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white block">
                    {salonConfig.hours.timing}
                  </span>
                  <span className="text-xs text-slate-400">{salonConfig.hours.days}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-primary-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs leading-relaxed block text-slate-300">
                    {salonConfig.address.fullFormatted}
                  </span>
                  <a
                    href={salonConfig.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-secondary-400 hover:text-secondary-300 font-medium mt-1.5 underline underline-offset-4"
                  >
                    <span>{t.common.getDirections}</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              {t.nav.contact}
            </h3>
            <div className="space-y-3 text-sm">
              {/* Email */}
              <div className="flex items-start gap-2.5">
                <MailIcon className="w-4 h-4 text-primary-400 shrink-0 mt-1" />
                <a
                  href={`mailto:${salonConfig.contact.email}`}
                  className="text-xs text-slate-300 hover:text-white break-all transition-colors"
                >
                  {salonConfig.contact.email}
                </a>
              </div>

              {/* Phone Status Note */}
              <div className="flex items-start gap-2.5">
                <PhoneIcon className="w-4 h-4 text-primary-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-300 font-mono block">
                    {salonConfig.contact.phoneDisplay}
                  </span>
                  <span className="text-[11px] text-slate-500 block leading-tight">
                    (Direct phone being updated)
                  </span>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-whatsapp/20 text-whatsapp border border-whatsapp/40 text-xs font-semibold hover:bg-whatsapp hover:text-white transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>{t.nav.inquireWhatsApp}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright Banner */}
        <div className="pt-8 text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed bg-slate-850 p-3.5 rounded-xl border border-slate-800 text-slate-400">
            <span className="font-semibold text-slate-300">Appointment Notice: </span>
            {t.common.disclaimerSubjectToConfirmation}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p>
              &copy; {currentYear} {salonConfig.name}. {t.common.allRightsReserved}
            </p>
            <p className="text-slate-400 text-xs">
              Sai Nagar, Amravati, Maharashtra 444607
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

