import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";

const meta = {
  title: "Components/Data Entry/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    className: "w-[300px]",
  },
};

export const WithMinMax: Story = {
  render: () => (
    <div className="w-[300px] space-y-8">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Percentage (0-100)</h4>
        <Slider defaultValue={[40]} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Temperature (-20 to 40°C)</h4>
        <Slider defaultValue={[20]} min={-20} max={40} step={1} />
      </div>
    </div>
  ),
};

export const WithSteps: Story = {
  render: () => (
    <div className="w-[300px] space-y-8">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Step: 10</h4>
        <Slider defaultValue={[50]} step={10} />
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Step: 25</h4>
        <Slider defaultValue={[75]} step={25} />
      </div>
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="w-[300px] space-y-8">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Price Range</h4>
        <Slider defaultValue={[30, 70]} />
        <div className="flex justify-between">
          <span className="text-sm text-slate-500">$30</span>
          <span className="text-sm text-slate-500">$70</span>
        </div>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
    className: "w-[300px]",
  },
};

export const WithLabels: Story = {
  render: () => (
    <div className="w-[300px] space-y-8">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Volume</h4>
        <Slider defaultValue={[60]} />
        <div className="flex justify-between">
          <span className="text-sm text-slate-500">0%</span>
          <span className="text-sm text-slate-500">60%</span>
          <span className="text-sm text-slate-500">100%</span>
        </div>
      </div>
    </div>
  ),
};
