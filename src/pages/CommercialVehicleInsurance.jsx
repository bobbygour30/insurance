import React from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const CommercialVehicleInsurance = () => {
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
            src={assets.bike}
            alt="Commercial Vehicle Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Commercial Vehicle Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Keep your business moving with robust coverage for your fleet of trucks and vans.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Commercial Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Business Insurance 101 */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Business Insurance 101
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Commercial vehicle insurance protects your business from financial losses due to vehicle damage, theft, or liabilities. It ensures your fleet remains operational, supporting your business continuity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Fleet Protection', desc: 'Covers multiple vehicles under one policy.' },
              { title: 'Cargo Coverage', desc: 'Protects goods during transit.' },
              { title: 'Liability', desc: 'Covers damages to third parties.' },
              { title: 'Driver Support', desc: 'Includes injury coverage for drivers.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <TruckIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Fleet Management Tips */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Fleet Management Tips
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Schedule regular vehicle maintenance.',
              'Train drivers on safety protocols.',
              'Use GPS tracking for fleet monitoring.',
              'Ensure compliance with local regulations.',
              'Secure vehicles with anti-theft systems.',
            ].map((tip) => (
              <li key={tip} className="flex items-center">
                <TruckIcon className="h-6 w-6 text-blue-600 mr-2" />
                {tip}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Case Study */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Real-World Example
          </h2>
          <p className="text-base text-gray-600">
            A logistics company faced a $15,000 repair bill after a truck accident. Their commercial vehicle insurance covered the costs, including cargo damage, ensuring no disruption to their operations.
          </p>
        </motion.section>

        {/* Coverage Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-blue-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Key Coverages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Cargo Protection',
              'Vehicle Damage',
              'Third-Party Liability',
              'Driver Injury Support',
              'Roadside Assistance',
            ].map((coverage) => (
              <motion.div
                key={coverage}
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <TruckIcon className="h-6 w-6 text-blue-600 mr-2" />
                <p className="text-base text-gray-600">{coverage}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CommercialVehicleInsurance;