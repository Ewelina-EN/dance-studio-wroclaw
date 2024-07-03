import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";
import logo from "../../assets/main/logo3.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="adress">
        <div className="adress-contact">
          <FaMapMarkerAlt className="contact-icon" />
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="adress-contact">
          <FaPhone className="contact-icon" />
          <p>+123 456 789</p>
        </div>
        <div className="adress-contact">
          <FaEnvelope className="contact-icon" />
          <p>info@example.com</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-social">
          <FaFacebook className="social-icon" aria-label="Facebook" />
          <FaInstagram className="social-icon" aria-label="Instagram" />
          <FaYoutube className="social-icon" aria-label="Youtube" />
        </div>
        <p>Regulamin</p>
        <p>Polityka Prywatności</p>
      </div>
    </footer>
  );
};

export default Footer;
