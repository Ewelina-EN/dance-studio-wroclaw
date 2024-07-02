import React from "react";
import "./offer.css";

const Offer = ({ items }) => {
  return (
    <>
      <section className="offer">
        <h1 id="offer">ZAJĘCIA</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <img src={item.image} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Offer;
