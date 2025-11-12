// HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-light rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 fade-in">
          {/* Main heading */}
          <h1 className="heading-hero text-text-primary">
            Discover the{' '}
            <span className="text-gradient">Mysteries of Egypt</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Embark on extraordinary journeys through ancient wonders and timeless landscapes with expert-guided tours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="#tours" className="btn-primary w-full sm:w-auto">
              Explore Our Tours
            </a>
            <a href="#cities" className="btn-secondary w-full sm:w-auto">
              View Destinations
            </a>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-text-muted text-sm">
            <div className="flex items-center gap-2">
              <span className="text-accent text-xl">★★★★★</span>
              <span>500+ Reviews</span>
            </div>
            <div>• 10,000+ Happy Travelers</div>
            <div>• Licensed & Insured</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
