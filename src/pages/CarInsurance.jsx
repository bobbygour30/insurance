import React from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const CarInsurance = () => {
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
            src={assets.car}
            alt="Car Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Car Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Drive confidently with coverage for accidents, theft, and third-party liabilities.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Car Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Car Insurance Guide */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Car Insurance Guide
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Car insurance protects you from financial losses due to accidents, theft, or damage to others’ property. It’s mandatory in most regions and offers peace of mind for daily commutes or long drives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Comprehensive', desc: 'Covers accidents, theft, and natural disasters.' },
              { title: 'Third-Party', desc: 'Mandatory coverage for damage to others.’ property.' },
              { title: 'Collision', desc: 'Pays for repairs after accidents.' },
              { title: 'Add-Ons', desc: 'Roadside assistance, zero depreciation options.' },
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

        {/* Coverage Comparison */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Coverage Options
          </h2>
          <table className="w-full text-base text-gray-600">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">Basic Plan</th>
                <th className="p-4 text-left">Premium Plan</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Collision Coverage', basic: '✓', premium: '✓' },
                { feature: 'Theft Protection', basic: '', premium: '✓' },
                { feature: 'Roadside Assistance', basic: '', premium: '✓' },
                { feature: 'Third-Party Liability', basic: '✓', premium: '✓' },
                { feature: 'Zero Depreciation', basic: '', premium: '✓' },
              ].map((row) => (
                <motion.tr
                  key={row.feature}
                  className="border-b"
                  whileHover={{ backgroundColor: '#f0f9ff' }}
                >
                  <td className="p-4 flex items-center">
                    <TruckIcon className="h-6 w-6 text-blue-600 mr-2" />
                    {row.feature}
                  </td>
                  <td className="p-4">{row.basic}</td>
                  <td className="p-4">{row.premium}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        {/* Safety Stats */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Driving Safety Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: '70%', label: 'Accidents due to distracted driving' },
              { stat: '1 in 5', label: 'Vehicles uninsured in accidents' },
              { stat: '24/7', label: 'Roadside assistance availability' },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-3xl font-bold text-blue-600">{item.stat}</h3>
                <p className="text-base text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Scenario-Based FAQ */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Common Scenarios
          </h2>
          <div className="space-y-4">
            {[
              {
                scenario: 'What if I hit another car?',
                answer: 'Your third-party liability covers damages to the other vehicle, while comprehensive covers your car’s repairs.',
              },
              {
                scenario: 'What if my car is stolen?',
                answer: 'Comprehensive plans cover theft, providing compensation based on your car’s value.',
              },
              {
                scenario: 'What if I break down on the highway?',
                answer: 'Roadside assistance (premium plans) provides towing and emergency support.',
              },
            ].map((item) => (
              <div key={item.scenario} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.scenario}</h3>
                <p className="text-base text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CarInsurance;