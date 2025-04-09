import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import PostNote from "./PostNote";

export default {
  title: "Components/PostNote",
  component: PostNote,
} as Meta;

const Template: StoryFn<typeof PostNote> = (args) => <PostNote {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "University of Tasmania",
  date: "March 2017 - July 2019",
  description: "Master of Information Technology and System",
  drawOutlineTime: 5,
  fadeInTime: 5,
  animationDelay: 3,
  size: 500,
};
