import Hero from '@/components/home/Hero';
import Philosophy from '@/components/home/Philosophy';
import FeaturedServices from '@/components/home/FeaturedServices';
import RatingBand from '@/components/home/RatingBand';
import Testimonials from '@/components/home/Testimonials';
import GalleryPreview from '@/components/home/GalleryPreview';
import BookingCta from '@/components/home/BookingCta';

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FeaturedServices />
      <RatingBand />
      <Testimonials />
      <GalleryPreview />
      <BookingCta />
    </>
  );
}