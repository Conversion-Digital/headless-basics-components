import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { LogoCarousel } from './carousel';

const meta: Meta<typeof LogoCarousel> = {
  title: 'Components/LogoCarousel',
  component: LogoCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
      <div className="w-[800px] scroll">
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