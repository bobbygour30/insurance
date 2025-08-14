import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, TruckIcon, BoltIcon, DevicePhoneMobileIcon, HeartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const PersonalInsurance = () => {
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
            src={assets.personal}
            alt="Personal Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Personal Insurance Solutions</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Protect your life, vehicles, and devices with our comprehensive insurance plans tailored to your needs.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.section>

        {/* Insurance Basics */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Insurance Matters
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Insurance provides financial protection against unexpected events, from medical emergencies to vehicle accidents. It ensures peace of mind by covering repair costs, medical bills, or replacements, allowing you to focus on what matters most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Financial Security', desc: 'Covers unexpected expenses, reducing financial stress.' },
              { title: 'Risk Management', desc: 'Protects against losses from accidents or theft.' },
              { title: 'Legal Compliance', desc: 'Meets mandatory insurance requirements for vehicles.' },
              { title: 'Peace of Mind', desc: 'Ensures you’re prepared for life’s uncertainties.' },
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

        {/* Insurance Types Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'Health Insurance',
              path: '/insurance/personal/health',
              icon: HeartIcon,
              description: 'Covers medical expenses for you and your family.',
            },
            {
              title: 'Car Insurance',
              path: '/insurance/personal/car',
              icon: TruckIcon,
              description: 'Protects your car against accidents and theft.',
            },
            {
              title: 'Two Wheelers Insurance',
              path: '/insurance/personal/two-wheelers',
              icon: BoltIcon,
              description: 'Safeguards bikes and scooters for worry-free rides.',
            },
            {
              title: 'Commercial Vehicle Insurance',
              path: '/insurance/personal/commercial-vehicle',
              icon: TruckIcon,
              description: 'Ensures your business vehicles stay operational.',
            },
            {
              title: 'Mobile Insurance',
              path: '/insurance/personal/mobile',
              icon: DevicePhoneMobileIcon,
              description: 'Protects your devices from damage and loss.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={item.path}
                className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <item.icon className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-base text-gray-600">{item.description}</p>
              </Link>
            </motion.div>
          ))}
        </section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: '150K+', label: 'Policies Issued' },
              { value: '98%', label: 'Customer Satisfaction' },
              { value: '24/7', label: 'Support Availability' },
              { value: '50K+', label: 'Claims Processed' },
              { value: '10+', label: 'Years in Business' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
                <p className="text-base text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonial Carousel */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 p-8 rounded-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Customer Experiences
          </h2>
          <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4">
              {[
                { name: 'Sarah M.', quote: 'The team helped me find the perfect health plan for my family.' },
                { name: 'James R.', quote: 'Quick claims process for my car accident—highly recommend!' },
                { name: 'Anita K.', quote: 'Affordable coverage for my phone, with great support.' },
                { name: 'Rahul P.', quote: 'My bike insurance was easy to set up and saved me during a theft.' },
              ].map((testimonial) => (
                <motion.div
                  key={testimonial.name}
                  className="snap-center bg-white p-6 rounded-lg shadow-md min-w-[80%] sm:min-w-[40%] lg:min-w-[30%]"
                  whileHover={{ scale: 1.03 }}
                >
                  <p className="text-base text-gray-600 italic">"{testimonial.quote}"</p>
                  <p className="mt-4 text-lg font-semibold text-gray-800">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PersonalInsurance;