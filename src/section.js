import { Element } from "react-scroll";

const Section = ({ name, title, description }) => {
  return (
    <Element name={name} className="section">
      <h2>{title}</h2>
      <p>{description}</p>
    </Element>
  );
};

export default Section;
