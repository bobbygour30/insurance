import React from 'react';
import { Link } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const TwoWheelersInsurance = () => {
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
            src="https://via.placeholder.com/1200x400?text=Two+Wheelers+Banner"
            alt="Two Wheelers Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Two Wheeler Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Ride with confidence knowing your bike or scooter is protected against accidents and theft.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Bike Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Two-Wheeler Insurance Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Benefits of Two-Wheeler Insurance
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Two-wheeler insurance is mandatory and protects riders from financial losses due to accidents, theft, or third-party damages. It also offers personal accident coverage for added security.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Accident Coverage', desc: 'Covers damages from collisions.' },
              { title: 'Theft Protection', desc: 'Compensation for stolen vehicles.' },
              { title: 'Third-Party Liability', desc: 'Covers damages to others.’ property.' },
              { title: 'Personal Accident', desc: 'Support for rider injuries.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <BoltIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Covered Vehicles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Motorcycles', img: 'https://via.placeholder.com/300x200?text=Motorcycle' },
              { name: 'Scooters', img: 'https://via.placeholder.com/300x200?text=Scooter' },
              { name: 'E-Bikes', img: 'https://via.placeholder.com/300x200?text=E-Bike' },
            ].map((vehicle) => (
              <motion.div
                key={vehicle.name}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <img src={vehicle.img} alt={vehicle.name} className="w-full h-48 object-cover" />
                <p className="text-base text-gray-800 font-semibold p-4">{vehicle.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Maintenance Tips */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Bike Maintenance Tips
          </h2>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Check tire pressure monthly.',
              'Service brakes regularly.',
              'Clean and lubricate the chain.',
              'Inspect lights and signals before rides.',
              'Use a secure lock to prevent theft.',
            ].map((tip) => (
              <li key={tip} className="flex items-center">
                <BoltIcon className="h-6 w-6 text-blue-600 mr-2" />
                {tip}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Rider FAQ */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Rider FAQs
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Is two-wheeler insurance mandatory?',
                answer: 'Yes, third-party insurance is legally required in most regions.',
              },
              {
                question: 'What if my bike is damaged in an accident?',
                answer: 'Comprehensive plans cover repair costs, subject to your policy’s terms.',
              },
              {
                question: 'Does insurance cover theft?',
                answer: 'Yes, comprehensive plans include theft coverage.',
              },
            ].map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <p className="text-base text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default TwoWheelersInsurance;