import React from 'react';
import HeroSection from '../components/HeroSection';
import TourCarousel from '../components/TourCarousel';
import CitiesSection from '../components/CitiesSection';
import LimousineSection from '../components/LimousineSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TourCarousel />
      <LimousineSection />
      <CitiesSection />
      <Footer />
    </main>
  );
}
