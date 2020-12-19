import React, { FC } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import 'prismjs/themes/prism.css';

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

  & > main > section > div.post-body > p,
  & > main > section > div.post-body > ol li,
  & > main > section > div.post-body > ul li {
    margin-top: 0;
    line-height: 1.9;
  }

  & > main > section > div.post-body pre {
    margin: 20px 0;
  }

  & > main > section > div.post-body > p > img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }

  & > main > section > div.post-body > h2 {
    margin: 100px 0 20px;
  }

  & > main > section > div.post-body > h3 {
    margin: 50px 0 20px;
    font-size: 1.2em;
  }

  & > main > section > div.post-body > h4 {
    margin: 40px 0 15px;
    font-size: 1.1em;
  }

  & > main > section > div.post-body > h5 {
    margin: 30px 0 15px;
    font-size: 1em;
  }

  & > main > section > div.post-body > p > code,
  & > main > section > div.post-body > ol code,
  & > main > section > div.post-body > ul code {
    padding: 0.2em 0.4em;
    color: #24292e;
    background: rgba(27, 31, 35, 0.05);
  }
`;

export default Post;
