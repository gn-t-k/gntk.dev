import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import PostLink, { Props } from '../components/post-link';

export default {
  title: 'PostLink',
  component: PostLink,
} as Meta;

const Template: Story<Props> = ({ post }) => <PostLink post={post} />;

export const Default = Template.bind({});
Default.args = {
  post: {
    title: 'Netlifyでステージング環境を用意する',
    createdAt: '2020年10月25日',
    image: {
      title: 'image title',
      file: {
        url:
          'https://images.ctfassets.net/t8kgtqnqij4r/4ocfV6ZLl0fsQjgtmMTqfZ/f342d3106aea5edcdf29c6eeef5d1400/PR____________________________________________________________1_.png',
      },
    },
    description: {
      description:
        '実機での表示確認など、ローカル環境では確認できない検証があるときはステージング環境が必要になります。NetlifyとGithubを連携させれば、PRを作るごとに自動でステージング環境が用意できます。',
    },
    slug: '20201025-netlify-staging-environment',
    tags: [
      {
        title: 'Netlify',
        slug: 'netlify',
      },
    ],
  },
};
