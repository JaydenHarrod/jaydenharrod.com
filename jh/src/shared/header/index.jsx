import React from "react";
import styled from "styled-components";
import { Link as RouteLink } from "react-router-dom";
import { Row, Col, Container } from "../layout";
import { Anchor } from "../typography";
import logo from "../../components/images/logo.png";

const MenuLink = Anchor.withComponent(RouteLink);

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${props => (props.full ? "#fff" : "inherit")};
  box-shadow: ${props =>
    props.full ? "0px 2px 6px rgb(175, 175, 175)" : "none"};
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

const MobileNav = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Header = ({ props, full }) => {
  console.log('props', props)
  return (
    <Container>
      <StyledRow full={full}>
        <StyledCol xs={12}>
          <MenuLink to="/" mt={0}>
            <Logo src={logo} alt="Navigate Home" />
          </MenuLink>
          <MobileNav>
            <MenuLink
              to="/"
              mt="0"
              ml="1rem"
              mr="0.3rem"
              mb="0.5rem"
              title="Navigate Home"
            >
              Home
            </MenuLink>

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

            <MenuLink
              to="/2018"
              mt="0"
              ml="1rem"
              mr="0.3rem"
              mb="0.5rem"
              title="Navigate to Year In Review"
            >
              2018
            </MenuLink>
          </MobileNav>
        </StyledCol>
      </StyledRow>
    </Container>
  );
};
