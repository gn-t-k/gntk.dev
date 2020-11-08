import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import Home from '../templates/home';

const Index: FC<PageProps<GatsbyTypes.allContentfulPostQuery>> = ({ data }) => {
  return <Home data={data} />;
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

export default Index;
