import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ImageGalleryMask from './imageGalleryMask';

export default {
  title: ' Components/Images/ImageGalleryMask',
  component: ImageGalleryMask,
} as Meta<typeof ImageGalleryMask>;

const Template: StoryFn<typeof ImageGalleryMask> = (args) => <ImageGalleryMask {...args} />;

export const Default = Template.bind({});
Default.args = {
  leftImage: 'https://i.imgur.com/xLJwMvq.jpeg',
  rightImage: 'https://i.imgur.com/qLiGdY6.jpeg',
};
