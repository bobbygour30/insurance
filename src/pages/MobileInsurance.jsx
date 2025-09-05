import React from 'react';
import { Link } from 'react-router-dom';
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
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
            src={assets.mobile}
            alt="Mobile Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Arshyan Mobile Insurance</h1>
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

        {/* Key Features Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Key Features of Arshyan Mobile Insurance
          </h2>
          <p className="text-base text-gray-600 mb-4 text-center">
            Our Electronic Equipment Insurance Policy offers comprehensive protection for your mobile devices, ensuring peace of mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Flexible Policy Terms', desc: 'Options for short-term (1 day) to long-term (3 years) coverage.' },
              { title: 'New for Old Basis', desc: 'Sum insured options for replacing contents on a new-for-old basis.' },
              { title: 'Smooth Claim Processing', desc: 'Fast and efficient claim processing for minimal disruption.' },
              { title: 'Unlimited Partial Loss Claims', desc: 'Guaranteed unlimited claims for partial losses.' },
              { title: 'No Depreciation Deduction', desc: 'No deduction for depreciation on partial or total loss claims.' },
              { title: 'Coverage for Older Devices', desc: 'Insure mobile devices less than 3 years old.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <DevicePhoneMobileIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-base text-gray-600 mt-4 text-center">
            <strong>Note:</strong> A deductible of INR 2,500 applies for each claim on portable equipment. Insurance policy wording shall apply.
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
            Contact us at +91-11-43592951 for claims-related services. Below are the required documents for filing a claim:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">For Damage Claims</h3>
              <ul className="text-base text-gray-600 space-y-2">
                {[
                  'Claim Form',
                  'Purchase invoice for damaged item',
                  'Repair estimate/quotation from Authorized Service Centre',
                  'Photograph of damaged equipment',
                  'Service engineer report from Authorized Service Centre',
                  'Final Repair Bill',
                  'Address proof & PAN card of Insured',
                  'Cancelled Cheque copy/Passbook',
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-blue-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">For Theft Claims</h3>
              <ul className="text-base text-gray-600 space-y-2">
                {[
                  'Claim Form',
                  'Purchase invoice for stolen item',
                  'Copy of FIR under relevant section',
                  'Address proof & PAN card of Insured',
                  'Cancelled Cheque copy/Passbook',
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-blue-600 mr-2" />
                    {item}
                  </li>
                ))}
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
            With Arshyan Mobile Insurance, safeguard your smartphones and tablets from unexpected damages and theft. Get covered today!
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