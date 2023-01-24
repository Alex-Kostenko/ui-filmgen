import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tag from "./Tag";

export default {
  title: "UI/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Romance",
  colorBack: "white",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Active tag",
  colorBack: "#f33f3f",
};
