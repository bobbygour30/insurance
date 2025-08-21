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
            Protect your business properties and homes from damage and loss.
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
            Understanding Bharat Griha Raksha
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Bharat Griha Raksha protects business properties and homes from fire, natural disasters, and other damages, ensuring structural and content safety.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Structure Protection', desc: 'Covers building damage.' },
              { title: 'Contents Coverage', desc: 'Protects furniture and equipment.' },
              { title: 'Natural Disasters', desc: 'Includes floods and earthquakes.' },
              { title: 'Add-Ons', desc: 'Covers temporary relocation costs.' },
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

        {/* Coverage Details */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-4 sm:p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Coverage Details
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base text-gray-600 hidden sm:table">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-2 sm:p-4 text-left">Coverage Type</th>
                  <th className="p-2 sm:p-4 text-left">Details</th>
                  <th className="p-2 sm:p-4 text-left">Limit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Structure Damage', details: 'Building repairs', limit: 'Up to $100,000' },
                  { type: 'Contents Loss', details: 'Furniture, equipment', limit: 'Up to $50,000' },
                  { type: 'Natural Disasters', details: 'Floods, earthquakes', limit: 'Up to $30,000' },
                  { type: 'Relocation Costs', details: 'Temporary accommodation', limit: 'Up to $10,000' },
                ].map((row) => (
                  <motion.tr
                    key={row.type}
                    className="border-b"
                    whileHover={{ backgroundColor: '#f0f9ff' }}
                  >
                    <td className="p-2 sm:p-4 flex items-center">
                      <HomeIcon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-2" />
                      {row.type}
                    </td>
                    <td className="p-2 sm:p-4">{row.details}</td>
                    <td className="p-2 sm:p-4">{row.limit}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            {/* Mobile view */}
            <div className="sm:hidden space-y-4">
              {[
                { type: 'Structure Damage', details: 'Building repairs', limit: 'Up to $100,000' },
                { type: 'Contents Loss', details: 'Furniture, equipment', limit: 'Up to $50,000' },
                { type: 'Natural Disasters', details: 'Floods, earthquakes', limit: 'Up to $30,000' },
                { type: 'Relocation Costs', details: 'Temporary accommodation', limit: 'Up to $10,000' },
              ].map((row) => (
                <motion.div
                  key={row.type}
                  className="border rounded-lg p-4 bg-blue-50"
                  whileHover={{ backgroundColor: '#f0f9ff' }}
                >
                  <div className="flex items-center mb-2">
                    <HomeIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">{row.type}</h3>
                  </div>
                  <p className="text-sm text-gray-600"><span className="font-semibold">Details:</span> {row.details}</p>
                  <p className="text-sm text-gray-600"><span className="font-semibold">Limit:</span> {row.limit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Property Safety Tips */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Property Safety Tips
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Install fire and smoke alarms.',
              'Elevate equipment in flood-prone areas.',
              'Conduct structural inspections regularly.',
              'Secure windows and doors.',
              'Maintain backup power systems.',
            ].map((tip) => (
              <li key={tip} className="flex items-center">
                <HomeIcon className="h-6 w-6 text-blue-600 mr-2" />
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
            An office recovered $60,000 after flood damage to its building and contents, thanks to Bharat Griha Raksha insurance.
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
                question: 'Does it cover business and residential properties?',
                answer: 'Yes, both are covered under this policy.',
              },
              {
                question: 'What disasters are included?',
                answer: 'Fire, floods, earthquakes, and other natural calamities.',
              },
              {
                question: 'How do I file a claim?',
                answer: 'Submit damage details via our portal or 24/7 support.',
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

export default BharatGrihaRakshaInsurance;