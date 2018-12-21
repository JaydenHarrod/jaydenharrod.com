import React from 'react';
import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';
import { Row, Col } from '../layout';
import { HeadingOne, Anchor } from '../typography';

const MenuLink = Anchor.withComponent(RouteLink);

const ResponsiveCol = styled(Col)`
  display: flex;
  align-items: center;
  @media (max-width: 40rem) {
    flex-direction: column;
  }
`;

const Header = () => {
  return (
    <Row display="flex" alignItems="center" mt="1rem" mb="1rem">
      <ResponsiveCol xs={12}>
        <HeadingOne inline mt="0">
          JH
        </HeadingOne>
        <span>
          <MenuLink to="/" mt="0" ml="1rem" mr="0.3rem">
            About
          </MenuLink>
          🏠
        </span>
        <span>
          <MenuLink to="/developer" mt="0" ml="1rem" mr="0.3rem">
            Developer
          </MenuLink>
          👨‍💻
        </span>
        <span>
          <MenuLink to="/filmmaker" mt="0" ml="1rem" mr="0.3rem">
            Film Maker
          </MenuLink>
          🎥
        </span>
        <span>
          <MenuLink to="/2018" mt="0" ml="1rem" mr="0.3rem">
            Year In Review
          </MenuLink>
          📅
        </span>
      </ResponsiveCol>
    </Row>
  );
};

export default Header;
