'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SupportedLocale } from '@/types/i18n';

interface LanguageSwitcherProps {
  className?: string;
  isCompact?: boolean;
}

const languages: { code: SupportedLocale; label: string; shortLabel: string }[] = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'mr', label: 'मराठी', shortLabel: 'मर' },
  { code: 'hi', label: 'हिंदी', shortLabel: 'हि' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  isCompact = false,
}) => {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-0.5 text-xs font-bold text-muted ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      {languages.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLocale(lang.code)}
            aria-pressed={isActive}
            className={`px-2 py-1.5 rounded-lg transition-colors cursor-pointer ${
              isActive
                ? 'bg-primary-soft text-primary font-bold'
                : 'text-muted hover:text-ink hover:bg-cream-100'
            }`}
          >
            {isCompact ? lang.shortLabel : lang.label}
          </button>
        );
      })}
    </div>
  );
};
