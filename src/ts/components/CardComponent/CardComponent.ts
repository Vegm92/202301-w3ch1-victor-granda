import type Character from "../../characters/Character/Character";
import CardBodyComponent from "../CardBody/CardBody";
import CardOverlayComponent from "../CardOverlay/CardOverlay";
import ImageComponent from "../ImageComponent";

interface CardComponentStruture {
  element: Element;
}

class CardComponent implements CardComponentStruture {
  element: Element;

  // eslint-disable-next-line max-params
  constructor(
    parentElement: Element,
    secondParentElement: Element,
    tagName: string,
    className: string,
    character: Character
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);
    parentElement.appendChild(secondParentElement);

    const photo = new ImageComponent(
      this.element,
      "img",
      "character_picture card-img-top",
      character
    );
    const body = new CardBodyComponent(
      this.element,
      "div",
      "card-body",
      character
    );
    const overlay = new CardOverlayComponent(
      this.element,
      "div",
      "character__overlay",
      character
    );

    this.element.appendChild(photo.element);
    this.element.appendChild(body.element);
    this.element.appendChild(overlay.element);
  }
}

export default CardComponent;
