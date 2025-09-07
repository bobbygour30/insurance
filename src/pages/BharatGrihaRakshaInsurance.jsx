import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const BharatGrihaRakshaInsurance = () => {
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
            src={assets.home}
            alt="Bharat Griha Raksha Insurance"
            className="w-full h-full object-cover rounded-2xl shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Bharat Griha Raksha (Home Insurance Policy)
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your home is more than just a structure; it’s a place filled with
            memories, comfort, and security. At Arshyan Insurance, our Bharat
            Griha Raksha (Home Insurance Policy) offers comprehensive protection
            for your home and its contents against unexpected events, ensuring
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
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Fire and Allied Perils:</strong> Protection against damages
              caused by fire, lightning, explosion, and other fire-related perils.
            </li>
            <li>
              <strong>Natural Calamities:</strong> Coverage for loss or damage
              due to natural disasters like floods, earthquakes, storms,
              cyclones, and landslides.
            </li>
            <li>
              <strong>Burglary and Theft:</strong> Safeguard your home against
              losses due to burglary or theft of valuable contents, including
              furniture, electronics, and personal belongings.
            </li>
            <li>
              <strong>Damage to Contents:</strong> Covers loss or damage to
              household items, furniture, and appliances due to fire, burglary,
              or other insured perils.
            </li>
            <li>
              <strong>Accidental Damage:</strong> Provides coverage for
              accidental damage to your home and its contents, such as damage to
              fixtures and fittings.
            </li>
          </ul>
        </motion.section>

        {/* Policy Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Policy Benefits
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Affordable Premiums:</strong> Extensive protection at
              budget-friendly premiums.
            </li>
            <li>
              <strong>Alternate Accommodation Expenses:</strong> If your home
              becomes uninhabitable, the policy covers temporary accommodation.
            </li>
            <li>
              <strong>Customizable Add-ons:</strong> Tailor your policy with
              add-ons for valuable items, appliances, and jewelry.
            </li>
            <li>
              <strong>Liability Coverage:</strong> Protection against
              third-party liabilities arising from accidents at home.
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
            <li>
              <strong>Comprehensive Protection:</strong> Wide coverage for both
              home and contents.
            </li>
            <li>
              <strong>Hassle-free Claims:</strong> Smooth, transparent, and
              quick settlements.
            </li>
            <li>
              <strong>Flexible Coverage:</strong> Customize the policy to match
              your needs.
            </li>
            <li>
              <strong>Expert Support:</strong> Assistance from our experienced
              team at every step.
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
            <li>
              <strong>Protection for Structure and Contents:</strong> Both under
              one policy.
            </li>
            <li>
              <strong>Firefighting Expenses:</strong> Coverage for costs
              incurred while controlling a fire.
            </li>
            <li>
              <strong>Lost Rent Coverage:</strong> Reimbursement for rental
              income lost due to an insured peril.
            </li>
            <li>
              <strong>Home Repairs:</strong> Coverage for repairs after damages
              from insured events like fire, flood, or theft.
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
            Secure Your Dream Home
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            With the Bharat Griha Raksha (Home Insurance Policy) from Arshyan
            Insurance, you can ensure your home and everything inside it is
            well-protected from life’s uncertainties. Invest in peace of mind
            today with a policy that truly covers what matters most to you.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/get-quote"
              className="inline-block bg-[#00001a] text-white px-10 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Get Started Today
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default BharatGrihaRakshaInsurance;
