import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Mask from "./mask";

const meta = {
  title: "Components/Data Display/Mask",
  component: Mask,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Mask>;

export default meta;
type Story = StoryObj<typeof Mask>;

const sampleImage = "https://picsum.photos/200";

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Mask src={sampleImage} variant="circle" />
      <Mask src={sampleImage} variant="square" />
      <Mask src={sampleImage} variant="hexagon" />
    </div>
  ),
};

export const Geometric: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Mask src={sampleImage} variant="triangle" />
      <Mask src={sampleImage} variant="pentagon" />
      <Mask src={sampleImage} variant="hexagon" />
      <Mask src={sampleImage} variant="decagon" />
      <Mask src={sampleImage} variant="diamond" />
    </div>
  ),
};

export const Parallelograms: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Mask src={sampleImage} variant="parallelogram" />
      <Mask src={sampleImage} variant="parallelogram2" />
      <Mask src={sampleImage} variant="parallelogram3" />
      <Mask src={sampleImage} variant="parallelogram4" />
    </div>
  ),
};

export const Stars: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Mask src={sampleImage} variant="star" />
      <Mask src={sampleImage} variant="star2" />
    </div>
  ),
};

export const Triangles: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Mask src={sampleImage} variant="triangle" />
      <Mask src={sampleImage} variant="triangle2" />
      <Mask src={sampleImage} variant="triangle3" />
      <Mask src={sampleImage} variant="triangle4" />
    </div>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Mask src={sampleImage} variant="squircle" className="w-16 h-16" />
      <Mask src={sampleImage} variant="squircle" className="w-24 h-24" />
      <Mask src={sampleImage} variant="squircle" className="w-32 h-32" />
    </div>
  ),
};

export const WithHover: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Mask 
        src={sampleImage} 
        variant="hexagon" 
        className="w-32 h-32 transition-transform hover:scale-110" 
      />
      <Mask 
        src={sampleImage} 
        variant="star" 
        className="w-32 h-32 transition-transform hover:rotate-45" 
      />
      <Mask 
        src={sampleImage} 
        variant="circle" 
        className="w-32 h-32 transition-all hover:shadow-lg hover:-translate-y-1" 
      />
    </div>
  ),
};
