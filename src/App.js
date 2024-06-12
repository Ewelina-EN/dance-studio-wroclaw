import React, { useState } from "react";
import { Link } from "react-scroll";
import Section from "./section/section";
import { FaBars, FaTimes, FaFacebook, FaInstagram } from "react-icons/fa";
import "./App.css";
import { sections } from "./data";
import trainingRoom from "./assets/main/training-room.jpg";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
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
        <div className="lessons">
          <img
            className="gym-photo"
            src={trainingRoom}
            alt="training room"
          ></img>
          <div>
            <h2>WYNAJEM SALI</h2>
            <p>
              Informujemy, że istnieje możliwość wynajmu sali. <br />
              Nasza siedziba mieści się w ścisłym centrum Wrocławia. <br />
              Studio znajduję się w świetnie skomunikowanej strefie czyli samym
              Rynku. <br /> Proponujemy przestronną salę z drewnianym parkietem
              na całej powierzchni. <br /> W sali lustra są na całej długości
              wraz z profesjonalnym nagłośnieniem oraz oświetleniem. <br />{" "}
              Proponujemy wynajem na: nagrania, studio fotograficzne, treningi,
              próby i inne.
            </p>
            <p>
              Jeśli szukasz sali, by poćwiczyć solo lub z partnerem
              <a href="mailto:info.chernikastudio@gmail.com" target="_blank">
                <br />
                <strong>NAPISZ DO NAS</strong>
              </a>
              lub
              <a href="tel:+48790318971" target="_blank">
                <strong>ZADZWOŃ</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
