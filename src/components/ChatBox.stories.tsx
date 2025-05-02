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
    variant: { 
      control: 'radio', 
      options: ['default', 'flip'], 
      description: 'Controls the orientation of the chat bubble. "default" shows the bubble in its normal orientation, while "flip" mirrors it horizontally.' 
    },
    contentAlignment: { 
      control: 'radio', 
      options: ['left', 'right', 'center'], 
      description: 'Controls the horizontal alignment of the content inside the chat bubble. Options are "left", "right", and "center".' 
    },
  },
} as Meta;

const Template: Story<ChatBoxProps> = (args) => <ChatBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Hello, this is a chat bubble!',
  variant: 'default',
};

export const Flipped = Template.bind({});
Flipped.args = {
  message: 'Hello, this is a flipped chat bubble!',
  variant: 'flip',
};