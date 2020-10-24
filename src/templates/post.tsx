import React, { FC } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import 'prismjs/themes/prism-tomorrow.css';

type Props = {
  className?: string;
  pageContext: {
    post: {
      node: Pick<GatsbyTypes.ContentfulPost, 'title' | 'body' | 'updatedAt'> & {
        readonly image: GatsbyTypes.Maybe<
          Pick<GatsbyTypes.ContentfulAsset, 'title'> & {
            readonly file: GatsbyTypes.Maybe<Pick<GatsbyTypes.ContentfulAssetFile, 'url'>>;
          }
        >;
        readonly description: GatsbyTypes.Maybe<
          Pick<GatsbyTypes.contentfulPostDescriptionTextNode, 'description'>
        >;
      };
    };
  };
};

const Component: FC<Props> = ({ className, pageContext }) => {
  const post = pageContext?.post;
  const { title, updatedAt, image } = post.node;
  const { body } = post.node;
  const description = post.node.description?.description;

  return (
    <Layout className={className}>
      <Header />
      {title && description && image && image.file && body?.childMarkdownRemark?.html ? (
        <section>
          <SEO title={title} description={description} />
          <div className="post-header">
            <h1>{title}</h1>
            <p>{description}</p>
            <time>{updatedAt}</time>
          </div>
          <img src={image.file.url} alt="post-cover" />
          <div
            dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
            className="post-body"
          />
        </section>
      ) : (
        'ERROR'
      )}
    </Layout>
  );
};

const Post = styled(Component)`
  & > main > section > div.post-header,
  & > main > section > div.post-body {
    max-width: 700px;
    margin: 80px auto;
  }

  & > main > section > img {
    width: 100%;
    height: 100%;
    max-height: 450px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 30px 60px -10px, rgba(0, 0, 0, 0.22) 0 18px 36px -18px;
    object-fit: cover;
  }

  & > main > section > div > time {
    color: #434343;
  }

  & > main > section > div.post-header > p {
    color: #434343;
    overflow-wrap: break-word;
  }

  & > main > section > div.post-body > pre {
    overflow: scroll;
  }

  & > main > section > div.post-body > p > img {
    width: 100%;
    height: auto;
  }

  & > main > section > div.post-body > h2 {
    margin-top: 100px;
  }

  & > main > section > div.post-body > h3 {
    margin-top: 50px;
  }

  & > main > section > div.post-body > h4 {
    margin-top: 25px;
  }
`;

export default Post;
