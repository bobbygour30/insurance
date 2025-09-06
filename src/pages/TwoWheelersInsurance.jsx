import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Bike,
  Zap,
  FileCheck,
  PhoneCall,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";
import assets from "../assets/assets";

const TwoWheelersInsurance = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-blue-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <img
            src={assets.bike}
            alt="Two Wheeler Insurance Banner"
            className="w-full h-72 object-cover rounded-2xl shadow-lg mb-8"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00001a] mb-6">
            Arshyan Bike Insurance
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Owning a bike brings freedom, convenience, and joy, but it also
            comes with responsibilities. Arshyan Bike Insurance protects you and
            your bike from{" "}
            <span className="text-blue-600 font-semibold">
              accidents, theft, natural disasters, and third-party liabilities
            </span>
            .
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Bike Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Key Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl p-10 mb-16 bg-white shadow"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-10 text-center">
            Key Benefits of Arshyan Bike Insurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Comprehensive Coverage",
                desc: "Protection against damage due to accidents, theft, fire, or natural disasters like floods and earthquakes.",
              },
              {
                title: "Third-Party Liability",
                desc: "Coverage for legal liabilities from injuries or damages caused to third parties.",
              },
              {
                title: "Personal Accident Cover",
                desc: "Financial protection for the rider in case of accidental injury, disability, or death.",
              },
              {
                title: "Easy Claim Process",
                desc: "Hassle-free and quick claim settlement to minimize inconvenience.",
              },
              {
                title: "Add-Ons",
                desc: "Customize your policy with zero depreciation cover, roadside assistance, engine protection, and more.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition"
              >
                <Zap className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-[#00001a] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl p-10 mb-16 bg-gray-50"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-10 text-center">
            Why Choose Arshyan Insurance Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Affordable Premiums",
                desc: "Flexible and cost-effective premium options to suit your budget.",
              },
              {
                title: "Nationwide Network",
                desc: "Access to a vast network of partner garages for cashless repairs.",
              },
              {
                title: "Customer Support",
                desc: "24/7 assistance for claims, renewals, and insurance-related queries.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <FileCheck className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-[#00001a] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#00001a] rounded-2xl shadow-md p-12 text-center text-white mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ride Worry-Free</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Stay protected and focus on enjoying the{" "}
            <span className="font-semibold">road ahead</span> with Arshyan Bike
            Insurance.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Get a Quote
          </Link>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="rounded-2xl p-10"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          {[
            {
              question: "Is bike insurance mandatory in India?",
              answer:
                "Yes, third-party bike insurance is mandatory by law. Comprehensive insurance is optional but recommended for better protection.",
            },
            {
              question: "What does comprehensive bike insurance cover?",
              answer:
                "It covers own damages (accidents, theft, natural disasters) along with third-party liabilities.",
            },
            {
              question: "What add-ons are available?",
              answer:
                "You can opt for zero depreciation cover, roadside assistance, engine protection, and more.",
            },
            {
              question: "How do I file a claim?",
              answer:
                "You can file a claim online or contact our 24/7 customer support team for assistance.",
            },
          ].map((faq, index) => (
            <div key={faq.question} className="border-b border-gray-200 py-4">
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-[#00001a]"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-base text-gray-600 mt-2"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default TwoWheelersInsurance;
