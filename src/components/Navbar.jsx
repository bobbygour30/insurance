import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
  const dropdownRefs = {
    personal: useRef(null),
    business: useRef(null),
    services: useRef(null),
    login: useRef(null),
  };
  const timeoutRefs = {
    personal: useRef(null),
    business: useRef(null),
    services: useRef(null),
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
      // Cleanup timeouts on unmount
      Object.values(timeoutRefs).forEach((ref) => {
        if (ref.current) {
          clearTimeout(ref.current);
        }
      });
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img
                className="h-8 w-auto"
                src="https://via.placeholder.com/150x50?text=Logo"
                alt="Insurance Logo"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
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
                    `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                      isActive ? "bg-blue-700" : "hover:bg-blue-700"
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
                      `block px-4 py-3 text-sm transition duration-200 ${
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
                <button className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                  Business & Group Insurance
                </button>
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
                className={`absolute bg-blue-50 text-gray-800 shadow-lg rounded-md mt-2 w-56 z-50 transition-opacity duration-300 ${
                  dropdownOpen.business
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {[
                  "Group Insurance",
                  "Liability Insurance",
                  "Property Insurance",
                  "Marine Insurance",
                  "Engineering and Specialty Business",
                  "Affinity & MSME",
                  "PoSP",
                ].map((item) => (
                  <NavLink
                    key={item}
                    to="#"
                    onClick={() => closeDropdown("business")}
                    className="block px-4 py-3 text-sm hover:bg-blue-200 transition duration-200"
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              ref={dropdownRefs.services}
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={(e) => handleMouseLeave("services", e)}
              aria-expanded={dropdownOpen.services}
              aria-controls="services-dropdown"
            >
              <div className="flex items-center">
                <button className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                  Services
                </button>
                <span className="pointer-events-none">
                  <ChevronDownIcon
                    className={`ml-0.5 h-4 w-4 transition-transform duration-300 ${
                      dropdownOpen.services ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </div>
              <div
                id="services-dropdown"
                className={`absolute bg-blue-50 text-gray-800 shadow-lg rounded-md mt-2 w-56 z-50 transition-opacity duration-300 ${
                  dropdownOpen.services
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {["Claims Management", "Risk Management", "Wellness"].map(
                  (item) => (
                    <NavLink
                      key={item}
                      to="#"
                      onClick={() => closeDropdown("services")}
                      className="block px-4 py-3 text-sm hover:bg-blue-200 transition duration-200"
                    >
                      {item}
                    </NavLink>
                  )
                )}
              </div>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              Blog
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
                <button className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                  Login
                </button>
                <span className="pointer-events-none">
                  <ChevronDownIcon
                    className={`ml-0.5 h-4 w-4 transition-transform duration-300 ${
                      dropdownOpen.login ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </div>
              <div
                id="login-dropdown"
                className={`absolute bg-blue-50 text-gray-800 shadow-lg rounded-md mt-2 w-56 z-50 transition-opacity duration-300 ${
                  dropdownOpen.login
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {[
                  "Individual Customer Login",
                  "Corporate Customer Login",
                  "EB Portal Login",
                ].map((item) => (
                  <NavLink
                    key={item}
                    to="#"
                    onClick={() => closeDropdown("login")}
                    className="block px-4 py-3 text-sm hover:bg-blue-200 transition duration-200"
                  >
                    {item}
                  </NavLink>
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
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>

          {/* Personal Insurance Mobile */}
          <div>
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-200 flex justify-between items-center"
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
              className={`pl-4 ${
                mobileDropdownOpen.personal ? "block" : "hidden"
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
                  className={({ isActive }) =>
                    `block px-3 py-2 text-sm transition duration-200 ${
                      isActive ? "bg-blue-600 text-white" : "hover:bg-blue-600"
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
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-200 flex justify-between items-center"
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
              className={`pl-4 ${
                mobileDropdownOpen.business ? "block" : "hidden"
              }`}
            >
              {[
                "Group Insurance",
                "Liability Insurance",
                "Property Insurance",
                "Marine Insurance",
                "Engineering and Specialty Business",
                "Affinity & MSME",
                "PoSP",
              ].map((item) => (
                <NavLink
                  key={item}
                  to="#"
                  className="block px-3 py-2 text-sm hover:bg-blue-600 transition duration-200"
                  onClick={() => {
                    toggleMenu();
                    toggleMobileDropdown("business");
                  }}
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Services Mobile */}
          <div>
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-200 flex justify-between items-center"
              onClick={() => toggleMobileDropdown("services")}
            >
              Services
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-300 ${
                  mobileDropdownOpen.services ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`pl-4 ${
                mobileDropdownOpen.services ? "block" : "hidden"
              }`}
            >
              {["Claims Management", "Risk Management", "Wellness"].map(
                (item) => (
                  <NavLink
                    key={item}
                    to="#"
                    className="block px-3 py-2 text-sm hover:bg-blue-600 transition duration-200"
                    onClick={() => {
                      toggleMenu();
                      toggleMobileDropdown("services");
                    }}
                  >
                    {item}
                  </NavLink>
                )
              )}
            </div>
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
            onClick={toggleMenu}
          >
            About Us
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium transition duration-200 ${
                isActive ? "bg-blue-600" : "hover:bg-blue-600"
              }`
            }
            onClick={toggleMenu}
          >
            Blog
          </NavLink>

          {/* Login Mobile */}
          <div>
            <button
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-200 flex justify-between items-center"
              onClick={() => toggleMobileDropdown("login")}
            >
              Login
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-300 ${
                  mobileDropdownOpen.login ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`pl-4 ${
                mobileDropdownOpen.login ? "block" : "hidden"
              }`}
            >
              {[
                "Individual Customer Login",
                "Corporate Customer Login",
                "EB Portal Login",
              ].map((item) => (
                <NavLink
                  key={item}
                  to="#"
                  className="block px-3 py-2 text-sm hover:bg-blue-600 transition duration-200"
                  onClick={() => {
                    toggleMenu();
                    toggleMobileDropdown("login");
                  }}
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;