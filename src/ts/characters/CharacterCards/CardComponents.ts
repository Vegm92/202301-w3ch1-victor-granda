import type CharacterCardStructure from "./CharacterCardStructure";

class CardComponent implements CharacterCardStructure {
  element: Element;

  constructor(character: string) {
    this.element = document.createElement("div");
    document.querySelector(".card")?.appendChild(this.element);
    this.element.innerHTML = `<p>${character}</p>`;
  }
}

export default CardComponent;
