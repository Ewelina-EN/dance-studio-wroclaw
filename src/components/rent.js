import trainingRoom from "../assets/main/training-room.jpg";

const RoomRental = () => {
  return (
    <>
      <div className="lessons">
        <img className="gym-photo" src={trainingRoom} alt="training room" />

        <div>
          <h1>WYNAJEM SALI</h1>
          <p>
            Istnieje możliwość wynajmu sali. <br />
            Nasza siedziba mieści się w ścisłym centrum Wrocławia. <br />
            Studio znajduję się w świetnie skomunikowanej strefie czyli samym
            Rynku. <br /> Proponujemy przestronną salę z drewnianym parkietem na
            całej powierzchni. <br /> W sali lustra są na całej długości wraz z
            profesjonalnym nagłośnieniem oraz oświetleniem. <br /> Proponujemy
            wynajem na: nagrania, studio fotograficzne, treningi, próby i inne.
          </p>
          <h2>Jeśli szukasz sali, by poćwiczyć solo lub z partnerem </h2>
          <a
            href="mailto:info.chernikastudio@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            SKONTAKTUJ SIĘ Z NAMI
          </a>
        </div>
      </div>
    </>
  );
};

export default RoomRental;
