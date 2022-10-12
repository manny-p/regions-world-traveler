import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const AsLink = Template.bind({});
AsLink.args = {
  children: 'Button',
  href: '#example',
};

export const AsButton = Template.bind({});
AsButton.args = {
  children: 'Button',
  onClick: () => console.log('clicked the button'),
};