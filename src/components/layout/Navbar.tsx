'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/config/navigation.config';
import { useTranslation } from '@/hooks/useTranslation';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <nav className={`hidden lg:flex items-center gap-1 ${className}`} aria-label="Main Navigation">
      {navigationItems.map((item) => {
        const isActive =
          item.path === '/'
            ? pathname === '/'
            : pathname === item.path || pathname.startsWith(item.path);

        return (
          <Link
            key={item.id}
            href={item.path}
            className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? 'text-primary-700 bg-primary-50/80 font-semibold'
                : 'text-slate-700 hover:text-primary-700 hover:bg-cream-100'
            }`}
          >
            {t.nav[item.labelKey]}
          </Link>
        );
      })}
    </nav>
  );
};

