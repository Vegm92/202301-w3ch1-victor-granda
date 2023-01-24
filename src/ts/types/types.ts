import { type Character } from "../characters/Character/Character";
import { type Fighter } from "../characters/Fighter/Fighter";

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
