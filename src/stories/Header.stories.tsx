import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header, { Props } from '../components/header';

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template: Story<Props> = () => <Header />;

export const Default = Template.bind({});
