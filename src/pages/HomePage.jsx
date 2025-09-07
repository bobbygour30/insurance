import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Slider from "react-slick";
import { CheckCircle, Zap, Users, Target, ChevronDown, Home, Shield, Clock } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import assets from "../assets/assets"; // Ensure this path is correct

const HomePage = () => {
  const [faqOpen, setFaqOpen] = useState({});

  // Animation controls for counters
  const controls = {
    families: useAnimation(),
    claims: useAnimation(),
    years: useAnimation(),
  };

  // Counter animation effect with visibility check
  useEffect(() => {
    const animateCounters = async () => {
      try {
        await Promise.all([
          controls.families.start({
            value: 5000,
            transition: { duration: 3, ease: [0.6, -0.05, 0.01, 0.99] },
          }),
          controls.claims.start({
            value: 100,
            transition: { duration: 2.5, ease: [0.6, -0.05, 0.01, 0.99] },
          }),
          controls.years.start({
            value: 10,
            transition: { duration: 2.5, ease: [0.6, -0.05, 0.01, 0.99] },
          }),
        ]);
      } catch (error) {
        console.error("Counter animation error:", error);
      }
    };

    // Trigger animation when component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.5 }
    );

    const numbersSection = document.querySelector("#numbers-section");
    if (numbersSection) observer.observe(numbersSection);

    return () => observer.disconnect();
  }, [controls.families, controls.claims, controls.years]);

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
    dotsClass: "slick-dots custom-dots",
    customPaging: () => <button className="custom-dot"></button>,
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
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
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

  // Partner images array
  const partnerImages = [
    { src: assets.partner1, alt: "Partner 1" },
    { src: assets.partner2, alt: "Partner 2" },
    { src: assets.partner3, alt: "Partner 3" },
    { src: assets.partner4, alt: "Partner 4" },
    { src: assets.partner5, alt: "Partner 5" },
    { src: assets.partner6, alt: "Partner 6" },
    { src: assets.partner7, alt: "Partner 7" },
    { src: assets.partner8, alt: "Partner 8" },
    { src: assets.partner9, alt: "Partner 9" },
    { src: assets.partner10, alt: "Partner 10" },
    { src: assets.partner11, alt: "Partner 11" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        body {
          color: #1c1c1c;
          font-weight: bold;
          font-family: Verdana, Geneva, sans-serif;
        }
        p {
          font-size: 12px;
        }
        .section-heading {
          position: relative;
          display: inline-block;
        }
        .section-heading::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 3px;
          background: linear-gradient(to right, #00001a, #4b5563);
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
          background-color: #00001a;
          border-radius: 50%;
          display: flex !important;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s, transform 0.3s;
        }
        .slick-prev:hover,
        .slick-next:hover {
          background-color: #1a1a3d;
          transform: scale(1.1);
        }
        .slick-prev:before,
        .slick-next:before {
          content: "";
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
          background-color: #00001a;
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
          border: 2px solid #d1d5db !important;
          border-radius: 8px !important;
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
        .faq-arrow {
          transition: transform 0.3s ease;
        }
        .faq-arrow.open {
          transform: rotate(180deg);
        }
        .numbers-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: linear-gradient(135deg, #f0f4f8, #e0e7ff);
          border-radius: 15px;
          padding: 20px;
          text-align: center;
        }
        .numbers-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .number-icon {
          font-size: 2.5rem;
          color: #2563eb;
          margin-bottom: 10px;
        }
      `}</style>

      {/* Hero Slider */}
      <section className="relative bg-[#00001a]">
        <Slider
          {...heroSliderSettings}
          className="hero-slider w-full h-[60vh] overflow-hidden"
        >
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
              <div className="absolute inset-0 flex items-center bg-gradient-to-r from-[#00001a]/80 to-transparent">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-left max-w-md sm:max-w-lg"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                      {bannerText[index].title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-200 mb-6">
                      {bannerText[index].subtitle}
                    </p>
                    <motion.a
                      href="#"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="inline-flex items-center px-6 py-3 bg-[#00001a] text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
                    >
                      {bannerText[index].cta}
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Divider */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-400 text-sm">✦</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Insurance Plans */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00001a]">
              Our Insurance Plans
            </h2>
            <p className="mt-4 text-gray-600">
              Explore our range of <span className="text-blue-600">insurance plans</span> tailored to your needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {[
              {
                icon: assets.icon4,
                title: "Mobile & Electronics Equipment",
                desc: "Protect your gadgets with coverage for damage, theft, and breakdowns.",
              },
              {
                icon: assets.icon3,
                title: "Car Insurance",
                desc: "Comprehensive coverage for your vehicle against accidents and theft.",
              },
              {
                icon: assets.icon1,
                title: "Two Wheeler Insurance",
                desc: "Affordable plans to keep your bike or scooter safe on the road.",
              },
              {
                icon: assets.icon3,
                title: "Commercial Vehicle Insurance",
                desc: "Robust protection for your business vehicles and fleet operations.",
              },
              {
                icon: assets.icon2,
                title: "Health Insurance",
                desc: "Comprehensive health plans for you and your family’s well-being.",
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white pt-8 pb-8 pr-3 pl-3 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col items-center"
              >
                <img
                  src={plan.icon}
                  alt={`${plan.title} icon`}
                  className="w-16 h-16 mb-4 object-contain"
                />
                <h3 className="text-xl font-bold text-[#00001a] text-center">
                  {plan.title}
                </h3>
                <p className="mt-2 text-xs text-gray-600 text-center">{plan.desc}</p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center px-6 py-2 bg-[#00001a] text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition justify-center"
                >
                  View Details
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-400 text-sm">✦</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* About Us */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00001a]">
              About Arshyan Insurance
            </h2>
            <p className="mt-4 text-gray-600">
              Empowering lives with <span className="text-blue-600">trusted insurance solutions</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <img
                src={assets.about}
                alt="About Us"
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed text-justify">
                We are a leading insurance provider dedicated to offering{" "}
                <span className="text-blue-600">comprehensive and affordable</span> plans to protect you and your assets. With a focus on innovation, customer care, and a robust network of partners, we ensure peace of mind through tailored insurance solutions. Our mission is to make protection accessible and stress-free for everyone.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center px-6 py-3 bg-[#00001a] text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-400 text-sm">✦</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00001a]">
              Why Choose Arshyan Insurance?
            </h2>
            <p className="mt-4 text-gray-600">
              Discover the <span className="text-blue-600">benefits</span> of partnering with us
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
                title: "Trusted Coverage",
                desc: "Comprehensive plans with extensive coverage for peace of mind.",
              },
              {
                icon: <Users className="w-10 h-10 text-blue-600" />,
                title: "Customer Care",
                desc: "24/7 support to assist you with all your insurance needs.",
              },
              {
                icon: <Target className="w-10 h-10 text-blue-600" />,
                title: "Wide Network",
                desc: "Access to top hospitals and service providers across India.",
              },
              {
                icon: <Zap className="w-10 h-10 text-blue-600" />,
                title: "Fast Claims",
                desc: "Quick and hassle-free claim processing for your convenience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl text-center font-semibold text-[#00001a] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-400 text-sm">✦</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* The Numbers Speak for Themselves */}
      <section id="numbers-section" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00001a] section-heading">
              The Numbers Speak for Themselves
            </h2>
            <p className="mt-4 text-gray-600">
              Our <span className="text-blue-600">achievements</span> in delivering trusted insurance solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Families Insured",
                value: (
                  <motion.span animate={controls.families}>
                    {({ value }) => Math.floor(value).toLocaleString() + "+"}
                  </motion.span>
                ),
                desc: "Providing peace of mind to thousands of families.",
                icon: <Home className="number-icon" />,
                target: 5000,
              },
              {
                title: "Claim Settlement",
                value: (
                  <motion.span animate={controls.claims}>
                    {({ value }) => Math.floor(value) + "%"}
                  </motion.span>
                ),
                desc: "100% claim settlement rate for maximum reliability.",
                icon: <Shield className="number-icon" />,
                target: 100,
              },
              {
                title: "Years of Delivering Trusted",
                value: (
                  <motion.span animate={controls.years}>
                    {({ value }) => Math.floor(value) + "+"}
                  </motion.span>
                ),
                desc: "Over a decade of trusted service.",
                icon: <Clock className="number-icon" />,
                target: 10,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="numbers-card shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-5xl font-extrabold text-blue-600 mb-3">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-[#00001a] mb-2">
                  {stat.title}
                </p>
                <p className="text-gray-600">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-400 text-sm">✦</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Success Story */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00001a]">
              Our Success Stories
            </h2>
            <p className="mt-4 text-gray-600">
              Real stories from our <span className="text-blue-600">satisfied customers</span>
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Arshyan Insurance Services provided exceptional guidance throughout the policy selection process. Their team ensured I understood every detail, and the claim process was seamless. Highly recommend their services!",
                name: "Ravin Kumar",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
              },
              {
                quote:
                  "The Arshyan team made choosing the right insurance plan so easy! Their support during the claim process was outstanding, and I felt truly valued as a customer. Thank you for the peace of mind!",
                name: "Sunaina Khana",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <p className="text-gray-600 italic">{story.quote}</p>
                <div className="mt-4 flex items-center">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-[#00001a]">{story.name}</p>
                    <p className="text-gray-600">Satisfied Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-8"
          >
            <a
              href="https://www.google.com/search?sca_esv=ab826453f275217b&sxsrf=AE3TifPrCNFHiut7pKQTAYEyst8DHBoXRQ:1757157593193&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6KP_xY8W6epjaJVSumGSN1RLBWnQmUeCE7RtHgIke19RDPSOVkDM3w1t20fxT9OknQMKMh45sBAesw7F5TDjzqwehKplzBBqczV-gJ2Or0EX5Nlv8zmfiLmkzsp_noXGFMSWbo%3D&q=ARSHYAN+Insurance+Marketing+%26+Services+Pvt+Ltd+Reviews&sa=X&ved=2ahUKEwiPm6CRgsSPAxVOTGwGHQ6OEYYQ0bkNegQIIBAE&biw=2048&bih=983&dpr=1.25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#00001a] text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
            >
              Review Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-400 text-sm">✦</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00001a]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">
              Find answers to common questions about our <span className="text-blue-600">insurance plans</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {[
              {
                question: "What is covered under your health insurance plans?",
                answer:
                  "Our plans cover hospitalization, doctor consultations, diagnostic tests, and more, depending on the plan you choose.",
              },
              {
                question: "How do I file a claim?",
                answer:
                  "You can file a claim online through our portal or contact our 24/7 support team for assistance.",
              },
              {
                question: "Can I customize my insurance plan?",
                answer:
                  "Yes, we offer flexible options to tailor your plan to your specific needs and budget.",
              },
              {
                question:
                  "What is the coverage for vehicle and electronics insurance?",
                answer:
                  "Our vehicle plans cover accidents, theft, and damages, while electronics plans cover breakdowns, accidental damage, and theft.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <button
                  className="w-full text-left px-6 py-4 hover:bg-gray-50 transition duration-200 flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-[#00001a]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-600 faq-arrow ${
                      faqOpen[index] ? "open" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    faqOpen[index]
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 py-4 text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-400 text-sm">✦</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Partners */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00001a]">
              Our Trusted Partners
            </h2>
            <p className="mt-4 text-gray-600">
              Collaborating with <span className="text-blue-600">leading insurance</span> and service providers
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Slider
              {...partnersSliderSettings}
              className="partners-slider w-full"
            >
              {partnerImages.map((logo, index) => (
                <div key={index} className="px-2">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="mx-auto object-contain h-16"
                  />
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-400 text-sm">✦</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* CTA */}
      <section className="py-20 bg-[#00001a] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Secure Your Future?
          </h2>
          <p className="mt-4 text-gray-300">
            Get a <span className="text-blue-400 font-semibold">personalized quote</span> or speak with our experts today!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;