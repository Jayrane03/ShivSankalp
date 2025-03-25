import React, { useState } from "react";
import { motion } from "framer-motion";

export default function DonationPage() {
  const [language, setLanguage] = useState("marathi");

  const content = {
    marathi: {
      title: "ॐ श्री शिव संकल्प",
      event:
        "छत्रपती संभाजी महाराज जयंती - १४ मे २०२५\nएक छोटा कार्यक्रम आयोजित करण्यात येणार आहे. आपले योगदान द्या.",
      support: "आमच्या एनजीओ ला साथ द्या",
      name: "पूर्ण नाव",
      email: "ईमेल पत्ता",
      amount: "देणगी रक्कम (₹)",
      donate: "देणगी द्या",
      quote: "आपला छोटा हातभार मोठा बदल घडवू शकतो.",
    },
    english: {
      title: "Om Shri Shiv Sankalp",
      event:
        "Chhatrapati Sambhaji Maharaj Jayanti - 14th May 2025\nA small program will be organized. Support us.",
      support: "Support Our NGO",
      name: "Full Name",
      email: "Email Address",
      amount: "Donation Amount (₹)",
      donate: "Donate Now",
      quote: "Your small contribution can make a big difference.",
    },
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #ea580c, #f18246, #3e3c3c, #201f1f)",
        padding: "1rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Language Dropdown */}
      <div style={{ textAlign: "right", marginBottom: "1rem" }}>
        <select
          value={language}
          onChange={handleLanguageChange}
          style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
        >
          <option value="marathi">मराठी</option>
          <option value="english">English</option>
        </select>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#ffb347",
          textAlign: "center",
          marginBottom: "2rem",
          textShadow: "2px 2px #000",
        }}
      >
        {content[language].title}
      </motion.h1>

      {/* Event Description */}
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          color: "#ffe0b3",
          textAlign: "center",
          fontSize: "1.2rem",
          marginBottom: "2rem",
          whiteSpace: "pre-line",
        }}
      >
        {content[language].event}
      </motion.p>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/Images/banner.png"
            alt="Sambhaji Maharaj Jayanti"
            style={{
              borderRadius: "1rem",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              borderRadius: "1rem",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              backgroundColor: "#333",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#ea580c",
                marginBottom: "1rem",
              }}
            >
              {content[language].support}
            </h2>

            <input
              type="text"
              placeholder={content[language].name}
              style={{
                padding: "0.75rem",
                border: "1px solid #ea580c",
                borderRadius: "0.75rem",
                width: "100%",
                marginBottom: "1rem",
                backgroundColor: "#222",
                color: "#fff",
              }}
            />
            <input
              type="email"
              placeholder={content[language].email}
              style={{
                padding: "0.75rem",
                border: "1px solid #ea580c",
                borderRadius: "0.75rem",
                width: "100%",
                marginBottom: "1rem",
                backgroundColor: "#222",
                color: "#fff",
              }}
            />
            <input
              type="number"
              min="1"
              placeholder={content[language].amount}
              style={{
                padding: "0.75rem",
                border: "1px solid #ea580c",
                borderRadius: "0.75rem",
                width: "100%",
                marginBottom: "1rem",
                backgroundColor: "#222",
                color: "#fff",
              }}
            />

            <button
              style={{
                backgroundColor: "#ea580c",
                color: "white",
                fontWeight: "600",
                fontSize: "1.125rem",
                padding: "0.75rem",
                borderRadius: "0.75rem",
                width: "100%",
                border: "none",
                cursor: "pointer",
              }}
            >
              {content[language].donate}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          marginTop: "2.5rem",
          color: "#ffb347",
          fontSize: "1.125rem",
          textShadow: "1px 1px #000",
        }}
      >
        {content[language].quote}
      </motion.p>
    </div>
  );
}
