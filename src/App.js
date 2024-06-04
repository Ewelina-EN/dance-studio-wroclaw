import React, { useState } from "react";
import { Link } from "react-scroll";
import Section from "./section/section";
import { FaBars, FaTimes, FaFacebook, FaInstagram } from "react-icons/fa";
import "./App.css";
import { sections } from "./data";

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
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
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
        <ul className="nav-social">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </nav>

      <div className="content">
        {sections.map((section) => (
          <Section
            key={section.name}
            name={section.name}
            component={section.component}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
