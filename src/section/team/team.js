import "../offer/offer.css";

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
    </>
  );
};
export default Team;
