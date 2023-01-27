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
  dateForSlider: [
    {
      description: "cit odun",
      img: <img src="http://placekitten.com/g/400/201" />,
    },
    {
      description: "cit dwa",
      img: <img src="http://placekitten.com/g/400/200" />,
    },
    {
      description: "cit tru",
      img: <img src="http://placekitten.com/g/400/204" />,
    },
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {};
