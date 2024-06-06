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

export const pricesList = [
  {
    name: "karnet 4 wejść",
    about: {
      lesson: "zajęcia 1 x w tygodniu",
      time: "zajęcia trwają 60 minut",
      instructor: "zajęcia z instruktorem w grupie",
      valid: "karnet ważny 30 dni, od dnia nabycia",
    },
    price: "150",
  },
  {
    name: "karnet 8 wejść",
    about: {
      lesson: "zajęcia 2 x w tygodniu",
      time: "zajęcia trwają 60 minut",
      instructor: "zajęcia z instruktorem w grupie",
      valid: "karnet ważny 30 dni, od dnia nabycia",
    },
    price: "250",
  },
  {
    name: "pakiet vip",
    about: {
      lesson: "nielimitowany dostęp do zajęć",
      time: "zajęcia trwają 60 minut",
      instructor: "zajęcia z instruktorem w grupie",
      valid: "karnet ważny 30 dni, od dnia nabycia",
    },
    price: "450",
  },
  {
    name: "pojedyncze wejście",
    about: {
      lesson: "jednorazowe wejście na wybrane zajęcia",
      time: "zajęcia trwają 60 minut",
      instructor: "zajęcia z instruktorem w grupie",
      valid: "dla wszystkich chętnych",
    },
    price: "50",
  },
  {
    name: "zajęcia indywidualne",
    about: {
      lesson: "Doskonała okazja, aby dopasować",
      time: "trening do Twoich potrzeb.",
      instructor: "Osiągnij swoje cele",
      valid: "treningowe szybciej!",
    },
    price: "150",
  },
  {
    name: "pakiety",
    about: {
      lesson: "Przy pakietach zajęć indywidualnych",
      time: "lub regularnym wynajmie sali",
      instructor: "wykonujemy wycene indywidualną",
      valid: "stosując rabaty!",
    },
    price: "%%%",
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
