'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SupportedLocale } from '@/types/i18n';
import { GlobeIcon } from '@/components/ui/Icons';

interface LanguageSwitcherProps {
  className?: string;
  isCompact?: boolean;
}

const languages: { code: SupportedLocale; label: string; shortLabel: string }[] = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'mr', label: 'मराठी', shortLabel: 'मराठी' },
  { code: 'hi', label: 'हिंदी', shortLabel: 'हिंदी' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  isCompact = false,
}) => {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-xl bg-cream-100 p-1 border border-cream-200 ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <span className="pl-2 pr-1 text-slate-500 hidden sm:inline-flex items-center">
        <GlobeIcon className="w-3.5 h-3.5" />
      </span>
      <div className="flex items-center gap-1">
        {languages.map((lang) => {
          const isActive = locale === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLocale(lang.code)}
              aria-pressed={isActive}
              className={`px-2.5 py-1 text-xs sm:text-sm font-medium rounded-lg transition-all min-h-[36px] sm:min-h-[32px] flex items-center justify-center ${
                isActive
                  ? 'bg-white text-primary-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-cream-200/60'
              }`}
            >
              {isCompact ? lang.shortLabel : lang.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

