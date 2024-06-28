import React, { useState } from "react";
import { Link } from "react-scroll";
import Section from "./section/section";
import { FaBars, FaTimes, FaFacebook, FaInstagram } from "react-icons/fa";
import "./App.css";
import { sections } from "./data";
import RoomRental from "./section/rent";
import video from "../src/assets/head-video.mp4";
import logo from "./assets/main/logo3.jpeg";
import MainHeader from "./section/header";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        <button
          className="menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {sections.map((section) => (
            <li key={section.name}>
              <Link
                to={section.name}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-social">
          <FaFacebook aria-label="Facebook" />
          <FaInstagram aria-label="Instagram" />
        </div>
      </nav>
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4" />
      </video>
      <MainHeader />
      <div className="content">
        {sections.map((section) => (
          <Section
            key={section.name}
            name={section.name}
            component={section.component}
          />
        ))}
        <RoomRental />
      </div>
    </div>
  );
}

export default App;
