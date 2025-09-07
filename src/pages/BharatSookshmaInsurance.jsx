import React from 'react';
import { Link } from 'react-router-dom';
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
            className="w-full h-92 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Arshyan Bharat Sookshma Udyam Suraksha
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Safeguard your small business with Arshyan Insurance’s Bharat Sookshma Udyam Suraksha, 
            offering protection against fire, natural disasters, and more for enterprises valued up to ₹5 crores.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/get-quote"
              className="mt-6 inline-block bg-[#00001a] text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
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
            The Bharat Sookshma Udyam Suraksha policy provides comprehensive protection tailored for 
            small and medium-sized enterprises.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-base">
            <li>Fire and Explosion – Protects property and assets from fire, explosion, or implosion damages.</li>
            <li>Natural Calamities – Covers losses from floods, storms, earthquakes, and landslides.</li>
            <li>Lightning and Impact Damage – Insures against damage from lightning strikes and external object impacts.</li>
            <li>Man-made Disasters – Protection from riots, strikes, terrorism, or vandalism.</li>
            <li>Burst Pipes – Covers damages due to water leakage from burst pipes or overflowing tanks.</li>
          </ul>
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
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-base">
            <li>Affordable Premiums – Competitive premiums designed for small businesses.</li>
            <li>Simple Claims Process – Streamlined claims process for quick recovery.</li>
            <li>Customizable Add-ons – Enhance your policy with add-ons like burglary or equipment breakdown coverage.</li>
            <li>Business Interruption Coverage – Optional coverage for lost income due to disruptions from covered perils.</li>
          </ul>
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
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-base">
            <li>Expert Support – Dedicated team to help you select the right coverage.</li>
            <li>Comprehensive Protection – Confidence in protection against multiple risks.</li>
            <li>Swift Settlements – Quick and transparent claim settlements to minimize downtime.</li>
          </ul>
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
              to="/get-quote"
              className="inline-block bg-[#00001a] text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
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
