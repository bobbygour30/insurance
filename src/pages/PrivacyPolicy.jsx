import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

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
            src="https://via.placeholder.com/1200x400?text=Privacy+Policy+Banner"
            alt="Privacy Policy Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we protect your personal information.
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
            Our Commitment to Your Privacy
          </h2>
          <p className="text-base text-gray-600 mb-4">
            At [Your Company Name], we are dedicated to safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you interact with our website or services.
          </p>
        </motion.section>

        {/* Data Collection Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-50 rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Information We Collect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Personal Information', desc: 'Name, email, phone, and address provided during registration or policy purchase.' },
              { title: 'Financial Information', desc: 'Securely processed payment details for insurance premiums.' },
              { title: 'Usage Data', desc: 'IP address, browser type, and website interactions to improve user experience.' },
              { title: 'Insurance Details', desc: 'Information like vehicle or health history for tailored coverage.' },
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

        {/* Usage and Sharing Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            How We Use and Share Your Data
          </h2>
          <p className="text-base text-gray-600 mb-4">
            We use your information to process policies, provide quotes, and enhance our services. We may share data with trusted partners (e.g., insurers) or as required by law, but we never sell your information.
          </p>
          <ul className="list-disc pl-6 mb-4 text-base text-gray-600">
            <li>Process insurance applications and manage policies.</li>
            <li>Communicate about your account or support inquiries.</li>
            <li>Share with service providers for policy fulfillment.</li>
            <li>Comply with legal obligations, such as court orders.</li>
          </ul>
        </motion.section>

        {/* Cookies and Security Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-blue-50 rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Cookies and Data Security
          </h2>
          <p className="text-base text-gray-600 mb-4">
            We use cookies to improve your browsing experience and employ industry-standard encryption to protect your data. You can manage cookies via your browser settings.
          </p>
          <div className="flex items-start">
            <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-2" />
            <p className="text-base text-gray-600">
              Note: Disabling cookies may impact website functionality.
            </p>
          </div>
        </motion.section>

        {/* Your Rights Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Your Data Rights
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Access: Request a copy of your data.',
              'Correction: Update inaccurate information.',
              'Deletion: Request data removal, subject to legal requirements.',
              'Opt-Out: Unsubscribe from marketing communications.',
            ].map((right) => (
              <li key={right} className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                {right}
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
            For questions about this Privacy Policy, reach out to us at{' '}
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

export default PrivacyPolicy;