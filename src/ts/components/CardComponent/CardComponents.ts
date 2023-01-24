import type Character from "../../characters/Character/Character";

interface CardComponentStruture {
  element: Element;
}

class CardComponent implements CardComponentStruture {
  element: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);

    this.render();
  }

  render() {
    return this.element;
  }
}

export default CardComponent;
