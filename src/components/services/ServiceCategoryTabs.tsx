'use client';

import React, { useState } from 'react';
import { serviceCategories } from '@/content/services.data';
import { ServiceCategoryId } from '@/types/services';
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
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all min-h-[44px] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 ${
                isActive
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-cream-100 border border-cream-200'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Categories & Service Cards */}
      <div className="space-y-12">
        {filteredCategories.map((category) => (
          <div key={category.id} className="space-y-6">
            <div className="flex items-center gap-3 border-b border-cream-200 pb-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 capitalize">
                {category.name} Services
              </h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cream-100 text-slate-600 border border-cream-200">
                {category.services.length} treatments
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

