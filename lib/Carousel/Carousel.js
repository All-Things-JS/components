import html from "./Carousel.html?raw";

export default class Carousel extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = html;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
