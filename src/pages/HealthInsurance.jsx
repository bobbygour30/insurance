import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const HealthInsurance = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
            src={assets.banner1}
            alt="Health Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Health Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Secure your family’s well-being with comprehensive medical coverage for emergencies, routine care, and more.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Health Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Health Insurance Basics */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Understanding Health Insurance
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Health insurance covers medical expenses, from doctor visits to surgeries, ensuring you’re financially protected during health challenges. It includes preventive care to maintain wellness and emergency services for unexpected events.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Hospitalization', desc: 'Covers inpatient care and surgeries.' },
              { title: 'Outpatient Care', desc: 'Includes doctor visits and diagnostics.' },
              { title: 'Preventive Care', desc: 'Free check-ups and vaccinations.' },
              { title: 'Emergency Services', desc: 'Support for critical medical needs.' },
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
                  { type: 'Hospitalization', details: 'Inpatient care, surgeries', limit: 'Up to $50,000/year' },
                  { type: 'Maternity', details: 'Prenatal, delivery, newborn care', limit: 'Up to $10,000' },
                  { type: 'Outpatient', details: 'Doctor visits, diagnostics', limit: 'Up to $5,000/year' },
                  { type: 'Emergency', details: 'Ambulance, ER services', limit: 'Unlimited' },
                ].map((row) => (
                  <motion.tr
                    key={row.type}
                    className="border-b"
                    whileHover={{ backgroundColor: '#f0f9ff' }}
                  >
                    <td className="p-2 sm:p-4 flex items-center">
                      <HeartIcon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-2" />
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
                { type: 'Hospitalization', details: 'Inpatient care, surgeries', limit: 'Up to $50,000/year' },
                { type: 'Maternity', details: 'Prenatal, delivery, newborn care', limit: 'Up to $10,000' },
                { type: 'Outpatient', details: 'Doctor visits, diagnostics', limit: 'Up to $5,000/year' },
                { type: 'Emergency', details: 'Ambulance, ER services', limit: 'Unlimited' },
              ].map((row) => (
                <motion.div
                  key={row.type}
                  className="border rounded-lg p-4 bg-blue-50"
                  whileHover={{ backgroundColor: '#f0f9ff' }}
                >
                  <div className="flex items-center mb-2">
                    <HeartIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">{row.type}</h3>
                  </div>
                  <p className="text-sm text-gray-600"><span className="font-semibold">Details:</span> {row.details}</p>
                  <p className="text-sm text-gray-600"><span className="font-semibold">Limit:</span> {row.limit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Myths Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Common Health Insurance Myths
          </h2>
          <div className="space-y-4">
            {[
              {
                myth: 'Health insurance is too expensive.',
                truth: 'Plans are customizable to fit budgets, with options for low premiums.',
              },
              {
                myth: 'I’m healthy, I don’t need insurance.',
                truth: 'Unexpected illnesses or injuries can happen to anyone, and insurance covers preventive care.',
              },
              {
                myth: 'Pre-existing conditions aren’t covered.',
                truth: 'Most plans cover pre-existing conditions after a waiting period.',
              },
            ].map((item) => (
              <div key={item.myth} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800">Myth: {item.myth}</h3>
                <p className="text-base text-gray-600">Truth: {item.truth}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Case Study */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Real-World Example
          </h2>
          <p className="text-base text-gray-600">
            Priya, a 35-year-old mother, faced a sudden surgery costing $20,000. Her health insurance covered 90% of the expenses, saving her family from financial strain. With our 24/7 support, she navigated the claims process effortlessly.
          </p>
        </motion.section>

        {/* FAQ Accordion */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-blue-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          {[
            {
              question: 'What does health insurance cover?',
              answer: 'Covers hospitalization, outpatient care, maternity, preventive check-ups, and emergencies.',
            },
            {
              question: 'How do I file a claim?',
              answer: 'Submit claims online via our portal or call our 24/7 support team.',
            },
            {
              question: 'Are pre-existing conditions covered?',
              answer: 'Yes, after a waiting period (typically 1-2 years), depending on the plan.',
            },
            {
              question: 'Can I include my family?',
              answer: 'Yes, family plans cover spouses, children, and sometimes parents.',
            },
          ].map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200 py-4"
            >
              <button
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <HeartIcon
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-base text-gray-600 mt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default HealthInsurance;