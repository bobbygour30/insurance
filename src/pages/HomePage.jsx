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
  DevicePhoneMobileIcon,
  TruckIcon,
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
        backgroundColor: ['#00001a', '#FBBF24', '#EF4444'],
        hoverBackgroundColor: ['#1a1a3d', '#F59E0B', '#DC2626'],
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
          font: { size: 14, family: "'Outfit', sans-serif" },
          color: '#00001a',
        },
      },
      tooltip: {
        backgroundColor: '#00001a',
        titleFont: { size: 14, family: "'Outfit', sans-serif" },
        bodyFont: { size: 12, family: "'Outfit', sans-serif" },
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
        backgroundColor: '#00001a',
        borderColor: '#1a1a3d',
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
          color: '#00001a',
          font: { size: 14, family: "'Outfit', sans-serif" },
        },
        grid: { display: false },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Policies',
          color: '#00001a',
          font: { size: 14, family: "'Outfit', sans-serif" },
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { size: 14, family: "'Outfit', sans-serif" },
          color: '#00001a',
        },
      },
      tooltip: {
        backgroundColor: '#00001a',
        titleFont: { size: 14, family: "'Outfit', sans-serif" },
        bodyFont: { size: 12, family: "'Outfit', sans-serif" },
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
    <div className="min-h-screen bg-white font-outfit">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }
        .section-heading {
          position: relative;
          display: inline-block;
        }
        .section-heading::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 3px;
          background: linear-gradient(to right, #00001a, #3b82f6);
          border-radius: 2px;
        }
        .slick-slider {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .slick-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .slick-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .slick-prev,
        .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
          background-color: #3B82F6;
          border-radius: 50%;
          display: flex !important;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s, transform 0.3s;
        }
        .slick-prev:hover,
        .slick-next:hover {
          background-color: #2563EB;
          transform: scale(1.1);
        }
        .slick-prev:before,
        .slick-next:before {
          content: '';
          display: block;
          width: 16px;
          height: 16px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
        .slick-prev:before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M15 19l-7-7 7-7'/%3E%3C/svg%3E");
        }
        .slick-next:before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5l7 7-7 7'/%3E%3C/svg%3E");
        }
        .slick-prev {
          left: 15px;
        }
        .slick-next {
          right: 15px;
        }
        .custom-dots {
          bottom: 20px;
        }
        .custom-dot {
          width: 12px;
          height: 12px;
          background-color: #ffffff;
          border-radius: 50%;
          display: inline-block;
          margin: 0 6px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          transition: background-color 0.3s, transform 0.3s;
        }
        .custom-dot:hover {
          transform: scale(1.2);
        }
        .slick-active .custom-dot {
          background-color: #3B82F6;
        }
        .hero-slider,
        .hero-slider .slick-list,
        .hero-slider .slick-track,
        .hero-slider .slick-slide,
        .hero-slider .slick-slide > div,
        .hero-slider .slick-slide img {
          height: 60vh !important;
        }
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
        .insurance-card {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .insurance-card:nth-child(1) { animation-delay: 0.1s; }
        .insurance-card:nth-child(2) { animation-delay: 0.2s; }
        .insurance-card:nth-child(3) { animation-delay: 0.3s; }
        .insurance-card:nth-child(4) { animation-delay: 0.4s; }
        .insurance-card:nth-child(5) { animation-delay: 0.5s; }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 640px) {
          .custom-dot {
            width: 10px;
            height: 10px;
            margin: 0 4px;
          }
          .slick-prev,
          .slick-next {
            width: 32px;
            height: 32px;
          }
          .slick-prev:before,
          .slick-next:before {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>

      {/* Hero Slider */}
      <section className="relative">
        <Slider {...heroSliderSettings} className="hero-slider w-full h-[60vh] overflow-hidden">
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
              <div className="absolute inset-0 flex items-center bg-gradient-to-r from-[#00001a]/60 to-transparent">
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
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00001a] to-[#3b82f6] hover:from-[#1a1a3d] hover:to-[#2563eb] rounded-full text-white font-semibold transition duration-300"
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

      {/* Insurance Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00001a] section-heading">Our Insurance Plans</h2>
            <p className="mt-4 text-lg text-gray-600">Explore our range of insurance plans tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: assets.icon4,
                title: 'Mobile & Electronics Equipment',
                desc: 'Protect your gadgets with coverage for damage, theft, and breakdowns.',
              },
              {
                icon: assets.icon3,
                title: 'Car Insurance',
                desc: 'Comprehensive coverage for your vehicle against accidents and theft.',
              },
              {
                icon: assets.icon1,
                title: 'Two Wheeler Insurance',
                desc: 'Affordable plans to keep your bike or scooter safe on the road.',
              },
              {
                icon: assets.icon3,
                title: 'Commercial Vehicle Insurance',
                desc: 'Robust protection for your business vehicles and fleet operations.',
              },
              {
                icon: assets.icon2,
                title: 'Health Insurance',
                desc: 'Comprehensive health plans for you and your family’s well-being.',
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="insurance-card flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 transform hover:scale-103 will-change-transform"
              >
                <img
                  src={plan.icon}
                  alt={`${plan.title} icon`}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-[#00001a] text-center">{plan.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{plan.desc}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#00001a] to-[#3b82f6] hover:from-[#1a1a3d] hover:to-[#2563eb] rounded-full text-white font-semibold transition duration-300"
                >
                  View Details <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00001a] section-heading">About Us</h2>
            <p className="mt-4 text-lg text-gray-600">Empowering lives with trusted insurance solutions</p>
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
                We are a leading insurance provider dedicated to offering comprehensive and affordable plans to protect you and your assets. With a focus on innovation, customer care, and a robust network of partners, we ensure peace of mind through tailored insurance solutions. Our mission is to make protection accessible and stress-free for everyone.
              </p>
              <div className="mt-6 flex space-x-4">
                <ShieldCheckIcon className="h-8 w-8 text-[#00001a]" />
                <HeartIcon className="h-8 w-8 text-[#00001a]" />
                <UsersIcon className="h-8 w-8 text-[#00001a]" />
              </div>
              <a
                href="#"
                className="mt-6 inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#00001a] to-[#3b82f6] hover:from-[#1a1a3d] hover:to-[#2563eb] rounded-full text-white font-semibold transition duration-300"
              >
                Learn More <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00001a] section-heading">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">Discover the benefits of partnering with us</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheckIcon, title: 'Trusted Coverage', desc: 'Comprehensive plans with extensive coverage' },
              { icon: HeartIcon, title: 'Customer Care', desc: '24/7 support for all your needs' },
              { icon: UsersIcon, title: 'Wide Network', desc: 'Access to top hospitals and service providers' },
              { icon: StarIcon, title: 'Fast Claims', desc: 'Quick and hassle-free claim processing' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 transform hover:scale-103">
                <item.icon className="h-12 w-12 text-[#00001a] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#00001a]">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones & Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00001a] section-heading">Milestones & Achievements</h2>
            <p className="mt-4 text-lg text-gray-600">Our journey in numbers</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-96">
              <h3 className="text-xl font-semibold text-[#00001a] mb-4">Claims Processed</h3>
              <div className="h-80">
                <Pie data={pieData} options={pieOptions} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-96">
              <h3 className="text-xl font-semibold text-[#00001a] mb-4">Policy Growth Over Years</h3>
              <div className="h-80">
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00001a] section-heading">Our Success Story</h2>
            <p className="mt-4 text-lg text-gray-600">Real stories from our satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <p className="text-gray-600 italic">"When I needed urgent medical care, their quick claim processing saved me from financial stress. Truly a lifesaver!"</p>
              <div className="mt-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Customer"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-[#00001a]">Priya Sharma</p>
                  <p className="text-gray-600">Policyholder since 2022</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <p className="text-gray-600 italic">"The wide hospital network made it easy to find quality care. Their support team was always there for me."</p>
              <div className="mt-4 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-afbcb6ee7714"
                  alt="Customer"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-[#00001a]">Rahul Verma</p>
                  <p className="text-gray-600">Policyholder since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00001a] section-heading">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Find answers to common questions about our insurance plans</p>
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
                question: 'What is the coverage for vehicle and electronics insurance?',
                answer: 'Our vehicle plans cover accidents, theft, and damages, while electronics plans cover breakdowns, accidental damage, and theft.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-100">
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-[#00001a]">{faq.question}</span>
                  <ChevronDownIcon
                    className={`h-6 w-6 text-[#00001a] transform transition-transform duration-200 ${
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

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00001a] section-heading">Our Trusted Partners</h2>
            <p className="mt-4 text-lg text-gray-600">Collaborating with leading insurance and service providers</p>
          </div>
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

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00001a] section-heading">Testimonials</h2>
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
                <StarIcon className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <p className="text-gray-600 italic">{testimonial.quote}</p>
                <div className="mt-4 flex items-center justify-center">
                  <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                  <p className="ml-4 font-semibold text-[#00001a]">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#00001a] to-[#3b82f6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Secure Your Future?</h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">Get a personalized quote or speak with our experts today!</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white text-[#00001a] hover:bg-gray-100 rounded-full font-semibold transition duration-300"
            >
              Get a Quote <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-[#00001a] rounded-full font-semibold transition duration-300"
            >
              Contact Support <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;