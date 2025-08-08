import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRightIcon, HeartIcon, TruckIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const PersonalInsurance = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532938911079-1b8924b316d7"
            alt="Personal Insurance Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Personal Insurance</h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
            Protect what matters most with our tailored insurance plans
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Our Personal Insurance Plans</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              Comprehensive coverage for your health, vehicles, and devices
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: HeartIcon,
                title: 'Health Insurance',
                desc: 'Comprehensive plans for medical expenses and wellness.',
                path: '/insurance/personal/health',
              },
              {
                icon: TruckIcon,
                title: 'Car Insurance',
                desc: 'Protect your car with comprehensive or third-party coverage.',
                path: '/insurance/personal/car',
              },
              {
                icon: TruckIcon,
                title: 'Two Wheelers Insurance',
                desc: 'Coverage for your motorcycle or scooter against accidents.',
                path: '/insurance/personal/two-wheelers',
              },
              {
                icon: TruckIcon,
                title: 'Commercial Vehicle Insurance',
                desc: 'Safeguard your business vehicles with robust plans.',
                path: '/insurance/personal/commercial-vehicle',
              },
              {
                icon: DevicePhoneMobileIcon,
                title: 'Mobile Insurance',
                desc: 'Protect your smartphone from damage, theft, or loss.',
                path: '/insurance/personal/mobile',
              },
            ].map((plan, index) => (
              <NavLink
                key={index}
                to={plan.path}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300"
              >
                <plan.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{plan.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">{plan.desc}</p>
                <span className="mt-4 inline-flex items-center text-blue-600 font-semibold">
                  Learn More <ArrowRightIcon className="ml-2 h-5 w-5" />
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Secure Your Future?</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">Get a personalized quote or speak with our experts today!</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <NavLink
              to="#"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-semibold transition duration-300"
            >
              Get a Quote <ArrowRightIcon className="ml-2 h-5 w-5" />
            </NavLink>
            <NavLink
              to="#"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-transparent border border-white hover:bg-white hover:text-blue-600 rounded-full font-semibold transition duration-300"
            >
              Contact Support <ArrowRightIcon className="ml-2 h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalInsurance;