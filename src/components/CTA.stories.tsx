import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CTA from './CTA';

const meta = {
  title: 'Components/CTA',
  component: CTA,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof CTA>;

export const Default: Story = {
  args: {
    title: 'Join Our Family',
    text: 'Become a part of our amazing community and enjoy exclusive benefits.',
    onClick: action('CTA clicked'),
    variant: 'default',
  },
};

export const Light: Story = {
  args: {
    title: 'Join Our Family',
    text: 'Become a part of our amazing community and enjoy exclusive benefits.',
    onClick: action('CTA clicked'),
    variant: 'light',
  },
};
