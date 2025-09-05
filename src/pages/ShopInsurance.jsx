import React from 'react';
import { Link } from 'react-router-dom';
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const ShopInsurance = () => {
  return (
    <div className="bg-blue-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <img
            src={assets.shop}
            alt="Shop Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Shop Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Your shop is your livelihood. Arshyan Insurance’s Shop Insurance Policy protects your retail business from unexpected risks, ensuring peace of mind.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Coverage Highlights */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Coverage Highlights
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Our Shop Insurance Policy provides comprehensive protection for your retail business, covering property, inventory, and liabilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Fire and Allied Perils', desc: 'Covers damage from fire, explosions, lightning, storms, and floods.' },
              { title: 'Burglary and Theft', desc: 'Protects stock and assets against burglary and armed robbery.' },
              { title: 'Damage to Property', desc: 'Covers furniture, fixtures, equipment, and electronics.' },
              { title: 'Business Interruption', desc: 'Compensates for lost income due to temporary closures.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <BuildingStorefrontIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Additional Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Additional Benefits
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Third-party liability coverage for customer or visitor injuries.',
              'Optional employee coverage for workplace accidents or injuries.',
              'Stock insurance for inventory loss due to fire or theft.',
              'Glass breakage coverage for shop windows and display units.',
            ].map((benefit) => (
              <li key={benefit} className="flex items-center">
                <BuildingStorefrontIcon className="h-6 w-6 text-blue-600 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Why Choose Arshyan Insurance */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Arshyan Insurance?
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Affordable premiums designed for shop owners.',
              'Customizable options for retail, restaurants, or service-based stores.',
              'Quick claim settlements to minimize business downtime.',
              'All-in-one protection covering multiple risks in a single policy.',
            ].map((reason) => (
              <li key={reason} className="flex items-center">
                <BuildingStorefrontIcon className="h-6 w-6 text-blue-600 mr-2" />
                {reason}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Additional Features */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Additional Features
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Fire safety coverage for fire extinguishing expenses.',
              'Loss of rent coverage for temporary relocation costs.',
              'Natural disaster coverage for earthquakes, floods, and landslides.',
              'Money insurance for cash lost in transit or on premises.',
            ].map((feature) => (
              <li key={feature} className="flex items-center">
                <BuildingStorefrontIcon className="h-6 w-6 text-blue-600 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Secure Your Business
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Arshyan Insurance’s Shop Insurance Policy ensures your retail business is protected from property damage, theft, and liabilities. Safeguard your livelihood with comprehensive coverage.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started Today
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ShopInsurance;