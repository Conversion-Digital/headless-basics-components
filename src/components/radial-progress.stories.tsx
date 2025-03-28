import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RadialProgress from "./radial-progress";

const meta = {
  title: "Components/Feedback/RadialProgress",
  component: RadialProgress,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RadialProgress>;

export default meta;
type Story = StoryObj<typeof RadialProgress>;

export const Default: Story = {
  args: {
    value: 70,
    children: "70%",
  },
};

export const WithDifferentValues: Story = {
  render: () => (
    <div className="flex gap-4">
      <RadialProgress value={0}>0%</RadialProgress>
      <RadialProgress value={25}>25%</RadialProgress>
      <RadialProgress value={50}>50%</RadialProgress>
      <RadialProgress value={75}>75%</RadialProgress>
      <RadialProgress value={100}>100%</RadialProgress>
    </div>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-end">
      <RadialProgress value={70} size="3rem">70%</RadialProgress>
      <RadialProgress value={70} size="4rem">70%</RadialProgress>
      <RadialProgress value={70} size="5rem">70%</RadialProgress>
      <RadialProgress value={70} size="6rem">70%</RadialProgress>
    </div>
  ),
};

export const CustomThickness: Story = {
  render: () => (
    <div className="flex gap-4">
      <RadialProgress value={70} thickness="2px">2px</RadialProgress>
      <RadialProgress value={70} thickness="4px">4px</RadialProgress>
      <RadialProgress value={70} thickness="6px">6px</RadialProgress>
      <RadialProgress value={70} thickness="8px">8px</RadialProgress>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex gap-4">
      <RadialProgress value={70} color="primary">70%</RadialProgress>
      <RadialProgress value={70} color="secondary">70%</RadialProgress>
      <RadialProgress value={70} color="success">70%</RadialProgress>
      <RadialProgress value={70} color="error">70%</RadialProgress>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="flex gap-4">
      <RadialProgress value={85} size="6rem">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">85%</span>
          <span className="text-xs">Complete</span>
        </div>
      </RadialProgress>
      <RadialProgress value={42} size="6rem">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">42</span>
          <span className="text-xs">Tasks</span>
        </div>
      </RadialProgress>
    </div>
  ),
};
