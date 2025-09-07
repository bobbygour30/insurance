import React from 'react';
import { Link } from 'react-router-dom';
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
            className="w-full h-full object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Arshyan Group Mediclaim Insurance
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Ensure the health and well-being of your employees and their families with Arshyan’s comprehensive Group Mediclaim Insurance.
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
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>Hospitalization Coverage – Covers inpatient hospitalization expenses, including room charges, doctor fees, and medical tests.</li>
            <li>Pre and Post-Hospitalization – Covers medical expenses 30 days before and 60 days after hospitalization.</li>
            <li>Day-care Procedures – Covers treatments like cataract surgeries, chemotherapy, and dialysis without a 24-hour hospital stay.</li>
            <li>Cashless Treatment – Access a network of hospitals for cashless treatment, eliminating upfront payments.</li>
            <li>Family Coverage – Option to extend coverage to employees’ spouses, children, and dependent parents.</li>
          </ul>
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
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>Comprehensive Health Benefits – Covers a wide range of medical treatments to protect against rising healthcare costs.</li>
            <li>Maternity Benefits – Includes coverage for childbirth and prenatal care expenses.</li>
            <li>Flexible Sum Insured – Choose coverage amounts tailored to your business size and employee needs.</li>
            <li>Ambulance Expenses – Reimbursement for emergency ambulance charges to the nearest hospital.</li>
          </ul>
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
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>No Claim Bonus – Enjoy premium discounts or enhanced coverage for claim-free years.</li>
            <li>Wellness Programs – Optional programs to promote preventive healthcare and reduce medical risks.</li>
            <li>OPD Coverage – Optional coverage for outpatient treatments like consultations and diagnostics.</li>
          </ul>
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
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>Boost Employee Morale – Enhance job satisfaction and retention with comprehensive health coverage.</li>
            <li>Affordable Premiums – Tailored plans for businesses of all sizes at competitive rates.</li>
            <li>Customizable Plans – Flexible options to include critical illness, personal accident, and more.</li>
            <li>24/7 Customer Support – Dedicated assistance for claims and hospital coordination.</li>
          </ul>
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

export default GroupMediclaimInsurance;
