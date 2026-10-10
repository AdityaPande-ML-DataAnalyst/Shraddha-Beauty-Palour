'use client';

import React, { useState, ReactNode } from 'react';
import { ChevronDownIcon } from './Icons';

export interface AccordionItemData {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={`space-y-2.5 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `accordion-btn-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            style={{ transitionDelay: `${idx * 60}ms` }}
            className={`reveal border rounded-xl bg-white/95 transition-all duration-300 overflow-hidden ${
              isOpen ? 'border-primary-300 shadow-2xs' : 'border-cream-200/90 hover:border-gold hover:shadow-2xs'
            }`}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              className="w-full text-left px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                {item.title}
              </span>
              <span
                className={`shrink-0 w-6 h-6 rounded-full bg-cream-100 text-slate-700 flex items-center justify-center transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-primary-soft text-primary' : ''
                }`}
              >
                <ChevronDownIcon className="w-3.5 h-3.5" />
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-4 pb-3 sm:px-5 sm:pb-3.5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-cream-100 mt-0.5"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
