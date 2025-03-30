import React from "react";
import "../src/Styles/Table.css";

const Table = ({ language }) => {
  const content = {
    marathi: {
      title: "कार्यक्रम सूची",
      programs: [
        "कचरा व्यवस्थापन",
        "आरोग्य तपासणी शिबिर",
        "ऐतिहासिक शस्त्र प्रदर्शन",
        "महिलांचे सांस्कृतिक कार्यक्रम",
        "महाप्रसाद वाटप",
        "मैदानी खेळ",
      ],
      bankTitle: "बँक खाते तपशील",
      bankName: "बँक नाव",
      accountHolder: "खातेधारक",
      accountNumber: "खाते क्रमांक",
      ifscCode: "IFSC कोड",
      upiId: "UPI आयडी",
      selectPayment: "पेमेंट पद्धत निवडा",
    },
    english: {
      title: "Program List",
      programs: [
        "Waste Management",
        "Health Check-up Camp",
        "Historical Weapon Exhibition",
        "Women's Cultural Programs",
        "Mahaprasad Distribution",
        "Outdoor Games",
      ],
      bankTitle: "Bank Account Details",
      bankName: "Bank Name",
      accountHolder: "Account Holder",
      accountNumber: "Account Number",
      ifscCode: "IFSC Code",
      upiId: "UPI ID",
      selectPayment: "Select Payment Method",
    },
  };

  return (
    <div className="table-container">
      <h2>{content[language].title}</h2>
      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>{content[language].title}</th>
          </tr>
        </thead>
        <tbody>
          {content[language].programs.map((program, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{program}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>{content[language].bankTitle}</h2>
      <table>
        <tbody>
          <tr>
            <td>{content[language].bankName}</td>
            <td>Mumbai Bank</td>
          </tr>
          <tr>
            <td>{content[language].accountHolder}</td>
            <td>OM SHREE SHIV SANKALP PRATISHTHAN</td>
          </tr>
          <tr>
            <td>{content[language].accountNumber}</td>
            <td>056100100001623</td>
          </tr>
          <tr>
            <td>{content[language].ifscCode}</td>
            <td>MDCB0680056</td>
          </tr>
        </tbody>
      </table>

      <h3>{content[language].selectPayment}</h3>
    </div>
  );
};

export default Table;
