import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    nameOfInsured: "",
    dateOfPurchase: "",
    insuredMobileNumber: "",
    insuredEmailId: "",
    correspondenceAddress: "",
    nameOfStore: "",
    equipment: "",
    mobile: "",
    nameOfEquipment: "",
    equipmentBrandModel: "",
    equipmentSerialNumber: "",
    valueOfEquipment: "",
    selectedPeriod: "",
    insurancePremium: "",
    aadhaarCard: null,
    purchaseInvoice: null,
    insurancePaymentReceipt: null,
    imeiImage: null,
  });
  const [showUploadSection, setShowUploadSection] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const [fileSizeError, setFileSizeError] = useState(null);
  const [errorDetails, setErrorDetails] = useState(null);

  const premiumData = {
    "0-19999": { 1: 2000, 2: 3850, 3: 5875 },
    "20000-29999": { 1: 2350, 2: 4250, 3: 6099 },
    "30000-34999": { 1: 2500, 2: 4750, 3: 6599 },
    "35000-49999": { 1: 2800, 2: 5099, 3: 7299 },
    "50000-74999": { 1: 4250, 2: 6999, 3: 8999 },
    "75000-99999": { 1: 4998, 2: 8599, 3: 10999 },
    "100000-124999": { 1: 5546, 2: 10546, 3: 15650 },
    "125000-149999": { 1: 6195, 2: 11999, 3: 16999 },
    "150000-199999": { 1: 8999, 2: 16449, 3: 25999 },
    "200000-250000": { 1: 10999, 2: 19999, 3: 30999 },
  };

  const insuranceInfo = `
Arshyan Insurance Marketing & Services Private Limited
- Families Insured: 0+
- Claim Settlement: 0%
- Years of Trusted Service: 0+
Key Offerings:
- Health, Life, Motor, Travel, and Business Insurance
- Consultancy Fee: 5k–30k INR
Get a Free Quote: Visit our website or contact us!
`;

  useEffect(() => {
    emailjs.init("SI_DkM7ROXjm3pbnI");

    if (formData.dateOfPurchase) {
      const purchaseDate = new Date(formData.dateOfPurchase);
      const currentDate = new Date();

      purchaseDate.setHours(0, 0, 0, 0);
      currentDate.setHours(0, 0, 0, 0);

      const differenceInTime = currentDate.getTime() - purchaseDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      setShowUploadSection(differenceInDays > 30);
    }
  }, [formData.dateOfPurchase]);

  const sanitizeInput = (value) => {
    if (!value) return "";
    return String(value)
      .replace(/[^\w\s@.-]/g, "")
      .substring(0, 500);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      if (file && file.size > 5 * 1024 * 1024) {
        setFileSizeError(`File ${file.name} is too large. Maximum size is 5MB.`);
        return;
      }
      setFileSizeError(null);
    }
    const updatedFormData = {
      ...formData,
      [name]: files ? files[0] : sanitizeInput(value),
    };
    setFormData(updatedFormData);

    if (name === "valueOfEquipment" || name === "selectedPeriod") {
      calculatePremium(updatedFormData.valueOfEquipment, updatedFormData.selectedPeriod);
    }
  };

  const calculatePremium = (valueOfEquipment, selectedPeriod) => {
    const numValue = parseInt(valueOfEquipment) || 0;
    let selectedRange = null;

    for (const range in premiumData) {
      const [min, max] = range.split("-").map(Number);
      if (numValue >= min && (max === undefined || numValue <= max)) {
        selectedRange = range;
        break;
      }
    }

    if (selectedRange && selectedPeriod) {
      setFormData((prev) => ({
        ...prev,
        insurancePremium: premiumData[selectedRange][selectedPeriod],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        insurancePremium: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFileSizeError(null);
    setSendStatus(null);
    setErrorDetails(null);

    let aadhaarCardUrl = "";
    let purchaseInvoiceUrl = "";
    let insurancePaymentReceiptUrl = "";
    let imeiImageUrl = "";

    const uploadFile = async (file, fileName) => {
      if (!file) return "";
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "insurance_uploads");
      formData.append("public_id", `insurance_${Date.now()}_${sanitizeInput(fileName)}`);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dkn28xbes/upload`,
          formData
        );
        return response.data.secure_url || "";
      } catch (error) {
        console.error(`Error uploading ${fileName}:`, error);
        throw error;
      }
    };

    try {
      if (formData.aadhaarCard) {
        aadhaarCardUrl = await uploadFile(formData.aadhaarCard, formData.aadhaarCard.name);
      }
      if (formData.purchaseInvoice) {
        purchaseInvoiceUrl = await uploadFile(formData.purchaseInvoice, formData.purchaseInvoice.name);
      }
      if (formData.insurancePaymentReceipt) {
        insurancePaymentReceiptUrl = await uploadFile(formData.insurancePaymentReceipt, formData.insurancePaymentReceipt.name);
      }
      if (formData.imeiImage) {
        imeiImageUrl = await uploadFile(formData.imeiImage, formData.imeiImage.name);
      }

      const templateParams = {
        name: sanitizeInput(formData.nameOfInsured) || "Not provided", // Added for {{name}}
        nameOfInsured: sanitizeInput(formData.nameOfInsured) || "Not provided",
        dateOfPurchase: sanitizeInput(formData.dateOfPurchase) || "Not provided",
        insuredMobileNumber: sanitizeInput(formData.insuredMobileNumber) || "Not provided",
        insuredEmailId: sanitizeInput(formData.insuredEmailId) || "Not provided",
        correspondenceAddress: sanitizeInput(formData.correspondenceAddress) || "Not provided",
        nameOfStore: sanitizeInput(formData.nameOfStore) || "Not provided",
        equipment: sanitizeInput(formData.equipment) || "Not provided",
        mobile: sanitizeInput(formData.mobile) || "Not provided",
        nameOfEquipment: sanitizeInput(formData.nameOfEquipment) || "Not provided",
        equipmentBrandModel: sanitizeInput(formData.equipmentBrandModel) || "Not provided",
        equipmentSerialNumber: sanitizeInput(formData.equipmentSerialNumber) || "Not provided",
        valueOfEquipment: sanitizeInput(formData.valueOfEquipment) || "Not provided",
        selectedPeriod: sanitizeInput(formData.selectedPeriod) || "Not provided",
        insurancePremium: formData.insurancePremium
          ? `₹ ${sanitizeInput(formData.insurancePremium)}`
          : "Not calculated",
        aadhaarCard: aadhaarCardUrl || "Not uploaded",
        aadhaarCardName: formData.aadhaarCard ? sanitizeInput(formData.aadhaarCard.name) : "Not uploaded",
        purchaseInvoice: purchaseInvoiceUrl || "Not uploaded",
        purchaseInvoiceName: formData.purchaseInvoice ? sanitizeInput(formData.purchaseInvoice.name) : "Not uploaded",
        insurancePaymentReceipt: insurancePaymentReceiptUrl || "Not uploaded",
        insurancePaymentReceiptName: formData.insurancePaymentReceipt
          ? sanitizeInput(formData.insurancePaymentReceipt.name)
          : "Not uploaded",
        imeiImage: imeiImageUrl || "Not uploaded",
        imeiImageName: formData.imeiImage ? sanitizeInput(formData.imeiImage.name) : "Not uploaded",
        insurance_info: insuranceInfo,
      };

      console.log("templateParams:", JSON.stringify(templateParams, null, 2));

      const response = await emailjs.send(
        "service_dxkt4ga",
        "template_67i33ab",
        templateParams
      );
      console.log("EmailJS response:", response);

      setSendStatus("success");
      setFormData({
        nameOfInsured: "",
        dateOfPurchase: "",
        insuredMobileNumber: "",
        insuredEmailId: "",
        correspondenceAddress: "",
        nameOfStore: "",
        equipment: "",
        mobile: "",
        nameOfEquipment: "",
        equipmentBrandModel: "",
        equipmentSerialNumber: "",
        valueOfEquipment: "",
        selectedPeriod: "",
        insurancePremium: "",
        aadhaarCard: null,
        purchaseInvoice: null,
        insurancePaymentReceipt: null,
        imeiImage: null,
      });
      setIsSending(false);
    } catch (error) {
      console.error("Error uploading files or sending email:", error);
      setErrorDetails(error.text || error.message || "Unknown error");
      setSendStatus("error");
      setIsSending(false);
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Insurance Form
          </h1>
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
              <label
                htmlFor="nameOfInsured"
                className="block text-sm font-medium text-gray-700"
              >
                Name of Insured *
              </label>
              <input
                type="text"
                id="nameOfInsured"
                name="nameOfInsured"
                value={formData.nameOfInsured}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="e.g., Rahul Kumar"
                required
              />
            </div>

            <div>
              <label
                htmlFor="dateOfPurchase"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="insuredMobileNumber"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="insuredEmailId"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="correspondenceAddress"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="nameOfStore"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="equipment"
                className="block text-sm font-medium text-gray-700"
              >
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
                <option value="Camera">Camera</option>
                <option value="Laptop">Laptop</option>
                <option value="I-Pad">I-Pad</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {formData.equipment === "Mobile" && (
              <>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="nameOfEquipment"
                    className="block text-sm font-medium text-gray-700"
                  >
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
              <label
                htmlFor="equipmentBrandModel"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="equipmentSerialNumber"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="valueOfEquipment"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="selectedPeriod"
                className="block text-sm font-medium text-gray-700"
              >
                Period *
              </label>
              <select
                id="selectedPeriod"
                name="selectedPeriod"
                value={formData.selectedPeriod}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              >
                <option value="">Select Period</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="insurancePremium"
                className="block text-sm font-medium text-gray-700"
              >
                Insurance Premium Including GST
              </label>
              <input
                type="text"
                id="insurancePremium"
                name="insurancePremium"
                value={
                  formData.insurancePremium
                    ? `₹ ${formData.insurancePremium}`
                    : "Please select value and period"
                }
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50 hover:bg-gray-100 transition">
                <div className="flex flex-col items-center space-y-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6h.1a5 5 0 010 10H7z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Aadhaar Card *
                  </span>
                  <p className="text-xs text-gray-500 text-center">
                    Upload PDF / Image (max 5MB)
                  </p>
                  {formData.aadhaarCard && (
                    <p className="text-xs text-gray-700">
                      Selected: {formData.aadhaarCard.name}
                    </p>
                  )}
                </div>
                <input
                  type="file"
                  name="aadhaarCard"
                  onChange={handleChange}
                  accept="image/*,application/pdf"
                  className="hidden"
                  required
                />
              </label>

              <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50 hover:bg-gray-100 transition">
                <div className="flex flex-col items-center space-y-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0-1.104.896-2 2-2s2 .896 2 2v5a2 2 0 01-2 2H8v-1h4v-1H8V9h6v2H8v1h4v1H8v1h4v1H8v1H8v1h6a1 1 0 001-1v-5z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Purchase Invoice *
                  </span>
                  <p className="text-xs text-gray-500 text-center">
                    Upload PDF / Image (max 5MB)
                  </p>
                  {formData.purchaseInvoice && (
                    <p className="text-xs text-gray-700">
                      Selected: {formData.purchaseInvoice.name}
                    </p>
                  )}
                </div>
                <input
                  type="file"
                  name="purchaseInvoice"
                  onChange={handleChange}
                  accept="image/*,application/pdf"
                  className="hidden"
                  required
                />
              </label>

              <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50 hover:bg-gray-100 transition">
                <div className="flex flex-col items-center space-y-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">
                    Payment Receipt
                  </span>
                  <p className="text-xs text-gray-500 text-center">
                    Upload PDF / Image (max 5MB, optional)
                  </p>
                  {formData.insurancePaymentReceipt && (
                    <p className="text-xs text-gray-700">
                      Selected: {formData.insurancePaymentReceipt.name}
                    </p>
                  )}
                </div>
                <input
                  type="file"
                  name="insurancePaymentReceipt"
                  onChange={handleChange}
                  accept="image/*,application/pdf"
                  className="hidden"
                />
              </label>
            </div>

            {showUploadSection && (
              <div className="grid grid-cols-1 gap-6 mt-6">
                <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50 hover:bg-gray-100 transition">
                  <div className="flex flex-col items-center space-y-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">
                      IMEI Image
                    </span>
                    <p className="text-xs text-gray-500 text-center">
                      Upload PDF / Image (max 5MB, optional)
                    </p>
                    {formData.imeiImage && (
                      <p className="text-xs text-gray-700">
                        Selected: {formData.imeiImage.name}
                      </p>
                    )}
                  </div>
                  <input
                    type="file"
                    name="imeiImage"
                    onChange={handleChange}
                    accept="image/*,application/pdf"
                    className="hidden"
                  />
                </label>
              </div>
            )}

            {fileSizeError && (
              <p className="text-red-600 mt-2 text-center">{fileSizeError}</p>
            )}
            {errorDetails && (
              <p className="text-red-600 mt-2 text-center">
                Error: {errorDetails}
              </p>
            )}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                type="submit"
                disabled={isSending || fileSizeError}
                className={`w-full bg-[#00001a] text-white px-4 py-2 rounded-md text-base font-semibold hover:bg-blue-700 transition duration-300 ${
                  isSending || fileSizeError ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSending ? "Submitting..." : "Submit"}
              </button>
            </motion.div>
            {sendStatus === "success" && (
              <p className="text-green-600 mt-2 text-center">
                Form submitted successfully! Check your email for the documents.
              </p>
            )}
            {sendStatus === "error" && (
              <p className="text-red-600 mt-2 text-center">
                Failed to submit form. Please check your input and try again.
              </p>
            )}
          </form>
        </motion.section>
      </div>
    </div>
  );
};

export default Form;