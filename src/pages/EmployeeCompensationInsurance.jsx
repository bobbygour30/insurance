import React from 'react';
import { Link } from 'react-router-dom';
import { UsersIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

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
            src="https://via.placeholder.com/1200x400?text=Employee+Compensation+Banner"
            alt="Employee Compensation Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Employee Compensation Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Protect your employees with coverage for workplace injuries and liabilities.
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
            Understanding Employee Compensation
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Employee compensation insurance covers medical expenses, disability benefits, and liabilities for workplace injuries, ensuring compliance and employee well-being.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Medical Expenses', desc: 'Covers treatment for injuries.' },
              { title: 'Disability Benefits', desc: 'Supports employees unable to work.' },
              { title: 'Death Benefits', desc: 'Provides for dependents in fatal cases.' },
              { title: 'Legal Liabilities', desc: 'Covers employer legal responsibilities.' },
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
                { type: 'Medical Expenses', details: 'Hospital and treatment costs', limit: 'Up to $50,000' },
                { type: 'Disability Benefits', details: 'Temporary or permanent disability', limit: 'Up to $30,000' },
                { type: 'Death Benefits', details: 'Support for dependents', limit: 'Up to $100,000' },
                { type: 'Legal Liabilities', details: 'Employer legal costs', limit: 'Up to $1M' },
              ].map((row) => (
                <motion.tr
                  key={row.type}
                  className="border-b"
                  whileHover={{ backgroundColor: '#f0f9ff' }}
                >
                  <td className="p-4 flex items-center">
                    <UsersIcon className="h-6 w-6 text-blue-600 mr-2" />
                    {row.type}
                  </td>
                  <td className="p-4">{row.details}</td>
                  <td className="p-4">{row.limit}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        {/* Safety Tips */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Workplace Safety Tips
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Provide safety training regularly.',
              'Maintain ergonomic workstations.',
              'Ensure proper safety equipment.',
              'Conduct workplace hazard assessments.',
              'Encourage injury reporting promptly.',
            ].map((tip) => (
              <li key={tip} className="flex items-center">
                <UsersIcon className="h-6 w-6 text-blue-600 mr-2" />
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
            A factory worker’s injury cost $25,000 in medical bills. Employee compensation insurance covered treatment and disability benefits, supporting recovery.
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
                question: 'Who is covered under this policy?',
                answer: 'All employees, including part-time and contract workers.',
              },
              {
                question: 'What injuries are covered?',
                answer: 'Work-related injuries, illnesses, and disabilities.',
              },
              {
                question: 'Is this mandatory?',
                answer: 'Yes, in most regions for businesses with employees.',
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

export default EmployeeCompensationInsurance;