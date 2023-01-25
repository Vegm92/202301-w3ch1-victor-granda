import type Character from "../characters/Character/Character";
import { type ImageComponentStructure } from "../types";

class ImageComponent implements ImageComponentStructure {
  element: Element;

  constructor(
    parentElement: Element,
    tagName: string,
    className: string,
    character: Character
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);
    const htmlImageElement = this.element as HTMLImageElement;
    htmlImageElement.src = character.characterData.imageSource;
    htmlImageElement.alt = `${character.characterData.name} ${character.characterData.family}`;

    this.render();
  }

  render() {
    this.element.innerHTML = (this.element as HTMLImageElement).src;
  }
}

export default ImageComponent;
