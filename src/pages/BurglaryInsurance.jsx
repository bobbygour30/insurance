import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const BurglaryInsurance = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
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
            className="w-full h-full object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
           Burglary Insurance
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Protect your business from theft and burglary with Arshyan Insurance’s
            reliable and comprehensive coverage.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/get-quote"
              className="mt-6 inline-block bg-[#00001a] text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* What is Burglary Insurance */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What is Burglary Insurance?
          </h2>
          <p className="text-gray-600 mb-4">
            Burglary Insurance protects your business assets such as stock,
            equipment, and cash from theft or damage caused by burglary or
            attempted burglary. It also covers the cost of repairing property
            damage caused during the break-in.
          </p>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Coverage for burglary, theft, or attempted theft of valuables and contents.</li>
            <li>Repairs for damages caused during a break-in (doors, windows, locks, etc.).</li>
            <li>Flexible sum insured tailored to your business needs.</li>
            <li>Option to extend cover for employee-related theft during business travel.</li>
          </ul>
        </motion.section>

        {/* What’s Covered */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What’s Covered</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Loss or damage due to burglary or break-ins.</li>
            <li>Repairs for attempted theft damages.</li>
            <li>Losses due to robbery or hold-ups within business premises.</li>
            <li>Optional: Coverage for third-party liability caused during theft.</li>
          </ul>
        </motion.section>

        {/* Policy Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Policy Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Affordable premiums for businesses of all sizes.</li>
            <li>Fast and hassle-free claims process.</li>
            <li>Customizable add-ons like cash-in-transit cover or employee dishonesty protection.</li>
          </ul>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose Arshyan Insurance?
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Complete protection against burglary risks.</li>
            <li>Expert guidance to select the right coverage.</li>
            <li>Transparent policies with no hidden terms.</li>
          </ul>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Secure Your Business Assets
          </h2>
          <p className="text-gray-600 mb-6">
            Protect your stock, cash, and equipment from theft and burglary with
            Arshyan Burglary Insurance. Get started today!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/get-quote"
              className="inline-block bg-[#00001a] text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default BurglaryInsurance;
