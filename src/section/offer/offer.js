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
        <div class="v-container">
          <iframe
            width="320"
            height="695"
            src="https://www.youtube.com/embed/wtDS2XsHDyE"
            title='Pola Szczepańska - High Heels - Jamelia "Superstar" Choreography - Chernika Dance Studio'
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="320"
            height="695"
            src="https://www.youtube.com/embed/wtDS2XsHDyE"
            title='Pola Szczepańska - High Heels - Jamelia "Superstar" Choreography - Chernika Dance Studio'
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="320"
            height="695"
            src="https://www.youtube.com/embed/wtDS2XsHDyE"
            title='Pola Szczepańska - High Heels - Jamelia "Superstar" Choreography - Chernika Dance Studio'
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="text">
          <p>Chcesz zobaczyć więcej?</p>
        </div>
        <a
          href="https://www.instagram.com/chernika_studio.pl/"
          target="_blank"
          rel="noreferrer"
          class="btn"
        >
          SPRAWDŹ NASZ INSTAGRAM
        </a>
      </section>
    </>
  );
};

export default Offer;
