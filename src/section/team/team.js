import "../offer/offer.css";
import "../../section/schedule/schedule.css";
import dance2 from "../../assets/main/photo2.jpeg";

const Team = ({ items }) => {
  return (
    <>
      <section className="team">
        <h1 id="team">Trenerki</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <img src={item.image} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <img src={dance2} alt="dance photo" className="dance-photo" />
    </>
  );
};
export default Team;
