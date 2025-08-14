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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Bharat Sookshma Udyam Suraksha</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Protect your small business from fire, natural disasters, and other perils with comprehensive coverage.
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

        {/* Basics Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Understanding Bharat Sookshma Udyam Suraksha
          </h2>
          <p className="text-base text-gray-600 mb-4">
            This standard fire policy protects small businesses from losses due to fire, explosions, lightning, floods, and other perils, ensuring operational continuity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Fire Protection', desc: 'Covers damages from fire and smoke.' },
              { title: 'Natural Disasters', desc: 'Includes floods, earthquakes, and storms.' },
              { title: 'Business Interruption', desc: 'Compensates for lost income during closures.' },
              { title: 'Allied Perils', desc: 'Covers riots, strikes, and malicious damage.' },
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

        {/* Coverage Table */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Coverage Details
          </h2>
          <table className="w-full text-base text-gray-600">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-4 text-left">Coverage Type</th>
                <th className="p-4 text-left">Details</th>
                <th className="p-4 text-left">Limit</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Fire Damage', details: 'Fire and smoke losses', limit: 'Up to $50,000' },
                { type: 'Natural Disasters', details: 'Floods, earthquakes', limit: 'Up to $30,000' },
                { type: 'Business Interruption', details: 'Lost income', limit: 'Up to $10,000' },
                { type: 'Allied Perils', details: 'Riots, strikes', limit: 'Up to $20,000' },
              ].map((row) => (
                <motion.tr
                  key={row.type}
                  className="border-b"
                  whileHover={{ backgroundColor: '#f0f9ff' }}
                >
                  <td className="p-4 flex items-center">
                    <FireIcon className="h-6 w-6 text-blue-600 mr-2" />
                    {row.type}
                  </td>
                  <td className="p-4">{row.details}</td>
                  <td className="p-4">{row.limit}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        {/* Fire Safety Tips */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Fire Safety Tips
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Install fire extinguishers in key areas.',
              'Conduct regular fire drills.',
              'Store flammable materials safely.',
              'Check electrical wiring annually.',
              'Maintain smoke detectors.',
            ].map((tip) => (
              <li key={tip} className="flex items-center">
                <FireIcon className="h-6 w-6 text-blue-600 mr-2" />
                {tip}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Case Study */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Real-World Example
          </h2>
          <p className="text-base text-gray-600">
            A small factory faced a $40,000 loss due to a fire. Bharat Sookshma Udyam Suraksha covered repairs and business interruption, enabling quick recovery.
          </p>
        </motion.section>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-blue-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'What perils are covered?',
                answer: 'Fire, explosions, lightning, floods, earthquakes, riots, and more.',
              },
              {
                question: 'Is this suitable for small businesses?',
                answer: 'Yes, it’s designed for micro and small enterprises.',
              },
              {
                question: 'How do I file a claim?',
                answer: 'Submit claims online or via our 24/7 support with damage details.',
              },
            ].map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <p className="text-base text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default BharatSookshmaInsurance;