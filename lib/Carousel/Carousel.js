export default class Carousel extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `<div>Carousel</div>`;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
