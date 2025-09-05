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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Arshyan Group Mediclaim Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Ensure the health and well-being of your employees and their families with Arshyan’s comprehensive Group Mediclaim Insurance.
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

        {/* Key Features Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Key Features
          </h2>
          <p className="text-base text-gray-600 mb-4 text-center">
            Our Group Mediclaim Insurance Policy provides extensive health coverage to support your workforce and their families.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Hospitalization Coverage', desc: 'Covers inpatient hospitalization expenses, including room charges, doctor fees, and medical tests.' },
              { title: 'Pre and Post-Hospitalization', desc: 'Covers medical expenses 30 days before and 60 days after hospitalization.' },
              { title: 'Day-care Procedures', desc: 'Covers treatments like cataract surgeries, chemotherapy, and dialysis without a 24-hour hospital stay.' },
              { title: 'Cashless Treatment', desc: 'Access a network of hospitals for cashless treatment, eliminating upfront payments.' },
              { title: 'Family Coverage', desc: 'Option to extend coverage to employees’ spouses, children, and dependent parents.' },
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

        {/* Policy Benefits Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Policy Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Comprehensive Health Benefits', desc: 'Covers a wide range of medical treatments to protect against rising healthcare costs.' },
              { title: 'Maternity Benefits', desc: 'Includes coverage for childbirth and prenatal care expenses.' },
              { title: 'Flexible Sum Insured', desc: 'Choose coverage amounts tailored to your business size and employee needs.' },
              { title: 'Ambulance Expenses', desc: 'Reimbursement for emergency ambulance charges to the nearest hospital.' },
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
              { title: 'No Claim Bonus', desc: 'Enjoy premium discounts or enhanced coverage for claim-free years.' },
              { title: 'Wellness Programs', desc: 'Optional programs to promote preventive healthcare and reduce medical risks.' },
              { title: 'OPD Coverage', desc: 'Optional coverage for outpatient treatments like consultations and diagnostics.' },
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
              { title: 'Boost Employee Morale', desc: 'Enhance job satisfaction and retention with comprehensive health coverage.' },
              { title: 'Affordable Premiums', desc: 'Tailored plans for businesses of all sizes at competitive rates.' },
              { title: 'Customizable Plans', desc: 'Flexible options to include critical illness, personal accident, and more.' },
              { title: '24/7 Customer Support', desc: 'Dedicated assistance for claims and hospital coordination.' },
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

        {/* Call-to-Action Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white rounded-lg shadow-md p-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Secure the Health of Your Workforce
          </h2>
          <p className="text-base text-gray-600 mb-6">
            With Arshyan Group Mediclaim Insurance, provide your employees with the best healthcare, fostering a healthier and more productive workplace. Get started today!
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

export default GroupMediclaimInsurance;