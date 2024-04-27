import html from "./Carousel.html?raw";

export default class Carousel extends HTMLElement {
  static get observedAttributes() {
    return ["img-srcs"];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = html;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    const carousel = this.shadowRoot.querySelector(".carousel");

    switch (name) {
      case "img-srcs": {
        const imgSrcs = newValue.split(" ");
        for (const imgSrc of imgSrcs) {
          const img = document.createElement("img");
          img.src = imgSrc;
          carousel.appendChild(img);
        }
        break;
      }
      default: {
        throw new Error("unsupported attribute");
      }
    }
  }
}
