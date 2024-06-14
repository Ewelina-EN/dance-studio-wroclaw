import React from "react";
import Offer from "./section/offer/offer";
import Team from "./section/team/team";
import Schedule from "./section/schedule/schedule";
import Prices from "./section/prices/prices";
import acro from "./assets/offer/acro.jpeg";
import highheels from "./assets/offer/highheels.jpeg";
import stripdance from "./assets/offer/stripdance.jpeg";
import fameldance from "./assets/offer/femaledance.jpeg";
import anzhelika from "./assets/team/anzhelika.jpg";
import pola from "./assets/team/pola.jpg";
import anna from "./assets/team/anna.png";
import yuliia from "./assets/team/yuliia.png";

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

export const teamItems = [
  {
    image: anzhelika,
    name: "ANZHELIKA MILEVSKA",
    description:
      "Od 15 roku życia jestem nauczycielką takich stylów jak: Twerk, Jazz Funk, Stretching, Heels. Zajmowałam pierwsze miejsca w konkursach w różnych stylach. Tancerka baletowa: pracowałam zarówno za granicą, jak i w kraju. Taniec to moje życie i kocham to!",
  },
  {
    image: anna,
    name: "ANNA SOLOKHINA",
    description:
      "Od 10 lat związana z tańcem. Certyfikowana trenerka akrobatyki tanecznej, uczestnik konkursów i warsztatów. Pasjonatka fitnessu.Zdobytą wiedzę wdraża w proces treningowy. Jest pewna, że ​​każdy może tańczyć, najważniejsze to wierzyć w siebie.",
  },
  {
    image: pola,
    name: "POLA SZCZEPAŃSKA",
    description:
      "Taniec od zawsze był i jest do dziś moją największą pasją. W 2018 rozpoczęłam swoją przygodę ze stylem tańca high heels i odnalazłam w nim siłę i kobiecość. ukończyłam kurs u Kuby Walicy oraz program Natalii Konarskiej. Szpilki to dla mnie to coś.",
  },
  {
    image: yuliia,
    name: "YULIIA CHERNIKA",
    description:
      "Posiada 10 lat doświadczenia trenerskiego. Tworzy wyjątkowe choreografie i z pasją uczy ich na zajęciach. Zwyciężczyni różnych zawodów tanecznych. Założycielka zespołu tanecznego w Polsce oraz właścicielka Chernika Dance Studio.",
  },
];

export const schedulePlan = {
  poniedziałek: [
    {
      time: "18:00 - 19:00",
      class: "Strip Dance - open",
      instructor: "Chernika",
    },
    {
      time: "19:00 - 20:00",
      class: "High Heels - open | start 31.07",
      instructor: "Chernika",
    },
  ],
  wtorek: [
    {
      time: "10:00 - 11:00",
      class: "High Heels - beginners",
      instructor: "Chernika",
    },
    {
      time: "11:00 - 12:00",
      class: "Strip Dance - beginners",
      instructor: "Chernika",
    },
    {
      time: "19:00 - 20:00",
      class: "High Heels - beginners | start 01.08",
      instructor: "Justyna",
    },
  ],
  środa: [
    {
      time: "18:00 - 19:00",
      class: "High Heels - beginners",
      instructor: "Pola",
    },
    {
      time: "19:00 - 20:00",
      class: "High Heels - open | start wrzesień",
      instructor: "Pola",
    },
  ],
  czwartek: [
    {
      time: "17:00 - 18:00",
      class: "Strip Dance - beginners",
      instructor: "Chernika",
    },
    {
      time: "18:00 - 19:00",
      class: "Strip Dance - open",
      instructor: "Chernika",
    },
    {
      time: "19:00 - 20:00",
      class: "High Heels - open | start 03.08",
      instructor: "Chernika",
    },
  ],
  piątek: [
    {
      time: "18:00 - 19:00",
      class: "Acro Strip - beginners",
      instructor: "Ania",
    },
    {
      time: "19:00 - 20:00",
      class: "Strip Dance - beginners",
      instructor: "Ania",
    },
  ],
  sobota: [
    {
      time: "16:00 - 17:00",
      class: "Female Dance - beginners",
      instructor: "Anzhelika",
    },
  ],
};

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
    name: "Grafik",
    title: "Grafik",
    component: <Schedule items={schedulePlan} />,
  },
  {
    name: "Trenerki",
    title: "Trenerki",
    component: <Team items={teamItems} />,
  },
  {
    name: "Cennik",
    title: "Cennik",
    component: <Prices />,
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
