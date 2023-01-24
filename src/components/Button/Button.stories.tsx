import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import "./Button.css";

export default {
  title: "UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Continue",
  onClick: () => console.log("1"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "BTN",
  onMouseOver: () => console.log("q"),
};
