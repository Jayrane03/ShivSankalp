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

  const sendToGoogleSheet = async (e) => {
    e.preventDefault(); // Prevent form reload

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwkAVibqXwfB7DD-eJ7f9CGqOYkS6FzdW-XNHZLXtzEGZ96zQorEj3pslnE4hX34y_z/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded", // ✅ Fix: Prevents CORS issues
            },
            body: new URLSearchParams(formData).toString(), // ✅ Convert JSON to URL-encoded format
        });

        const text = await response.text(); // ✅ Read response as text
        console.log("Raw response:", text); // Debugging

        // ✅ Check if response is JSON
        const result = text.startsWith("{") ? JSON.parse(text) : { status: "error", message: "Invalid response" };

        if (result.status === "success") {
            alert("Data has been saved successfully!");
            setFormData({ name: "", email: "", amount: "" }); // Reset form
        } else {
            throw new Error(result.message);
        }
    } catch (error) {
        console.error("Error saving data:", error);
        alert("Failed to save data. Please try again.");
    }
};


  return (
    <div className="register">
      <div className="register-form-container">
        <div className="image-container">
          <img src={signUpImg} alt="Background" />
        </div>
        <div className="form-container">
          <h2>{content[language].support}</h2>
          <form ref={form} onSubmit={sendToGoogleSheet}>
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
