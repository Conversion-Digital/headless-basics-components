import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {},
};

export const WithIcon: Story = {
  args: {
    showIcon: true,
  }
};

export const MultipleVariants: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-20">
      <Toggle {...args} ariaLabel="Default toggle button">Default</Toggle>
      <Toggle {...args} variant="primary" ariaLabel="Primary toggle button">Primary Variant</Toggle>
      <Toggle {...args} variant="secondary" ariaLabel="Secondary toggle button">Secondary Variant</Toggle>
    </div>
  ),
};