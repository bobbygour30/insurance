import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const AllRiskInsurance = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <img
            src={assets.group}
            alt="All Risk/Group Affinity Insurance Banner"
            className="w-full h-full object-cover rounded-2xl shadow-lg mb-8 bg-[#FFFFFF] p-10"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00001a] mb-6">
            All Risk / Group Affinity Insurance
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive protection designed for{" "}
            <span className="text-blue-600 font-semibold">
              groups, businesses, and organizations
            </span>
            — covering assets, liabilities, and unforeseen risks under one
            customizable policy.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/get-quote"
              className="mt-8 inline-block bg-[#00001a] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Coverage Highlights */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl p-10 mb-16 bg-white shadow"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-8 text-center">
            Coverage Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "All Risk Coverage",
                desc: "Protection against fire, theft, accidental damage, and natural disasters.",
              },
              {
                title: "Group Affinity Benefits",
                desc: "Tailored coverage for organizations, businesses, or communities.",
              },
              {
                title: "Accidental Damage",
                desc: "Covers loss or damage during use, transit, or storage.",
              },
              {
                title: "Natural Calamities",
                desc: "Protection against floods, earthquakes, storms, and cyclones.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[#00001a] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Who Can Benefit */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-2xl p-10 mb-16 bg-gray-50"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-8 text-center">
            Who Can Benefit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                type: "Corporates & Employers",
                details:
                  "Covers employees, health, accidental injuries, and company property.",
              },
              {
                type: "Associations & Unions",
                details:
                  "Protection for members against personal accidents and property damage.",
              },
              {
                type: "Educational Institutions",
                details:
                  "Covers staff, students, and campus assets for uninterrupted operations.",
              },
            ].map((group, index) => (
              <motion.div
                key={group.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow p-6 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-[#00001a] mb-2">
                  {group.type}
                </h3>
                <p className="text-gray-600">{group.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Policy Benefits */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-2xl p-10 mb-16 bg-white shadow"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-8 text-center">
            Policy Benefits
          </h2>
          <ul className="text-gray-600 space-y-3 max-w-3xl mx-auto list-disc list-inside">
            {[
              "Comprehensive asset protection for equipment, property, and more.",
              "Customizable coverage for groups, employees, or assets.",
              "Cost-effective premiums through group coverage.",
              "Worldwide protection for assets, both domestically and internationally.",
            ].map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="rounded-2xl p-10 mb-16 bg-gray-50"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-8 text-center">
            Why Choose Arshyan Insurance?
          </h2>
          <ul className="text-gray-600 space-y-3 max-w-3xl mx-auto list-disc list-inside">
            {[
              "Tailored solutions for groups with specific risk profiles.",
              "Complete risk management to minimize exposure to losses.",
              "Efficient claims process with fast, transparent settlements.",
              "Additional group benefits like wellness programs and maintenance coverage.",
            ].map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </motion.section>

        {/* Additional Features */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-2xl p-10 mb-16 bg-white shadow"
        >
          <h2 className="text-3xl font-bold text-[#00001a] mb-8 text-center">
            Additional Features
          </h2>
          <ul className="text-gray-600 space-y-3 max-w-3xl mx-auto list-disc list-inside">
            {[
              "Coverage for portable equipment like laptops and tablets.",
              "Liability protection for third-party claims from accidental injury or damage.",
              "Flexible extensions for high-risk areas like machinery or vehicles.",
            ].map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-[#00001a] rounded-2xl shadow-md p-12 text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Safeguard What Matters
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Protect your people, property, and peace of mind with{" "}
            <span className="font-semibold">Arshyan Insurance</span> — designed
            to meet the unique needs of your group or organization.
          </p>
          <Link
            to="/get-quote"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Get Started Today
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default AllRiskInsurance;
