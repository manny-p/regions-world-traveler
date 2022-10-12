import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TripCard, TripCardSet } from '../components';

export default {
  title: 'Example/TripCard',
  component: TripCard,
} as ComponentMeta<typeof TripCard>;

const Template: ComponentStory<typeof TripCard> = (args) => <TripCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  location: 'Location',
  description: 'Description',
  category: 'Domestic',
  date: 'April 15, 2020',
  image: '//source.unsplash.com/random/400x400',
  featured: true,
};

export const AsSet = () => {
  return (
    <TripCardSet items={[
      {
        id: '1',
        location: 'Location',
        description: 'Description',
        category: 'domestic',
        date: 'April 15, 2020',
        image: '//source.unsplash.com/random/400x400',
        featured: true,
      },
      {
        id: '2',
        location: 'Location',
        description: 'Description',
        category: 'domestic',
        date: 'April 15, 2020',
        image: '//source.unsplash.com/random/400x400',
        featured: false,
      },
      {
        id: '3',
        location: 'Location',
        description: 'Description',
        category: 'domestic',
        date: 'April 15, 2020',
        image: '//source.unsplash.com/random/400x400',
        featured: false,
      }
    ]} />
  )
};
AsSet.parameters = { controls: { include: [] } };