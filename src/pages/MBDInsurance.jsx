import React from 'react';
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const MBDInsurance = () => {
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
            src={assets.machine}
            alt="MBD Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Machinery Breakdown Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Machinery is the backbone of any industrial operation. Arshyan Insurance’s Machinery Breakdown (MBD) Insurance Policy protects your business from costly breakdowns, ensuring smooth operations.
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
            Our MBD Insurance Policy offers comprehensive protection to minimize the impact of machinery breakdowns on your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Breakdown Coverage', desc: 'Covers sudden and unforeseen physical damage due to mechanical or electrical breakdowns.' },
              { title: 'Repair and Replacement Costs', desc: 'Covers costs for repairing or replacing damaged machinery parts.' },
              { title: 'Accidental Damage', desc: 'Protection against damage during operation or maintenance.' },
              { title: 'Loss Due to Breakdown', desc: 'Coverage for financial losses caused by downtime.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <CogIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* What’s Covered */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-4 sm:p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            What’s Covered
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base text-gray-600 hidden sm:table">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-2 sm:p-4 text-left">Coverage Type</th>
                  <th className="p-2 sm:p-4 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Mechanical Failure', details: 'Covers internal issues like broken parts, seized motors, or damaged bearings.' },
                  { type: 'Electrical Malfunctions', details: 'Protection for short circuits, overheating, or voltage fluctuations.' },
                  { type: 'Pressure Plant Breakdown', details: 'Covers operational failures in boilers or pressure vessels.' },
                  { type: 'Human Error', details: 'Covers damage from operator mistakes during machinery handling.' },
                ].map((row) => (
                  <motion.tr
                    key={row.type}
                    className="border-b"
                    whileHover={{ backgroundColor: '#f0f9ff' }}
                  >
                    <td className="p-2 sm:p-4 flex items-center">
                      <CogIcon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-2" />
                      {row.type}
                    </td>
                    <td className="p-2 sm:p-4">{row.details}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            {/* Mobile view */}
            <div className="sm:hidden space-y-4">
              {[
                { type: 'Mechanical Failure', details: 'Covers internal issues like broken parts, seized motors, or damaged bearings.' },
                { type: 'Electrical Malfunctions', details: 'Protection for short circuits, overheating, or voltage fluctuations.' },
                { type: 'Pressure Plant Breakdown', details: 'Covers operational failures in boilers or pressure vessels.' },
                { type: 'Human Error', details: 'Covers damage from operator mistakes during machinery handling.' },
              ].map((row) => (
                <motion.div
                  key={row.type}
                  className="border rounded-lg p-4 bg-blue-50"
                  whileHover={{ backgroundColor: '#f0f9ff' }}
                >
                  <div className="flex items-center mb-2">
                    <CogIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">{row.type}</h3>
                  </div>
                  <p className="text-sm text-gray-600"><span className="font-semibold">Details:</span> {row.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Policy Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Policy Benefits
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Customizable coverage tailored to your specific machinery needs.',
              'Minimize downtime with quick claims settlements and repair coverage.',
              'Affordable premiums for extensive protection without financial strain.',
              'Optional add-ons like loss of profit coverage or extended warranties.',
            ].map((benefit) => (
              <li key={benefit} className="flex items-center">
                <CogIcon className="h-6 w-6 text-blue-600 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Why Choose Arshyan Insurance */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Arshyan Insurance?
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Expert support for selecting coverage and hassle-free claims processing.',
              'All-risk coverage against mechanical, electrical, and human error risks.',
              'Business continuity with minimal financial losses from breakdowns.',
              'Prompt claims settlement to quickly repair or replace machinery.',
            ].map((reason) => (
              <li key={reason} className="flex items-center">
                <CogIcon className="h-6 w-6 text-blue-600 mr-2" />
                {reason}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Additional Features */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Additional Features
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Optional preventive maintenance cover to reduce breakdown risks.',
              'Specialized coverage for high-value machinery in industries like manufacturing, energy, and construction.',
              'Optional liability protection for third-party impacts from breakdowns.',
            ].map((feature) => (
              <li key={feature} className="flex items-center">
                <CogIcon className="h-6 w-6 text-blue-600 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Keep Your Business Running Smoothly
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Arshyan Insurance’s MBD Insurance Policy ensures your machinery is protected, reducing downtime and financial losses. Get complete peace of mind with our comprehensive coverage and quick claim settlements.
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

export default MBDInsurance;