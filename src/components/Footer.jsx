import React from 'react';
import { GlobeAltIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://via.placeholder.com/150x50?text=Logo"
              alt="Insurance Logo"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-200">Your trusted partner for comprehensive health insurance solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-200 transition duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Insurance Plans</h3>
            <ul className="space-y-2">
              {['Health Insurance', 'Family Plans', 'Senior Citizen Plans', 'Critical Illness'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-200 transition duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span>+91-123-456-7890</span>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <span>support@healthinsure.com</span>
              </li>
              <li className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>123 Health Street, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-200">&copy; 2025 Health Insure. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-200">
              <GlobeAltIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <PhoneIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <EnvelopeIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;