import type { Meta, StoryObj } from "@storybook/react";
import ImageWithOverlay from "./ImageWithOverlay";

const meta = {
  title: "Components/Data Display/Media",
  parameters: {
    layout: "centered",
  },
  component: ImageWithOverlay,
} satisfies Meta<typeof ImageWithOverlay>;

export default meta;

type ImageStory = StoryObj<typeof ImageWithOverlay>;

export const DefaultImage: ImageStory = {
  args: {
    image: {
      image: "https://picsum.photos/400/300",
      description: "Sample image",
      title: "Sample Image",
      width: 400,
      height: 300,
    },
  },
};
  
export const ImageWithCustomVariation: ImageStory = {
  args: {
    image: {
      image: "https://picsum.photos/400/300",
      description: "Sample image with custom variation",
      title: "Sample Image with Custom Variation",
      width: 400,
      height: 300,
    },
    variation: "captionAlways",
  },
};


export const ImageWithHoverCaption: ImageStory = {
  args: {
    image: {
      image: "https://picsum.photos/400/300",
      description: "Hover to see this caption",
      title: "Hover Caption Image",
      width: 400,
      height: 300,
    },
    variation: "captionHover",
  },
};
