import React from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const Login = () => {
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
            src={assets.login}
            alt="Login Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Log In to Your Account</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Access your insurance policies and manage your account securely.
          </p>
        </motion.section>

        {/* Login Form Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Sign In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-2" />
                Log In to Your Account
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="your.email@example.com"
                    aria-label="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your password"
                    aria-label="Your password"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Log In
                  </button>
                </motion.div>
                <p className="text-base text-gray-600 text-center">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-blue-600 hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-2" />
                Why Log In?
              </h3>
              <ul className="text-base text-gray-600 space-y-2">
                {[
                  'View and manage your insurance policies.',
                  'File claims quickly and easily.',
                  'Access exclusive account features.',
                  'Get personalized support and updates.',
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 text-blue-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-base text-gray-600">
                Forgot your password?{' '}
                <Link to="/forgot-password" className="text-blue-600 hover:underline">
                  Reset it here
                </Link>.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Help Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-50 rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Need Assistance?
          </h2>
          <p className="text-base text-gray-600 mb-4 text-center">
            Contact our support team at{' '}
            <a href="mailto:support@[yourcompany].com" className="text-blue-600 hover:underline">
              support@[yourcompany].com
            </a>{' '}
            or call [Your Phone Number] for help with your account.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-center">
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Contact Support
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Login;