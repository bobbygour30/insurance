import React from 'react';
import { Link } from 'react-router-dom';
import { FireIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const BharatSookshmaInsurance = () => {
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
            src={assets.fire}
            alt="Bharat Sookshma Udyam Suraksha Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Arshyan Bharat Sookshma Udyam Suraksha</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Safeguard your small business with Arshyan Insurance’s Bharat Sookshma Udyam Suraksha, offering protection against fire, natural disasters, and more for enterprises valued up to ₹5 crores.
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

        {/* Coverage Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Coverage Includes
          </h2>
          <p className="text-base text-gray-600 mb-4 text-center">
            The Bharat Sookshma Udyam Suraksha policy provides comprehensive protection tailored for small and medium-sized enterprises.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Fire and Explosion', desc: 'Protects your property and assets from fire, explosion, or implosion damages.' },
              { title: 'Natural Calamities', desc: 'Covers losses from floods, storms, earthquakes, and landslides.' },
              { title: 'Lightning and Impact Damage', desc: 'Insures against damage from lightning strikes and external object impacts.' },
              { title: 'Man-made Disasters', desc: 'Protection from riots, strikes, terrorism, or vandalism.' },
              { title: 'Burst Pipes', desc: 'Covers damages due to water leakage from burst pipes or overflowing tanks.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <FireIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Policy Features Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Policy Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Affordable Premiums', desc: 'Competitive premiums designed for small businesses.' },
              { title: 'Simple Claims Process', desc: 'Streamlined claims process for quick recovery.' },
              { title: 'Customizable Add-ons', desc: 'Enhance your policy with add-ons like burglary or equipment breakdown coverage.' },
              { title: 'Business Interruption Coverage', desc: 'Optional coverage for lost income due to disruptions from covered perils.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <FireIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Arshyan Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Arshyan Insurance?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Expert Support', desc: 'Dedicated team to help you select the right coverage.' },
              { title: 'Comprehensive Protection', desc: 'Confidence in protection against multiple risks.' },
              { title: 'Swift Settlements', desc: 'Quick and transparent claim settlements to minimize downtime.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <FireIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  prejudiced0
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Call-to-Action Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Secure Your Small Business
          </h2>
          <p className="text-base text-gray-600 mb-6">
            With Arshyan Bharat Sookshma Udyam Suraksha, protect your enterprise from fire and other perils. Get started today!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default BharatSookshmaInsurance;