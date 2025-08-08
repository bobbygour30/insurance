import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    personal: false,
    business: false,
    services: false,
    login: false,
  });
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    personal: false,
    business: false,
    services: false,
    login: false,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    setTimeout(() => {
      setDropdownOpen((prev) => ({ ...prev, [menu]: false }));
    }, 300);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-8 w-auto"
                src="https://via.placeholder.com/150x50?text=Logo"
                alt="Insurance Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>

            {/* Personal Insurance Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('personal')}
              onMouseLeave={() => handleMouseLeave('personal')}
            >
              <button className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center">
                Personal Insurance
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute bg-white text-gray-800 shadow-lg rounded-md mt-2 w-48 z-10 transition-opacity duration-300 ${
                  dropdownOpen.personal ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{ transitionDelay: dropdownOpen.personal ? '0ms' : '300ms' }}
              >
                {[
                  'Health Insurance',
                  'Car Insurance',
                  'Two Wheelers Insurance',
                  'Home Insurance',
                  'Term Life Insurance',
                  'Critical Illness Insurance',
                  'Corona Kavach Insurance',
                  'Personal Accident Insurance',
                  'Top Up Health Insurance',
                  'Mobile Insurance',
                  'Cyber Security Insurance',
                  'Travel Insurance',
                ].map((item) => (
                  <Link
                    key={item}
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-blue-100 transition duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Business & Group Insurance Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('business')}
              onMouseLeave={() => handleMouseLeave('business')}
            >
              <button className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center">
                Business & Group Insurance
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute bg-white text-gray-800 shadow-lg rounded-md mt-2 w-48 z-10 transition-opacity duration-300 ${
                  dropdownOpen.business ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{ transitionDelay: dropdownOpen.business ? '0ms' : '300ms' }}
              >
                {[
                  'Group Insurance',
                  'Liability Insurance',
                  'Property Insurance',
                  'Marine Insurance',
                  'Engineering and Specialty Business',
                  'Affinity & MSME',
                  'PoSP',
                ].map((item) => (
                  <Link
                    key={item}
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-blue-100 transition duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={() => handleMouseLeave('services')}
            >
              <button className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center">
                Services
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute bg-white text-gray-800 shadow-lg rounded-md mt-2 w-48 z-10 transition-opacity duration-300 ${
                  dropdownOpen.services ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{ transitionDelay: dropdownOpen.services ? '0ms' : '300ms' }}
              >
                {['Claims Management', 'Risk Management', 'Wellness'].map((item) => (
                  <Link
                    key={item}
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-blue-100 transition duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Blog
            </Link>

            {/* Login Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('login')}
              onMouseLeave={() => handleMouseLeave('login')}
            >
              <button className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center">
                Login
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute bg-white text-gray-800 shadow-lg rounded-md mt-2 w-48 z-10 transition-opacity duration-300 ${
                  dropdownOpen.login ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{ transitionDelay: dropdownOpen.login ? '0ms' : '300ms' }}
              >
                {['Individual Customer Login', 'Corporate Customer Login', 'EB Portal Login'].map((item) => (
                  <Link
                    key={item}
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-blue-100 transition duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-200"
            onClick={toggleMenu}
          >
            Home
          </Link>

          {/* Personal Insurance Mobile */}
          <div>
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-200 flex justify-between items-center"
              onClick={() => toggleMobileDropdown('personal')}
            >
              Personal Insurance
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`pl-4 ${mobileDropdownOpen.personal ? 'block' : 'hidden'}`}>
              {[
                'Health Insurance',
                'Car Insurance',
                'Two Wheelers Insurance',
                'Home Insurance',
                'Term Life Insurance',
                'Critical Illness Insurance',
                'Corona Kavach Insurance',
                'Personal Accident Insurance',
                'Top Up Health Insurance',
                'Mobile Insurance',
                'Cyber Security Insurance',
                'Travel Insurance',
              ].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="block px-3 py-2 text-sm hover:bg-blue-600 transition duration-200"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Business & Group Insurance Mobile */}
          <div>
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-200 flex justify-between items-center"
              onClick={() => toggleMobileDropdown('business')}
            >
              Business & Group Insurance
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`pl-4 ${mobileDropdownOpen.business ? 'block' : 'hidden'}`}>
              {[
                'Group Insurance',
                'Liability Insurance',
                'Property Insurance',
                'Marine Insurance',
                'Engineering and Specialty Business',
                'Affinity & MSME',
                'PoSP',
              ].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="block px-3 py-2 text-sm hover:bg-blue-600 transition duration-200"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services Mobile */}
          <div>
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-200 flex justify-between items-center"
              onClick={() => toggleMobileDropdown('services')}
            >
              Services
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`pl-4 ${mobileDropdownOpen.services ? 'block' : 'hidden'}`}>
              {['Claims Management', 'Risk Management', 'Wellness'].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="block px-3 py-2 text-sm hover:bg-blue-600 transition duration-200"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-200"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-200"
            onClick={toggleMenu}
          >
            Blog
          </Link>

          {/* Login Mobile */}
          <div>
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-200 flex justify-between items-center"
              onClick={() => toggleMobileDropdown('login')}
            >
              Login
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`pl-4 ${mobileDropdownOpen.login ? 'block' : 'hidden'}`}>
              {['Individual Customer Login', 'Corporate Customer Login', 'EB Portal Login'].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="block px-3 py-2 text-sm hover:bg-blue-600 transition duration-200"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;