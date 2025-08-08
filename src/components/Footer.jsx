import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">About Us</h3>
            <p className="text-base sm:text-lg">
              We are a leading health insurance provider dedicated to offering affordable and comprehensive plans to protect you and your loved ones.
            </p>
            <div className="mt-4 flex space-x-4">
              {[
                { icon: 'https://via.placeholder.com/24?text=FB', label: 'Facebook' },
                { icon: 'https://via.placeholder.com/24?text=TW', label: 'Twitter' },
                { icon: 'https://via.placeholder.com/24?text=LI', label: 'LinkedIn' },
              ].map((social, index) => (
                <a key={index} href="#" className="hover:text-white transition duration-200">
                  <img src={social.icon} alt={social.label} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-base sm:text-lg">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/blog', label: 'Blog' },
                { to: '#', label: 'Health Insurance' },
                { to: '#', label: 'Claims Management' },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.to} className="hover:text-white transition duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-3 text-base sm:text-lg">
              <li className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 mr-2" />
                <a href="mailto:support@example.com" className="hover:text-white transition duration-200">
                  support@example.com
                </a>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-6 w-6 mr-2" />
                <a href="tel:+1234567890" className="hover:text-white transition duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <MapPinIcon className="h-6 w-6 mr-2" />
                <span>123 Health St, Wellness City, HC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 border-t border-blue-700 pt-4 text-center">
          <p className="text-base sm:text-lg">&copy; {new Date().getFullYear()} Health Insurance Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;