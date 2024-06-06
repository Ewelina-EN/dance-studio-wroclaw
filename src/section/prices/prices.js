import "./prices.css";
import { pricesList } from "../../data.js";

const Prices = () => {
  return (
    <section className="prices">
      <h1>CENNIK</h1>
      <section className="prices-main">
        <ul className="prices-main-list">
          {pricesList.map((item, index) => (
            <li className="prices-list" key={index}>
              <h3>{item.name}</h3>
              <ul className="prices-info">
                {Object.keys(item.about).map((key, subIndex) => (
                  <li key={subIndex}>{item.about[key]}</li>
                ))}
              </ul>
              <p>{item.price} PLN</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Prices;
