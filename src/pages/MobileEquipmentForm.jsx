import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Form = () => {
  const [formData, setFormData] = useState({
    dateOfPurchase: '',
    insuredMobileNumber: '',
    insuredEmailId: '',
    correspondenceAddress: '',
    nameOfStore: '',
    equipment: '',
    mobile: '',
    nameOfEquipment: '',
    equipmentBrandModel: '',
    equipmentSerialNumber: '',
    valueOfEquipment: '',
    premium1Year: '',
    premium2Year: '',
    premium3Year: '',
    aadhaarCard: null,
    purchaseInvoice: null,
    insurancePaymentReceipt: null,
  });

  const premiumData = {
    '0-19999': { '1': 2000, '2': 3850, '3': 5875 },
    '20000-29999': { '1': 2350, '2': 4250, '3': 6099 },
    '30000-34999': { '1': 2500, '2': 4750, '3': 6599 },
    '35000-49999': { '1': 2800, '2': 5099, '3': 7299 },
    '50000-74999': { '1': 4250, '2': 6999, '3': 8999 },
    '75000-99999': { '1': 4998, '2': 8599, '3': 10999 },
    '100000-124999': { '1': 5546, '2': 10546, '3': 15650 },
    '125000-149999': { '1': 6195, '2': 11999, '3': 16999 },
    '150000-199999': { '1': 8999, '2': 16449, '3': 25999 },
    '200000-250000': { '1': 10999, '2': 19999, '3': 30999 },
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    if (name === 'valueOfEquipment') {
      calculatePremium(value);
    }
  };

  const calculatePremium = (value) => {
    const numValue = parseInt(value) || 0;
    let selectedRange = null;

    for (const range in premiumData) {
      const [min, max] = range.split('-').map(Number);
      if (numValue >= min && (max === undefined || numValue <= max)) {
        selectedRange = range;
        break;
      }
    }

    if (selectedRange) {
      setFormData((prev) => ({
        ...prev,
        premium1Year: premiumData[selectedRange]['1'],
        premium2Year: premiumData[selectedRange]['2'],
        premium3Year: premiumData[selectedRange]['3'],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        premium1Year: '',
        premium2Year: '',
        premium3Year: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-blue-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Insurance Form</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Please fill out the details to get your insurance quote.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="dateOfPurchase" className="block text-sm font-medium text-gray-700">
                Date of Purchase *
              </label>
              <input
                type="date"
                id="dateOfPurchase"
                name="dateOfPurchase"
                value={formData.dateOfPurchase}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="insuredMobileNumber" className="block text-sm font-medium text-gray-700">
                Insured Mobile Number *
              </label>
              <input
                type="tel"
                id="insuredMobileNumber"
                name="insuredMobileNumber"
                value={formData.insuredMobileNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="e.g., +919876543210"
                required
              />
            </div>

            <div>
              <label htmlFor="insuredEmailId" className="block text-sm font-medium text-gray-700">
                Insured Email ID *
              </label>
              <input
                type="email"
                id="insuredEmailId"
                name="insuredEmailId"
                value={formData.insuredEmailId}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="e.g., your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="correspondenceAddress" className="block text-sm font-medium text-gray-700">
                Correspondence Address *
              </label>
              <textarea
                id="correspondenceAddress"
                name="correspondenceAddress"
                value={formData.correspondenceAddress}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your address"
                required
              />
            </div>

            <div>
              <label htmlFor="nameOfStore" className="block text-sm font-medium text-gray-700">
                Name of Store / Outlet *
              </label>
              <input
                type="text"
                id="nameOfStore"
                name="nameOfStore"
                value={formData.nameOfStore}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="e.g., Store Name"
                required
              />
            </div>

            <div>
              <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">
                Equipment *
              </label>
              <select
                id="equipment"
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              >
                <option value="">Select Equipment</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>

            {formData.equipment === 'Mobile' && (
              <>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                    Mobile
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="e.g., Model Name"
                  />
                </div>
                <div>
                  <label htmlFor="nameOfEquipment" className="block text-sm font-medium text-gray-700">
                    Name of Equipment if not in list
                  </label>
                  <input
                    type="text"
                    id="nameOfEquipment"
                    name="nameOfEquipment"
                    value={formData.nameOfEquipment}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="e.g., Custom Equipment"
                  />
                </div>
              </>
            )}

            <div>
              <label htmlFor="equipmentBrandModel" className="block text-sm font-medium text-gray-700">
                Equipment Brand and Model *
              </label>
              <input
                type="text"
                id="equipmentBrandModel"
                name="equipmentBrandModel"
                value={formData.equipmentBrandModel}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="e.g., Apple iPhone 14"
                required
              />
            </div>

            <div>
              <label htmlFor="equipmentSerialNumber" className="block text-sm font-medium text-gray-700">
                Equipment Serial Number / IMEI Number *
              </label>
              <input
                type="text"
                id="equipmentSerialNumber"
                name="equipmentSerialNumber"
                value={formData.equipmentSerialNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="e.g., 123456789012345"
                required
              />
            </div>

            <div>
              <label htmlFor="valueOfEquipment" className="block text-sm font-medium text-gray-700">
                Value of Equipment *
              </label>
              <input
                type="number"
                id="valueOfEquipment"
                name="valueOfEquipment"
                value={formData.valueOfEquipment}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="e.g., 15000"
                required
              />
            </div>

            <div>
              <label htmlFor="premium1Year" className="block text-sm font-medium text-gray-700">
                Insurance Premium Including GST - For 1 Year
              </label>
              <input
                type="text"
                id="premium1Year"
                name="premium1Year"
                value={formData.premium1Year || 'Please select'}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100"
              />
            </div>

            <div>
              <label htmlFor="premium2Year" className="block text-sm font-medium text-gray-700">
                Insurance Premium Including GST - For 2 Years
              </label>
              <input
                type="text"
                id="premium2Year"
                name="premium2Year"
                value={formData.premium2Year || 'Please select'}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100"
              />
            </div>

            <div>
              <label htmlFor="premium3Year" className="block text-sm font-medium text-gray-700">
                Insurance Premium Including GST - For 3 Years
              </label>
              <input
                type="text"
                id="premium3Year"
                name="premium3Year"
                value={formData.premium3Year || 'Please select'}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100"
              />
            </div>

            <div>
              <label htmlFor="aadhaarCard" className="block text-sm font-medium text-gray-700">
                Upload Aadhaar Card *
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <p className="text-sm text-gray-600">Drop your file here or click here to upload</p>
                  <p className="text-xs text-gray-500">You can upload up to 1 files.</p>
                  <input
                    type="file"
                    id="aadhaarCard"
                    name="aadhaarCard"
                    onChange={handleChange}
                    className="mt-2"
                    accept="image/*,application/pdf"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="purchaseInvoice" className="block text-sm font-medium text-gray-700">
                Purchase Invoice *
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <p className="text-sm text-gray-600">Drop your file here or click here to upload</p>
                  <p className="text-xs text-gray-500">You can upload up to 1 files.</p>
                  <input
                    type="file"
                    id="purchaseInvoice"
                    name="purchaseInvoice"
                    onChange={handleChange}
                    className="mt-2"
                    accept="image/*,application/pdf"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="insurancePaymentReceipt" className="block text-sm font-medium text-gray-700">
                Insurance Payment Receipt
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <p className="text-sm text-gray-600">Drop your file here or click here to upload</p>
                  <p className="text-xs text-gray-500">You can upload up to 1 files.</p>
                  <input
                    type="file"
                    id="insurancePaymentReceipt"
                    name="insurancePaymentReceipt"
                    onChange={handleChange}
                    className="mt-2"
                    accept="image/*,application/pdf"
                  />
                </div>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                type="submit"
                className="w-full bg-[#00001a] text-white px-4 py-2 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </motion.div>
          </form>
        </motion.section>
      </div>
    </div>
  );
};

export default Form;