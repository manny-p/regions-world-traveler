import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from '../components';

export default {
  title: 'Example/App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <h2>Page contents go here!</h2>
  ),
};