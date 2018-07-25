import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Col1 } from './shared/Layout';
import logoUrl from '../assets/logo.png';

const HeaderStyles = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 18px;
  background-color: #fff;
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
const Menu = styled.span`
  float: right;
  display: flex;
  svg {
    margin-right: 8px;
  }
`;
const MenuItem = styled.span`
  float: left;
  display: flex;
  align-items: center;
  color: #000;
  list-style: none;
  text-decoration: none;
  line-height: 48px;
  margin-left: 18px;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
  :hover {
    color: rgba(0, 0, 0, 0.75);
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }
`;
const Header = () => {
  return (
    <HeaderStyles>
      <Container>
        <Col1>
          <Link to="/">
            <Logo src={logoUrl} alt="Jayden Harrod Logo" />
          </Link>
        </Col1>
        <Col1>
          <Menu>
            <Link to="/">
              <MenuItem aria-label="Home Button">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" />
                </svg>
                Home
              </MenuItem>
            </Link>
            <Link to="/developer">
              <MenuItem aria-label="Developer Button">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 2048 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M681 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" />
                </svg>
                Developer
              </MenuItem>
            </Link>
            <Link to="/filmmaker">
              <MenuItem aria-label="Filmmaker Button">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z" />
                </svg>
                Filmmaker
              </MenuItem>
            </Link>
          </Menu>
        </Col1>
      </Container>
    </HeaderStyles>
  );
};

export default Header;
