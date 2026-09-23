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
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `accordion-btn-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`border rounded-2xl bg-white transition-all duration-200 overflow-hidden ${
              isOpen ? 'border-primary-300 shadow-warm' : 'border-cream-200 hover:border-cream-300'
            }`}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            >
              <span className="font-semibold text-base sm:text-lg text-slate-900 leading-snug">
                {item.title}
              </span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full bg-cream-50 text-slate-700 flex items-center justify-center transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-primary-50 text-primary-700' : ''
                }`}
              >
                <ChevronDownIcon className="w-5 h-5" />
              </span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-cream-100 pt-3"
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

