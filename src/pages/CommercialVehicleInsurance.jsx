import React from 'react';
import { Link } from 'react-router-dom';
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
            className="w-full h-full object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Arshyan Commercial Vehicle Insurance
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Running a business that relies on vehicles requires not only keeping them in good condition but also ensuring they are adequately protected. Arshyan Insurance Services offers tailored commercial vehicle insurance to safeguard your business assets, reduce financial risks, and ensure smooth operations in the event of an accident or damage.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/get-quote"
              className="mt-6 inline-block bg-[#00001a] text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
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
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
            <li><strong>Comprehensive Coverage:</strong> Protects your commercial vehicles, such as trucks, buses, taxis, and delivery vans, from accidents, theft, fire, natural disasters, and more.</li>
            <li><strong>Third-Party Liability:</strong> Covers legal liabilities arising from damages or injuries caused to third parties, ensuring your business complies with legal requirements.</li>
            <li><strong>Driver and Passenger Cover:</strong> Personal accident coverage for the driver and passengers in case of injury, disability, or death due to an accident.</li>
            <li><strong>Hassle-Free Claims:</strong> Smooth and fast claims process to keep your business running with minimal disruptions.</li>
            <li><strong>Add-On Covers:</strong> Options like zero depreciation, engine & gearbox protection, and roadside assistance.</li>
          </ul>
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
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
            <li><strong>Flexible Premiums:</strong> Competitive options designed for your business needs.</li>
            <li><strong>Cashless Repairs:</strong> Wide network of authorized service centers.</li>
            <li><strong>24/7 Support:</strong> Assistance for claims, renewals, and queries anytime.</li>
            <li><strong>Business Continuity:</strong> Minimize interruptions and stay protected against financial losses.</li>
          </ul>
        </motion.section>

        {/* Call-to-Action Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Safeguard Your Fleet
          </h2>
          <p className="text-base text-gray-600 mb-6">
            With Arshyan Commercial Vehicle Insurance, safeguard your business on the road and ensure the security of your commercial fleet. Stay covered, stay ahead!
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
