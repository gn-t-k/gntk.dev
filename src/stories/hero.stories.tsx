import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Hero, { Props } from '../components/hero';

export default {
  title: 'Hero',
  component: Hero,
} as Meta;

const Template: Story<Props> = () => <Hero />;

export const Default = Template.bind({});
