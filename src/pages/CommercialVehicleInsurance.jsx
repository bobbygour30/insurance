import React from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const CommercialVehicleInsurance = () => {
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
            src={assets.bike}
            alt="Commercial Vehicle Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Arshyan Commercial Vehicle Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Keep your business moving with robust insurance for your fleet of trucks, buses, and vans, ensuring protection and continuity.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Commercial Quote
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
            Key Benefits of Arshyan Commercial Vehicle Insurance
          </h2>
          <p className="text-base text-gray-600 mb-4 text-center">
            Arshyan Insurance Services offers tailored commercial vehicle insurance to safeguard your business assets and ensure smooth operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Comprehensive Coverage', desc: 'Protects vehicles like trucks, buses, and vans from accidents, theft, fire, and natural disasters.' },
              { title: 'Third-Party Liability', desc: 'Covers legal liabilities for damages or injuries caused to third parties.' },
              { title: 'Driver and Passenger Cover', desc: 'Personal accident coverage for drivers and passengers in case of injury or death.' },
              { title: 'Hassle-Free Claims', desc: 'Fast and smooth claim settlement to minimize business disruptions.' },
              { title: 'Add-On Covers', desc: 'Customize with zero depreciation, engine protection, and roadside assistance.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <TruckIcon className="h-8 w-8 text-blue-600 mr-4" />
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
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Arshyan Commercial Vehicle Insurance?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Flexible Premiums', desc: 'Competitive premiums tailored to your business needs.' },
              { title: 'Cashless Repairs', desc: 'Access a wide network of authorized service centers for cashless repairs.' },
              { title: '24/7 Support', desc: 'Round-the-clock assistance for claims, renewals, and queries.' },
              { title: 'Business Continuity', desc: 'Minimize interruptions with comprehensive protection against financial losses.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <TruckIcon className="h-8 w-8 text-blue-600 mr-4" />
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Safeguard Your Fleet
          </h2>
          <p className="text-base text-gray-600 mb-6">
            With Arshyan Commercial Vehicle Insurance, protect your business on the road and stay ahead. Get covered today!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://www.bajajallianz.com/health-insurance-plans/critical-Illness-insurance/buy-online.html?pid=8407&src=CBM_0901123"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Buy From Bajaj Allianz
            </a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default CommercialVehicleInsurance;