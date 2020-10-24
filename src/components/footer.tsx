import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};
const Component: FC<Props> = ({ className }) => {
  return <footer className={className}>© {new Date().getFullYear()} gntk.dev</footer>;
};

const Footer = styled(Component)`
  color: #595959;
  text-align: center;
`;
export default Footer;
