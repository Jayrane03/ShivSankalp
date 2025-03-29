import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Styles/pages.css"; // Import CSS file

const Footer = () => {
  return (
    <footer>
      {/* Social Media Section */}
      <section className="footer-section">
        <span>Get connected with us:</span>
        <div className="footer-icons">
          <a href="#">
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/shivsankalp2024?igsh=MTZiMDBsYzlzMDkzeg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </section>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Company Name */}
        <div>
          <h6>ॐ श्री शिवसंकल्प प्रतिष्ठान"</h6>
          <p>Committed to delivering excellence and innovation.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h6>Contact</h6>
          <p>Maharashtra, Mumbai - 400055, IN</p>
          <p>+91 97735 54191 - Manish Dhokle</p>
          <p>+91 88285 64060 - Sagar Dhokle</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © 2025 Copyright:{" "}
        <a href="https://omshrishivsankalp.netlify.app">
          omshrishivsankalp.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
