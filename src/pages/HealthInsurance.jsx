import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const HealthInsurance = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
            src={assets.banner1}
            alt="Health Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Arshyan Health Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Health is wealth, and protecting it is essential. Secure your family’s future with comprehensive health insurance plans designed for peace of mind.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Health Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Key Benefits Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Key Benefits of Arshyan Health Insurance
          </h2>
          <p className="text-base text-gray-600 mb-4 text-center">
            Our policies provide financial protection against rising healthcare costs, offering access to quality treatment when you need it most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Comprehensive Medical Coverage', desc: 'Covers hospitalization, pre- and post-hospitalization treatments, surgeries, and more.' },
              { title: 'Cashless Treatment', desc: 'Access cashless treatment at our wide network of partner hospitals.' },
              { title: 'Critical Illness Cover', desc: 'Lump-sum payout on diagnosis of life-threatening diseases like cancer or heart disease.' },
              { title: 'Daycare Procedures', desc: 'Covers treatments like cataract surgery, chemotherapy, and dialysis.' },
              { title: 'Maternity & Newborn Benefits', desc: 'Coverage for maternity expenses and newborn care.' },
              { title: 'No Claim Bonus', desc: 'Increased coverage for every claim-free year at no extra cost.' },
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-4 sm:p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Arshyan Health Insurance?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Affordable Premiums', desc: 'Flexible, cost-effective plans to suit every budget.' },
              { title: 'Wide Network', desc: 'Access to a vast network of hospitals for cashless treatment.' },
              { title: 'Preventive Health Checkups', desc: 'Regular checkups for early detection and wellness.' },
              { title: '24/7 Customer Support', desc: 'Round-the-clock assistance for claims and queries.' },
              { title: 'Quick and Easy Claims', desc: 'Seamless claim process with minimal paperwork.' },
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

        {/* OPD Benefit Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            OPD Benefit with Arshyan Health Insurance
          </h2>
          <p className="text-base text-gray-600 mb-4 text-center">
            Manage everyday healthcare expenses with ease through our OPD coverage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Consultations Covered', desc: 'Routine check-ups and specialist consultations without out-of-pocket expenses.' },
              { title: 'Diagnostic Tests', desc: 'Coverage for lab tests, X-rays, and other diagnostics.' },
              { title: 'Prescription Medicines', desc: 'Covers costs of medicines prescribed during outpatient visits.' },
              { title: 'Flexibility in Usage', desc: 'Access a wide network of doctors and clinics at your convenience.' },
              { title: 'No Waiting Period', desc: 'Start utilizing OPD coverage immediately.' },
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Secure Your Family’s Future
          </h2>
          <p className="text-base text-gray-600 mb-6">
            With Arshyan Health Insurance, you are investing in peace of mind and financial security. Get the protection you need today!
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

        {/* FAQ Accordion */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-blue-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          {[
            {
              question: 'What does Arshyan Health Insurance cover?',
              answer: 'Covers hospitalization, pre- and post-hospitalization, surgeries, critical illnesses, maternity, daycare procedures, and OPD expenses.',
            },
            {
              question: 'How do I access cashless treatment?',
              answer: 'Visit any of our network hospitals, present your policy details, and avail treatment without upfront payments.',
            },
            {
              question: 'Is there a waiting period for OPD benefits?',
              answer: 'No, OPD benefits can be utilized immediately upon policy activation.',
            },
            {
              question: 'How can I file a claim?',
              answer: 'File claims online through our portal or contact our 24/7 support team for assistance.',
            },
          ].map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200 py-4"
            >
              <button
                className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <HeartIcon
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-base text-gray-600 mt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default HealthInsurance;