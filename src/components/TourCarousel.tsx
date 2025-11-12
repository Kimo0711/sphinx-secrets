// src/components/TourCarousel.tsx
import React from "react";
import Slider from "react-slick";

const TourCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    accessibility: true,
  };

  const slides = [
    {
      title: "Activity Explorer",
      description: "Discover tours by your favorite activities",
      link: "/tours-by-activity",
      icon: "🏛️",
    },
    {
      title: "City Tours",
      description: "Explore Egypt's magnificent cities",
      link: "/tours-by-city",
      icon: "🏙️",
    },
    {
      title: "All-Inclusive Packages",
      description: "Complete travel experiences with everything included",
      link: "/tours-by-package",
      icon: "✨",
    },
  ];

  return (
    <section id="tours" className="section-spacing bg-primary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-section text-text-primary mb-4">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Find the perfect tour that matches your travel style
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings} aria-live="polite">
            {slides.map((slide, index) => (
              <div key={index} className="px-4">
                <a
                  href={slide.link}
                  className="block card card-hover p-12 text-center group"
                >
                  <div className="text-6xl mb-6">{slide.icon}</div>
                  <h3 className="text-3xl font-serif font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">
                    {slide.title}
                  </h3>
                  <p className="text-text-secondary text-lg">
                    {slide.description}
                  </p>
                  <div className="mt-6 inline-flex items-center text-accent font-semibold">
                    View Tours
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TourCarousel;