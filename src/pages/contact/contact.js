import "./contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <h1>Kontakt</h1>
      <div className="contact">
        <form className="contact-form form">
          <h1>Napisz do nas</h1>
          <input type="text" name="name" placeholder="Imię" required />
          <input type="tel" name="phone" placeholder="Telefon" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <textarea
            name="message"
            placeholder="Masz pytania?"
            required
          ></textarea>
          <label className="consent-label">
            <input type="checkbox" name="consent" required />
            Zgadzam się na przetwarzanie danych osobowych
          </label>
          <button type="submit" className="form-btn">
            Wyślij
          </button>
        </form>
        <div className="contact-info">
          <div className="adress">
            <h1>CHERNIKA DANCE STUDIO</h1>
            <h3>Adres</h3>
            <div className="adress-contact">
              <FaMapMarkerAlt className="contact-icon" />

              <p>123 Main Street, City, Country</p>
            </div>
            <h3>Telefon</h3>
            <div className="adress-contact">
              <FaPhone className="contact-icon" />
              <p>+123 456 789</p>
            </div>
            <h3>E-mail</h3>
            <div className="adress-contact">
              <FaEnvelope className="contact-icon" />
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
