import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { LogoCarousel } from './carousel';

const meta: Meta<typeof LogoCarousel> = {
  title: 'Components/Data Display/LogoCarousel',
  component: LogoCarousel,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof LogoCarousel>;

const Logo = ({ text }: { text: string }) => (
  <div className="flex h-20 w-40 items-center justify-center bg-gray-200 rounded">
    {text}
  </div>
);

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="w-[800px] overflow-hidden">
        <Story />
      </div>
    ),
  ],
  args: {
    items: [
      <Logo key="1" text="Logo 1" />,
      <Logo key="2" text="Logo 2" />,
      <Logo key="3" text="Logo 3" />,
    ],
    speed: 30,
    pauseOnHover: true,
  },
};

export const FastSpeed: Story = {
  decorators: [
    (Story) => (
      <div className="w-[800px] overflow-hidden">
        <Story />
      </div>
    ),
  ],
  args: {
    items: [
      <Logo key="1" text="Logo 1" />,
      <Logo key="2" text="Logo 2" />,
      <Logo key="3" text="Logo 3" />,
    ],
    speed: 10, 
    pauseOnHover: true,
  },
};

export const NoPauseOnHover: Story = {
  decorators: [
    (Story) => (
      <div className="w-[800px] overflow-hidden">
        <Story />
      </div>
    ),
  ],
  args: {
    items: [
      <Logo key="1" text="Logo 1" />,
      <Logo key="2" text="Logo 2" />,
      <Logo key="3" text="Logo 3" />,
    ],
    speed: 30,
    pauseOnHover: false, 
  },
};

export const WithImages: Story = {
  decorators: [
    (Story) => (
      <div className="w-[800px] overflow-hidden">
        <Story />
      </div>
    ),
  ],
  args: {
    items: [
      <img key="1" src="https://placehold.co/600x400" alt="Image 1" className="h-20 w-auto" />,
      <img key="2" src="https://placehold.co/600x400" alt="Image 2" className="h-20 w-auto" />,
      <img key="3" src="https://placehold.co/600x400" alt="Image 3" className="h-20 w-auto" />,
    ],
    speed: 20,
    pauseOnHover: true,
  },
};