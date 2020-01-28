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
  border: ${props => props.theme.border};
  border-radius: 4px;
  cursor: pointer;
  margin-left: 14px;
  padding: 8px 12px;
  padding-left: 16px;
  background-color: ${props => props.theme.cardTitle};
  color: ${props => props.theme.text};
  height: 100%;
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
                  💡
                </ThemeToggleBtn>
              ) : (
                <ThemeToggleBtn
                  aria-label="disable dark mode"
                  onClick={onDarkModeClick}
                  isDarkMode={isDarkMode}
                >
                  🌚
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
