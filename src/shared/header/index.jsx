/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "../layout";
import { Anchor } from "../typography";
import wlogo from "../../components/images/logo.png";
import dlogo from "../../components/images/dlogo.png";

const MenuLink = Anchor.withComponent(NavLink);

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
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
  align-items: baseline;
`;

const ThemeToggleBtn = styled.div`
  border-radius: 4px;
  cursor: pointer;
  margin-left: 14px;
  padding: 8px 12px;
  background-color: ${props => props.theme.cardTitle};
`;

class Header extends Component {
  render() {
    const { full, isDarkMode, onDarkModeClick } = this.props;
    const pathname = this.props.location.pathname;
    return (
      <Container>
        <StyledRow full={full}>
          <StyledCol xs={12}>
            <MenuLink to="/" mt={0}>
              <Logo src={isDarkMode ? dlogo : wlogo} alt="Navigate Home" />
            </MenuLink>
            <MobileNav>
              <MenuLink
                to="/"
                mt="0"
                ml="1rem"
                mr="0.3rem"
                mb="0.5rem"
                title="Navigate Home"
                active={pathname === "/" ? true : false}
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
                active={pathname === "/filmmaker" ? true : false}
              >
                Filmer
              </MenuLink>

              <MenuLink
                to="/2018"
                mt="0"
                ml="1rem"
                mr="0.3rem"
                mb="0.5rem"
                title="Navigate to Year In Review"
                active={pathname === "/2018" ? true : false}
              >
                2018
              </MenuLink>

              <MenuLink
                to="/2019"
                mt="0"
                ml="1rem"
                mr="0.3rem"
                mb="0.5rem"
                title="Navigate to Year In Review"
                active={pathname === "/2019" ? true : false}
              >
                2019
              </MenuLink>
              {isDarkMode ? (
                <ThemeToggleBtn
                  aria-label="enable dark mode"
                  onClick={onDarkModeClick}
                  isDarkMode={isDarkMode}
                >
                 <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1120 576q0 13-9.5 22.5t-22.5 9.5-22.5-9.5-9.5-22.5q0-46-54-71t-106-25q-13 0-22.5-9.5t-9.5-22.5 9.5-22.5 22.5-9.5q50 0 99.5 16t87 54 37.5 90zm160 0q0-72-34.5-134t-90-101.5-123-62-136.5-22.5-136.5 22.5-123 62-90 101.5-34.5 134q0 101 68 180 10 11 30.5 33t30.5 33q128 153 141 298h228q13-145 141-298 10-11 30.5-33t30.5-33q68-79 68-180zm128 0q0 155-103 268-45 49-74.5 87t-59.5 95.5-34 107.5q47 28 47 82 0 37-25 64 25 27 25 64 0 52-45 81 13 23 13 47 0 46-31.5 71t-77.5 25q-20 44-60 70t-87 26-87-26-60-70q-46 0-77.5-25t-31.5-71q0-24 13-47-45-29-45-81 0-37 25-64-25-27-25-64 0-54 47-82-4-50-34-107.5t-59.5-95.5-74.5-87q-103-113-103-268 0-99 44.5-184.5t117-142 164-89 186.5-32.5 186.5 32.5 164 89 117 142 44.5 184.5z" fill="#fff"/></svg> 
                </ThemeToggleBtn>
              ) : (
                <ThemeToggleBtn
                  aria-label="disable dark mode"
                  onClick={onDarkModeClick}
                  isDarkMode={isDarkMode}
                >
                  <svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1390 1303q-54 9-110 9-182 0-337-90t-245-245-90-337q0-192 104-357-201 60-328.5 229t-127.5 384q0 130 51 248.5t136.5 204 204 136.5 248.5 51q144 0 273.5-61.5t220.5-171.5zm203-85q-94 203-283.5 324.5t-413.5 121.5q-156 0-298-61t-245-164-164-245-61-298q0-153 57.5-292.5t156-241.5 235.5-164.5 290-68.5q44-2 61 39 18 41-15 72-86 78-131.5 181.5t-45.5 218.5q0 148 73 273t198 198 273 73q118 0 228-51 41-18 72 13 14 14 17.5 34t-4.5 38z"/></svg>
                </ThemeToggleBtn>
              )}
            </MobileNav>
          </StyledCol>
        </StyledRow>
      </Container>
    );
  }
}

export default withRouter(Header);
