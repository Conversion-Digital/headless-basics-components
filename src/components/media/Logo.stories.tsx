import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./logo";

const meta = {
  title: "Components/Logo",
  parameters: {
    layout: "centered",
  },
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;

type LogoStory = StoryObj<typeof Logo>;
export const DefaultLogo: LogoStory = {
  args: {
    image: {
      image: "https://picsum.photos/100/100",
        description: "Company Logo",
        title: "Company Logo",
        width: 100,
        height: 100,
    },
    className: "rounded-full",
  },
};