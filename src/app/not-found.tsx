import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 bg-cream-50">
      <Container>
        <Card className="max-w-xl mx-auto text-center p-8 sm:p-12 border border-cream-200 space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-100 text-primary-700 font-extrabold text-2xl flex items-center justify-center">
            404
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Page Not Found
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              We couldn&apos;t find the page you were looking for. Please return to the homepage or browse our services.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button href="/" variant="primary" size="md">
              Back to Home
            </Button>
            <Button href="/services/" variant="outline" size="md">
              View Services
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}

