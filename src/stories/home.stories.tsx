import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Home, { Props } from '../templates/home';
import * as PostLinkStories from './post-link.stories';

export default {
  title: 'Home',
  component: Home,
} as Meta;

const Template: Story<Props> = ({ data }) => <Home data={data} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    allContentfulPost: {
      edges: [
        {
          node: { ...PostLinkStories.Default.args.post },
        },
      ],
    },
  },
};
