import React from 'react';
import { Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const BurglaryInsurance = () => {
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
            src={assets.Burglary}
            alt="Burglary Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Burglary Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Safeguard your business assets from theft and burglary with comprehensive coverage.
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
            Understanding Burglary Insurance
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Burglary insurance covers losses from theft, break-ins, and damage caused during such incidents, protecting your inventory and equipment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Inventory Protection', desc: 'Covers stolen goods and stock.' },
              { title: 'Equipment Coverage', desc: 'Replaces stolen or damaged equipment.' },
              { title: 'Property Damage', desc: 'Covers damage from forced entry.' },
              { title: 'Cash Protection', desc: 'Covers stolen cash on premises.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <LockClosedIcon className="h-8 w-8 text-blue-600 mr-4" />
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
                { type: 'Inventory Theft', details: 'Stolen goods and stock', limit: 'Up to $20,000' },
                { type: 'Equipment Theft', details: 'Stolen or damaged equipment', limit: 'Up to $15,000' },
                { type: 'Forced Entry Damage', details: 'Repairs for break-in damage', limit: 'Up to $5,000' },
                { type: 'Cash Loss', details: 'Stolen cash on premises', limit: 'Up to $10,000' },
              ].map((row) => (
                <motion.tr
                  key={row.type}
                  className="border-b"
                  whileHover={{ backgroundColor: '#f0f9ff' }}
                >
                  <td className="p-4 flex items-center">
                    <LockClosedIcon className="h-6 w-6 text-blue-600 mr-2" />
                    {row.type}
                  </td>
                  <td className="p-4">{row.details}</td>
                  <td className="p-4">{row.limit}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        {/* Security Tips */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Security Tips
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Install CCTV cameras at entry points.',
              'Use high-quality locks and alarms.',
              'Secure inventory in locked storage.',
              'Conduct regular security audits.',
              'Train staff on theft prevention.',
            ].map((tip) => (
              <li key={tip} className="flex items-center">
                <LockClosedIcon className="h-6 w-6 text-blue-600 mr-2" />
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
            A retail store lost $10,000 in inventory due to a break-in. Burglary insurance covered the loss and door repairs, minimizing financial impact.
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
                question: 'What qualifies as a burglary?',
                answer: 'Theft involving forced entry into your premises.',
              },
              {
                question: 'Does it cover employee theft?',
                answer: 'No, employee theft requires a separate fidelity policy.',
              },
              {
                question: 'How do I file a claim?',
                answer: 'Submit a police report and claim details via our portal.',
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

export default BurglaryInsurance;