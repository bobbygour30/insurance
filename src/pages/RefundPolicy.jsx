import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const RefundPolicy = () => {
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
            src={assets.privacy}
            alt="Refund Policy Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Refund Policy</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about our refund process to ensure your satisfaction with our services.
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
            Our Refund Commitment
          </h2>
          <p className="text-base text-gray-600 mb-4">
            At [Your Company Name], we strive for customer satisfaction. This Refund Policy outlines when and how you can request a refund.
          </p>
        </motion.section>

        {/* Eligibility Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-50 rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Refund Eligibility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: '7-Day Window', desc: 'Request within 7 days of purchase, no claims filed.' },
              { title: 'Purchase Errors', desc: 'Report duplicate purchases within 48 hours.' },
              { title: 'Coverage Issues', desc: 'If we cannot provide promised coverage.' },
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

        {/* Non-Refundable Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Non-Refundable Services
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Administrative or processing fees.',
              'Premiums for used policies or claims filed.',
              'Consultation or advisory services.',
            ].map((item) => (
              <li key={item} className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-blue-50 rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Refund Process
          </h2>
          <p className="text-base text-gray-600 mb-4">
            To request a refund, contact us with your policy details. Approved refunds are processed within 14 business days.
          </p>
          <ul className="list-disc pl-6 mb-4 text-base text-gray-600">
            <li>Email <a href="mailto:support@[yourcompany].com" className="text-blue-600 hover:underline">support@[yourcompany].com</a> with your policy number.</li>
            <li>Provide documentation (e.g., proof of purchase).</li>
            <li>Allow 14 days for processing.</li>
          </ul>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>
          <p className="text-base text-gray-600 mb-4">
            For refund inquiries, reach out at{' '}
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

export default RefundPolicy;