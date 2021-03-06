import React from "react";

import Button from "../Component/Button/index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "component/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
  type: "button",
  children: "click",
};

export const submit = Template.bind({});
submit.args = {
  type: "submit",
  children: "submit",
};
