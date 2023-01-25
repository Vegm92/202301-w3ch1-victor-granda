import { type Character } from "./characters/Character/Character";
import { type Fighter } from "./characters/Fighter/Fighter";

export interface CharacterDataStructure {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface CharacterStructure {
  characterData: CharacterDataStructure;
  isAlive: boolean;
  series: string;
  communicate: () => string;
  die: () => void;
}

export interface KingStructure extends CharacterStructure {
  yearsOfReign: number;
}

export interface FighterStructure extends CharacterStructure {
  weapon: string;
  dexterity: number;
}

export interface SquireStructure extends CharacterStructure {
  serves: Fighter;
  kissAssLevel: number;
}

export interface AdvisorStructre extends CharacterStructure {
  advises: Character;
}
export interface CardComponentStructure {
  element: Element;
}

export interface ImageComponentStructure {
  element: Element;
}

export interface CardBodyComponentStructure {
  element: Element;
}
export interface CardOverlayComponentStructure {
  element: Element;
}
