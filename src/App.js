import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Section from "./section/section";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Offer from "./section/offer";
import Team from "./section/team";
import "./App.css";

const sections = [
  {
    name: "Home",
    title: "Home",
    description: "This is section 1.",
  },
  {
    name: "Zajęcia",
    title: "Zajęcia",
    component: <Offer />,
  },
  {
    name: "Trenerki",
    title: "Trenerki",
    description: "This is section 3.",
    component: <Team />,
  },
  {
    name: "Grafik",
    title: "Grafik",
    description: "This is section 3.",
  },
  {
    name: "Cennik",
    title: "Cennik",
    description: "This is section 3.",
  },
  {
    name: "Kontakt",
    title: "Kontakt",
    description: "This is section 3.",
  },
];

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
            title={section.title}
            description={section.description}
            component={section.component}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
