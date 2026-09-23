import { HeroSection } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { ServicePreview } from '@/components/home/ServicePreview';
import { HighlightsSection } from '@/components/home/HighlightsSection';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { CtaBanner } from '@/components/home/CtaBanner';
import { LocationSummary } from '@/components/home/LocationSummary';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicePreview />
      <HighlightsSection />
      <GalleryPreview />
      <CtaBanner />
      <LocationSummary />
    </>
  );
}

