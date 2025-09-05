import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const MarineInsurance = () => {
  const [activeClause, setActiveClause] = useState('A');

  const clauses = {
    A: {
      title: 'Institute Cargo Clause - ICC (A)',
      coverage: [
        'Fire or explosion',
        'Derailment of shipping vehicle on road',
        'Vessel being stranded, grounded, capsized or sunk',
        'Overturning or derailment of land conveyance',
        'Collision or contact of vessel craft with external object (other than water)',
        'Discharge of cargo at the distress port',
        'Earthquake, volcanic eruption or lightning',
        'Theft, piracy',
        'Pilferage',
        'Non-delivery',
        'Rough handling',
        'General average',
        'Jettison – intentional throwing overboard of cargo or ship parts to save the ship or cargo',
        'Entry of sea, river, or lake water into the vessel',
        'Total loss of package lost overboard or dropped whilst loading or unloading from vessel',
      ],
      exclusions: [
        'Loss caused by willful misconduct of the insured',
        'Ordinary leakage, wear and tear',
        'Loss caused by inherent vice or nature of the subject matter (e.g., perishable commodities like fruits, vegetables)',
        'Loss caused by delay, even if caused by an insured risk',
        'Loss arising from insolvency or financial default of vessel owners, operators, etc.',
        'Loss or damage due to inadequate packing',
        'War peril (can be covered with extra premium)',
        'Strikes, riots, lock-out, civil commotions, and terrorism (SRCC) (can be covered with extra premium)',
        'Deliberate damage by wrongful act (malicious damage) is automatically covered under ICC (A)',
      ],
    },
    B: {
      title: 'Institute Cargo Clause - ICC (B)',
      coverage: [
        'Fire or explosion',
        'Derailment of shipping vehicle on road',
        'Vessel being stranded, grounded, capsized or sunk',
        'Overturning or derailment of land conveyance',
        'Collision or contact of vessel craft with external object (other than water)',
        'Discharge of cargo at the distress port',
        'General average',
        'Jettison – intentional throwing overboard of cargo or ship parts to save the ship or cargo',
        'Entry of sea, river, or lake water into the vessel',
        'Total loss of package lost overboard or dropped whilst loading or unloading from vessel',
      ],
      exclusions: [
        'Loss caused by willful misconduct of the insured',
        'Ordinary leakage, wear and tear',
        'Loss caused by inherent vice or nature of the subject matter (e.g., perishable commodities like fruits, vegetables)',
        'Loss caused by delay, even if caused by an insured risk',
        'Deliberate damage by wrongful act (malicious damage) (can be covered with extra premium)',
        'Loss arising from insolvency or financial default of vessel owners, operators, etc.',
        'Loss or damage due to inadequate packing',
        'War peril (can be covered with extra premium)',
        'Strikes, riots, lock-out, civil commotions, and terrorism (SRCC) (can be covered with extra premium)',
      ],
    },
    C: {
      title: 'Institute Cargo Clause - ICC (C)',
      coverage: [
        'Fire or explosion',
        'Derailment of shipping vehicle on road',
        'Vessel being stranded, grounded, capsized or sunk',
        'Overturning or derailment of land conveyance',
        'Collision or contact of vessel craft with external object (other than water)',
        'Discharge of cargo at the distress port',
        'General average',
        'Jettison – intentional throwing overboard of cargo or ship parts to save the ship or cargo',
      ],
      exclusions: [
        'Loss caused by willful misconduct of the insured',
        'Ordinary leakage, wear and tear',
        'Loss caused by inherent vice or nature of the subject matter (e.g., perishable commodities like fruits, vegetables)',
        'Loss caused by delay, even if caused by an insured risk',
        'Deliberate damage by wrongful act (malicious damage) (can be covered with extra premium)',
        'Loss arising from insolvency or financial default of vessel owners, operators, etc.',
        'Loss or damage due to inadequate packing',
        'War peril (can be covered with extra premium)',
        'Strikes, riots, lock-out, civil commotions, and terrorism (SRCC) (can be covered with extra premium)',
      ],
    },
  };

  return (
    <div className="bg-blue-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <img
            src={assets.marine}
            alt="Marine Insurance Banner"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Arshyan Marine Insurance</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Protect your cargo, vessels, and logistics operations with Arshyan Marine Insurance, covering transit by sea, air, or land.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Marine Quote
            </Link>
          </motion.div>
        </motion.section>

        {/* Marine Insurance Overview */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Understanding Marine Insurance
          </h2>
          <p className="text-base text-gray-600 mb-4 text-center">
            Marine insurance, offered by Arshyan Insurance Services, includes Marine Hull Insurance for vessels and Marine Cargo Insurance for goods in transit. It covers risks during sea, air, or land transport, ensuring protection for your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Marine Hull Insurance', desc: 'Covers vessels and ships against damage or loss.' },
              { title: 'Marine Cargo Insurance', desc: 'Protects goods during transit by sea, air, or land.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <TruckIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Institute Cargo Clauses Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Institute Cargo Clauses
          </h2>
          <div className="flex justify-center space-x-4 mb-6">
            {['A', 'B', 'C'].map((clause) => (
              <button
                key={clause}
                onClick={() => setActiveClause(clause)}
                className={`px-4 py-2 rounded-md text-base font-semibold transition duration-300 ${
                  activeClause === clause ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                ICC ({clause})
              </button>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{clauses[activeClause].title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-base font-semibold text-gray-800 mb-2">Covered Risks</h4>
                <ul className="text-base text-gray-600 space-y-2">
                  {clauses[activeClause].coverage.map((item) => (
                    <li key={item} className="flex items-center">
                      <TruckIcon className="h-6 w-6 text-blue-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-800 mb-2">General Exclusions</h4>
                <ul className="text-base text-gray-600 space-y-2">
                  {clauses[activeClause].exclusions.map((item) => (
                    <li key={item} className="flex items-center">
                      <TruckIcon className="h-6 w-6 text-blue-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Types of Marine Insurance Policies */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Types of Marine Insurance Policies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Open Cover', desc: 'Covers all marine transits for export or import during a 12-month period.' },
              { title: 'Specific Voyage Policy', desc: 'Customized coverage for specific voyages based on duration and route.' },
              { title: 'Open Policy (Floating Policy)', desc: 'Covers all shipments within its scope for a set period, with declarations reducing the sum insured.' },
              { title: 'Sales Turn Over Policy (STOP)', desc: 'Seamless coverage for raw materials, semi-finished, and finished products from purchase to final destination, charged based on sales turnover.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start">
                <TruckIcon className="h-8 w-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Claim Process Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Document Checklist for Claim Settlement
          </h2>
          <p className="text-base text-gray-600 mb-4 text-center">
            To process a marine insurance claim, please provide the following documents:
          </p>
          <ul className="text-base text-gray-600 space-y-2">
            {[
              'Intimation to the Insurance company',
              'The original policy or certificate of insurance',
              'Bill of Lading: Evidence that goods were shipped, including cargo particulars',
              'Invoice: Evidences the terms of sale',
              'Survey Report',
              'Copy of Protest: Required if loss or damage is caused by a sea peril',
              'Letter of Subrogation: Transfers claimant rights against a third party to insurers',
              'Ship survey report, lost overboard certificate, or short landing certificate for cargo lost during loading/unloading',
              'Bill of entry',
            ].map((item) => (
              <li key={item} className="flex items-center">
                <TruckIcon className="h-6 w-6 text-blue-600 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Call-to-Action Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-white rounded-lg shadow-md p-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Protect Your Shipments
          </h2>
          <p className="text-base text-gray-600 mb-6">
            With Arshyan Marine Insurance, ensure the safety of your cargo and vessels during transit. Get covered today!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/quote"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default MarineInsurance;