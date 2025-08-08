import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
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
            src="https://via.placeholder.com/1200x400?text=Terms+and+Conditions+Banner"
            alt="Terms and Conditions Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Terms & Conditions</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Understand the rules governing your use of our services and insurance products.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.section>

        {/* Overview Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Agreement Overview
          </h2>
          <p className="text-base text-gray-600 mb-4">
            By using [Your Company Name]'s services, you agree to these Terms and Conditions, which govern your access to our website and insurance products.
          </p>
        </motion.section>

        {/* Usage Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-50 rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Use of Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Lawful Use', desc: 'Use services only for legal purposes.' },
              { title: 'No Unauthorized Access', desc: 'Do not attempt to access restricted systems.' },
              { title: 'Content Protection', desc: 'Do not reproduce content without permission.' },
              { title: 'Compliance', desc: 'Adhere to all applicable laws.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Account and Insurance Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Account and Insurance Terms
          </h2>
          <p className="text-base text-gray-600 mb-4">
            You are responsible for maintaining accurate account information and complying with policy terms.
          </p>
          <ul className="list-disc pl-6 mb-4 text-base text-gray-600">
            <li>Provide truthful data during registration.</li>
            <li>Secure your account credentials.</li>
            <li>Review insurance policy details before purchase.</li>
            <li>Pay premiums on time to maintain coverage.</li>
          </ul>
        </motion.section>

        {/* Payment and Liability Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-blue-50 rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Payments and Liability
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Ensure timely payments for services. We are not liable for indirect damages arising from service use.
          </p>
          <div className="flex items-start">
            <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-2" />
            <p className="text-base text-gray-600">
              Contact us for payment disputes at{' '}
              <a href="mailto:support@[yourcompany].com" className="text-blue-600 hover:underline">
                support@[yourcompany].com
              </a>.
            </p>
          </div>
        </motion.section>

        {/* Dispute and Termination Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Disputes and Termination
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Disputes are resolved through arbitration in [Your Jurisdiction]. We may terminate access for Terms violations.
          </p>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Negotiate disputes in good faith.',
              'Arbitration follows [Applicable Rules].',
              'Termination for fraud or non-payment.',
              'Notify us to close your account.',
            ].map((item) => (
              <li key={item} className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-blue-50 rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Questions about these Terms? Contact us at{' '}
            <a href="mailto:support@[yourcompany].com" className="text-blue-600 hover:underline">
              support@[yourcompany].com
            </a>{' '}
            or call [Your Phone Number].
          </p>
          <p className="text-base text-gray-600">Last Revised: August 8, 2025</p>
        </motion.section>
      </div>
    </div>
  );
};

export default TermsAndConditions;