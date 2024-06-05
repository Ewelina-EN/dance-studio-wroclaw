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
      <section class="videos" id="videos">
        <h1>ZAPRASZAMY DO ŚWIATA TAŃCA</h1>
        <p>
          Naucz się kroków tanecznych i rozwijaj swoje umiejętności dzięki
          regularnym zajęciom tanecznym.
        </p>
        <p>
          Nieważne, czy jesteś początkującym tancerzem czy już masz
          doświadczenie - nasze zajęcia są dla Ciebie!
        </p>
        <div> DODAC LINKI DO YT</div>
        <div class="text">
          <p>Chcesz zobaczyć więcej?</p>
        </div>
        <a href="https://www.instagram.com/chernika_studio.pl/" target="_blank">
          SPRAWDŹ NASZ INSTAGRAM
        </a>
      </section>
    </>
  );
};

export default Offer;
