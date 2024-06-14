import React, { useState } from "react";
import "./form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    danceStyles: {
      "STRIP DANCE": false,
      "HIGH HEELS": false,
      "FEMALE DANCE": false,
      STRETCHING: false,
    },
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.danceStyles) {
      setFormData({
        ...formData,
        danceStyles: {
          ...formData.danceStyles,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h1>Odbierz darmowe wejście na pierwsze zajęcia</h1>
      <input
        type="text"
        name="name"
        placeholder="IMIĘ"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="TELEFON"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-MAIL"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <fieldset>
        <legend>STYL TAŃCA</legend>
        {Object.keys(formData.danceStyles).map((style) => (
          <label key={style}>
            <input
              type="checkbox"
              name={style}
              checked={formData.danceStyles[style]}
              onChange={handleChange}
              className="dance-style-checkbox"
            />
            {style}
            <br />
          </label>
        ))}
      </fieldset>
      <label className="consent-label">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
        />
        Zgadzam się na przetwarzanie danych osobowych
      </label>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default ContactForm;
