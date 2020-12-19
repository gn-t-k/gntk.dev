import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Post, { Props } from '../templates/post';
import pageContextData from '../data/postStoryData.json';

export default {
  title: 'Post',
  component: Post,
} as Meta;

const Template: Story<Props> = ({ pageContext }) => <Post pageContext={pageContext} />;

export const Default = Template.bind({});
const args = ({ pageContext: pageContextData } as unknown) as Props;
Default.args = args;
