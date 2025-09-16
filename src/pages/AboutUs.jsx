import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Users, Target } from "lucide-react";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <section className="py-20 bg-[#00001a] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-2xl sm:text-3xl font-extrabold"
          >
            About Arshyan Insurance Marketing & Services PVT LTD
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed"
          >
            At{" "}
            <span className="text-blue-400 font-semibold">
              Arshyan Insurance Services Private Limited
            </span>
            , we are committed to providing{" "}
            <span className="text-blue-400 font-semibold">
              top-notch insurance services
            </span>{" "}
            that safeguard the financial future of individuals, families, and
            businesses. With a strong{" "}
            <span className="text-blue-400 font-semibold">
              customer-centric approach
            </span>{" "}
            and a vision for long-term security, we have earned the trust of
            thousands of policyholders across India.
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center my-12">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-400 text-sm">✦</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Our Journey */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00001a]">
              Our Journey
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
              Founded with a mission to simplify the insurance buying process,
              Arshyan Insurance Services has grown into a recognized name in the
              industry. With years of expertise in financial planning and risk
              management, we have built a reputation for{" "}
              <span className="text-blue-600 font-medium">
                transparency, trust, and reliability
              </span>
              , always staying true to our core values.
            </p>
          </motion.div>
          <motion.img
            src={assets.journey}
            alt="Journey"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.img
            src={assets.vision}
            alt="Vision"
            className="rounded-2xl shadow-lg order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00001a]">
              Our Vision
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
              To be a leading insurance provider in India, delivering{" "}
              <span className="text-blue-600 font-medium">
                innovative, affordable, and reliable
              </span>{" "}
              insurance solutions that empower individuals and businesses, while
              ensuring protection from life’s uncertainties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-3xl sm:text-4xl font-bold text-[#00001a]"
          >
            Our Mission
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="mt-8 text-lg text-gray-700 leading-relaxed text-justify"
          >
            To make insurance accessible to everyone by providing{" "}
            <span className="text-blue-600 font-medium">
              clear, comprehensive, and easy-to-understand solutions
            </span>
            . We aim to foster long-lasting relationships with our clients
            through exceptional customer service, rapid claim processing, and
            tailored policies.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-3xl sm:text-4xl font-bold text-[#00001a] mb-14"
          >
            Why Choose Arshyan Insurance Services?
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
                title: "Customer-Centric",
                desc: "We place our clients at the heart of everything we do for a seamless, stress-free experience.",
              },
              {
                icon: <Target className="w-10 h-10 text-blue-600" />,
                title: "Tailored Solutions",
                desc: "Every client is unique. We design customized insurance plans that fit lifestyle & financial goals.",
              },
              {
                icon: <Zap className="w-10 h-10 text-blue-600" />,
                title: "Fast Claims",
                desc: "Quick & efficient settlement process with a high success rate, avoiding unnecessary delays.",
              },
              {
                icon: <Users className="w-10 h-10 text-blue-600" />,
                title: "Experienced Team",
                desc: "Our skilled advisors and support staff guide you in selecting the best insurance policies.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#00001a] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00001a]">
              Our Commitment to You
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
              At Arshyan Insurance Services, our commitment is to keep you{" "}
              <span className="text-blue-600 font-medium">
                well-protected and financially secure
              </span>
              . We continuously improve our offerings, expand products, and
              leverage technology to deliver faster, better, and more
              transparent services for our valued clients.
            </p>
          </motion.div>
          <motion.img
            src={assets.commitment}
            alt="Commitment"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00001a] text-white text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl sm:text-4xl font-bold"
        >
          Secure Your Future with Arshyan Insurance
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mt-4 text-lg text-gray-300"
        >
          Let us help you protect what matters most. Get started today!
        </motion.p>
        <NavLink to="/get-quote">
          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 1 }}
            className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            Get a Free Quote
          </motion.button>
        </NavLink>
      </section>
    </div>
  );
};

export default AboutUs;
