import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NOT_FOUND_IMG from '../../static/404.jpg';

type Props = {
  className?: string;
};

const Component: FC<Props> = ({ className }) => {
  return (
    <Layout>
      <div className={className}>
        <SEO title="404 Not Found" description="ページが見つかりません" />
        <div>
          <h1>404 Not Found</h1>
          <Link to="/">トップページへ</Link>
        </div>
        <img src={NOT_FOUND_IMG} alt="not found" />
      </div>
    </Layout>
  );
};

const NotFound = styled(Component)`
  & > div {
    margin: 40px auto;
    text-align: center;
  }

  & > img {
    width: 100%;
    height: auto;
    margin: 40px auto;
    box-shadow: rgba(0, 0, 0, 0.2) 0 20px 40px;
  }
`;

export default NotFound;
