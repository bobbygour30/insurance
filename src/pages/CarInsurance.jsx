import React from 'react';
import { NavLink } from 'react-router-dom';
import { TruckIcon, ShieldCheckIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const CarInsurance = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Car Insurance Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Car Insurance</h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
            Drive with confidence with our comprehensive car insurance
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Why Choose Our Car Insurance?</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              Protection for your vehicle against accidents and damages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
                alt="Car Insurance"
                className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our car insurance offers comprehensive coverage for accidents, theft, and third-party liabilities. Enjoy benefits like no-claim bonuses, roadside assistance, and quick claim settlements. Choose from plans tailored for private cars, ensuring peace of mind on every journey.
              </p>
              <NavLink
                to="#"
                className="mt-4 sm:mt-6 inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
              >
                Get a Quote <ArrowRightIcon className="ml-2 h-5 w-5" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              Drive worry-free with our robust coverage
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: TruckIcon,
                title: 'Comprehensive Coverage',
                desc: 'Protection against accidents, theft, and natural calamities.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Third-Party Liability',
                desc: 'Covers damages to third-party vehicles or property.',
              },
              {
                icon: ClockIcon,
                title: 'Roadside Assistance',
                desc: '24/7 support for breakdowns and emergencies.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                <feature.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Protect Your Car?</h2>
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

export default CarInsurance;