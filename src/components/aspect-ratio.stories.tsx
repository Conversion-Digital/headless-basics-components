import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./aspect-ratio";

const meta = {
  title: "Components/Data Display/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Square: Story = {
  render: () => (
    <div className="w-[400px]">
      <AspectRatio ratio={1}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="object-cover w-full h-full rounded-md"
        />
      </AspectRatio>
    </div>
  ),
};

export const Landscape: Story = {
  render: () => (
    <div className="w-[400px]">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
          alt="Photo by Alvaro Pinot"
          className="object-cover w-full h-full rounded-md"
        />
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={3 / 4}>
        <img
          src="https://images.unsplash.com/photo-1548586196-aa5803b77379?w=800&dpr=2&q=80"
          alt="Photo by Zoe"
          className="object-cover w-full h-full rounded-md"
        />
      </AspectRatio>
    </div>
  ),
};

export const WithVideo: Story = {
  render: () => (
    <div className="w-[400px]">
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full rounded-md"
        />
      </AspectRatio>
    </div>
  ),
};
