import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

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
            src={assets.privacy}
            alt="Terms and Conditions Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Terms & Conditions</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Understand the rules governing your use of our consultancy services at Arshyan Insurance.
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

        {/* Terms and Conditions Content */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Terms & Conditions
          </h2>
          <ol className="list-decimal pl-6 text-base text-gray-600 space-y-4">
            <li>
              <strong>Introduction:</strong> These Terms & Conditions (“Terms”) govern the provision of consultancy services by ARSHYAN INSURANCE MARKETING AND SERVICES PRIVATE LIMITED (“the Company”) to the client (“Client”). By engaging our services, the Client agrees to these terms.
            </li>
            <li>
              <strong>Scope of Services:</strong> The Company shall provide consultancy services as detailed in the service agreement or proposal. Any additional services shall require a separate agreement and may incur additional charges.
            </li>
            <li>
              <strong>Fees and Payments:</strong> The Client shall pay the fees as specified in the agreement. Payment terms, including due dates and mode of payment, will be specified in the invoice. Late payments may attract interest or suspension of services.
            </li>
            <li>
              <strong>Confidentiality:</strong> Both parties agree to maintain the confidentiality of all proprietary and sensitive information exchanged during the course of the engagement.
            </li>
            <li>
              <strong>Intellectual Property:</strong> Any intellectual property created during the consultancy shall remain the property of the Company unless otherwise agreed. The Client is granted a non-exclusive, non-transferable license to use the deliverables for its intended purpose.
            </li>
            <li>
              <strong>Liability and Limitations:</strong> The Company shall exercise reasonable care and skill in providing services. The Company shall not be liable for indirect, consequential, or accidental damages. The maximum liability of the Company shall be limited to the fees paid by the Client.
            </li>
            <li>
              <strong>Term and Termination:</strong> The agreement shall be effective from the date of signing and continue until completion of services or until terminated by either party with prior notice. Termination shall not affect accrued rights and obligations.
            </li>
            <li>
              <strong>Governing Law and Jurisdiction:</strong> These Terms shall be governed by and construed in accordance with the laws of Delhi, India, and any disputes shall be subject to the exclusive jurisdiction of courts in Delhi, India.
            </li>
            <li>
              <strong>Miscellaneous:</strong> Any amendments or modifications must be in writing and signed by both parties. If any clause is found invalid, the remaining provisions shall continue in full force.
            </li>
            <li>
              <strong>Acceptance:</strong> Engagement of the Company’s services implies acceptance of these Terms & Conditions.
            </li>
          </ol>
          
        </motion.section>
      </div>
    </div>
  );
};

export default TermsAndConditions;