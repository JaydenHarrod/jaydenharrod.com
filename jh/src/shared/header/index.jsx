import React from 'react';
import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';
import { Row, Col } from '../layout';
import { Anchor } from '../typography';
import logo from '../../components/images/logo.png';

const MenuLink = Anchor.withComponent(RouteLink);

const ResponsiveCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 40rem) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  transform: rotate(6deg);
  width: 34px;
  height: 32px;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  :hover {
    opacity: 0.75;
    transform: rotate(0deg);
    transition: transform 0.2s ease-in-out;
  }
`;

export const Header = () => {
  return (
    <Row display="flex" alignItems="center" p="2rem">
      <ResponsiveCol xs={12}>
        <MenuLink to="/" mt={0}>
          <Logo src={logo} />
        </MenuLink>
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
