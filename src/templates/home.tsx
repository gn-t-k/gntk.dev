import React, { FC } from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import PostLink from '../components/post-link';
import SEO from '../components/seo';

export type Props = {
  data: {
    readonly allContentfulPost: {
      readonly edges: ReadonlyArray<{
        readonly node: Pick<GatsbyTypes.ContentfulPost, 'title' | 'slug' | 'updatedAt'> & {
          readonly image: GatsbyTypes.Maybe<
            Pick<GatsbyTypes.ContentfulAsset, 'title'> & {
              readonly file: GatsbyTypes.Maybe<Pick<GatsbyTypes.ContentfulAssetFile, 'url'>>;
            }
          >;
          readonly description: GatsbyTypes.Maybe<
            Pick<GatsbyTypes.contentfulPostDescriptionTextNode, 'description'>
          >;
        };
      }>;
    };
  };
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
