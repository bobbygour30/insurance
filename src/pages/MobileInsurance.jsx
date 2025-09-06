import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const MobileInsurance = () => {
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
            src={assets.mobile1}
            alt="Mobile Insurance Banner"
            className="w-full h-full object-cover rounded-lg shadow-md mb-6"
          />
          <img
            src={assets.mobile2}
            alt="Mobile Insurance Banner"
            className="w-full h-full object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Arshyan Mobile Insurance
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Protect your smartphones and tablets with Arshyan Mobile Insurance, ensuring coverage for damage, theft, and technical failures.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Mobile Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Key Features of Arshyan Mobile Insurance
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Policy can be issued for long-term & short-term (1 day to 3 years).</li>
            <li>Sum insured options for contents on a new-for-old basis.</li>
            <li>Smooth & fast claim processing.</li>
            <li>Guaranteed unlimited claims for partial losses.</li>
            <li>No depreciation deduction for partial and total loss claims.</li>
            <li>Coverage available for mobile devices less than 3 years old.</li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-800 mt-6">Excess / Deductible</h3>
          <p className="text-base text-gray-600 mt-2">
            For portable equipment: <strong>INR 2,500</strong> for each and every claim.
          </p>
          <p className="text-base text-gray-600 mt-2">
            <strong>Note:</strong> Insurance policy wording shall apply.
          </p>
        </motion.section>

        {/* Claim Process Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Claim Process
          </h2>
          <p className="text-base text-gray-600 mb-4 text-center">
            Call us at <strong>+91-11-43592951</strong> for claims-related services. Below are the required documents:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Damage Claim */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">For Damage Claim</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Claim Form</li>
                <li>Purchase invoice for damaged item</li>
                <li>Repair estimate/quotation from Authorized Service Centre</li>
                <li>Photograph of damaged equipment</li>
                <li>Service engineer report from Authorized Service Centre</li>
                <li>Final Repair Bill</li>
                <li>Address proof & PAN card of insured</li>
                <li>Cancelled Cheque copy / Passbook</li>
              </ul>
            </div>

            {/* Theft Claim */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">For Theft Claim</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Claim Form</li>
                <li>Purchase invoice for stolen item</li>
                <li>Copy of FIR under relevant section</li>
                <li>Address proof & PAN card of insured</li>
                <li>Cancelled Cheque copy / Passbook</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Call-to-Action Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Protect Your Mobile Devices
          </h2>
          <p className="text-base text-gray-600 mb-6">
            With Arshyan Mobile Insurance, safeguard your smartphones and tablets from unexpected damages and theft. Get covered today with our Electronic Equipment Insurance Policy!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Purchase Now
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default MobileInsurance;
