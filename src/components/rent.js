import trainingRoom from "../assets/main/training-room.jpg";

const RoomRental = () => {
  return (
    <>
      <div className="lessons">
        <img className="gym-photo" src={trainingRoom} alt="training room" />

        <div>
          <h2>WYNAJEM SALI</h2>
          <p>
            Informujemy, że istnieje możliwość wynajmu sali. <br />
            Nasza siedziba mieści się w ścisłym centrum Wrocławia. <br />
            Studio znajduję się w świetnie skomunikowanej strefie czyli samym
            Rynku. <br /> Proponujemy przestronną salę z drewnianym parkietem na
            całej powierzchni. <br /> W sali lustra są na całej długości wraz z
            profesjonalnym nagłośnieniem oraz oświetleniem. <br /> Proponujemy
            wynajem na: nagrania, studio fotograficzne, treningi, próby i inne.
          </p>
          <h3>Jeśli szukasz sali, by poćwiczyć solo lub z partnerem </h3>
          <a
            href="mailto:info.chernikastudio@gmail.com"
            target="_blank"
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
