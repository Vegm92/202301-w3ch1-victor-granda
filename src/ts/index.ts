import { King } from "./characters/King/King";
import type { CharacterDataStructure } from "../ts/types/types";
import CardComponent from "./components/CardComponent/CardComponents";
import joffreyPhoto from "../media/joffrey.jpg";
import daenerysPhoto from "../media/daenerys.jpg";
import bronnPhoto from "../media/bronn.jpg";
import jaimePhoto from "../media/jaime.jpg";
import tyrionPhoto from "../media/tyrion.jpg";
import { Fighter } from "./characters/Fighter/Fighter";
import { Advisor } from "./characters/Advisor/Advisor";
import { Squire } from "./characters/Squire/Squire";

const appContainer = document.querySelector(".app")!;
const cardContainer = document.createElement("ul");
const characterContainerJoffrey = document.createElement("li");
const characterContainerDaenerys = document.createElement("li");
const characterContainerBronn = document.createElement("li");
const characterContainerJaime = document.createElement("li");
const characterContainerTyrion = document.createElement("li");

appContainer.appendChild(cardContainer);
cardContainer.className = "characters-list row list-unstyled";
characterContainerJoffrey.className = "character col";
characterContainerDaenerys.className = "character col";
characterContainerBronn.className = "character col";
characterContainerJaime.className = "character col";
characterContainerTyrion.className = "character col";

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

const cardJoffrey = new CardComponent(cardContainer, characterContainerJoffrey);
