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
            At Arshyan Insurance, we strive for customer satisfaction. Learn about our refund process for our services.
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

        {/* Refund Policy Content */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Refund Commitment
          </h2>
          <ol className="list-decimal pl-6 text-base text-gray-600 space-y-4">
            <li>
              <strong>Refund Eligibility:</strong> Refunds apply only if the service has not been fully rendered (e.g., consultation not provided or insurance not processed).
            </li>
            <li>
              <strong>Non-Refundable Services:</strong> No refund is applicable once documentation has been submitted to insurers or work has commenced.
            </li>
            <li>
              <strong>Refund Processing:</strong> Approved refunds will be credited within 7–10 business days to the original payment method.
            </li>
            <li>
              <strong>How to Request a Refund:</strong> Please email your refund request with payment details and reason at{' '}
              <a href="mailto:Sales.suport@arshyaninsurance.com" className="text-blue-600 hover:underline">
                Sales.suport@arshyaninsurance.com
              </a>{' '}
              or call +9111-43592951.
            </li>
          </ol>
        </motion.section>
      </div>
    </div>
  );
};

export default RefundPolicy;