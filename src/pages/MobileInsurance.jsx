import React from 'react';
import { Link } from 'react-router-dom';
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const MobileInsurance = () => {
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
            src={assets.mobile}
            alt="Mobile Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Mobile Device Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Protect your smartphones and tablets from damage, theft, and technical failures.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Mobile Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Device Insurance Explained */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Device Insurance Explained
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Mobile insurance covers repair or replacement costs for damaged, lost, or stolen devices. It’s essential for protecting expensive smartphones and tablets from everyday risks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Accidental Damage', desc: 'Covers screen cracks and drops.' },
              { title: 'Theft Protection', desc: 'Replaces stolen devices.' },
              { title: 'Technical Failures', desc: 'Covers hardware or software issues.' },
              { title: 'Fast Claims', desc: 'Quick repair or replacement process.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <DevicePhoneMobileIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Protection Stats */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Device Protection Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: '60%', label: 'Phones damaged annually' },
              { stat: '1 in 4', label: 'Devices lost or stolen' },
              { stat: '48 hrs', label: 'Average claim processing time' },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-3xl font-bold text-blue-600">{item.stat}</h3>
                <p className="text-base text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Repair vs Replace Guide */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Repair vs. Replace
          </h2>
          <p className="text-base text-gray-600 mb-4">
            When your device is damaged, should you repair or replace it? Our insurance helps you decide:
          </p>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Minor damage (e.g., cracked screen): Repair covered up to $200.',
              'Major damage (e.g., water damage): Replacement if repair costs exceed value.',
              'Theft or loss: Full replacement with same or similar model.',
            ].map((item) => (
              <li key={item} className="flex items-center">
                <DevicePhoneMobileIcon className="h-6 w-6 text-blue-600 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Customer Story */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-blue-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Customer Story
          </h2>
          <p className="text-base text-gray-600 text-center">
            Riya dropped her phone, shattering the screen. Her mobile insurance covered a same-day repair, saving her $150 and keeping her connected.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default MobileInsurance;