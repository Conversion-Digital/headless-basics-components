import React from 'react';
import { Meta, Story } from '@storybook/react';
import ChatBox, { ChatBoxProps } from './ChatBox';

export default {
  title: 'Components/ChatBox',
  component: ChatBox,
  argTypes: {
    message: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    animationDuration: { control: 'number' },
    variant: { control: 'radio', options: ['default', 'flip'] }, // Added variant control
  },
} as Meta;

const Template: Story<ChatBoxProps> = (args) => <ChatBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Hello, this is a chat bubble!',
  width: 700,
  animationDuration: 2.5,
  variant: 'default',
};

export const Flipped = Template.bind({});
Flipped.args = {
  message: 'Hello, this is a flipped chat bubble!',
  width: 700,
  animationDuration: 2.5,
  variant: 'flip',
};
