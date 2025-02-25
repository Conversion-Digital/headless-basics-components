import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Countdown from "./countdown";

const meta = {
  title: "Components/Countdown",
  component: Countdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Countdown>;

export default meta;
type Story = StoryObj<typeof Countdown>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-4">
      <Countdown value={0} />
      <Countdown value={25} />
      <Countdown value={50} />
      <Countdown value={75} />
      <Countdown value={100} />
    </div>
  ),
};

export const WithCustomSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Countdown value={75} className="text-xl" />
      <Countdown value={75} className="text-2xl" />
      <Countdown value={75} className="text-3xl" />
      <Countdown value={75} className="text-4xl" />
      <Countdown value={75} className="text-5xl" />
    </div>
  ),
};

export const WithCustomColors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Countdown value={60} className="text-2xl text-primary" />
      <Countdown value={60} className="text-2xl text-secondary" />
      <Countdown value={60} className="text-2xl text-accent" />
      <Countdown value={60} className="text-2xl text-success" />
      <Countdown value={60} className="text-2xl text-warning" />
      <Countdown value={60} className="text-2xl text-error" />
    </div>
  ),
};

export const WithCustomStyles: Story = {
  render: () => (
    <div className="flex gap-4">
      <Countdown 
        value={80} 
        className="text-3xl font-bold text-primary bg-primary/10 p-4 rounded-lg"
      />
      <Countdown 
        value={40} 
        className="text-3xl font-bold text-error bg-error/10 p-4 rounded-lg"
      />
      <Countdown 
        value={20} 
        className="text-3xl font-bold text-warning bg-warning/10 p-4 rounded-lg"
      />
    </div>
  ),
};
