'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const pathname = usePathname();
  const { t } = useTranslation();

  const desktopNavLinks = [
    { id: 'home', path: '/', label: t.nav.home },
    { id: 'services', path: '/services/', label: t.nav.services },
    { id: 'gallery', path: '/gallery/', label: t.nav.gallery },
    { id: 'about', path: '/about/', label: t.nav.about },
    { id: 'contact', path: '/contact/', label: t.nav.contact },
  ];

  return (
    <nav
      className={`hidden lg:flex items-center gap-1 bg-white border border-[#f0e2e5] rounded-full p-[4px] shadow-xs shrink-0 ${className}`}
      aria-label="Main Navigation"
    >
      {desktopNavLinks.map((item) => {
        const isActive =
          item.path === '/'
            ? pathname === '/'
            : pathname === item.path || pathname.startsWith(item.path);

        return (
          <Link
            key={item.id}
            href={item.path}
            className={`text-xs xl:text-[13.5px] font-semibold px-3 xl:px-4 py-1.5 rounded-full transition-colors duration-200 whitespace-nowrap ${
              isActive
                ? 'bg-primary-soft text-primary font-bold'
                : 'text-muted hover:bg-primary-soft hover:text-primary'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
