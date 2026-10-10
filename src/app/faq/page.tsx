'use client';

import React from 'react';
import { faqItems } from '@/content/faq.data';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Accordion, AccordionItemData } from '@/components/ui/Accordion';
import { Card } from '@/components/ui/Card';
import { salonConfig } from '@/config/salon.config';
import { getWhatsAppHref } from '@/utils/contact';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/Icons';

export default function FaqPage() {
  const { t } = useTranslation();

  const accordionItems: AccordionItemData[] = faqItems.map((item) => ({
    id: item.id,
    title: item.defaultQuestion,
    content: <p>{item.defaultAnswer}</p>,
  }));

  return (
    <div className="py-8 sm:py-12 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-[11px] font-semibold text-primary uppercase tracking-wider bg-primary-soft px-3 py-0.5 rounded-full border border-primary-200">
              Common Questions
            </span>
          }
          title={t.faqPage.pageTitle}
          subtitle={t.faqPage.pageSubtitle}
        />

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Accessible Accordion */}
          <Accordion items={accordionItems} defaultOpenId="faq-female-only" />

          {/* More Questions Box */}
          <Card
            hoverEffect
            className="reveal p-5 text-center bg-white/95 border border-cream-200/90 space-y-2.5"
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="font-serif text-lg font-bold text-ink">
              {t.faqPage.moreQuestionsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              {t.faqPage.moreQuestionsDesc}
            </p>
            <div className="pt-1 flex justify-center">
              <Button
                href={getWhatsAppHref(
                  `Hello ${salonConfig.name},\n\nI have a question regarding parlour services.`
                )}
                isExternal
                variant="whatsapp"
                size="sm"
                icon={<WhatsAppIcon className="w-3.5 h-3.5 fill-current" />}
              >
                {t.nav.inquireWhatsApp}
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
