import React from 'react';
import Link from 'next/link';

interface CityCardProps {
  name: string;
  description: string;
  image?: string;
  video?: string | null;
}

const CityCard: React.FC<CityCardProps> = ({ name, description, image, video }) => {
  return (
    <article className="card card-hover group overflow-hidden">
      {/* Image or Video header */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-secondary">
        {video ? (
          <video
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : image ? (
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
            🏛️
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent"></div>
        
        {/* City name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-2xl font-serif font-bold text-white drop-shadow-lg">
            {name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Description */}
        <p className="text-text-secondary leading-relaxed text-sm">
          {description}
        </p>

        {/* CTA Link */}
        <div className="pt-2 border-t border-white/10">
          <Link 
            href="/tours-by-city"
            className="text-accent hover:text-accent-light font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Explore {name}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CityCard;
