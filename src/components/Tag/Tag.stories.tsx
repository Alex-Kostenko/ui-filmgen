import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tag from "./Tag";

export default {
  title: "UI/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const pinkTag = Template.bind({});

pinkTag.args = {
  label: "Romance",
};

export const blackTag = Template.bind({});

blackTag.args = {
  label: "Tag",
  className: "blackTag",
};
