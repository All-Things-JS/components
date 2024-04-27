import Carousel from "./Carousel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Carousel",
  tags: ["autodocs"],
  render: (args) => {
    if (!customElements.get("example-carousel")) {
      customElements.define("example-carousel", Carousel);
    }

    const carousel = document.createElement("example-carousel");
    carousel.setAttribute("img-srcs", args.imgSrcs);

    return carousel;
  },
};

export const SingleImage = {
  args: {
    imgSrcs: "./static/laptop.jpg",
  },
};
