import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const GroupMediclaimInsurance = () => {
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
            src={assets.mediclaim}
            alt="Group Mediclaim Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Group Mediclaim Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Provide comprehensive health coverage for your employees and their families.
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
            Understanding Group Mediclaim
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Group mediclaim insurance offers health coverage for employees, enhancing morale and ensuring medical support for workplace wellness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Hospitalization', desc: 'Covers inpatient care and surgeries.' },
              { title: 'Outpatient Care', desc: 'Includes doctor visits and diagnostics.' },
              { title: 'Maternity Benefits', desc: 'Covers prenatal and delivery costs.' },
              { title: 'Preventive Care', desc: 'Includes check-ups and vaccinations.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <HeartIcon className="h-8 w-8 text-blue-600 mr-4" />
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
                { type: 'Hospitalization', details: 'Inpatient care and surgeries', limit: 'Up to $50,000' },
                { type: 'Outpatient Care', details: 'Doctor visits, diagnostics', limit: 'Up to $5,000' },
                { type: 'Maternity', details: 'Prenatal, delivery, newborn care', limit: 'Up to $10,000' },
                { type: 'Preventive Care', details: 'Check-ups, vaccinations', limit: 'Unlimited' },
              ].map((row) => (
                <motion.tr
                  key={row.type}
                  className="border-b"
                  whileHover={{ backgroundColor: '#f0f9ff' }}
                >
                  <td className="p-4 flex items-center">
                    <HeartIcon className="h-6 w-6 text-blue-600 mr-2" />
                    {row.type}
                  </td>
                  <td className="p-4">{row.details}</td>
                  <td className="p-4">{row.limit}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        {/* Wellness Tips */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Employee Wellness Tips
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Offer regular health check-ups.',
              'Promote stress management programs.',
              'Provide gym or wellness subsidies.',
              'Encourage healthy eating at work.',
              'Organize mental health workshops.',
            ].map((tip) => (
              <li key={tip} className="flex items-center">
                <HeartIcon className="h-6 w-6 text-blue-600 mr-2" />
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
            A company covered $15,000 for an employee’s surgery through group mediclaim, boosting employee satisfaction and retention.
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
                question: 'Can families be included?',
                answer: 'Yes, plans can cover employees’ spouses and children.',
              },
              {
                question: 'How are premiums paid?',
                answer: 'Employers typically pay, with optional employee contributions.',
              },
              {
                question: 'What’s the claim process?',
                answer: 'Submit claims via our portal or contact our 24/7 support.',
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

export default GroupMediclaimInsurance;