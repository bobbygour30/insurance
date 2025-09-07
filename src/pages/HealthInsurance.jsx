import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartPulse,
  Hospital,
  Stethoscope,
  Baby,
  Gift,
  PhoneCall,
  Zap,
  FileCheck,
  ChevronDown,
} from "lucide-react";
import assets from "../assets/assets";

const HealthInsurance = () => {
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
            src={assets.banner1}
            alt="Health Insurance Banner"
            className="w-full h-full object-cover rounded-2xl shadow-lg mb-8"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00001a] mb-6">
            Arshyan Health Insurance
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Health is wealth, and protecting it is essential. Secure your
            family’s future with{" "}
            <span className="text-blue-600 font-semibold">
              comprehensive health insurance
            </span>{" "}
            plans designed for peace of mind.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/get-quote"
              className="mt-8 inline-block bg-[#00001a] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Health Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Key Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=" rounded-2xl  p-10 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-10 text-center">
            Key Benefits of Arshyan Health Insurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
                title: "Comprehensive Medical Coverage",
                desc: "Covers hospitalization, pre- and post-hospitalization treatments, surgeries, and more.",
              },
              {
                icon: <Hospital className="w-8 h-8 text-blue-600" />,
                title: "Cashless Treatment",
                desc: "Access cashless treatment at our wide network of partner hospitals.",
              },
              {
                icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
                title: "Critical Illness Cover",
                desc: "Lump-sum payout on diagnosis of life-threatening diseases like cancer or heart disease.",
              },
              {
                icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
                title: "Daycare Procedures",
                desc: "Covers treatments like cataract surgery, chemotherapy, and dialysis.",
              },
              {
                icon: <Baby className="w-8 h-8 text-blue-600" />,
                title: "Maternity & Newborn Benefits",
                desc: "Coverage for maternity expenses and newborn care.",
              },
              {
                icon: <Gift className="w-8 h-8 text-blue-600" />,
                title: "No Claim Bonus",
                desc: "Increased coverage for every claim-free year at no extra cost.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition"
              >
                {item.icon}
                <div>
                  <h3 className="text-lg font-semibold text-[#00001a]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
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
          className=" rounded-2xl  p-10 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-12 text-center">
            Why Choose Arshyan Health Insurance?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
                title: "Affordable Premiums",
                desc: "Flexible, cost-effective plans to suit every budget.",
              },
              {
                icon: <Hospital className="w-8 h-8 text-blue-600" />,
                title: "Wide Network",
                desc: "Access to a vast network of hospitals for cashless treatment.",
              },
              {
                icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
                title: "Preventive Health Checkups",
                desc: "Regular checkups for early detection and wellness.",
              },
              {
                icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
                title: "24/7 Support",
                desc: "Round-the-clock assistance for claims and queries.",
              },
              {
                icon: <FileCheck className="w-8 h-8 text-blue-600" />,
                title: "Quick Claims",
                desc: "Seamless claim process with minimal paperwork.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-[#00001a] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* OPD Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=" rounded-2xl  p-10 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-10 text-center">
            OPD Benefits with Arshyan Health Insurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Consultations Covered",
                desc: "Routine check-ups and specialist consultations without extra expenses.",
              },
              {
                title: "Diagnostic Tests",
                desc: "Coverage for lab tests, X-rays, and other diagnostics.",
              },
              {
                title: "Prescription Medicines",
                desc: "Covers costs of medicines prescribed during outpatient visits.",
              },
              {
                title: "Flexibility in Usage",
                desc: "Access a wide network of doctors and clinics at your convenience.",
              },
              {
                title: "No Waiting Period",
                desc: "Start utilizing OPD coverage immediately.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:shadow-md transition"
              >
                <Zap className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-[#00001a]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#00001a] rounded-2xl shadow-md p-12 text-center text-white mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Secure Your Family’s Future
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            With Arshyan Health Insurance, you’re investing in{" "}
            <span className="font-semibold">peace of mind</span> and{" "}
            <span className="font-semibold">financial security</span>. Get
            protection today!
          </p>
          <Link
            to="/get-quote"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Get a Quote
          </Link>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className=" rounded-2xl  p-10"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          {[
            {
              question: "What does Arshyan Health Insurance cover?",
              answer:
                "It covers hospitalization, pre- and post-hospitalization, surgeries, critical illnesses, maternity, daycare procedures, and OPD expenses.",
            },
            {
              question: "How do I access cashless treatment?",
              answer:
                "Visit any of our network hospitals, present your policy details, and avail treatment without upfront payments.",
            },
            {
              question: "Is there a waiting period for OPD benefits?",
              answer:
                "No, OPD benefits can be utilized immediately upon policy activation.",
            },
            {
              question: "How can I file a claim?",
              answer:
                "File claims online through our portal or contact our 24/7 support team for assistance.",
            },
          ].map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-gray-200 py-4"
            >
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

export default HealthInsurance;
