import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    duration: { control: "number" },
    type: { control: "radio", options: ["linear", "circular"] },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Linear: Story = {
  args: {
    duration: 5000,
    type: "linear",
  },
};

export const Circular: Story = {
  args: {
    duration: 5000,
    type: "circular",
  },
};
