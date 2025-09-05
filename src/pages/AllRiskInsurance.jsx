import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const AllRiskInsurance = () => {
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
            src={assets.group}
            alt="All Risk/Group Affinity Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">All Risk/Group Affinity Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage tailored for groups and organizations, protecting against diverse risks to ensure peace of mind.
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

        {/* Coverage Highlights */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Coverage Highlights
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Our All Risk/Group Affinity Insurance Policy offers broad protection for groups, covering assets, liabilities, and more under a single, customizable plan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'All Risk Coverage', desc: 'Protection against fire, theft, accidental damage, and natural disasters.' },
              { title: 'Group Affinity Benefits', desc: 'Tailored coverage for organizations, businesses, or communities.' },
              { title: 'Accidental Damage', desc: 'Covers loss or damage during use, transit, or storage.' },
              { title: 'Natural Calamities', desc: 'Protection against floods, earthquakes, storms, and cyclones.' },
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

        {/* Who Can Benefit */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-4 sm:p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Who Can Benefit from Group Affinity Coverage?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base text-gray-600 hidden sm:table">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-2 sm:p-4 text-left">Group Type</th>
                  <th className="p-2 sm:p-4 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Corporates and Employers', details: 'Covers employees, health, accidental injuries, or company property like laptops.' },
                  { type: 'Associations and Unions', details: 'Protection for members against personal accidents and property damage.' },
                  { type: 'Educational Institutions', details: 'Insures staff, students, and campus assets for uninterrupted operations.' },
                ].map((row) => (
                  <motion.tr
                    key={row.type}
                    className="border-b"
                    whileHover={{ backgroundColor: '#f0f9ff' }}
                  >
                    <td className="p-2 sm:p-4 flex items-center">
                      <ShieldCheckIcon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600 mr-2" />
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
                { type: 'Corporates and Employers', details: 'Covers employees, health, accidental injuries, or company property like laptops.' },
                { type: 'Associations and Unions', details: 'Protection for members against personal accidents and property damage.' },
                { type: 'Educational Institutions', details: 'Insures staff, students, and campus assets for uninterrupted operations.' },
              ].map((row) => (
                <motion.div
                  key={row.type}
                  className="border rounded-lg p-4 bg-blue-50"
                  whileHover={{ backgroundColor: '#f0f9ff' }}
                >
                  <div className="flex items-center mb-2">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">{row.type}</h3>
                  </div>
                  <p className="text-sm text-gray-600"><span className="font-semibold">Details:</span> {row.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Policy Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Policy Benefits
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Comprehensive asset protection for equipment, property, and more.',
              'Customizable coverage for groups, employees, or assets.',
              'Cost-effective premiums through group coverage.',
              'Worldwide protection for assets, both domestically and internationally.',
            ].map((benefit) => (
              <li key={benefit} className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Why Choose Arshyan Insurance */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Arshyan Insurance?
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Tailored solutions for groups with specific risk profiles.',
              'Complete risk management to minimize exposure to losses.',
              'Efficient claims process with fast, transparent settlements.',
              'Additional group benefits like wellness programs and maintenance coverage.',
            ].map((reason) => (
              <li key={reason} className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                {reason}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Additional Features */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Additional Features
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Coverage for portable equipment like laptops and tablets.',
              'Liability protection for third-party claims from accidental injury or damage.',
              'Flexible extensions for high-risk areas like machinery or vehicles.',
            ].map((feature) => (
              <li key={feature} className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Safeguard What Matters
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Arshyan Insurance’s All Risk/Group Affinity Insurance Policy provides comprehensive, customizable protection for employees, members, or valuable assets. Ensure peace of mind with coverage designed for your unique group needs.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started Today
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default AllRiskInsurance;