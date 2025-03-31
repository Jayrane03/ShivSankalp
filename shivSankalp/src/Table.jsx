import React, { useState } from 'react';
import '../src/Styles/Table.css'; // Importing CSS for styling

const Table = () => {
  const programs = [
    { id: 1, name: "कचरा व्यवस्थापन" },
    { id: 2, name: "आरोग्य तपासणी शिबिर" },
    { id: 3, name: "ऐतिहासिक शस्त्र प्रदर्शन" },
    { id: 4, name: "महिलांचे सांस्कृतिक कार्यक्रम" },
    { id: 5, name: "महाप्रसाद वाटप" },
    { id: 6, name: "मैदानी खेळ" }
  ];

  const [paymentMethod, setPaymentMethod] = useState('');

  const accountDetails = {
    bankName: "Mumbai Bank",
    accountHolder: "OM SHREE SHIV SANKALP PRATISHTHAN",
    accountNumber: "056100100001623",
    ifscCode: "MDCB0680056",
    upiId: "manishdhokle7-2@okaxis",
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="table-container">
      <h2>कार्यक्रम सूची</h2>
      <table>
        <thead>
          <tr>
            <th>क्रमांक</th>
            <th>कार्यक्रमाचे नाव</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => (
            <tr key={program.id}>
              <td>{program.id}</td>
              <td>{program.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Bank Account Details</h2>
      <table>
        <tbody>
          <tr><td>Bank Name</td><td>{accountDetails.bankName}</td></tr>
          <tr><td>Account Holder</td><td>{accountDetails.accountHolder}</td></tr>
          <tr><td>Account Number</td><td>{accountDetails.accountNumber}</td></tr>
          <tr><td>IFSC Code</td><td>{accountDetails.ifscCode}</td></tr>
        </tbody>
      </table>
      
      <h3>Select Payment Method</h3>
      <select onChange={handlePaymentChange} value={paymentMethod}>
        <option value="">Select</option>
        <option value="qr">QR Code Payment</option>
        <option value="ifsc">IFSC Code Transfer</option>
      </select>

      {paymentMethod === 'qr' && (
        <div>
          <h3>Scan QR Code to Pay</h3>
          <img src="/Images/qr_code.jpeg" alt="QR Code" width="200" />
          <h2>Upi Id : {accountDetails.upiId}</h2>
        </div>
      )}

      {paymentMethod === 'ifsc' && (
        <div>
          <h3>Use IFSC Code for Bank Transfer</h3>
          <p>Bank Name: {accountDetails.bankName}</p>
          <p>Account Number: {accountDetails.accountNumber}</p>
          <p>IFSC Code: {accountDetails.ifscCode}</p>
        </div>
      )}
    </div>
  );
};

export default Table;
