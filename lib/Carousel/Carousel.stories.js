import Carousel from "./Carousel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Carousel",
  tags: ["autodocs"],
  render: () => {
    if (!customElements.get("example-carousel")) {
      customElements.define("example-carousel", Carousel);
    }

    return document.createElement("example-carousel");
  },
};

export const Test = {};
