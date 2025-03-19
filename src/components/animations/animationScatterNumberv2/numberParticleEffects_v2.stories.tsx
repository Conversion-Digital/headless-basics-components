import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NumberParticleEffects from './numberParticleEffects_v2';

export default {
  title: 'Components/Animations/NumberParticleEffects_v2',
  component: NumberParticleEffects,
  argTypes: {
    fromNum: { control: 'number' },
    toNum: { control: 'number' },

  },
} as Meta;

const Template: StoryFn = (args) => <NumberParticleEffects {...args} />;

export const Default = Template.bind({});
Default.args = {
  fromNum: 0,
  toNum: 1,

};
