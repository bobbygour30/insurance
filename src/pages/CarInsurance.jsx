import React from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const CarInsurance = () => {
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
            src={assets.car}
            alt="Car Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Arshyan Car Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Drive with confidence knowing you're protected against accidents, theft, and liabilities with Arshyan Car Insurance.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Car Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Car Insurance Overview */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            What is Car Insurance?
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Arshyan Car Insurance provides financial protection against physical damage or bodily injury resulting from traffic collisions, theft, and other damages to your vehicle. It also covers third-party liabilities, ensuring peace of mind on every drive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Comprehensive Insurance', desc: 'Covers damages to your car from accidents, theft, natural disasters, and third-party liabilities.' },
              { title: 'Third-Party Insurance', desc: 'Mandatory in India, covering damages to third-party property or individuals caused by your vehicle.' },
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

        {/* Why Car Insurance */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose Arshyan Car Insurance?
          </h2>
          <p className="text-base text-gray-600 mb-4 text-center">
            Owning a car is a significant investment, and protecting it is essential. Arshyan Car Insurance offers comprehensive coverage to ensure you drive with peace of mind.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Financial Protection', desc: 'Covers damages from accidents, theft, and natural calamities.' },
              { title: 'Mandatory Compliance', desc: 'Meets India’s legal requirement for third-party insurance.' },
              { title: 'Peace of Mind', desc: 'Ensures your vehicle is protected, allowing worry-free travel.' },
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

        {/* Coverage Details */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            What’s Covered in Arshyan Car Insurance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Accident Damages', desc: 'Covers repairs for damages caused by collisions.' },
              { title: 'Theft, Fire, Explosion', desc: 'Compensation for vehicle theft or damage due to fire or explosions.' },
              { title: 'Natural Disasters', desc: 'Protection against damages from floods, cyclones, earthquakes, etc.' },
              { title: 'Terrorism Acts', desc: 'Covers damages resulting from acts of terrorism.' },
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
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 text-center">What’s Not Covered?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Driving Under Influence', desc: 'Accidents caused while under the influence of alcohol are not covered.' },
              { title: 'Invalid License', desc: 'Damages while driving without a valid license are excluded.' },
              { title: 'Illegal Use', desc: 'Coverage does not apply if the vehicle is used for illegal purposes.' },
              { title: 'Wear & Tear', desc: 'Regular wear, tear, or oil leakage is not covered.' },
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
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white rounded-lg shadow-md p-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Protect Your Drive Today
          </h2>
          <p className="text-base text-gray-600 mb-6">
            With Arshyan Car Insurance, ensure your vehicle and peace of mind are safeguarded. Get a personalized quote now!
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

export default CarInsurance;