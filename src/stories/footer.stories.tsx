import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Footer, { Props } from '../components/footer';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

const Template: Story<Props> = () => <Footer />;

export const Default = Template.bind({});
