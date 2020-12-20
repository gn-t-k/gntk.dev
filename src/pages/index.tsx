import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import Home from '../templates/home';

const Index: FC<PageProps<GatsbyTypes.allContentfulPostQuery>> = ({ data }) => {
  return <Home data={data} />;
};

export const query = graphql`
  query allContentfulPost {
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
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
          createdAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
          tags {
            title
            slug
          }
        }
      }
    }
  }
`;

export default Index;
