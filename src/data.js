import React from "react";
import Offer from "./section/offer/offer";
import Team from "./section/team/team";
import Schedule from "./section/schedule/schedule";
import Prices from "./section/prices/prices";
import Contact from "./section/contact/contact";
import acro from "./assets/offer/acro.jpeg";
import highheels from "./assets/offer/highheels.jpeg";
import stripdance from "./assets/offer/stripdance.jpeg";
import fameldance from "./assets/offer/femaledance.jpeg";

export const offerItems = [
  {
    image: stripdance,
    title: "STRIP DANCE",
    description:
      "Styl pełny zmysłowych ruchów pełnych emocji i uczuć. Zawiera dużo elementów flooworku. Tańczymy w butach typu Pleaser.",
  },
  {
    image: highheels,
    title: "HIGH HEELS",
    description:
      "Zajęcia pełne elegancji i gracji. Łączą w sobie elementy tańca jazzowego oraz baletowego. Pokazujemy kobiecą siłę i pewność siebie.",
  },
  {
    image: acro,
    title: "STRIP ACRO",
    description:
      "To połączenie strip dance z elementami akrobatyki. Zajęcia pełne zarówno tanecznej gracji, jak i płynnego wykonywania trików.",
  },
  {
    image: fameldance,
    title: "FEMALE DANCE",
    description:
      "Styl tańca, który w szczególny sposób akcentuje pewność siebie oraz kobiecą siłę. Liczy się wyrazistość ruchów i interpretacja muzyki.",
  },
];

export const sections = [
  {
    name: "Home",
    title: "Home",
    description: "This is section 1.",
  },
  {
    name: "Zajęcia",
    title: "Zajęcia",
    component: <Offer items={offerItems} />,
  },
  {
    name: "Trenerki",
    title: "Trenerki",
    component: <Team />,
  },
  {
    name: "Grafik",
    title: "Grafik",
    component: <Schedule />,
  },
  {
    name: "Cennik",
    title: "Cennik",
    component: <Prices />,
  },
  {
    name: "Kontakt",
    title: "Kontakt",
    component: <Contact />,
  },
];
