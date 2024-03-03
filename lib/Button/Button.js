import html from "./button.html";
import css from "./button.css";

export class Button extends HTMLElement {
  static get observedAttributes() {
    return ["label", "button-color", "size", "primary"];
  }

  #sheet;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    this.#sheet = new CSSStyleSheet();
    this.#sheet.replaceSync(css);

    const template = document.createElement("template");
    template.innerHTML = html;

    shadowRoot.adoptedStyleSheets = [this.#sheet];
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    const button = this.shadowRoot.querySelector("button");

    switch (name) {
      case "label": {
        button.innerText = newValue;
        break;
      }
      case "button-color": {
        button.style.backgroundColor = newValue;
        break;
      }
      case "size": {
        const [type, _size] = button.className.trim().split(" ");
        this.shadowRoot.querySelector("button").className = [
          type,
          newValue,
        ].join(" ");
        break;
      }
      case "primary": {
        const [_type, size] = button.className.trim().split(" ");
        this.shadowRoot.querySelector("button").className = [
          "primary",
          size,
        ].join(" ");
        break;
      }
      default: {
        throw new Error("unsupported attribute");
      }
    }
  }
}
