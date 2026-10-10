'use client';

import React, { useState } from 'react';
import { salonConfig } from '@/config/salon.config';
import { allServicesList } from '@/content/services.data';
import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon, InfoIcon } from '@/components/ui/Icons';

interface WhatsAppFormProps {
  initialServiceId?: string;
}

export const WhatsAppForm: React.FC<WhatsAppFormProps> = ({ initialServiceId }) => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState(
    initialServiceId ? allServicesList.find((s) => s.id === initialServiceId)?.name || '' : ''
  );
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  // Time slots from 9:00 AM to 9:00 PM
  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM',
    '08:00 PM - 09:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = (salonConfig.contact.whatsappNumber || '919890159234').replace(/[^0-9]/g, '');
    const message = `Hello ${salonConfig.name},

I would like to enquire about an appointment.

Name: ${name.trim() || '-'}
Service: ${selectedService || '-'}
Preferred Date: ${date || '-'}
Preferred Time: ${time || '-'}
Note: ${notes.trim() || '-'}

Please let me know the availability.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card hoverEffect className="reveal border border-cream-200/90 shadow-warm p-5 sm:p-6 bg-white/95 rounded-2xl">
      <div className="mb-4">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-1">
          {t.contactPage.formTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {t.contactPage.formSubtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Full Name */}
        <div>
          <label htmlFor="customer-name" className="block text-xs font-semibold text-slate-800 mb-1">
            {t.contactPage.nameLabel} <span className="text-primary">*</span>
          </label>
          <input
            id="customer-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.contactPage.namePlaceholder}
            className="w-full px-3.5 py-2 rounded-lg border border-cream-300 bg-cream-50/40 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-xs sm:text-sm"
          />
        </div>

        {/* Service Select */}
        <div>
          <label htmlFor="service-select" className="block text-xs font-semibold text-slate-800 mb-1">
            {t.contactPage.serviceSelectLabel} <span className="text-primary">*</span>
          </label>
          <select
            id="service-select"
            required
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-3.5 py-2 rounded-lg border border-cream-300 bg-cream-50/40 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-xs sm:text-sm"
          >
            <option value="">{t.contactPage.serviceSelectPlaceholder}</option>
            {allServicesList.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name} ({service.category.toUpperCase()})
              </option>
            ))}
          </select>
        </div>

        {/* Date and Time (2 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="pref-date" className="block text-xs font-semibold text-slate-800 mb-1">
              {t.contactPage.dateLabel} <span className="text-primary">*</span>
            </label>
            <input
              id="pref-date"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg border border-cream-300 bg-cream-50/40 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-xs sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="pref-time" className="block text-xs font-semibold text-slate-800 mb-1">
              {t.contactPage.timeLabel} <span className="text-primary">*</span>
            </label>
            <select
              id="pref-time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg border border-cream-300 bg-cream-50/40 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-xs sm:text-sm"
            >
              <option value="">{t.contactPage.timePlaceholder}</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Optional Notes */}
        <div>
          <label htmlFor="client-notes" className="block text-xs font-semibold text-slate-800 mb-1">
            {t.contactPage.notesLabel}
          </label>
          <textarea
            id="client-notes"
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t.contactPage.notesPlaceholder}
            className="w-full px-3.5 py-2 rounded-lg border border-cream-300 bg-cream-50/40 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-xs sm:text-sm resize-none"
          />
        </div>

        {/* Disclaimer Callout */}
        <div className="p-3 rounded-lg bg-primary-soft/60 border border-primary-100 flex items-start gap-2.5">
          <InfoIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-700 leading-relaxed">
            {t.common.disclaimerSubjectToConfirmation}
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="whatsapp"
            size="md"
            fullWidth
            icon={<WhatsAppIcon className="w-4 h-4 fill-current" />}
          >
            {t.contactPage.submitButton}
          </Button>
        </div>
      </form>
    </Card>
  );
};
