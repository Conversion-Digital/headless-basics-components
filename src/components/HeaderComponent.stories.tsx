import React from "react";
import { Meta, Story } from "@storybook/react";
import { HeaderComponent, HeaderProps } from "./HeaderComponent";

export default {
  title: "Components/HeaderComponent",
  component: HeaderComponent,
  argTypes: {
    title: { control: "text" },
    backgroundColor: { control: "color" },
    isSticky: { control: "boolean" },
    className: { control: "text" },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <HeaderComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "My JOURNEY",
  backgroundColor: "bg-gray-500",
  isSticky: false,
};

export const StickyHeader = Template.bind({});
StickyHeader.args = {
  title: "Sticky Header",
  backgroundColor: "bg-blue-500",
  isSticky: true,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  title: "Custom Header",
  backgroundColor: "bg-green-500",
  isSticky: false,
  className: "shadow-lg border border-black",
};
