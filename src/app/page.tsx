import { HeroSection } from '@/components/home/HeroSection';
import { HighlightsSection } from '@/components/home/HighlightsSection';
import { ServicePreview } from '@/components/home/ServicePreview';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { CtaBanner } from '@/components/home/CtaBanner';
import { LocationSummary } from '@/components/home/LocationSummary';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <ServicePreview />
      <GalleryPreview />
      <CtaBanner />
      <LocationSummary />
    </>
  );
}
