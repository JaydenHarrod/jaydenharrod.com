import React from 'react';
import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';
import { Row, Col } from '../layout';
import { Anchor } from '../typography';
import logo from '../../components/images/logo.png';

const MenuLink = Anchor.withComponent(RouteLink);

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${props => (props.full ? '#fff' : 'inherit')};
  box-shadow: ${props =>
    props.full ? '0px 2px 6px rgb(175, 175, 175)' : 'none'};
`;

const StyledCol = styled(Col)`
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
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  transition: transform 0.2s ease-in-out;
  :hover {
    opacity: 0.75;
    transform: rotate(0deg);
    transition: transform 0.2s ease-in-out;
  }
`;

export const Header = ({ full }) => {
  return (
    <StyledRow full={full}>
      <StyledCol xs={12}>
        <MenuLink to="/" mt={0}>
          <Logo src={logo} alt="Navigate Home" />
        </MenuLink>
        <span>
          <MenuLink
            to="/"
            mt="0"
            ml="1rem"
            mr="0.3rem"
            mb="0.5rem"
            title="Navigate Home"
          >
            About
          </MenuLink>
          🏠
        </span>
        <span>
          <MenuLink
            to="/projects"
            mt="0"
            ml="1rem"
            mr="0.3rem"
            mb="0.5rem"
            title="Navigate to Projects"
          >
            Projects
          </MenuLink>
          👨‍💻
        </span>
        <span>
          <MenuLink
            to="/filmmaker"
            mt="0"
            ml="1rem"
            mr="0.3rem"
            mb="0.5rem"
            title="Navigate to Film Maker"
          >
            Film Maker
          </MenuLink>
          🎥
        </span>
        <span>
          <MenuLink
            to="/2018"
            mt="0"
            ml="0.3rem"
            mr="0.3rem"
            mb="0.5rem"
            title="Navigate to Year In Review"
          >
            2018
          </MenuLink>
          📅
        </span>
        <span>
          <span style={{ color: '#e00000' }}>New:</span>
          <MenuLink
            to="/goals"
            mt="0"
            ml="0.3rem"
            mr="0.3rem"
            mb="0.5rem"
            title="Navigate to Goals"
          >
            Goals
          </MenuLink>
          🎉
        </span>
      </StyledCol>
    </StyledRow>
  );
};
