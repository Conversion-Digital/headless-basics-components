import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta = {
  title: "Components/Feedback/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
    className: "w-[500px]",
  },
};

export const WithDifferentValues: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <Progress value={0} />
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <Progress 
        value={65} 
        className="bg-blue-200 dark:bg-blue-800 [&>.ProgressIndicator]:bg-blue-600! [&>.ProgressIndicator]:!dark:bg-blue-400"
      />
      <Progress 
        value={45} 
        className="bg-green-200 dark:bg-green-800 [&>.ProgressIndicator]:bg-green-600! [&>.ProgressIndicator]:!dark:bg-green-400"
      />
      <Progress 
        value={85} 
        className="bg-red-200 dark:bg-red-800 [&>.ProgressIndicator]:bg-red-600! [&>.ProgressIndicator]:!dark:bg-red-400"
      />
    </div>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <Progress value={60} className="h-2" />
      <Progress value={60} className="h-4" />
      <Progress value={60} className="h-6" />
      <Progress value={60} className="h-8" />
    </div>
  ),
};
