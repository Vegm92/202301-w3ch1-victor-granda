interface ComponentSqueleton {
  element: Element;
}

class Component implements ComponentSqueleton {
  element: Element;

  constructor(parentElement: Element, tagName: string, ClassName: string) {
    this.element = document.createElement(tagName);
    this.element.className = ClassName;
    parentElement.appendChild(this.element);

    this.render();
  }

  render() {
    return this.element;
  }
}

export default Component;
