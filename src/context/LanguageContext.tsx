'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLocale, TranslationDictionary } from '@/types/i18n';
import { enDictionary } from '@/dictionaries/en';
import { mrDictionary } from '@/dictionaries/mr';
import { hiDictionary } from '@/dictionaries/hi';

interface LanguageContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: TranslationDictionary;
}

const dictionaries: Record<SupportedLocale, TranslationDictionary> = {
  en: enDictionary,
  mr: mrDictionary,
  hi: hiDictionary,
};

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: enDictionary,
});

const STORAGE_KEY = 'sbp_selected_locale';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>('en');

  useEffect(() => {
    try {
      const savedLocale = localStorage.getItem(STORAGE_KEY) as SupportedLocale | null;
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'mr' || savedLocale === 'hi')) {
        setLocaleState(savedLocale);
      }
    } catch {
      // Ignore localStorage access errors in private/restricted browsing
    }
  }, []);

  const setLocale = (newLocale: SupportedLocale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = newLocale;
      }
    } catch {
      // Ignore storage errors
    }
  };

  const t = dictionaries[locale] || enDictionary;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

