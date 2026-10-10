'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactInfoCards } from '@/components/contact/ContactInfoCards';
import { WhatsAppForm } from '@/components/contact/WhatsAppForm';
import { MapSection } from '@/components/contact/MapSection';

function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') || undefined;
  return <WhatsAppForm initialServiceId={serviceParam} />;
}

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="py-8 sm:py-12 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-[11px] font-semibold text-primary-800 uppercase tracking-wider bg-primary-50 px-3 py-0.5 rounded-full border border-primary-200">
              Get In Touch
            </span>
          }
          title={t.contactPage.pageTitle}
          subtitle={t.contactPage.pageSubtitle}
        />

        <div className="space-y-8 max-w-6xl mx-auto">
          {/* Main 2-Column: Form & Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Interactive WhatsApp Inquiry Builder (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-6 text-center bg-white rounded-xl border border-cream-200 text-xs">Loading inquiry builder...</div>}>
                <ContactFormWithParams />
              </Suspense>
            </div>

            {/* Right: Contact Information Cards (5 cols) */}
            <div className="lg:col-span-5">
              <ContactInfoCards />
            </div>
          </div>

          {/* Full Width Map Section with General Location Advisory */}
          <div id="map" className="scroll-mt-20">
            <MapSection />
          </div>
        </div>
      </Container>
    </div>
  );
}
