import { Button } from "../dist/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Button",
  tags: ["autodocs"],
  render: (args) => {
    if (!customElements.get("example-button")) {
      customElements.define("example-button", Button);
    }

    const exampleButton = document.createElement("example-button");
    exampleButton.setAttribute("label", args.label);
    exampleButton.setAttribute("button-color", args.buttonColor);
    exampleButton.setAttribute("size", args.size || "medium");

    if (args.primary) {
      exampleButton.setAttribute("primary", "");
    }

    exampleButton.onclick = args.onClick;

    return exampleButton;
  },
  argTypes: {
    buttonColor: { control: "color" },
    onClick: { action: "onClick" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
