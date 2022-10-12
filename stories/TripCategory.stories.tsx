import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TripCategory } from '../components';

export default {
  title: 'Example/TripCategory',
  component: TripCategory,
} as ComponentMeta<typeof TripCategory>;

const Template: ComponentStory<typeof TripCategory> = (args) => <TripCategory {...args} />;

export const Default = Template.bind({});
Default.args = {
  category: 'domestic',
};