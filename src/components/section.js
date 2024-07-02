import React from "react";
import { Element } from "react-scroll";

const Section = ({ name, component }) => {
  return (
    <Element name={name} className="section">
      {component}
    </Element>
  );
};

export default Section;
