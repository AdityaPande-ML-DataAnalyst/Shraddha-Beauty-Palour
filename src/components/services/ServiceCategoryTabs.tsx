'use client';

import React, { useState } from 'react';
import { serviceCategories } from '@/content/services.data';
import { useTranslation } from '@/hooks/useTranslation';
import { ServiceCard } from './ServiceCard';

export const ServiceCategoryTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const { t } = useTranslation();

  const tabs: { id: string; label: string }[] = [
    { id: 'all', label: t.servicesPage.allServicesTab },
    { id: 'hair', label: 'Hair' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'skin', label: 'Skin' },
    { id: 'nails', label: 'Nails' },
    { id: 'other', label: 'Other' },
  ];

  const filteredCategories =
    activeTab === 'all'
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.id === activeTab);

  return (
    <div className="space-y-6">
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-1 scrollbar-none px-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all min-h-[34px] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 ${
                isActive
                  ? 'bg-primary-600 text-white shadow-2xs'
                  : 'bg-white/90 text-slate-700 hover:bg-cream-100 border border-cream-200'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Categories & Service Cards */}
      <div className="space-y-8">
        {filteredCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <div className="reveal flex items-center gap-2.5 border-b border-cream-200/90 pb-2">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-ink capitalize">
                {category.name} Services
              </h3>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-cream-100 text-slate-600 border border-cream-200">
                {category.services.length} treatments
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {category.services.map((service, idx) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  style={{ transitionDelay: `${(idx % 6) * 75}ms` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
