import { type Character } from "../Character/Character";
import { type Fighter } from "../Fighter/Fighter";

export type CharacterDataStructure = {
  name: string;
  family: string;
  age: number;
  imageSource: string;
};

export type CharacterStructure = {
  characterData: CharacterDataStructure;
  isAlive: boolean;
  series: string;
  communicate: () => string;
  die: () => void;
};

export type KingStructure = {
  yearsOfReign: number;
} & CharacterStructure;

export type FighterStructure = {
  weapon: string;
  dexterity: number;
} & CharacterStructure;

export type SquireStructure = {
  serves: Fighter;
  kissAssLevel: number;
} & CharacterStructure;

export type AdvisorStructre = {
  advises: Character;
} & CharacterStructure;
