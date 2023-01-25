import type Character from "../../characters/Character/Character";

interface CardComponentStruture {
  element: Element;
  character: Character;
}

class CardBodyComponent implements CardComponentStruture {
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
    this.element.innerHTML = `
    <h2 class="character__name card-title h4">${this.character.characterData.name}${this.character.characterData.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${this.character.characterData.age} yrs</li>
                <li>
                  State:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>`;
  }
}

export default CardBodyComponent;
