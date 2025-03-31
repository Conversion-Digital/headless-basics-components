import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NumberParticleEffects from './NumberParticleEffects';

export default {
  title: 'Components/Animations/NumberParticleEffects（legacy）',
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
