import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { HeadingTwo } from '../typography';

const Container = styled.div`
  height: auto;
  width: 100%;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 6px ${props => props.theme.grey};
  @media (max-width: 30rem) {
    border-radius: 0;
  }
`;

const Padding = styled.div`
  padding: 1rem;
  ${space};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #000;
  padding-left: 1rem;
  @media (max-width: 30rem) {
    border-radius: 0;
  }
`;

export const Card = ({ header, title, children, ...rest }) => {
  return (
    <>
      <Container>
        {header && (
          <Header>
            <HeadingTwo mt={0} mb={0}>
              {title}
            </HeadingTwo>
          </Header>
        )}
        <Padding {...rest}>{children}</Padding>
      </Container>
    </>
  );
};
