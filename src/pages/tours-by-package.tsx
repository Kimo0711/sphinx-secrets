import React from 'react';
import { useRouter } from 'next/router';

const ToursByPackage = () => {
  const router = useRouter();

  const packages = [
    {
      id: 1,
      name: 'Classic Egypt - 7 Days',
      price: '$1,299',
      duration: '7 Days / 6 Nights',
      highlights: ['Pyramids of Giza', 'Egyptian Museum', 'Nile Cruise', 'Valley of Kings'],
      image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80',
      popular: true
    },
    {
      id: 2,
      name: 'Red Sea Adventure - 5 Days',
      price: '$899',
      duration: '5 Days / 4 Nights',
      highlights: ['Scuba Diving', 'Snorkeling', 'Beach Resort', 'Water Sports'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      popular: false
    },
    {
      id: 3,
      name: 'Luxury Nile Cruise - 10 Days',
      price: '$2,499',
      duration: '10 Days / 9 Nights',
      highlights: ['5-Star Cruise', 'All Meals Included', 'Guided Tours', 'Spa Access'],
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80',
      popular: true
    },
    {
      id: 4,
      name: 'Desert Safari Experience - 3 Days',
      price: '$599',
      duration: '3 Days / 2 Nights',
      highlights: ['Camel Riding', 'Bedouin Camp', 'Star Gazing', 'Traditional Meals'],
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
      popular: false
    },
    {
      id: 5,
      name: 'Grand Egypt Tour - 14 Days',
      price: '$3,299',
      duration: '14 Days / 13 Nights',
      highlights: ['Complete Egypt', 'All Major Sites', 'Luxury Hotels', 'Private Guide'],
      image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80',
      popular: true
    },
    {
      id: 6,
      name: 'Alexandria & Mediterranean - 4 Days',
      price: '$749',
      duration: '4 Days / 3 Nights',
      highlights: ['Historic Sites', 'Mediterranean Coast', 'Fresh Seafood', 'Library Tour'],
      image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80',
      popular: false
    },
  ];

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
            All-Inclusive <span className="text-gradient">Packages</span>
          </h1>
          <p className="text-text-secondary">Complete travel experiences with everything included</p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="container-custom section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div key={pkg.id} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card card-hover group overflow-hidden">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent"></div>
                  
                  {/* Popular badge */}
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold">
                      POPULAR
                    </div>
                  )}

                  {/* Price overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="text-3xl font-bold text-accent">{pkg.price}</div>
                    <div className="text-sm text-white/80">{pkg.duration}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {pkg.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-text-secondary text-sm font-semibold">Highlights:</p>
                    <ul className="space-y-1">
                      {pkg.highlights.map((highlight, i) => (
                        <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full btn-primary">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursByPackage;
