'use client';

import React from 'react';
import { faqItems } from '@/content/faq.data';
import { useTranslation } from '@/hooks/useTranslation';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Accordion, AccordionItemData } from '@/components/ui/Accordion';
import { Card } from '@/components/ui/Card';
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
    <div className="py-12 sm:py-20 bg-cream-50/50">
      <Container>
        <SectionHeader
          badge={
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider bg-primary-50 px-3.5 py-1 rounded-full border border-primary-200">
              Common Questions
            </span>
          }
          title={t.faqPage.pageTitle}
          subtitle={t.faqPage.pageSubtitle}
        />

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Accessible Accordion */}
          <Accordion items={accordionItems} defaultOpenId="faq-female-only" />

          {/* More Questions Box */}
          <Card className="p-8 text-center bg-white border border-cream-200 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              {t.faqPage.moreQuestionsTitle}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
              {t.faqPage.moreQuestionsDesc}
            </p>
            <div className="pt-2 flex justify-center">
              <Button
                href="/contact/"
                variant="whatsapp"
                size="md"
                icon={<WhatsAppIcon className="w-4 h-4" />}
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

