import React from 'react';
import { 
  ShieldCheckIcon, 
  HeartIcon, 
  UsersIcon, 
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1532938911079-1b8924b316d7"
            alt="About Us Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
            Empowering lives with trusted health insurance solutions
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              A journey to make healthcare accessible for all
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <img
                src="https://images.unsplash.com/photo-1516321310767-75f7200c9998"
                alt="Our Story"
                className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Founded in 2015, our company set out with a mission to simplify health insurance and make it accessible to everyone. Over the years, we’ve grown into a trusted provider, serving millions with innovative plans and a commitment to customer care. Our partnerships with top hospitals and dedication to transparency have made us a leader in the industry.
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
              Our commitment to your well-being
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <HeartIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">Our Mission</h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base text-center">
                To provide affordable, comprehensive health insurance plans that ensure peace of mind and access to quality healthcare for all.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <UsersIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">Our Vision</h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base text-center">
                To revolutionize health insurance by leveraging innovation and partnerships to create a healthier future for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              Dedicated professionals driving our mission
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: 'Dr. Anita Sharma',
                role: 'Chief Medical Officer',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
              },
              {
                name: 'Rahul Kapoor',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
              },
              {
                name: 'Priya Mehra',
                role: 'Head of Customer Success',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
              },
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-24 w-24 sm:h-32 sm:w-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              The principles that guide us
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: ShieldCheckIcon, title: 'Integrity', desc: 'We uphold the highest standards of transparency.' },
              { icon: HeartIcon, title: 'Care', desc: 'Your health and well-being are our priority.' },
              { icon: UsersIcon, title: 'Community', desc: 'We build strong partnerships for better care.' },
              { icon: ArrowRightIcon, title: 'Innovation', desc: 'Pioneering solutions for modern healthcare.' },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                <value.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Secure Your Health?</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">Get a personalized quote or speak with our experts today!</p>
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