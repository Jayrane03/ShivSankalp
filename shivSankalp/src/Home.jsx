import React, { useState } from "react";
import DonationPage from "./Donation";
import Footer from "./Footer";
import "../src/Styles/pages.css";

const Home = () => {
  const [language, setLanguage] = useState("marathi");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="home-container">
      <div className="language-selector">
        <label htmlFor="language">🌍 Select Language: </label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="marathi">मराठी</option>
          <option value="english">English</option>
        </select>
      </div>
      
      <DonationPage language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Home;
