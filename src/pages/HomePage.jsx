import React, { useState } from 'react';
import Slider from 'react-slick';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { 
  ShieldCheckIcon, 
  HeartIcon, 
  UsersIcon, 
  StarIcon, 
  ArrowRightIcon,
  ChevronDownIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import assets from '../assets/assets';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const HomePage = () => {
  const [faqOpen, setFaqOpen] = useState({});

  // Hero Slider settings
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dotsClass: 'slick-dots custom-dots',
    customPaging: () => (
      <button className="custom-dot"></button>
    ),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  // Partners Slider settings
  const partnersSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  // Data for Pie Chart (Claims Processed)
  const pieData = {
    labels: ['Approved Claims', 'Pending Claims', 'Rejected Claims'],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: ['#3B82F6', '#FBBF24', '#EF4444'],
        hoverBackgroundColor: ['#2563EB', '#F59E0B', '#DC2626'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  // Pie Chart Options
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { size: 14 },
          color: '#1F2937',
        },
      },
      tooltip: {
        backgroundColor: '#1F2937',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
  };

  // Data for Bar Chart (Policy Growth)
  const barData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Policies Issued',
        data: [5000, 8000, 12000, 18000, 25000],
        backgroundColor: '#3B82F6',
        borderColor: '#2563EB',
        borderWidth: 1,
      },
    ],
  };

  // Bar Chart Options
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
          color: '#1F2937',
          font: { size: 14 },
        },
        grid: { display: false },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Policies',
          color: '#1F2937',
          font: { size: 14 },
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { size: 14 },
          color: '#1F2937',
        },
      },
      tooltip: {
        backgroundColor: '#1F2937',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
  };

  // FAQ Toggle Handler
  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Banner text data
  const bannerText = [
    {
      title: "Protect Your Future",
      subtitle: "Secure your health with our trusted insurance plans.",
      cta: "Get Covered Now",
    },
    {
      title: "Peace of Mind",
      subtitle: "Comprehensive coverage for you and your loved ones.",
      cta: "Explore Plans",
    },
    {
      title: "Your Health, Our Priority",
      subtitle: "Affordable plans tailored to your needs.",
      cta: "Learn More",
    },
    {
      title: "Stay Worry-Free",
      subtitle: "Fast claims and wide hospital network.",
      cta: "Get a Quote",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Slider */}
      <section className="relative">
        <style jsx>{`
          .hero-slider,
          .hero-slider .slick-list,
          .hero-slider .slick-track,
          .hero-slider .slick-slide,
          .hero-slider .slick-slide > div,
          .hero-slider .slick-slide img {
            height: 60vh !important;
          }
          @media (min-width: 640px) {
            .hero-slider,
            .hero-slider .slick-list,
            .hero-slider .slick-track,
            .hero-slider .slick-slide,
            .hero-slider .slick-slide > div,
            .hero-slider .slick-slide img {
              height: 91vh !important;
            }
          }
        `}</style>
        <Slider {...heroSliderSettings} className="hero-slider w-full h-[60vh] sm:h-[91vh] overflow-hidden">
          {[
            { src: assets.banner2, alt: "Health Insurance Hero 1" },
            { src: assets.banner3, alt: "Health Insurance Hero 2" },
            { src: assets.banner1, alt: "Health Insurance Hero 3" },
            { src: assets.banner2, alt: "Health Insurance Hero 4" },
          ].map((slide, index) => (
            <div key={index} className="relative h-full">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center  bg-opacity-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="text-left max-w-md sm:max-w-lg">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                      {bannerText[index].title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-200 mb-6">
                      {bannerText[index].subtitle}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
                    >
                      {bannerText[index].cta} <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Insurance Plans</h2>
            <p className="mt-4 text-lg text-gray-600">Choose the plan that best suits your needs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HeartIcon,
                title: 'Individual Health Plan',
                desc: 'Comprehensive coverage for individuals with flexible options.',
                price: 'Starting at ₹499/month',
              },
              {
                icon: UserGroupIcon,
                title: 'Family Floater Plan',
                desc: 'Protect your entire family with a single, affordable plan.',
                price: 'Starting at ₹999/month',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Senior Citizen Plan',
                desc: 'Specialized coverage for seniors with extensive benefits.',
                price: 'Starting at ₹799/month',
              },
            ].map((plan, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                <plan.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
                <p className="mt-2 text-gray-600">{plan.desc}</p>
                <p className="mt-4 text-lg font-bold text-blue-600">{plan.price}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
                >
                  View Details <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
            <p className="mt-4 text-lg text-gray-600">Empowering lives with trusted health insurance solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={assets.about}
                alt="About Us"
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 leading-relaxed">
                We are a leading health insurance provider dedicated to offering comprehensive and affordable plans to protect you and your loved ones. With a focus on innovation, customer care, and a robust network of healthcare providers, we ensure peace of mind through tailored insurance solutions. Our mission is to make healthcare accessible and stress-free for everyone.
              </p>
              <div className="mt-6 flex space-x-4">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
                <HeartIcon className="h-8 w-8 text-blue-600" />
                <UsersIcon className="h-8 w-8 text-blue-600" />
              </div>
              <a
                href="#"
                className="mt-6 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
              >
                Learn More <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">Discover the benefits of partnering with us</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheckIcon, title: 'Trusted Coverage', desc: 'Comprehensive plans with extensive coverage' },
              { icon: HeartIcon, title: 'Customer Care', desc: '24/7 support for all your needs' },
              { icon: UsersIcon, title: 'Wide Network', desc: 'Access to top hospitals nationwide' },
              { icon: StarIcon, title: 'Fast Claims', desc: 'Quick and hassle-free claim processing' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Milestones & Achievements</h2>
            <p className="mt-4 text-lg text-gray-600">Our journey in numbers</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md h-96">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Claims Processed</h3>
              <div className="h-80">
                <Pie data={pieData} options={pieOptions} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md h-96">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Policy Growth Over Years</h3>
              <div className="h-80">
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Success Story</h2>
            <p className="mt-4 text-lg text-gray-600">Real stories from our satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">"When I needed urgent medical care, their quick claim processing saved me from financial stress. Truly a lifesaver!"</p>
              <div className="mt-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Customer"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-gray-600">Policyholder since 2022</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">"The wide hospital network made it easy to find quality care. Their support team was always there for me."</p>
              <div className="mt-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-afbcb6ee7714"
                  alt="Customer"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Rahul Verma</p>
                  <p className="text-gray-600">Policyholder since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Find answers to common questions about our health insurance plans</p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: 'What is covered under your health insurance plans?',
                answer: 'Our plans cover hospitalization, doctor consultations, diagnostic tests, and more, depending on the plan you choose.',
              },
              {
                question: 'How do I file a claim?',
                answer: 'You can file a claim online through our portal or contact our 24/7 support team for assistance.',
              },
              {
                question: 'Can I customize my insurance plan?',
                answer: 'Yes, we offer flexible options to tailor your plan to your specific needs and budget.',
              },
              {
                question: 'What is the hospital network coverage?',
                answer: 'We have a wide network of over 5000 hospitals across India for cashless treatment.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDownIcon
                    className={`h-6 w-6 text-blue-600 transform transition-transform duration-200 ${
                      faqOpen[index] ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    faqOpen[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 py-4 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Trusted Partners</h2>
            <p className="mt-4 text-lg text-gray-600">Collaborating with leading healthcare providers</p>
          </div>
          <style jsx>{`
            .partners-slider,
            .partners-slider .slick-list,
            .partners-slider .slick-track,
            .partners-slider .slick-slide,
            .partners-slider .slick-slide > div {
              height: auto !important;
            }
            .partners-slider .slick-slide img {
              height: 4rem !important;
              width: auto !important;
            }
          `}</style>
          <Slider {...partnersSliderSettings} className="partners-slider w-full">
            {[
              { src: assets.logo2, alt: 'Cigna' },
              { src: assets.logo3, alt: 'UnitedHealthcare' },
              { src: assets.logo4, alt: 'Humana' },
              { src: assets.logo5, alt: 'Blue Cross Blue Shield' },
              { src: assets.logo6, alt: 'Kaiser Permanente' },
            ].map((logo, index) => (
              <div key={index} className="px-2">
                <img src={logo.src} alt={logo.alt} className="mx-auto object-contain h-16" />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Testimonials</h2>
            <p className="mt-4 text-lg text-gray-600">What our customers say about us</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "“Arshyan Insurance provided me with a comprehensive life insurance plan that fits my budget perfectly. Their advisors took the time to understand my needs and offered a tailored solution. I feel secure knowing my family is protected.”",
                name: "Priya",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
              },
              {
                quote: "“As a frequent traveler, I always choose Arshyan’s travel insurance. Their policies cover everything from medical emergencies to trip cancellations. I had to use their services once during a trip, and the support team was incredibly helpful!”",
                name: "Amit",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
              },
              {
                quote: "“I switched to Arshyan Insurance for my health coverage, and I couldn’t be happier. Their customer service was exceptional, guiding me through the process and answering all my questions. When I needed to file a claim, it was settled within days! Highly recommend!”",
                name: "Rajesh Kumar",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <StarIcon className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <p className="text-gray-600 italic">{testimonial.quote}</p>
                <div className="mt-4 flex items-center justify-center">
                  <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                  <p className="ml-4 font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest from Our Blog</h2>
            <p className="mt-4 text-lg text-gray-600">Stay informed with our health and insurance insights</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Understanding Your Health Insurance Options',
                excerpt: 'Learn about the different types of health insurance plans and how to choose the right one.',
                image: 'https://images.unsplash.com/photo-1450101490226-6d72e8a737b7',
              },
              {
                title: 'Tips for a Stress-Free Claims Process',
                excerpt: 'Discover how to navigate the claims process with ease and efficiency.',
                image: 'https://images.unsplash.com/photo-1516321310767-75f7200c9998',
              },
              {
                title: 'The Importance of Preventive Care',
                excerpt: 'Explore why preventive care is key to maintaining your health and reducing costs.',
                image: 'https://images.unsplash.com/photo-1576091160397-1f3c879a2076',
              },
            ].map((post, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition duration-300"
                >
                  Read More <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;