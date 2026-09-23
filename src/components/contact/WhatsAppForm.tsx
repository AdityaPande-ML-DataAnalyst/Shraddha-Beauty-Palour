'use client';

import React, { useState } from 'react';
import { salonConfig } from '@/config/salon.config';
import { allServicesList } from '@/content/services.data';
import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon, CheckIcon, InfoIcon } from '@/components/ui/Icons';

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
  const [showPlaceholderNotice, setShowPlaceholderNotice] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');

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

  const buildMessage = () => {
    return [
      `Hello ${salonConfig.name},`,
      '',
      'I would like to enquire about an appointment.',
      '',
      `Name: ${name.trim() || 'Not specified'}`,
      `Service: ${selectedService || 'Consultation / General Inquiry'}`,
      `Preferred Date: ${date || 'Flexible'}`,
      `Preferred Time: ${time || 'Flexible (Between 9:00 AM - 9:00 PM)'}`,
      notes.trim() ? `Note: ${notes.trim()}` : null,
      '',
      'Please let me know the availability. Thank you!',
    ]
      .filter((line) => line !== null)
      .join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildMessage();

    // If the phone number is a placeholder, do not trigger a fake phone dial/wa.me link
    if (salonConfig.contact.isPhonePlaceholder || !salonConfig.contact.whatsappNumber) {
      setGeneratedMessage(message);
      setShowPlaceholderNotice(true);
      return;
    }

    // Direct WhatsApp link when valid number is present
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${salonConfig.contact.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <Card className="border border-cream-300 shadow-warm-lg p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          {t.contactPage.formTitle}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t.contactPage.formSubtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="customer-name" className="block text-sm font-semibold text-slate-800 mb-1.5">
            {t.contactPage.nameLabel} <span className="text-primary-600">*</span>
          </label>
          <input
            id="customer-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.contactPage.namePlaceholder}
            className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-600 text-base"
          />
        </div>

        {/* Service Select */}
        <div>
          <label htmlFor="service-select" className="block text-sm font-semibold text-slate-800 mb-1.5">
            {t.contactPage.serviceSelectLabel} <span className="text-primary-600">*</span>
          </label>
          <select
            id="service-select"
            required
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-600 text-base"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="pref-date" className="block text-sm font-semibold text-slate-800 mb-1.5">
              {t.contactPage.dateLabel}
            </label>
            <input
              id="pref-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-600 text-base"
            />
          </div>

          <div>
            <label htmlFor="pref-time" className="block text-sm font-semibold text-slate-800 mb-1.5">
              {t.contactPage.timeLabel}
            </label>
            <select
              id="pref-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50/50 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-600 text-base"
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
          <label htmlFor="form-notes" className="block text-sm font-semibold text-slate-800 mb-1.5">
            {t.contactPage.notesLabel}
          </label>
          <textarea
            id="form-notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t.contactPage.notesPlaceholder}
            className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50/50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-600 text-base resize-none"
          />
        </div>

        {/* Disclaimer Notice */}
        <div className="p-3.5 bg-primary-50/70 border border-primary-100 rounded-xl flex items-start gap-2.5 text-xs text-primary-950">
          <InfoIcon className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-semibold">Notice: </span>
            {t.common.disclaimerSubjectToConfirmation}
          </p>
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            variant="whatsapp"
            size="lg"
            fullWidth
            icon={<WhatsAppIcon className="w-5 h-5" />}
          >
            {t.contactPage.submitButton}
          </Button>
        </div>
      </form>

      {/* Safe Modal / Banner if Phone Number is currently placeholder */}
      {showPlaceholderNotice && (
        <div className="mt-6 p-5 bg-amber-50 border border-amber-200 rounded-2xl space-y-4">
          <div className="flex items-start gap-3">
            <InfoIcon className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-amber-900">
                Inquiry Message Generated Successfully
              </h4>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                The parlour&apos;s direct WhatsApp contact number is currently being configured for launch. You can copy the prepared message below or email us at{' '}
                <a
                  href={`mailto:${salonConfig.contact.email}`}
                  className="font-semibold underline underline-offset-2"
                >
                  {salonConfig.contact.email}
                </a>.
              </p>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-amber-200 text-xs font-mono text-slate-800 whitespace-pre-wrap">
            {generatedMessage}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-700 text-white text-xs font-semibold hover:bg-amber-800 transition-colors"
            >
              {copied ? (
                <>
                  <CheckIcon className="w-4 h-4" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <span>Copy Prepared Message</span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setShowPlaceholderNotice(false)}
              className="px-3 py-2 rounded-xl text-xs text-slate-600 hover:text-slate-900"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};

