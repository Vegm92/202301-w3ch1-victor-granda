import { Advisor } from "../../characters/Advisor/Advisor";
import type Character from "../../characters/Character/Character";
import { Fighter } from "../../characters/Fighter/Fighter";
import { King } from "../../characters/King/King";
import { Squire } from "../../characters/Squire/Squire";
import { type CardOverlayComponentStructure } from "../../types";

class CardOverlayComponent implements CardOverlayComponentStructure {
  element: Element;
  character: Character;

  constructor(
    parentElement: Element,
    tagName: string,
    className: string,
    character: Character
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);
    this.character = character;

    this.render();
  }

  render() {
    if (this.character instanceof King) {
      this.element.innerHTML = ` <ul class="list-unstyled">
        <li>Years of Reign: ${this.character.yearsOfReign}</li>
      </ul>
      <div class="character__actions">
        <button class="character__action btn">speak</button>
        <button class="character__action btn">die</button>
      </div>`;
    } else if (this.character instanceof Fighter) {
      this.element.innerHTML = ` <ul class="list-unstyled">
        <li>Weapon: ${this.character.weapon}</li>
        <li>Dexterity: ${this.character.dexterity}</li>
      </ul>
        <div class="character__actions">
        <button class="character__action btn">speak</button>
        <button class="character__action btn">die</button>
      </div>`;
    } else if (this.character instanceof Squire) {
      this.element.innerHTML = `<ul class="list-unstyled">
        <li>Kiss Ass level: ${this.character.kissAssLevel}</li>
        <li>Advises to: ${this.character.serves.characterData.name}</li>
      </ul>
        <div class="character__actions">
        <button class="character__action btn">speak</button>
        <button class="character__action btn">die</button>
      </div>`;
    } else if (this.character instanceof Advisor) {
      this.element.innerHTML = `<ul class="list-unstyled">
        <li>Serves to: ${this.character.advises.characterData.name}</li>
      </ul>
        <div class="character__actions">
        <button class="character__action btn">speak</button>
        <button class="character__action btn">die</button>
      </div>`;
    }
  }
}

export default CardOverlayComponent;
