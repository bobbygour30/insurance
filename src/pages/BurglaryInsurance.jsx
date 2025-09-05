import React from 'react';
import { Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const BurglaryInsurance = () => {
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
            src={assets.Burglary}
            alt="Burglary Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Arshyan Burglary Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Protect your business from the financial impact of theft and burglary with Arshyan Insurance’s comprehensive coverage.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
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
            Our Burglary Insurance Policy safeguards your business assets, ensuring quick recovery from theft-related losses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Comprehensive Coverage', desc: 'Safeguards against losses from burglary, theft, or attempted theft of stock, valuables, and contents.' },
              { title: 'Damage Repair', desc: 'Covers costs to repair damages to property caused during a break-in.' },
              { title: 'Flexible Sum Insured', desc: 'Choose a sum insured tailored to your business needs for goods, cash, or equipment.' },
              { title: 'Worldwide Employee Cover', desc: 'Extends protection to cover losses caused by employees during business travel.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <LockClosedIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Coverage Details Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-4 sm:p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            What’s Covered
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base text-gray-600 hidden sm:table">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-2 sm:p-4 text-left">Coverage Type</th>
                  <th className="p-2 sm:p-4 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Theft and Burglary', details: 'Loss or damage to insured items from burglary or break-ins.' },
                  { type: 'Attempted Theft', details: 'Repairs for damages caused during an attempted burglary, including locks, doors, and windows.' },
                  { type: 'Robbery and Hold-ups', details: 'Loss due to robbery or hold-ups within business premises.' },
                  { type: 'Third-party Liability', details: 'Optional coverage for damages caused to neighboring businesses during a theft.' },
                ].map((row) => (
                  <motion.tr
                    key={row.type}
                    className="border-b"
                    whileHover={{ backgroundColor: '#f0f9ff' }}
                  >
                    <td className="p-2 sm:p-4 flex items-center">
                      <LockClosedIcon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-2" />
                      {row.type}
                    </td>
                    <td className="p-2 sm:p-4">{row.details}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            {/* Mobile view */}
            <div className="sm:hidden space-y-4">
              {[
                { type: 'Theft and Burglary', details: 'Loss or damage to insured items from burglary or break-ins.' },
                { type: 'Attempted Theft', details: 'Repairs for damages caused during an attempted burglary, including locks, doors, and windows.' },
                { type: 'Robbery and Hold-ups', details: 'Loss due to robbery or hold-ups within business premises.' },
                { type: 'Third-party Liability', details: 'Optional coverage for damages caused to neighboring businesses during a theft.' },
              ].map((row) => (
                <motion.div
                  key={row.type}
                  className="border rounded-lg p-4 bg-blue-50"
                  whileHover={{ backgroundColor: '#f0f9ff' }}
                >
                  <div className="flex items-center mb-2">
                    <LockClosedIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">{row.type}</h3>
                  </div>
                  <p className="text-sm text-gray-600"><span className="font-semibold">Details:</span> {row.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Policy Benefits Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Policy Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Affordable Premiums', desc: 'Tailored premiums to suit businesses of all sizes.' },
              { title: 'Quick Claims Process', desc: 'Hassle-free claims with swift assessments and settlements.' },
              { title: 'Customizable Add-ons', desc: 'Enhance your policy with options like cash in transit or employee dishonesty coverage.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <LockClosedIcon className="h-8 w-8 text-blue-600 mr-4" />
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Arshyan Insurance?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Complete Protection', desc: 'Comprehensive coverage against burglary risks for peace of mind.' },
              { title: 'Expert Assistance', desc: 'Professional guidance to choose the right policy and ensure a smooth claims process.' },
              { title: 'Transparent Policies', desc: 'Clear and straightforward terms with no hidden clauses.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <LockClosedIcon className="h-8 w-8 text-blue-600 mr-4" />
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
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white rounded-lg shadow-md p-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Secure Your Business Assets
          </h2>
          <p className="text-base text-gray-600 mb-6">
            With Arshyan Burglary Insurance, protect your inventory and equipment from theft and break-ins. Get started today!
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
      </div>
    </div>
  );
};

export default BurglaryInsurance;