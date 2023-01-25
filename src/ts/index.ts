import { King } from "./characters/King/King";
import type { CharacterDataStructure } from "./types";
import CardComponent from "./components/CardComponent/CardComponent";
import joffreyPhoto from "../img/joffrey-min.jpg";
import daenerysPhoto from "../img/daenerys.jpg";
import bronnPhoto from "../img/bronn-min.jpg";
import jaimePhoto from "../img/jaime.jpg";
import tyrionPhoto from "../img/tyrion.jpg";
import { Fighter } from "./characters/Fighter/Fighter";
import { Advisor } from "./characters/Advisor/Advisor";
import { Squire } from "./characters/Squire/Squire";
const appContainer = document.querySelector(".app")!;
const cardContainer = document.createElement("ul");
cardContainer.className = "characters-list row list-unstyled";
const characterContainerJoffrey = document.createElement("li");
const characterContainerDaenerys = document.createElement("li");
const characterContainerBronn = document.createElement("li");
const characterContainerJaime = document.createElement("li");
const characterContainerTyrion = document.createElement("li");
characterContainerJoffrey.className = "character col";
characterContainerDaenerys.className = "character col";
characterContainerBronn.className = "character col";
characterContainerJaime.className = "character col";
characterContainerTyrion.className = "character col";
appContainer.appendChild(cardContainer);

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: String(joffreyPhoto),
};

const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: String(jaimePhoto),
};

const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: String(daenerysPhoto),
};

const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: String(tyrionPhoto),
};

const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: String(bronnPhoto),
};

export const joffrey: King = new King(joffreyData, 2);
export const jaime = new Fighter(jaimeData, "sword", 7);
export const daenerys = new Fighter(daeneryseData, "Dragons", 10);
export const tyrion = new Advisor(tyrionData, daenerys);
export const bronn = new Squire(bronnData, 0, jaime);

const cardJoffrey = new CardComponent(
  cardContainer,
  characterContainerJoffrey,
  "div",
  "card character__card",
  joffrey
);
const cardDaenerys = new CardComponent(
  cardContainer,
  characterContainerDaenerys,
  "div",
  "card character__card",
  daenerys
);

const cardBronn = new CardComponent(
  cardContainer,
  characterContainerBronn,
  "div",
  "card character__card",
  bronn
);

const cardJaime = new CardComponent(
  cardContainer,
  characterContainerJaime,
  "div",
  "card character__card",
  jaime
);

const cardTyrion = new CardComponent(
  cardContainer,
  characterContainerTyrion,
  "div",
  "card character__card",
  tyrion
);
