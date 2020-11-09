import React, { FC } from 'react';
import styled from 'styled-components';
import Footer from './footer';

export type Props = {
  className?: string;
};

const Component: FC<Props> = ({ children, className }) => {
  return (
    <div className={className}>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const Layout = styled(Component)`
  max-width: 960px;
  padding: 0 1.1rem 1.45rem;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
`;

export default Layout;
