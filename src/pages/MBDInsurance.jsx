import React from 'react';
import { Link } from 'react-router-dom';
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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Machinery Breakdown Insurance
          </h1>
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
          <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
            <li>Covers sudden and unforeseen physical damage due to mechanical or electrical breakdowns.</li>
            <li>Covers costs for repairing or replacing damaged machinery parts.</li>
            <li>Protection against damage during operation or maintenance.</li>
            <li>Coverage for financial losses caused by downtime.</li>
          </ul>
        </motion.section>

        {/* What’s Covered */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            What’s Covered
          </h2>
          <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
            <li>Mechanical Failure – covers broken parts, seized motors, or damaged bearings.</li>
            <li>Electrical Malfunctions – protection against short circuits, overheating, or voltage fluctuations.</li>
            <li>Pressure Plant Breakdown – covers failures in boilers or pressure vessels.</li>
            <li>Human Error – damage caused by operator mistakes during handling.</li>
          </ul>
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
          <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
            <li>Customizable coverage tailored to your specific machinery needs.</li>
            <li>Quick claims settlements and repair coverage to minimize downtime.</li>
            <li>Affordable premiums with extensive protection.</li>
            <li>Optional add-ons like loss of profit coverage or extended warranties.</li>
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
          <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
            <li>Expert support for selecting coverage and hassle-free claims.</li>
            <li>All-risk coverage against mechanical, electrical, and human errors.</li>
            <li>Business continuity with minimal financial losses from breakdowns.</li>
            <li>Prompt claims settlement to repair or replace machinery quickly.</li>
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
          <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
            <li>Optional preventive maintenance cover to reduce breakdown risks.</li>
            <li>Specialized coverage for high-value machinery in industries like manufacturing, energy, and construction.</li>
            <li>Optional liability protection for third-party impacts from breakdowns.</li>
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
