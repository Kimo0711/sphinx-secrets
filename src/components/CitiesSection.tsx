import React from 'react';
import { cities } from '../../public/data/citiesData';
import CityCard from './CityCard';

const CitiesSection = () => {
  return (
    <section id="cities" className="section-spacing bg-gradient-to-b from-primary to-secondary">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-section text-text-primary">
            Popular <span className="text-gradient">Destinations</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Explore Egypt&apos;s most captivating cities, from ancient wonders to coastal paradises
          </p>
        </div>

        {/* Cities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cities.map((city, index) => (
            <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CityCard name={city.name} description={city.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
