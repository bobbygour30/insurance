import React from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon, FireIcon, LockClosedIcon, UsersIcon, HeartIcon, CogIcon, ShieldCheckIcon, HomeIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const BusinessInsurance = () => {
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
            src="https://via.placeholder.com/1200x400?text=Business+Insurance+Banner"
            alt="Business Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Business Insurance Solutions</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Safeguard your business with tailored insurance plans for assets, employees, and operations.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Explore Business Plans
            </Link>
          </motion.div>
        </motion.section>

        {/* Why Business Insurance Matters */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Business Insurance Matters
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Business insurance protects your company from financial risks, ensuring continuity during unexpected events like property damage, lawsuits, or employee injuries. It’s essential for compliance and growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Asset Protection', desc: 'Covers property, equipment, and inventory.' },
              { title: 'Liability Coverage', desc: 'Shields against lawsuits and claims.' },
              { title: 'Employee Safety', desc: 'Supports workers with medical and compensation plans.' },
              { title: 'Business Continuity', desc: 'Ensures operations resume quickly after disruptions.' },
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
              title: 'Marine Insurance',
              path: '/insurance/business/marine',
              icon: TruckIcon,
              description: 'Protects cargo and vessels during transit.',
            },
            {
              title: 'Bharat Sookshma Udyam Suraksha',
              path: '/insurance/business/bharat-sookshma',
              icon: FireIcon,
              description: 'Covers fire and allied perils for small businesses.',
            },
            {
              title: 'Burglary Insurance',
              path: '/insurance/business/burglary',
              icon: LockClosedIcon,
              description: 'Safeguards against theft and burglary losses.',
            },
            {
              title: 'Employee Compensation',
              path: '/insurance/business/employee-compensation',
              icon: UsersIcon,
              description: 'Covers employee injuries and liabilities.',
            },
            {
              title: 'Group Mediclaim',
              path: '/insurance/business/group-mediclaim',
              icon: HeartIcon,
              description: 'Health coverage for your workforce.',
            },
            {
              title: 'MBD Insurance',
              path: '/insurance/business/mbd',
              icon: CogIcon,
              description: 'Protects machinery from breakdowns.',
            },
            {
              title: 'All Risk/Group Affinity',
              path: '/insurance/business/all-risk',
              icon: ShieldCheckIcon,
              description: 'Comprehensive coverage for diverse risks.',
            },
            {
              title: 'Bharat Griha Raksha',
              path: '/insurance/business/bharat-griha-raksha',
              icon: HomeIcon,
              description: 'Protects business properties and homes.',
            },
            {
              title: 'Shop Insurance',
              path: '/insurance/business/shop',
              icon: BuildingStorefrontIcon,
              description: 'Covers retail shops and inventory.',
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
            Our Business Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: '50K+', label: 'Businesses Protected' },
              { value: '97%', label: 'Claims Settled' },
              { value: '24/7', label: 'Support Availability' },
              { value: '10K+', label: 'Commercial Policies Issued' },
              { value: '15+', label: 'Industries Served' },
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
            What Our Business Clients Say
          </h2>
          <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4">
              {[
                { name: 'Amit S., Logistics', quote: 'Marine insurance saved us during a cargo loss.' },
                { name: 'Neha K., Retail', quote: 'Shop insurance covered our inventory after a fire.' },
                { name: 'Ravi P., Factory', quote: 'Machinery breakdown coverage kept our production on track.' },
                { name: 'Sonia M., HR', quote: 'Group mediclaim boosted employee morale.' },
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

export default BusinessInsurance;