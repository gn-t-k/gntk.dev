import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import PostLink from '../components/post-link';
import SEO from '../components/seo';

const Home: FC<PageProps<GatsbyTypes.allContentfulPostQuery>> = ({ data }) => {
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

export const query = graphql`
  query allContentfulPost {
    allContentfulPost {
      edges {
        node {
          title
          image {
            title
            file {
              url
            }
          }
          description {
            description
          }
          slug
          updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
        }
      }
    }
  }
`;

export default Home;
