import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faMapMarkerAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#00001a] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-base text-gray-300">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/blog', label: 'Blog' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/get-quote', label: 'Get a Quote' },
              ].map((link, index) => (
                <li key={index} className="flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5 mr-2 text-white" />
                  <NavLink 
                    to={link.to} 
                    className={({ isActive }) => 
                      `block hover:text-white transition duration-200 transform hover:translate-x-2 ${
                        isActive ? 'text-white font-semibold' : ''
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Insurance */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-4">Personal Insurance</h3>
            <ul className="space-y-2 text-base text-gray-300">
              {[
                { label: "Health Insurance", path: "/insurance/personal/health" },
                { label: "Car Insurance", path: "/insurance/personal/car" },
                { label: "Two Wheelers Insurance", path: "/insurance/personal/two-wheelers" },
                { label: "Commercial Vehicle Insurance", path: "/insurance/personal/commercial-vehicle" },
                { label: "Mobile & Electronics Equipment's", path: "/insurance/personal/mobile" },
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5 mr-2 text-white" />
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block transition duration-200 transform hover:translate-x-2 ${
                        isActive ? 'text-white font-semibold' : 'hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Business & Group Insurance */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-4">Business & Group Insurance</h3>
            <ul className="space-y-2 text-base text-gray-300">
              {[
                { label: "Marine Insurance", path: "/insurance/business/marine" },
                { label: "Bharat Sookshma Udyam Suraksha (Standard Fire Policy)", path: "/insurance/business/bharat-sookshma" },
                { label: "Burglary Insurance Policy", path: "/insurance/business/burglary" },
                { label: "Employee Compensation Insurance Policy", path: "/insurance/business/employee-compensation" },
                { label: "Group Mediclaim Insurance Policy", path: "/insurance/business/group-mediclaim" },
                { label: "MBD Insurance Policy (Machinery Breakdown)", path: "/insurance/business/mbd" },
                { label: "All Risk/Group Affinity Insurance Policy", path: "/insurance/business/all-risk" },
                { label: "Bharat Griha Raksha/Home Insurance Policy", path: "/insurance/business/bharat-griha-raksha" },
                { label: "Shop Insurance Policy", path: "/insurance/business/shop" },
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5 mr-2 text-white" />
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block transition duration-200 transform hover:translate-x-2 ${
                        isActive ? 'text-white font-semibold' : 'hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-base text-gray-300">
              {[
                { label: "Privacy Policy", path: "/contact/privacy-policy" },
                { label: "Terms & Conditions", path: "/contact/terms-and-conditions" },
                { label: "Refund Policy", path: "/contact/refund-policy" },
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5 mr-2 text-white" />
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block transition duration-200 transform hover:translate-x-2 ${
                        isActive ? 'text-white font-semibold' : 'hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-base text-gray-300">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-2 text-white" />
                <a 
                  href="mailto:sales.support@arshyaninsurance.com" 
                  className="block hover:text-white transition duration-200 transform hover:translate-x-2"
                >
                  sales.support@arshyaninsurance.com
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-2 text-white" />
                <a 
                  href="tel:+919870277495" 
                  className="block hover:text-white transition duration-200 transform hover:translate-x-2"
                >
                  +91-9870277495
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 mr-2 text-white" />
                <a 
                  href="tel:+911143592951" 
                  className="block hover:text-white transition duration-200 transform hover:translate-x-2"
                >
                  +9111-43592951
                </a>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-12 w-12 mr-2 text-white mt-1" />
                <span className="block text-gray-300">
                  Office No. 212, 1st Floor, Block-G3, Opposite DDA Market, Sector 16, Rohini, New Delhi - 110089
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="flex justify-center space-x-4">
            {[
              { 
                icon: FaFacebook, 
                label: 'Facebook', 
                href: 'https://www.facebook.com/yourcompany' 
              },
              { 
                icon: FaTwitter, 
                label: 'Twitter', 
                href: 'https://www.twitter.com/yourcompany' 
              },
              { 
                icon: FaLinkedin, 
                label: 'LinkedIn', 
                href: 'https://www.linkedin.com/company/yourcompany' 
              },
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition duration-200 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-6 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Arshyan Insurance Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;