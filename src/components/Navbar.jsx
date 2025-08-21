import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import assets from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    personal: false,
    business: false,
    legal: false,
    login: false,
  });
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    personal: false,
    business: false,
    legal: false,
    login: false,
  });
  const dropdownRefs = {
    personal: useRef(null),
    business: useRef(null),
    legal: useRef(null),
    login: useRef(null),
  };
  const timeoutRefs = {
    personal: useRef(null),
    business: useRef(null),
    legal: useRef(null),
    login: useRef(null),
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
    <nav className="bg-white text-gray-800 shadow-lg fixed w-full z-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img
                className="w-[62%]"
                src={assets.logo}
                alt="Insurance Logo"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                  isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
                }`
              }
            >
              Home
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
              <div className="flex items-center">
                <NavLink
                  to="/insurance/personal"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                      isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
                    }`
                  }
                >
                  Personal Insurance
                </NavLink>
                <span className="pointer-events-none">
                  <ChevronDownIcon
                    className={`ml-0.5 h-4 w-4 transition-transform duration-300 ${
                      dropdownOpen.personal ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </div>
              <div
                id="personal-dropdown"
                className={`absolute bg-blue-50 text-gray-800 shadow-lg rounded-md mt-2 w-56 z-50 transition-opacity duration-300 ${
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
                    label: "Mobile Insurance",
                    path: "/insurance/personal/mobile",
                  },
                ].map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => closeDropdown("personal")}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-base transition duration-200 ${
                        isActive
                          ? "bg-blue-100 text-blue-600"
                          : "hover:bg-blue-200"
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
              <div className="flex items-center">
                <NavLink
                  to="/insurance/business"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                      isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
                    }`
                  }
                >
                  Business & Group Insurance
                </NavLink>
                <span className="pointer-events-none">
                  <ChevronDownIcon
                    className={`ml-0.5 h-4 w-4 transition-transform duration-300 ${
                      dropdownOpen.business ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </div>
              <div
                id="business-dropdown"
                className={`absolute bg-blue-50 text-gray-800 shadow-lg rounded-md mt-2 w-80 z-50 transition-opacity duration-300 ${
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
                      `block px-4 py-3 text-base transition duration-200 ${
                        isActive
                          ? "bg-blue-100 text-blue-600"
                          : "hover:bg-blue-200"
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
                `px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                  isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
                }`
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/get-quote"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                  isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
                }`
              }
            >
              Get a Quote
            </NavLink>

            {/* Legal Dropdown */}
            <div
              className="relative"
              ref={dropdownRefs.legal}
              onMouseEnter={() => handleMouseEnter("legal")}
              onMouseLeave={(e) => handleMouseLeave("legal", e)}
              aria-expanded={dropdownOpen.legal}
              aria-controls="legal-dropdown"
            >
              <div className="flex items-center">
                <button className="hover:bg-blue-100 px-3 py-2 rounded-md text-base font-medium transition duration-300">
                  Legal
                </button>
                <span className="pointer-events-none">
                  <ChevronDownIcon
                    className={`ml-0.5 h-4 w-4 transition-transform duration-300 ${
                      dropdownOpen.legal ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </div>
              <div
                id="legal-dropdown"
                className={`absolute bg-blue-50 text-gray-800 shadow-lg rounded-md mt-2 w-56 z-50 transition-opacity duration-300 ${
                  dropdownOpen.legal
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {[
                  { label: "Privacy Policy", path: "/contact/privacy-policy" },
                  { label: "Terms & Conditions", path: "/contact/terms-and-conditions" },
                  { label: "Refund Policy", path: "/contact/refund-policy" },
                ].map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => closeDropdown("legal")}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-base transition duration-200 ${
                        isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-200"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                  isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
                }`
              }
            >
              About Us
            </NavLink>
            

            {/* Login Dropdown */}
            <div
              className="relative"
              ref={dropdownRefs.login}
              onMouseEnter={() => handleMouseEnter("login")}
              onMouseLeave={(e) => handleMouseLeave("login", e)}
              aria-expanded={dropdownOpen.login}
              aria-controls="login-dropdown"
            >
              <div className="flex items-center">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                      isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
                    }`
                  }
                >
                  Login
                </NavLink>
                
                
              </div>
              <div
                id="login-dropdown"
                className={`absolute bg-blue-50 text-gray-800 shadow-lg rounded-md mt-2 w-56 z-50 transition-opacity duration-300 ${
                  dropdownOpen.login
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
              </div>
            </div>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
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
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-100">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-lg font-medium transition duration-200 ${
                isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
              }`
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>

          {/* Personal Insurance Mobile */}
          <div>
            <button
              className="w-full text-left px-3 py-2 rounded-md text-lg font-medium hover:bg-blue-100 transition duration-200 flex justify-between items-center"
              onClick={() => toggleMobileDropdown("personal")}
            >
              Personal Insurance
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-300 ${
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
                  label: "Mobile Insurance",
                  path: "/insurance/personal/mobile",
                },
              ].map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base transition duration-200 ${
                      isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
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
              className="w-full text-left px-3 py-2 rounded-md text-lg font-medium hover:bg-blue-100 transition duration-200 flex justify-between items-center"
              onClick={() => toggleMobileDropdown("business")}
            >
              Business & Group Insurance
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-300 ${
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
                      isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
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
                isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
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
                isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
              }`
            }
            onClick={toggleMenu}
          >
            Get a Quote
          </NavLink>

          {/* Legal Mobile */}
          <div>
            <button
              className="w-full text-left px-3 py-2 rounded-md text-lg font-medium hover:bg-blue-100 transition duration-200 flex justify-between items-center"
              onClick={() => toggleMobileDropdown("legal")}
            >
              Legal
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-300 ${
                  mobileDropdownOpen.legal ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`pl-4 ${mobileDropdownOpen.legal ? "block" : "hidden"}`}
            >
              {[
                { label: "Privacy Policy", path: "/contact/privacy-policy" },
                { label: "Terms & Conditions", path: "/contact/terms-and-conditions" },
                { label: "Refund Policy", path: "/contact/refund-policy" },
              ].map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base transition duration-200 ${
                      isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
                    }`
                  }
                  onClick={() => {
                    toggleMenu();
                    toggleMobileDropdown("legal");
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-lg font-medium transition duration-200 ${
                isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
              }`
            }
            onClick={toggleMenu}
          >
            About Us
          </NavLink>

          {/* Login Mobile */}
          <div>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-lg font-medium transition duration-200 ${
                  isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100"
                }`
              }
              onClick={toggleMenu}
            >
              Login
            </NavLink>
            <div
              className={`pl-4 ${mobileDropdownOpen.login ? "block" : "hidden"}`}
            >
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;