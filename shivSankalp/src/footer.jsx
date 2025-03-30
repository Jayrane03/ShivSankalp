import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./Styles/pages.css";

const Footer = ({ language }) => {
  const content = {
    marathi: {
      title: "ॐ श्री शिवसंकल्प प्रतिष्ठान",
      contact: "संपर्क",
      location: "महाराष्ट्र, मुंबई - 400055, भारत",
      president: "अध्यक्ष",
      treasurer: "खजिनदार",
    },
    english: {
      title: "Om Shri Shiv Sankalp Pratishthan",
      contact: "Contact",
      location: "Maharashtra, Mumbai - 400055, IN",
      president: "President",
      treasurer: "Treasurer",
    },
  };

  return (
    <footer>
       {/* Social Media Section */}
       <section className="footer-section">
        <span>Get connected with us:</span>
        <div className="footer-icons">
          {/* <a href="#">
            <FaFacebookF />
          </a> */}
          <a
            href="https://www.instagram.com/shivsankalp2024?igsh=MTZiMDBsYzlzMDkzeg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </section>
      <div className="footer-content">
        <div>
          <h6>{content[language].title}</h6>
          <p>Committed to excellence and innovation.</p>
        </div>

        <div className="contact-foot">
          <h6>{content[language].contact}</h6>
          <p>{content[language].location}</p>
          <p>
            <strong>{content[language].president}:</strong> Manish Dhokle - +91 97735 54191
          </p>
          <p>
            <strong>{content[language].treasurer}:</strong> Sagar Dhokle - +91 88285 64060
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
