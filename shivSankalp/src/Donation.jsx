import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import signUpImg from "/Images/samb.jpg";
import banner from "/Images/banner.png";
import "../src/Styles/pages.css";

const DonationPage = ({ language }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const content = {
    marathi: {
      support: "आमच्या एनजीओ ला साथ द्या",
      name: "पूर्ण नाव",
      email: "ईमेल पत्ता",
      amount: "देणगी रक्कम (₹)",
      donate: "देणगी द्या",
    },
    english: {
      support: "Support Our NGO",
      name: "Full Name",
      email: "Email Address",
      amount: "Donation Amount (₹)",
      donate: "Donate Now",
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dx4xlbz', 'template_ofn8min', form.current, 'rAhe8rnd3MGUcsd7-')
      .then((result) => {
        alert(`Thank you, ${formData.name}, for your donation of ₹${formData.amount}!`);
        setFormData({ name: "", email: "", amount: "" }); // Reset form fields
      }, (error) => {
        console.error('Failed to send the email:', error.text);
      });
  };

  return (
    <div className="register">
      <div className="register-form-container">
        <div className="image-container">
          <img src={signUpImg} alt="Background" />
        </div>
        <div className="form-container">
          <h2>{content[language].support}</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">{content[language].name}:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{content[language].email}:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="amount">{content[language].amount}:</label>
              <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
            </div>
            <button type="submit">{content[language].donate}</button>
          </form>
        </div>
      </div>

      <div className="banner">
        <img src={banner} id="banner" alt="Banner" />
      </div>
    </div>
  );
};

export default DonationPage;
