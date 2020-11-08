import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export type Props = {
  className?: string;
};

const Component: FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <Link to="/">
        <span role="img" aria-label="icon">
          💡
        </span>
        <span>gntk.dev</span>
      </Link>
    </header>
  );
};

const Header = styled(Component)`
  & > a {
    text-decoration: none;
  }

  & > a > span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
  }
`;

export default Header;
