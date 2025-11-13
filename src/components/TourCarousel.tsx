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
    autoplaySpeed: 5000,
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
      image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80",
      video: null,
    },
    {
      title: "City Tours",
      description: "Explore Egypt's magnificent cities",
      link: "/tours-by-city",
      icon: "🏙️",
      image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&q=80",
      video: null,
    },
    {
      title: "All-Inclusive Packages",
      description: "Complete travel experiences with everything included",
      link: "/tours-by-package",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=80",
      video: null,
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

        <div className="max-w-5xl mx-auto">
          <Slider {...settings} aria-live="polite">
            {slides.map((slide, index) => (
              <div key={index} className="px-4">
                <a
                  href={slide.link}
                  className="block relative overflow-hidden rounded-2xl group"
                  style={{ height: '500px' }}
                >
                  {/* Background Image or Video */}
                  {slide.video ? (
                    <video
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={slide.video} type="video/mp4" />
                    </video>
                  ) : slide.image ? (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : null}

                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-center p-12 z-10">
                    <div className="text-7xl mb-6 animate-bounce">{slide.icon}</div>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 group-hover:text-accent transition-colors">
                      {slide.title}
                    </h3>
                    <p className="text-text-secondary text-xl mb-8 max-w-2xl">
                      {slide.description}
                    </p>
                    <div className="inline-flex items-center px-8 py-4 bg-accent text-primary font-semibold rounded-lg group-hover:bg-accent-light transform group-hover:scale-105 transition-all shadow-xl">
                      View Tours
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative border on hover */}
                  <div className="absolute inset-0 border-4 border-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
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