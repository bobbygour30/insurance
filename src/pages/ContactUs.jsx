import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import assets from '../assets/assets';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    reason: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      reason: formData.reason,
      message: formData.message,
    };

    emailjs
      .send(
        'service_tdgmvjw', // Replace with your EmailJS service ID
        'template_6mae6ws', // Replace with your EmailJS template ID
        templateParams,
        'nzSxlj_Ia1QlBAyKY' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSendStatus('success');
          setFormData({ name: '', email: '', mobile: '', reason: '', message: '' });
          setIsSending(false);
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          setSendStatus('error');
          setIsSending(false);
        }
      );
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <img
            src={assets.contact}
            alt="Contact Us Banner"
            className="w-full h-92 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to help with your insurance needs. Reach out today!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/get-quote"
              className="mt-6 inline-block bg-[#00001a] text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Contact Info and Form Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Get in Touch
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
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Name"
                    aria-label="Your name"
                    required
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
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Mobile Number"
                    aria-label="Your mobile number"
                    required
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
                    required
                  >
                    <option value="">Select Reason</option>
                    <option value="New Policy Inquiry">New Policy Inquiry</option>
                    <option value="Existing Policy Support">Existing Policy Support</option>
                    <option value="Claims Assistance">Claims Assistance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your message or inquiry"
                    aria-label="Your message"
                    required
                  ></textarea>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#00001a] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                      isSending ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.div>
                {sendStatus === 'success' && (
                  <p className="text-green-600 mt-2">Message sent successfully!</p>
                )}
                {sendStatus === 'error' && (
                  <p className="text-red-600 mt-2">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactUs;