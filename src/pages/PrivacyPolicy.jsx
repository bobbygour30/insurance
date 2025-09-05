import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const PrivacyPolicy = () => {
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
            alt="Privacy Policy Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            At Arshyan Insurance, your privacy is our priority. Learn how we collect, use, and protect your personal information.
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

        {/* Privacy Policy Content */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Privacy Commitment
          </h2>
          <ol className="list-decimal pl-6 text-base text-gray-600 space-y-4">
            <li>
              <strong>Information We Collect:</strong> We may collect personal details such as your name, contact number, email, ID proofs (e.g., PAN, Aadhaar), and insurance-related preferences when you engage with our consultancy services.
            </li>
            <li>
              <strong>Purpose of Use:</strong> We use your data to:
              <ul className="list-disc pl-6 mt-2">
                <li>Provide tailored insurance consultation.</li>
                <li>Share policy quotes and service updates.</li>
                <li>Fulfill compliance and regulatory requirements.</li>
              </ul>
            </li>
            <li>
              <strong>Data Security:</strong> We maintain strict safeguards to ensure your personal data remains confidential and protected from unauthorized access.
            </li>
            <li>
              <strong>Sharing of Information:</strong> We do not sell or misuse your data. Information is shared only with trusted insurance partners or as required by law.
            </li>
            <li>
              <strong>Consent:</strong> By using our consultancy services, you consent to this Privacy Policy.
            </li>
            <li>
              <strong>Changes to Policy:</strong> We may update this policy from time to time. Please review it periodically for any changes.
            </li>
            <li>
              <strong>Contact:</strong> For questions or concerns, reach us at{' '}
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

export default PrivacyPolicy;