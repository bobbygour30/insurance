import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import assets from '../assets/assets';
import { ChevronDownIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    personal: false,
    business: false,
  });
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    personal: false,
    business: false,
  });
  const dropdownRefs = {
    personal: useRef(null),
    business: useRef(null),
  };
  const timeoutRefs = {
    personal: useRef(null),
    business: useRef(null),
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (menu) => {
    if (timeoutRefs[menu].current) {
      clearTimeout(timeoutRefs[menu].current);
    }
    setDropdownOpen((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu, event) => {
    if (timeoutRefs[menu].current) {
      clearTimeout(timeoutRefs[menu].current);
    }
    timeoutRefs[menu].current = setTimeout(() => {
      if (
        dropdownRefs[menu].current &&
        !dropdownRefs[menu].current.contains(event.relatedTarget)
      ) {
        setDropdownOpen((prev) => ({ ...prev, [menu]: false }));
      }
    }, 800);
  };

  const closeDropdown = (menu) => {
    if (timeoutRefs[menu].current) {
      clearTimeout(timeoutRefs[menu].current);
    }
    setDropdownOpen((prev) => ({ ...prev, [menu]: false }));
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  useEffect(() => {
    return () => {
      Object.values(timeoutRefs).forEach((ref) => {
        if (ref.current) {
          clearTimeout(ref.current);
        }
      });
    };
  }, []);

  return (
    <div>
      {/* Top Bar with Welcome Text and Contact Info */}
      <div className="bg-[#00001a] text-white py-3 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="text-center sm:text-left">
            <span className="text-base sm:text-lg font-semibold ml-0 sm:ml-16">Welcome To Arshyan Insurance</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className='flex items-center'>
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              <a href="mailto:sales.support@arshyaninsurance.com" className="text-sm hover:underline">
                sales.support@arshyaninsurance.com
              </a>
            </div>
            <div className='flex items-center'>
              <PhoneIcon className="h-5 w-5 mr-2" />
              <a href="tel:+919870277495" className="text-sm hover:underline">+91-9870277495</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white text-[#00001a] shadow-lg w-full z-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img
                  className="w-[150px] sm:w-[200px] lg:w-[277px]"
                  src={assets.logo}
                  alt="Insurance Logo"
                />
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-2 py-2 rounded-md text-sm xl:text-base font-medium transition duration-300 ${
                    isActive ? "bg-gray-200 text-[#00001a]" : "hover:bg-gray-200"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-2 py-2 rounded-md text-sm xl:text-base font-medium transition duration-300 ${
                    isActive ? "bg-gray-200 text-[#00001a]" : "hover:bg-gray-200"
                  }`
                }
              >
                About Us
              </NavLink>

              {/* Personal Insurance Dropdown */}
              <div
                className="relative"
                ref={dropdownRefs.personal}
                onMouseEnter={() => handleMouseEnter("personal")}
                onMouseLeave={(e) => handleMouseLeave("personal", e)}
                aria-expanded={dropdownOpen.personal}
                aria-controls="personal-dropdown"
              >
                <NavLink
                  to="/insurance/personal"
                  className={({ isActive }) =>
                    `flex items-center px-2 py-2 rounded-md text-sm xl:text-base font-medium transition duration-300 ${
                      isActive ? "bg-gray-200 text-[#00001a]" : "hover:bg-gray-200"
                    }`
                  }
                >
                  Personal Insurance
                  <ChevronDownIcon
                    className={`ml-1 xl:ml-2 h-4 w-4 transform transition-transform duration-300 ${
                      dropdownOpen.personal ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </NavLink>
                <div
                  id="personal-dropdown"
                  className={`absolute bg-white text-[#00001a] shadow-lg rounded-md mt-2 w-56 z-50 transition-opacity duration-300 ${
                    dropdownOpen.personal
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  {[
                    {
                      label: "Health Insurance",
                      path: "/insurance/personal/health",
                    },
                    { label: "Car Insurance", path: "/insurance/personal/car" },
                    {
                      label: "Two Wheelers Insurance",
                      path: "/insurance/personal/two-wheelers",
                    },
                    {
                      label: "Commercial Vehicle Insurance",
                      path: "/insurance/personal/commercial-vehicle",
                    },
                    {
                      label: "Mobile & Electronics Equipment's",
                      path: "/insurance/personal/mobile",
                    },
                  ].map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={() => closeDropdown("personal")}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm transition duration-200 ${
                          isActive
                            ? "bg-gray-200 text-[#00001a]"
                            : "hover:bg-gray-300"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Business & Group Insurance Dropdown */}
              <div
                className="relative"
                ref={dropdownRefs.business}
                onMouseEnter={() => handleMouseEnter("business")}
                onMouseLeave={(e) => handleMouseLeave("business", e)}
                aria-expanded={dropdownOpen.business}
                aria-controls="business-dropdown"
              >
                <NavLink
                  to="/insurance/business"
                  className={({ isActive }) =>
                    `flex items-center px-2 py-2 rounded-md text-sm xl:text-base font-medium transition duration-300 ${
                      isActive ? "bg-gray-200 text-[#00001a]" : "hover:bg-gray-200"
                    }`
                  }
                >
                  Business & Group Insurance
                  <ChevronDownIcon
                    className={`ml-1 xl:ml-2 h-4 w-4 transform transition-transform duration-300 ${
                      dropdownOpen.business ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </NavLink>
                <div
                  id="business-dropdown"
                  className={`absolute bg-white text-[#00001a] shadow-lg rounded-md mt-2 w-72 sm:w-80 z-50 transition-opacity duration-300 ${
                    dropdownOpen.business
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  {[
                    {
                      label: "Marine Insurance",
                      path: "/insurance/business/marine",
                    },
                    {
                      label: "Bharat Sookshma Udyam Suraksha (Standard Fire Policy)",
                      path: "/insurance/business/bharat-sookshma",
                    },
                    {
                      label: "Burglary Insurance Policy",
                      path: "/insurance/business/burglary",
                    },
                    {
                      label: "Employee Compensation Insurance Policy",
                      path: "/insurance/business/employee-compensation",
                    },
                    {
                      label: "Group Mediclaim Insurance Policy",
                      path: "/insurance/business/group-mediclaim",
                    },
                    {
                      label: "MBD Insurance Policy (Machinery Breakdown)",
                      path: "/insurance/business/mbd",
                    },
                    {
                      label: "All Risk/Group Affinity Insurance Policy",
                      path: "/insurance/business/all-risk",
                    },
                    {
                      label: "Bharat Griha Raksha/Home Insurance Policy",
                      path: "/insurance/business/bharat-griha-raksha",
                    },
                    {
                      label: "Shop Insurance Policy",
                      path: "/insurance/business/shop",
                    },
                  ].map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={() => closeDropdown("business")}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm transition duration-200 ${
                          isActive
                            ? "bg-gray-200 text-[#00001a]"
                            : "hover:bg-gray-300"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-2 py-2 rounded-md text-sm xl:text-base font-medium transition duration-300 ${
                    isActive ? "bg-gray-200 text-[#00001a]" : "hover:bg-gray-200"
                  }`
                }
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/get-quote"
                className={({ isActive }) =>
                  `px-2 py-2 rounded-md text-sm xl:text-base font-medium transition duration-300 ${
                    isActive ? "bg-gray-200 text-[#00001a]" : "hover:bg-gray-200"
                  }`
                }
              >
                Get a Quote
              </NavLink>
            </div>

            {/* Hamburger Icon */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-[#00001a] hover:text-gray-600 focus:outline-none"
                aria-label="Toggle menu"
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
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-100">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-lg font-medium transition duration-200 ${
                  isActive ? "bg-gray-200 text-[#00001a]" : "hover:bg-gray-200"
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-lg font-medium transition duration-200 ${
                  isActive ? "bg-gray-200 text-[#00001a]" : "hover:bg-gray-200"
                }`
              }
              onClick={toggleMenu}
            >
              About Us
            </NavLink>

            {/* Personal Insurance Mobile */}
            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-200 transition duration-200"
                onClick={() => toggleMobileDropdown("personal")}
              >
                Personal Insurance
                <ChevronDownIcon
                  className={`h-4 w-4 transform transition-transform duration-300 ${
                    mobileDropdownOpen.personal ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`pl-4 ${mobileDropdownOpen.personal ? "block" : "hidden"}`}
              >
                {[
                  {
                    label: "Health Insurance",
                    path: "/insurance/personal/health",
                  },
                  { label: "Car Insurance", path: "/insurance/personal/car" },
                  {
                    label: "Two Wheelers Insurance",
                    path: "/insurance/personal/two-wheelers",
                  },
                  {
                    label: "Commercial Vehicle Insurance",
                    path: "/insurance/personal/commercial-vehicle",
                  },
                  {
                    label: "Mobile & Electronics Equipment's",
                    path: "/insurance/personal/mobile",
                  },
                ].map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-base transition duration-200 ${
                        isActive ? "bg-gray-200 text-[#00001a]" : "hover:bg-gray-200"
                      }`
                    }
                    onClick={() => {
                      toggleMenu();
                      toggleMobileDropdown("personal");
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Business & Group Insurance Mobile */}
            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-200 transition duration-200"
                onClick={() => toggleMobileDropdown("business")}
              >
                Business & Group Insurance
                <ChevronDownIcon
                  className={`h-4 w-4 transform transition-transform duration-300 ${
                    mobileDropdownOpen.business ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`pl-4 ${mobileDropdownOpen.business ? "block" : "hidden"}`}
              >
                {[
                  {
                    label: "Marine Insurance",
                    path: "/insurance/business/marine",
                  },
                  {
                    label: "Bharat Sookshma Udyam Suraksha (Standard Fire Policy)",
                    path: "/insurance/business/bharat-sookshma",
                  },
                  {
                    label: "Burglary Insurance Policy",
                    path: "/insurance/business/burglary",
                  },
                  {
                    label: "Employee Compensation Insurance Policy",
                    path: "/insurance/business/employee-compensation",
                  },
                  {
                    label: "Group Mediclaim Insurance Policy",
                    path: "/insurance/business/group-mediclaim",
                  },
                  {
                    label: "MBD Insurance Policy (Machinery Breakdown)",
                    path: "/insurance/business/mbd",
                  },
                  {
                    label: "All Risk/Group Affinity Insurance Policy",
                    path: "/insurance/business/all-risk",
                  },
                  {
                    label: "Bharat Griha Raksha/Home Insurance Policy",
                    path: "/insurance/business/bharat-griha-raksha",
                  },
                  {
                    label: "Shop Insurance Policy",
                    path: "/insurance/business/shop",
                  },
                ].map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-base transition duration-200 ${
                        isActive ? "bg-gray-200 text-[#00001a]" : "hover:bg-gray-200"
                      }`
                    }
                    onClick={() => {
                      toggleMenu();
                      toggleMobileDropdown("business");
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-lg font-medium transition duration-200 ${
                  isActive ? "bg-gray-200 text-[#00001a]" : "hover:bg-gray-200"
                }`
              }
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/get-quote"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-lg font-medium transition duration-200 ${
                  isActive ? "bg-gray-200 text-[#00001a]" : "hover:bg-gray-200"
                }`
              }
              onClick={toggleMenu}
            >
              Get a Quote
            </NavLink>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;