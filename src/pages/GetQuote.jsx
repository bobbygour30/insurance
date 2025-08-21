import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    insuranceType: '',
    fullName: '',
    mobileNumber: '',
    email: '',
    companyName: '',
    reason: '',
    newPolicy: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Get a Quote Inquiry');
    const body = encodeURIComponent(
      `Insurance Type: ${formData.insuranceType}\n` +
      `Full Name: ${formData.fullName}\n` +
      `Mobile Number: ${formData.mobileNumber}\n` +
      `Email: ${formData.email}\n` +
      `Company Name: ${formData.companyName}\n` +
      `Reason for Contact: ${formData.reason}\n` +
      `New Policy: ${formData.newPolicy ? 'Yes' : 'No'}\n` +
      `Message: ${formData.message}`
    );
    window.location.href = `mailto:sales.support@arshyaninsurance.com?subject=${subject}&body=${body}`;
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
            alt="Get a Quote Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Get Your Personalized Quote
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the perfect insurance plan tailored to your needs. Fill out the form below, and our team will get back to you with a customized quote!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.section>

        {/* Quote Form Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Request a Quote
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-2" />
                Contact Information
              </h3>
              <ul className="text-base text-gray-600 space-y-2">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:sales.support@arshyaninsurance.com" className="text-blue-600 hover:underline">
                    sales.support@arshyaninsurance.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+919870277495" className="text-blue-600 hover:underline">+91-9870277495</a>,{' '}
                  <a href="tel:+911143592951" className="text-blue-600 hover:underline">+9111-43592951</a>
                </li>
                <li>
                  <strong>Address:</strong> Office No. 212, 1st Floor, Block-G3, Opposite DDA Market, Sector 16, Rohini, New Delhi - 110089
                </li>
                <li><strong>Hours:</strong> Monday–Friday, 9:00 AM–6:00 PM IST</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-2" />
                Quote Form
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700">
                    Insurance Type
                  </label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    aria-label="Select insurance type"
                  >
                    <option value="">Select Insurance Type</option>
                    <option value="Health">Health Insurance</option>
                    <option value="Life">Life Insurance</option>
                    <option value="Travel">Travel Insurance</option>
                    <option value="Family">Family Floater</option>
                    <option value="Senior">Senior Citizen</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Full Name"
                    aria-label="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="+91-XXXXXXXXXX"
                    aria-label="Your mobile number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="your.email@example.com"
                    aria-label="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Company Name"
                    aria-label="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    aria-label="Reason for contact"
                  >
                    <option value="">Select Reason</option>
                    <option value="New Policy Inquiry">New Policy Inquiry</option>
                    <option value="Existing Policy Support">Existing Policy Support</option>
                    <option value="Claims Assistance">Claims Assistance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="newPolicy" className="block text-sm font-medium text-gray-700">
                    New Policy
                  </label>
                  <input
                    type="checkbox"
                    id="newPolicy"
                    name="newPolicy"
                    checked={formData.newPolicy}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    aria-label="New policy checkbox"
                  />
                  <span className="ml-2 text-sm text-gray-600">Interested in a new policy</span>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Additional details or inquiries"
                    aria-label="Your message"
                  ></textarea>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Quote Request
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-md text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-base sm:text-lg mb-6 max-w-3xl mx-auto">
            Our team is here to guide you every step of the way. Get your quote today and start your journey to peace of mind.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Support
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default GetQuote;