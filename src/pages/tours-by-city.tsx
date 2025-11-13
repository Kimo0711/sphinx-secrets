import React from 'react';
import { useRouter } from 'next/router';
import { cities } from '../../public/data/citiesData';
import CityCard from '../components/CityCard';

const ToursByCity = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <div className="bg-secondary border-b border-white/10">
        <div className="container-custom py-8">
          <button 
            onClick={() => router.push('/')}
            className="text-accent hover:text-accent-light mb-4 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
          <h1 className="heading-section text-white mb-2">
            Explore by <span className="text-gradient">Destination</span>
          </h1>
          <p className="text-text-secondary">Discover Egypt&apos;s most captivating cities</p>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="container-custom section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CityCard 
                name={city.name} 
                description={city.description}
                image={city.image}
                video={city.video}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursByCity;
