import React, { useState } from "react";
import signUpImg from "/Images/sambhaji_maharaj.jpg";
import banner from "/Images/banner.png"
import "../src/Styles/pages.css";
import Table from "./Table";
import Footer from "./footer";

export default function DonationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });
  const [language, setLanguage] = useState("marathi");

  const content = {
    marathi: {
      title: "ॐ श्री शिवसंकल्प प्रतिष्ठान",
      event: "छत्रपती संभाजी महाराज जयंती - १४ मे २०२५\nएक छोटा कार्यक्रम आयोजित करण्यात येणार आहे. आपले योगदान द्या.",
      support: "आमच्या एनजीओ ला साथ द्या",
      name: "पूर्ण नाव",
      email: "ईमेल पत्ता",
      amount: "देणगी रक्कम (₹)",
      donate: "देणगी द्या",
      quote: "आपला छोटा हातभार मोठा बदल घडवू शकतो.",
    },
    english: {
      title: "Om Shri Shiv Sankalp Pratishthan",
      event: "Chhatrapati Sambhaji Maharaj Jayanti - 14th May 2025\nA small program will be organized. Support us.",
      support: "Support Our NGO",
      name: "Full Name",
      email: "Email Address",
      amount: "Donation Amount (₹)",
      donate: "Donate Now",
      quote: "Your small contribution can make a big difference.",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}, for your donation of ₹${formData.amount}!`);
  };

  return (
   <div>
     <div className="register">
      <div className="register-form-container">
        <div className="image-container">
          <img src={signUpImg} alt="Background" />
        </div>
        <div className="form-container">
          <h2>{content[language].support}</h2>
          <div className="language-selector">
            <label htmlFor="language">Select Language: </label>
            <select id="language" value={language} onChange={handleLanguageChange}>
              <option value="marathi">Marathi</option>
              <option value="english">English</option>
            </select>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{content[language].name}:</label>
              <input
                type="text"
                id="name"
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
                id="email"
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
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">{content[language].donate}</button>
          </form>
        </div>
      </div>

     
    </div>
     <div className="banner">
     <div className="right_part">
     <img src={banner} id="banner" alt="Banner" />
     </div>
     <Table></Table>

   </div>
   <Footer></Footer>
   </div>
  );
}
