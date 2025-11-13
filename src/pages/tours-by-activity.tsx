import React from 'react';
import { useRouter } from 'next/router';

const ToursByActivity = () => {
  const router = useRouter();

  const activities = [
    { id: 1, name: 'Pyramids & Ancient Sites', icon: '🏛️', description: 'Explore the wonders of ancient Egypt', image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80' },
    { id: 2, name: 'Scuba Diving', icon: '🤿', description: 'Discover the Red Sea underwater world', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80' },
    { id: 3, name: 'Desert Safari', icon: '🏜️', description: 'Adventure through the Sahara Desert', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80' },
    { id: 4, name: 'Nile Cruises', icon: '⛵', description: 'Luxury cruises along the Nile River', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80' },
    { id: 5, name: 'Museum Tours', icon: '🏺', description: 'Guided tours of Egyptian museums', image: 'https://images.unsplash.com/photo-1595495722788-3c3a3f3b3b3b?w=800&q=80' },
    { id: 6, name: 'Food & Culture', icon: '🍽️', description: 'Taste authentic Egyptian cuisine', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80' },
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
            Browse by <span className="text-gradient">Activity</span>
          </h1>
          <p className="text-text-secondary">Choose your adventure style</p>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="container-custom section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div key={activity.id} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card card-hover group overflow-hidden cursor-pointer">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 text-5xl">{activity.icon}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {activity.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">{activity.description}</p>
                  <button className="text-accent hover:text-accent-light font-semibold inline-flex items-center gap-2">
                    View Tours
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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

export default ToursByActivity;
