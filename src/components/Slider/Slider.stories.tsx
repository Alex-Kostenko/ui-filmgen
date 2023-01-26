import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SliderComponent from "./Slider";
import "./Slider.css";

export default {
  title: "UI/Slider",
  component: SliderComponent,
} as ComponentMeta<typeof SliderComponent>;

const Template: ComponentStory<typeof SliderComponent> = (args) => (
  <SliderComponent {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  img: <img src="/simpleLeft.svg" alt="my image" />,
};

export const Secondary = Template.bind({});
Secondary.args = {};
