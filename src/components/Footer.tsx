import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-white/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-accent">Sphinx Secrets</h3>
            <p className="text-text-muted text-sm">
              Your trusted partner for authentic Egyptian travel experiences since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li><a href="#tours" className="hover:text-accent transition-colors">Tours</a></li>
              <li><a href="#cities" className="hover:text-accent transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Support</h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Booking Terms</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>📧 info@sphinxsecrets.com</li>
              <li>📱 +20 123 456 7890</li>
              <li>📍 Cairo, Egypt</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 text-center text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Sphinx Secrets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
