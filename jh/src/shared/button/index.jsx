import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const StyledButton = styled.a`
  display: block;
  width: ${props => (props.width ? props.width : '')};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  text-align: center;
  background-color: ${props => props.theme.primary};
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  ${space};
  :hover {
    text-decoration: underline;
  }
  :active {
    color: #fff;
  }
`;

export const Button = ({ children, width, src, target }) => {
  return (
    <StyledButton width={width} href={src} target={target ? target : '_blank'}>
      {children}
    </StyledButton>
  );
};
