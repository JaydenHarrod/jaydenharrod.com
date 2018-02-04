import React from "react";
import { Container, Col1 } from "./shared/Layout";
import logo from "../assets/logo.png";
import classNames from "../styles/components/header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Col1>
            <img className="logo" src={logo} alt="React Logo" />
          </Col1>
          <Col1>
            <span className="menu">
              <a className="menu-item" href="/about">
                About
              </a>
              <a className="menu-item" href="/video">
                Video
              </a>
              <a className="menu-item" href="/photo">
                Photo
              </a>
              <a className="menu-item" href="/code">
                Code
              </a>
            </span>
          </Col1>
        </Container>
      </div>
    );
  }
}

export default Header;
