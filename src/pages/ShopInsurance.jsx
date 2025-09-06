import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const ShopInsurance = () => {
  return (
    <div className="bg-blue-50 min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <img
            src={assets.shop}
            alt="Shop Insurance"
            className="w-full h-full object-cover rounded-2xl shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Shop Insurance
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your shop is your livelihood. Arshyan Insurance’s Shop Insurance
            Policy protects your retail business from unexpected risks, ensuring
            peace of mind.
          </p>
        </motion.section>

        {/* Coverage Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Coverage Highlights
          </h2>
          <p className="text-gray-600 mb-4">
            Our Shop Insurance Policy provides comprehensive protection for your
            retail business, covering property, inventory, and liabilities:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Fire and Allied Perils:</strong> Covers damage from fire,
              explosions, lightning, storms, and floods.
            </li>
            <li>
              <strong>Burglary and Theft:</strong> Protects stock and assets
              against burglary and armed robbery.
            </li>
            <li>
              <strong>Damage to Property:</strong> Covers furniture, fixtures,
              equipment, and electronics.
            </li>
            <li>
              <strong>Business Interruption:</strong> Compensates for lost income
              due to temporary closures.
            </li>
          </ul>
        </motion.section>

        {/* Additional Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Additional Benefits
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Third-party liability coverage for customer or visitor injuries.
            </li>
            <li>
              Optional employee coverage for workplace accidents or injuries.
            </li>
            <li>
              Stock insurance for inventory loss due to fire or theft.
            </li>
            <li>
              Glass breakage coverage for shop windows and display units.
            </li>
          </ul>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Arshyan Insurance?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Affordable premiums designed for shop owners.</li>
            <li>
              Customizable options for retail, restaurants, or service-based
              stores.
            </li>
            <li>Quick claim settlements to minimize business downtime.</li>
            <li>
              All-in-one protection covering multiple risks in a single policy.
            </li>
          </ul>
        </motion.section>

        {/* Additional Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Additional Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Fire safety coverage for fire extinguishing expenses.</li>
            <li>Loss of rent coverage for temporary relocation costs.</li>
            <li>
              Natural disaster coverage for earthquakes, floods, and landslides.
            </li>
            <li>
              Money insurance for cash lost in transit or on premises.
            </li>
          </ul>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Secure Your Business
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Arshyan Insurance’s Shop Insurance Policy ensures your retail
            business is protected from property damage, theft, and liabilities.
            Safeguard your livelihood with comprehensive coverage.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="inline-block bg-blue-600 text-white px-10 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Get Started Today
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ShopInsurance;
