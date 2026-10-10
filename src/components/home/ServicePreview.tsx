'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export const ServicePreview: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'hair',
      emoji: '💇‍♀️',
      name: 'Hair',
      desc: 'Cut, styling, colour, spa & treatment',
    },
    {
      id: 'makeup',
      emoji: '💄',
      name: 'Makeup',
      desc: 'Bridal, party & engagement',
    },
    {
      id: 'skin',
      emoji: '✨',
      name: 'Skin',
      desc: 'Facial, cleanup & bleach',
    },
    {
      id: 'nails',
      emoji: '💅',
      name: 'Nails',
      desc: 'Manicure, pedicure & nail art',
    },
    {
      id: 'other',
      emoji: '🪡',
      name: 'Other',
      desc: 'Threading & waxing',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-11 reveal">
          <span className="text-xs font-extrabold tracking-[0.12em] uppercase text-gold block mb-2">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-ink mb-3">
            {t.home.categoriesTitle}
          </h2>
          <p className="text-muted text-[15px] max-w-[560px] mx-auto leading-relaxed">
            Hair, makeup, skin, nails and more — tailored to you, with pricing shared during consultation.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {services.map((item, idx) => (
            <Link
              key={item.id}
              href="/services/"
              style={{ transitionDelay: `${idx * 80}ms` }}
              className="reveal group bg-cream border border-transparent rounded-[18px] p-6 text-center transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary-900/10"
            >
              <div className="text-[30px] mb-3 select-none transition-transform duration-300 group-hover:scale-110">
                {item.emoji}
              </div>
              <h3 className="text-[14.5px] font-bold text-ink mb-1.5 group-hover:text-white transition-colors">
                {item.name}
              </h3>
              <p className="text-[11.5px] text-muted group-hover:text-white/90 transition-colors leading-relaxed">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

        <p
          className="reveal mt-7 text-center text-xs sm:text-[12.5px] text-muted bg-primary-soft rounded-xl p-3.5 sm:p-4 max-w-[640px] mx-auto border border-[#f2d7dc] leading-relaxed"
          style={{ transitionDelay: '200ms' }}
        >
          {t.common.pricingNoticeBody}
        </p>
      </div>
    </section>
  );
};
