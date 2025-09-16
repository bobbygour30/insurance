import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const EmployeeCompensationInsurance = () => {
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
            src={assets.employee}
            alt="Employee Compensation Insurance Banner"
            className="w-full h-92 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
           Employee Compensation Insurance
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Ensure your employees’ well-being with Arshyan’s Employee Compensation Insurance, covering workplace injuries, illnesses, and legal liabilities.
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

        {/* What is Employee Compensation Insurance */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What is Employee Compensation Insurance?
          </h2>
          <p className="text-gray-600 mb-4">
            Employee Compensation Insurance protects employers by providing financial coverage against employee injuries, occupational diseases, or death occurring during the course of employment. It ensures compliance with labor laws while safeguarding employee welfare.
          </p>
        </motion.section>

        {/* Policy Highlights */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Policy Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Covers medical expenses, rehabilitation, and compensation for work-related injuries or illnesses.</li>
            <li>Provides death and disability benefits to employees and their families.</li>
            <li>Ensures compliance with the Employee Compensation Act and other labor regulations.</li>
            <li>Extends coverage to full-time, part-time, and contractual workers.</li>
          </ul>
        </motion.section>

        {/* Key Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Comprehensive protection against accidents, occupational diseases, and workplace risks.</li>
            <li>Covers hospitalization, surgeries, and medical treatments related to workplace injuries.</li>
            <li>Compensates employees for lost wages during recovery.</li>
            <li>Includes legal and investigation costs arising from workplace incidents.</li>
          </ul>
        </motion.section>

        {/* Additional Features */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Compensation for temporary disability due to work-related injuries.</li>
            <li>Funeral expense coverage in case of work-related death.</li>
            <li>Tailored policy solutions based on business needs and risk profiles.</li>
          </ul>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Arshyan Insurance?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Prioritizes employee safety and well-being.</li>
            <li>Flexible and customizable insurance plans.</li>
            <li>Quick and hassle-free claims process.</li>
            <li>Helps businesses reduce financial burdens of workplace risks.</li>
          </ul>
        </motion.section>

        {/* Call-to-Action */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Protect Your Workforce</h2>
          <p className="text-gray-600 mb-6">
            With Arshyan Employee Compensation Insurance, safeguard your employees’ well-being and keep your business legally compliant. Get started today!
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

export default EmployeeCompensationInsurance;
