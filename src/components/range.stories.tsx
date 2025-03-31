import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Range from "./range";

const meta = {
  title: "Components/Feedback/Range",
  component: Range,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Range>;

export default meta;
type Story = StoryObj<typeof Range>;

export const Default: Story = {
  args: {
    defaultValue: 50,
    className: "w-[300px]",
  },
};

export const WithSteps: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Range defaultValue={50} step={10} />
      <Range defaultValue={50} step={20} />
      <Range defaultValue={50} step={25} />
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Range size="xs" defaultValue={25} />
      <Range size="sm" defaultValue={50} />
      <Range size="md" defaultValue={75} />
      <Range size="lg" defaultValue={100} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Range color="primary" defaultValue={60} />
      <Range color="secondary" defaultValue={60} />
      <Range color="accent" defaultValue={60} />
      <Range color="success" defaultValue={60} />
      <Range color="warning" defaultValue={60} />
      <Range color="info" defaultValue={60} />
      <Range color="error" defaultValue={60} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: 40,
    disabled: true,
    className: "w-[300px]",
  },
};

export const WithMinMax: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Range min={20} max={80} defaultValue={50} step={5} />
      <div className="flex justify-between text-sm text-slate-500">
        <span>20%</span>
        <span>80%</span>
      </div>
    </div>
  ),
};
