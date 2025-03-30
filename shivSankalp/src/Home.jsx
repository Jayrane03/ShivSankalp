import React, { useState } from "react";
import DonationPage from "./Donation";
import Table from "./Table";
import Footer from "./Footer";

const Home = () => {
  const [language, setLanguage] = useState("marathi");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <div className="language-selector">
        <label htmlFor="language">Select Language: </label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="marathi">Marathi</option>
          <option value="english">English</option>
        </select>
      </div>

      <DonationPage language={language} />
      <Table language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Home;
