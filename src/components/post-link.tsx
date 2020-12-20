import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export type Props = {
  className?: string;
  post: Pick<GatsbyTypes.ContentfulPost, 'title' | 'slug' | 'createdAt'> & {
    readonly image: GatsbyTypes.Maybe<
      Pick<GatsbyTypes.ContentfulAsset, 'title'> & {
        readonly file: GatsbyTypes.Maybe<Pick<GatsbyTypes.ContentfulAssetFile, 'url'>>;
      }
    >;
    readonly description: GatsbyTypes.Maybe<
      Pick<GatsbyTypes.contentfulPostDescriptionTextNode, 'description'>
    >;
    readonly tags: GatsbyTypes.Maybe<
      ReadonlyArray<GatsbyTypes.Maybe<Pick<GatsbyTypes.ContentfulTag, 'title' | 'slug'>>>
    >;
  };
};

const Component: FC<Props> = ({ className, post }) => {
  const { title, createdAt, image, tags } = post;
  const description = post.description?.description;
  const pageLink = `/post/${post.slug}`;
  return (
    <article className={className}>
      <Link to={pageLink}>
        <div>
          <img src={image?.file?.url} alt="post-cover" />
        </div>
      </Link>
      <section>
        <Link to={pageLink}>
          <h2>{title}</h2>
        </Link>
        <p>{description}</p>
        <ul>
          {tags?.map((tag) => {
            return <li key={tag?.slug}>{tag?.title ?? ''}</li>;
          })}
        </ul>
        <time>{createdAt}</time>
      </section>
    </article>
  );
};

const PostLink = styled(Component)`
  display: flex;
  align-items: center;
  margin-bottom: 100px;

  & > a > div > img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 280px;
    object-fit: cover;
  }

  & > section {
    max-width: 624px;
    padding: 1rem;
  }

  & > section > a {
    color: inherit;
    text-decoration: none;
  }

  & > section > p {
    display: -webkit-box;
    overflow: hidden;
    color: #434343;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  & > section > a > h2 {
    margin: 0 0 16px;
  }

  & > time {
    color: #595959;
  }

  & > section > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }

  & > section > ul > li {
    padding: 0.2em 0.4em;
    margin: 0 10px 10px 0;
    color: #24292e;
    list-style: none;
    background: rgba(27, 31, 35, 0.05);
  }

  @media screen and (max-width: 575px) {
    flex-direction: column;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 20px 40px;

    & > a {
      display: block;
      width: 100%;
    }

    & > section {
      width: 90%;
    }

    & > a > div > img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }

  @media screen and (min-width: 576px) {
    & > a > div {
      width: 280px;
      height: 280px;
      margin-right: 24px;
    }

    & > a > div > img {
      border-radius: 10px;
      box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.3), 0 18px 36px -18px rgba(0, 0, 0, 0.33);
    }
  }
`;

export default PostLink;
