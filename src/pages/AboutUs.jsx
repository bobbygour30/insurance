import React from 'react';
import { 
  ShieldCheckIcon, 
  HeartIcon, 
  UsersIcon, 
  ArrowRightIcon 
} from '@heroicons/react/24/outline';
import assets from '../assets/assets';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0">
          <img
            src={assets.about}
            alt="About Us Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Arshyan Insurance</h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
            Safeguarding your financial future with trusted insurance solutions
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Our Journey</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              Simplifying insurance for a secure future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <img
                src={assets.about}
                alt="Our Journey"
                className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Founded with a mission to simplify the insurance buying process, Arshyan Insurance Services Private Limited has grown into a recognized name in the industry. Our founders brought together years of experience in financial planning and risk management to create an organization that puts the customer first. Over the years, we have built a reputation for transparency, trust, and reliability in our offerings, always staying true to our core values.
              </p>
              <a
                href="#"
                className="mt-4 sm:mt-6 inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
              >
                Learn More <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Mission & Vision</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              Empowering lives with accessible insurance
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <HeartIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">Our Mission</h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base text-center">
                To provide clear, comprehensive, and easy-to-understand insurance solutions that offer peace of mind and financial security for all.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <UsersIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">Our Vision</h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base text-center">
                To be a leading insurance provider in India, delivering innovative, affordable, and reliable solutions that empower individuals and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Why Choose Arshyan?</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              Trusted insurance solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { 
                icon: HeartIcon, 
                title: 'Customer-Centric', 
                desc: 'We place our clients at the heart of everything, ensuring a seamless experience from policy selection to claim settlement.' 
              },
              { 
                icon: ShieldCheckIcon, 
                title: 'Tailored Solutions', 
                desc: 'Customized insurance plans designed to fit your unique lifestyle and financial goals.' 
              },
              { 
                icon: ArrowRightIcon, 
                title: 'Fast Claims', 
                desc: 'Our efficient claim settlement process ensures quick payouts with minimal delays.' 
              },
              { 
                icon: UsersIcon, 
                title: 'Expert Team', 
                desc: 'Our experienced advisors are always ready to guide you in selecting the best policies.' 
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                <value.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment to You Section */}
      <section className="py-12 sm:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Our Commitment to You</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              Ensuring your peace of mind and financial security
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <ShieldCheckIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
              At Arshyan Insurance Services Private Limited, our primary commitment is to ensure that our clients are well-protected and financially secure. We are constantly working towards improving our services, expanding our product offerings, and leveraging technology to provide better, faster, and more transparent services.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Secure Your Future?</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">Get a personalized insurance quote or speak with our experts today!</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-semibold transition duration-300"
            >
              Get a Quote <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-transparent border border-white hover:bg-white hover:text-blue-600 rounded-full font-semibold transition duration-300"
            >
              Contact Support <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;