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
            Protect your retail business from property damage, theft, and liabilities.
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
            Understanding Shop Insurance
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Shop insurance covers retail businesses for inventory losses, property damage, and customer liabilities, ensuring smooth operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Inventory Protection', desc: 'Covers stock losses from theft or damage.' },
              { title: 'Property Coverage', desc: 'Protects shop premises and fixtures.' },
              { title: 'Liability Protection', desc: 'Covers customer injuries or claims.' },
              { title: 'Business Interruption', desc: 'Compensates for lost income.' },
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
                  { type: 'Inventory Loss', details: 'Theft or damage to stock', limit: 'Up to $30,000' },
                  { type: 'Property Damage', details: 'Shop premises and fixtures', limit: 'Up to $50,000' },
                  { type: 'Liability', details: 'Customer injuries or claims', limit: 'Up to $1M' },
                  { type: 'Business Interruption', details: 'Lost income from closures', limit: 'Up to $15,000' },
                ].map((row) => (
                  <motion.tr
                    key={row.type}
                    className="border-b"
                    whileHover={{ backgroundColor: '#f0f9ff' }}
                  >
                    <td className="p-2 sm:p-4 flex items-center">
                      <BuildingStorefrontIcon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-2" />
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
                { type: 'Inventory Loss', details: 'Theft or damage to stock', limit: 'Up to $30,000' },
                { type: 'Property Damage', details: 'Shop premises and fixtures', limit: 'Up to $50,000' },
                { type: 'Liability', details: 'Customer injuries or claims', limit: 'Up to $1M' },
                { type: 'Business Interruption', details: 'Lost income from closures', limit: 'Up to $15,000' },
              ].map((row) => (
                <motion.div
                  key={row.type}
                  className="border rounded-lg p-4 bg-blue-50"
                  whileHover={{ backgroundColor: '#f0f9ff' }}
                >
                  <div className="flex items-center mb-2">
                    <BuildingStorefrontIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">{row.type}</h3>
                  </div>
                  <p className="text-sm text-gray-600"><span className="font-semibold">Details:</span> {row.details}</p>
                  <p className="text-sm text-gray-600"><span className="font-semibold">Limit:</span> {row.limit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Retail Safety Tips */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Retail Safety Tips
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Secure inventory with locked displays.',
              'Install anti-slip flooring for safety.',
              'Train staff on customer safety protocols.',
              'Use CCTV for theft prevention.',
              'Maintain clear emergency exits.',
            ].map((tip) => (
              <li key={tip} className="flex items-center">
                <BuildingStorefrontIcon className="h-6 w-6 text-blue-600 mr-2" />
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
            A retail shop recovered $20,000 after a burglary, covering stolen inventory and property damage with shop insurance.
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
                question: 'What does shop insurance cover?',
                answer: 'Inventory, property, liability, and business interruption.',
              },
              {
                question: 'Does it cover seasonal inventory?',
                answer: 'Yes, with adjustable coverage for peak seasons.',
              },
              {
                question: 'How do I file a claim?',
                answer: 'Submit details via our portal or contact 24/7 support.',
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

export default ShopInsurance;