import React, { FC } from 'react';
import styled from 'styled-components';

export type Props = {
  className?: string;
};

const Component: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <span role="img" aria-label="icon">
        💡
      </span>
      <h1>gntk.dev</h1>
      <p>技術的な学びや日常の気付きのメモなどを書くブログです</p>
    </div>
  );
};

const Hero = styled(Component)`
  margin: 50px 0;
  text-align: center;

  & > span {
    font-size: 4rem;
  }

  & > h1 {
    margin-top: 0;
    font-size: calc(24px + 1.5vw);
    line-height: 1.2;
  }

  & > p {
    color: #434343;
  }
`;

export default Hero;
