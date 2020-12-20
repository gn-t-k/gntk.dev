import React, { FC } from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import PostLink from '../components/post-link';
import SEO from '../components/seo';

export type Props = {
  data: GatsbyTypes.allContentfulPostQuery;
};

const Home: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title="gntk.dev" description="技術的な学びや日常の気付きのメモなどを書くブログです" />
      <Hero />
      {data.allContentfulPost.edges.map((edge) => (
        <PostLink key={edge.node.slug} post={edge.node} />
      ))}
    </Layout>
  );
};

export default Home;
