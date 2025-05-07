import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import PostNote from "./PostNote";

const meta: Meta<typeof PostNote> = {
  title: "Components/Data Display/PostNote",
  component: PostNote,
  argTypes: {
    title: { control: "text", description: "The title of the note." },
    date: { control: "text", description: "The date displayed on the note." },
    description: { control: "text", description: "The description content of the note." },
    drawOutlineTime: {
      control: "number",
      description: "Time in seconds for the outline animation to complete.",
    },
    fadeInTime: {
      control: "number",
      description: "Time in seconds for the fade-in animation to complete.",
    },
    animationDelay: {
      control: "number",
      description: "Delay in seconds before fade-in animations start.",
    },
    width: { control: "number", description: "Width of the note container." },
    height: { control: "number", description: "Height of the note container." },
  },
  parameters: {
    docs: {
      description: {
        component: "The `PostNote` component displays a note with animations for outline drawing and fade-in effects. Use `drawOutlineTime`, `fadeInTime`, and `animationDelay` to control the animation timings.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PostNote>;

export const Default: Story = {
  args: {
    title: "Sample Note",
    date: "2023-10-01",
    description: "This is a sample description for the PostNote component.",
    drawOutlineTime: 5,
    fadeInTime: 5,
    animationDelay: 3,
    width: 300,
    height: 420,
  },
};

export const CustomAnimations: Story = {
  args: {
    title: "Custom Animations",
    date: "2023-10-02",
    description: "This note has custom animation timings.",
    drawOutlineTime: 3,
    fadeInTime: 2,
    animationDelay: 1,
    width: 350,
    height: 490,
  },
};

