import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Kbd from "./kbd";

const meta = {
  title: "Components/Data Display/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⌃</Kbd>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Kbd size="xs">⌘</Kbd>
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="md">⌘</Kbd>
      <Kbd size="lg">⌘</Kbd>
    </div>
  ),
};

export const Combinations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-1">
        <Kbd>⌘</Kbd>
        <span>+</span>
        <Kbd>K</Kbd>
        <span className="ml-2 text-sm text-slate-500">Open Command Menu</span>
      </div>
      <div className="flex gap-1">
        <Kbd>⌘</Kbd>
        <span>+</span>
        <Kbd>⇧</Kbd>
        <span>+</span>
        <Kbd>P</Kbd>
        <span className="ml-2 text-sm text-slate-500">Open Project</span>
      </div>
      <div className="flex gap-1">
        <Kbd>⌃</Kbd>
        <span>+</span>
        <Kbd>⌥</Kbd>
        <span>+</span>
        <Kbd>Del</Kbd>
        <span className="ml-2 text-sm text-slate-500">Force Quit</span>
      </div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="flex gap-4">
      <Kbd>Enter</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Backspace</Kbd>
      <Kbd>Delete</Kbd>
      <Kbd>Escape</Kbd>
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <p className="text-sm text-slate-700 dark:text-slate-300">
      Press <Kbd>⌘</Kbd> + <Kbd>S</Kbd> to save or <Kbd>⌘</Kbd> + <Kbd>⇧</Kbd> + <Kbd>S</Kbd> to save as. 
      You can also press <Kbd>⌘</Kbd> + <Kbd>Q</Kbd> to quit the application.
    </p>
  ),
};
