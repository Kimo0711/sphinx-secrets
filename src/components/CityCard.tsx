import React from 'react';

interface CityCardProps {
  name: string;
  description: string;
}

const CityCard: React.FC<CityCardProps> = ({ name, description }) => {
  return (
    <article className="card card-hover p-6 group">
      <div className="space-y-4">
        {/* City name with icon */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-serif font-bold text-text-primary group-hover:text-accent transition-colors">
            {name}
          </h3>
          <svg className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* Description */}
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>

        {/* CTA Link */}
        <div className="pt-2 border-t border-white/10">
          <a 
            href={`#/cities/${name.toLowerCase()}`}
            className="text-accent hover:text-accent-light font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Explore {name}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default CityCard;
