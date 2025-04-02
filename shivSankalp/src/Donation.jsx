import React, { useState, useRef } from "react";
import signUpImg from "/Images/samb.jpg";
import banner from "/Images/banner.jpg";
import "../src/Styles/pages.css";

const DonationPage = ({ language }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });
  const programs = [
    { id: 1, marathi: "कचरा व्यवस्थापन", english: "Waste Management" },
    { id: 2, marathi: "आरोग्य तपासणी शिबिर", english: "Health Check-up Camp" },
    {
      id: 3,
      marathi: "ऐतिहासिक शस्त्र प्रदर्शन",
      english: "Historical Weapon Exhibition",
    },
    {
      id: 4,
      marathi: "महिलांचे सांस्कृतिक कार्यक्रम",
      english: "Women's Cultural Program",
    },
    { id: 5, marathi: "महाप्रसाद वाटप", english: "Mass Food Distribution" },
    { id: 6, marathi: "मैदानी खेळ", english: "Outdoor Games" },
  ];

  const [paymentMethod, setPaymentMethod] = useState("");

  const accountDetails = {
    bankName: "Mumbai Bank",
    accountHolder: "OM SHREE SHIV SANKALP PRATISHTHAN",
    accountNumber: "056100100001623",
    ifscCode: "MDCB0680056",
    upiId: "manishdhokle7-2@okaxis",
  };

  const content = {
    marathi: {
      support: "आमच्या एनजीओ ला साथ द्या",
      name: "पूर्ण नाव",
      email: "ईमेल पत्ता",
      amount: "देणगी रक्कम (₹)",
      donate: "देणगी द्या",
      taxBenefit: "** 12A आणि 80G टॅक्स बेनिफिट्स उपलब्ध आहेत **",
    },
    english: {
      support: "Support Our NGO",
      name: "Full Name",
      email: "Email Address",
      amount: "Donation Amount (₹)",
      donate: "Donate Now",
      taxBenefit: "** 12A & 80G Tax Benefits Available **",
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
      {/* Payment Method Section */}
      <div className="payment-method">
        <h3>Select Payment Method</h3>
        <select
          onChange={(e) => setPaymentMethod(e.target.value)}
          value={paymentMethod}
        >
          <option value="">Select</option>
          <option value="qr">QR Code Payment</option>
          <option value="ifsc">IFSC Code Transfer</option>
        </select>

        {paymentMethod === "qr" && (
          <div className="qr-payment">
            <h3>Scan QR Code to Pay</h3>
            <img src="/Images/qr_code.jpeg" alt="QR Code" width="200" />
            <h2>UPI ID: {accountDetails.upiId}</h2>
          </div>
        )}

        {paymentMethod === "ifsc" && (
          <div className="bank-details">
            <h3>Bank Transfer Details</h3>
            <table>
              <tbody>
                <tr>
                  <td>Bank Name</td>
                  <td>{accountDetails.bankName}</td>
                </tr>
                <tr>
                  <td>Account Holder</td>
                  <td>{accountDetails.accountHolder}</td>
                </tr>
                <tr>
                  <td>Account Number</td>
                  <td>{accountDetails.accountNumber}</td>
                </tr>
                <tr>
                  <td>IFSC Code</td>
                  <td>{accountDetails.ifscCode}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="tax-benefits-banner">
        <h1>🎉 12A & 80G Tax Benefits Available! 🎉</h1>
        <p>Get tax exemptions on your donations and support a noble cause.</p>
      </div>

      {/* Donation Form */}
      <div className="register-form-container">
        <div className="image-container">
          <img src={signUpImg} alt="Background" />
        </div>
        <div className="form-container">
          <h2>{content[language].support}</h2>
          <form ref={form}>
            <div className="form-group">
              <label htmlFor="name">{content[language].name}:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{content[language].email}:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">{content[language].amount}:</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">{content[language].donate}</button>
          </form>

          {/* Tax Benefits Section */}
          <p className="tax-benefits">{content[language].taxBenefit}</p>
        </div>
      </div>

      <div className="banner">
        <img src={banner} id="banner" alt="Banner" />
      </div>

      {/* Program List */}
      <h2 className="program-heading">
  {language === "marathi" ? "कार्यक्रम सूची" : "List of Programs"}
</h2>
<table className="program-table">
  <thead>
    <tr>
      <th>{language === "marathi" ? "क्रमांक" : "No."}</th>
      <th>{language === "marathi" ? "कार्यक्रमाचे नाव" : "Program Name"}</th>
    </tr>
  </thead>
  <tbody>
    {programs.map((program) => (
      <tr key={program.id}>
        <td>{program.id}</td>
        <td>{language === "marathi" ? program.marathi : program.english}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default DonationPage;
