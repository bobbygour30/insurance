import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const BharatGrihaRakshaInsurance = () => {
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
            src={assets.home}
            alt="Bharat Griha Raksha Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Bharat Griha Raksha Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Your home is more than a structure—it’s a sanctuary. Arshyan Insurance’s Bharat Griha Raksha policy protects your home and its contents from unexpected events.
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
            Our Bharat Griha Raksha policy offers comprehensive protection for your home and its contents against a wide range of risks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Fire and Allied Perils', desc: 'Covers damages from fire, lightning, explosion, and related perils.' },
              { title: 'Natural Calamities', desc: 'Protection against floods, earthquakes, storms, cyclones, and landslides.' },
              { title: 'Burglary and Theft', desc: 'Safeguards against loss of furniture, electronics, and valuables.' },
              { title: 'Accidental Damage', desc: 'Covers accidental damage to home fixtures and contents.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <HomeIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Policy Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Policy Benefits
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Affordable premiums for extensive home protection.',
              'Alternate accommodation expenses if your home is uninhabitable.',
              'Customizable add-ons for valuable items, appliances, and jewelry.',
              'Liability coverage for third-party accidents in your home.',
            ].map((benefit) => (
              <li key={benefit} className="flex items-center">
                <HomeIcon className="h-6 w-6 text-blue-600 mr-2" />
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
              'Comprehensive protection for your home and contents.',
              'Hassle-free claims with quick and transparent settlements.',
              'Flexible coverage options tailored to your needs.',
              'Expert support for policy selection and claims assistance.',
            ].map((reason) => (
              <li key={reason} className="flex items-center">
                <HomeIcon className="h-6 w-6 text-blue-600 mr-2" />
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
              'Protection for both home structure and contents under one policy.',
              'Coverage for firefighting costs during fire emergencies.',
              'Lost rent reimbursement if your property becomes uninhabitable.',
              'Home repair coverage for damages from insured events.',
            ].map((feature) => (
              <li key={feature} className="flex items-center">
                <HomeIcon className="h-6 w-6 text-blue-600 mr-2" />
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
            Secure Your Dream Home
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            With Arshyan Insurance’s Bharat Griha Raksha policy, protect your home and its contents from life’s uncertainties. Invest in peace of mind with comprehensive coverage tailored to your needs.
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

export default BharatGrihaRakshaInsurance;