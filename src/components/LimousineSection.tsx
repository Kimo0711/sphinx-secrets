import React, { useState } from 'react';

const LimousineSection = () => {
  const [formData, setFormData] = useState({
    serviceType: 'airport-pickup',
    airport: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    vehicleType: 'sedan'
  });

  const airports = [
    { value: 'CAI', label: 'Cairo International Airport (CAI)' },
    { value: 'HRG', label: 'Hurghada International Airport (HRG)' },
    { value: 'SSH', label: 'Sharm El Sheikh International Airport (SSH)' },
    { value: 'LXR', label: 'Luxor International Airport (LXR)' },
    { value: 'HBE', label: 'Borg El Arab Airport - Alexandria (HBE)' },
    { value: 'ASW', label: 'Aswan International Airport (ASW)' },
  ];

  const destinations = [
    'Cairo - Downtown',
    'Cairo - Giza Pyramids Area',
    'Cairo - Heliopolis',
    'Cairo - Maadi',
    'Alexandria',
    'Hurghada',
    'Sharm El Sheikh',
    'Luxor',
    'Aswan',
    'Dahab',
    'Custom Location'
  ];

  const vehicles = [
    { 
      value: 'sedan', 
      label: 'Luxury Sedan', 
      capacity: '1-3 passengers',
      price: '$35',
      image: '🚗'
    },
    { 
      value: 'suv', 
      label: 'Premium SUV', 
      capacity: '1-5 passengers',
      price: '$55',
      image: '🚙'
    },
    { 
      value: 'van', 
      label: 'Spacious Van', 
      capacity: '6-8 passengers',
      price: '$75',
      image: '🚐'
    },
    { 
      value: 'limousine', 
      label: 'Luxury Limousine', 
      capacity: '1-6 passengers',
      price: '$120',
      image: '🚐'
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking request submitted! We will contact you shortly to confirm your reservation.');
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="transportation" className="section-spacing bg-gradient-to-b from-secondary to-primary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-white mb-4">
            Premium <span className="text-gradient">Transportation</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Reliable airport transfers and luxury rides to any destination in Egypt
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Vehicle Options */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Choose Your Vehicle</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.value}
                  onClick={() => setFormData({ ...formData, vehicleType: vehicle.value })}
                  className={`card p-6 cursor-pointer transition-all ${
                    formData.vehicleType === vehicle.value
                      ? 'border-2 border-accent'
                      : 'border border-white/10 hover:border-accent/50'
                  }`}
                >
                  <div className="text-5xl mb-3">{vehicle.image}</div>
                  <h4 className="text-lg font-bold text-white mb-1">{vehicle.label}</h4>
                  <p className="text-text-secondary text-sm mb-2">{vehicle.capacity}</p>
                  <p className="text-accent font-bold text-xl">Starting at {vehicle.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Book Your Ride</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Type */}
              <div>
                <label className="block text-text-secondary text-sm font-semibold mb-2">
                  Service Type
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none"
                >
                  <option value="airport-pickup">Airport Pickup</option>
                  <option value="airport-dropoff">Airport Drop-off</option>
                  <option value="city-transfer">City Transfer</option>
                  <option value="hourly-rental">Hourly Rental</option>
                </select>
              </div>

              {/* Airport Selection */}
              <div>
                <label className="block text-text-secondary text-sm font-semibold mb-2">
                  Airport
                </label>
                <select
                  name="airport"
                  value={formData.airport}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none"
                >
                  <option value="">Select Airport</option>
                  {airports.map((airport) => (
                    <option key={airport.value} value={airport.value}>
                      {airport.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-text-secondary text-sm font-semibold mb-2">
                  Destination
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none"
                >
                  <option value="">Select Destination</option>
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-secondary text-sm font-semibold mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary text-sm font-semibold mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-text-secondary text-sm font-semibold mb-2">
                  Number of Passengers
                </label>
                <input
                  type="number"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  min="1"
                  max="8"
                  required
                  className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full btn-primary mt-6">
                Request Booking
              </button>
            </form>

            {/* Features */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="text-accent">✓</span>
                  Professional Drivers
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="text-accent">✓</span>
                  24/7 Availability
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="text-accent">✓</span>
                  Meet & Greet Service
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <span className="text-accent">✓</span>
                  Free Cancellation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimousineSection;
