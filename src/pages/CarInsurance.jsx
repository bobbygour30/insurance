import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Car,
  Zap,
  FileCheck,
  PhoneCall,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";
import assets from "../assets/assets";

const CarInsurance = () => {
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
            src={assets.car}
            alt="Car Insurance Banner"
            className="w-full h-full object-cover rounded-2xl shadow-lg mb-8"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00001a] mb-6">
            Arshyan Car Insurance
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Car insurance provides{" "}
            <span className="text-blue-600 font-semibold">
              financial protection
            </span>{" "}
            against physical damage, bodily injury from collisions, and
            third-party liabilities. It also covers theft and damages caused by
            events beyond accidents.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/get-quote"
              className="mt-8 inline-block bg-[#00001a] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Car Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* What is Car Insurance */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl p-10 mb-16 "
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-8 text-center">
            What is Car Insurance?
          </h2>
          <p className="text-gray-600 text-base mb-6 leading-relaxed text-center max-w-4xl mx-auto">
            Car insurance covers the loss or damage caused to the car or its
            parts due to natural and man-made calamities. It provides accident
            cover for individual owners of the vehicle while driving and also
            for passengers and third-party legal liability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Comprehensive Insurance",
                desc: "Covers damages to your car from accidents, natural disasters, theft, and provides third-party liability protection.",
              },
              {
                title: "Third-Party Insurance",
                desc: "Mandatory in India, covering damages to third-party property or individuals caused by your vehicle.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition"
              >
                <Car className="w-8 h-8 text-blue-600" />
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

        {/* Why Car Insurance is Required */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl p-10 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-8 text-center">
            Why is Car Insurance Required?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-4xl mx-auto text-center">
            As per Indian law, third-party insurance is mandatory for all
            vehicles. While comprehensive insurance isn’t mandatory, it offers
            peace of mind by covering damages to your own vehicle along with
            third-party protection. Since maintaining a car is expensive,
            comprehensive insurance ensures that repair and accident costs are
            taken care of without financial stress.
          </p>
        </motion.section>

        {/* What’s Covered */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-2xl p-10 mb-16 "
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-10 text-center">
            What’s Covered in Car Insurance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Accident Damages",
                desc: "Covers repair costs due to collisions.",
              },
              {
                title: "Theft, Fire & Explosion",
                desc: "Compensation for stolen vehicles or damages due to fire/explosions.",
              },
              {
                title: "Natural Disasters",
                desc: "Protection from floods, cyclones, lightning, and earthquakes.",
              },
              {
                title: "Acts of Terrorism",
                desc: "Covers damages caused due to terrorism-related incidents.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <ShieldCheck className="w-8 h-8 text-blue-600" />
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

        {/* What’s Not Covered */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="rounded-2xl p-10 mb-16"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-10 text-center">
            What’s Not Covered in Car Insurance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Driving Under Influence",
                desc: "Accidents caused while driving under alcohol or drug influence are excluded.",
              },
              {
                title: "No Valid License",
                desc: "Damages while driving without a valid license will not be covered.",
              },
              {
                title: "Illegal Usage",
                desc: "Insurance is void if the car is used for unlawful activities.",
              },
              {
                title: "Regular Wear & Tear",
                desc: "Normal depreciation, wear, and oil leakage aren’t included.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition"
              >
                <AlertTriangle className="w-8 h-8 text-blue-600" />
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#00001a] rounded-2xl shadow-md p-12 text-center text-white mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Protect Your Drive Today
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            With Arshyan Car Insurance, safeguard your{" "}
            <span className="font-semibold">vehicle and financial security</span>{" "}
            while driving with confidence.
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
          className="rounded-2xl p-10"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          {[
            {
              question: "Is car insurance mandatory in India?",
              answer:
                "Yes, third-party car insurance is mandatory as per Indian law. Comprehensive insurance is optional but recommended.",
            },
            {
              question: "What type of insurance should I buy?",
              answer:
                "If you want protection for both your own car and third-party damages, opt for comprehensive insurance. Otherwise, third-party insurance suffices.",
            },
            {
              question: "Can I get cashless repairs?",
              answer:
                "Yes, visit any authorized partner garage and enjoy cashless repair services.",
            },
            {
              question: "What is not covered under car insurance?",
              answer:
                "Damages from drunk driving, driving without a license, illegal usage, or regular wear & tear are not covered.",
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

export default CarInsurance;
