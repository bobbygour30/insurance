import React from 'react';
import { Link } from 'react-router-dom';
import { UsersIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const EmployeeCompensationInsurance = () => {
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
            src={assets.employee}
            alt="Employee Compensation Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Arshyan Employee Compensation Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Ensure your employees’ well-being with Arshyan’s Employee Compensation Insurance, covering workplace injuries, illnesses, and legal liabilities.
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

        {/* Policy Highlights Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Policy Highlights
          </h2>
          <p className="text-base text-gray-600 mb-4 text-center">
            Our Employee Compensation Insurance Policy provides comprehensive protection for your workforce and ensures compliance with labor laws.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Workplace Injury Compensation', desc: 'Covers medical expenses, rehabilitation, and compensation for work-related injuries or illnesses.' },
              { title: 'Death and Disability Benefits', desc: 'Provides compensation for families in case of accidental death or permanent disability.' },
              { title: 'Legal Compliance', desc: 'Ensures compliance with the Employee Compensation Act and other labor laws.' },
              { title: 'Coverage for All Employees', desc: 'Protects full-time, part-time, and contractual workers under your payroll.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <UsersIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Key Benefits Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Comprehensive Coverage', desc: 'Protects against accidents, injuries, occupational diseases, and more.' },
              { title: 'Medical Expenses', desc: 'Covers hospitalization, surgery, and treatment costs for workplace injuries.' },
              { title: 'Lost Wages', desc: 'Compensates employees for lost income during recovery.' },
              { title: 'Legal and Investigation Costs', desc: 'Covers expenses related to legal proceedings or investigations from workplace incidents.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <UsersIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Additional Features Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Additional Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Temporary Disability Coverage', desc: 'Compensation for employees temporarily unable to work due to injury.' },
              { title: 'Funeral Expenses', desc: 'Financial assistance for funeral costs in case of work-related death.' },
              { title: 'Tailored Solutions', desc: 'Customized policy terms based on your business and risk profile.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <UsersIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Arshyan Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Arshyan Insurance?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Employee Safety First', desc: 'Ensure your employees feel valued and protected.' },
              { title: 'Customizable Plans', desc: 'Flexible coverage options tailored to your workforce needs.' },
              { title: 'Hassle-free Claims', desc: 'Quick and straightforward claims process for employee recovery.' },
              { title: 'Business Protection', desc: 'Reduce financial burdens with comprehensive coverage.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <UsersIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Call-to-Action Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white rounded-lg shadow-md p-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Protect Your Workforce
          </h2>
          <p className="text-base text-gray-600 mb-6">
            With Arshyan Employee Compensation Insurance, ensure your employees’ safety and your business’s compliance. Get started today!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
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