import React from "react";
import { Container, Col1 } from "./shared/Layout";
import logoUrl from "../assets/logo.png";
import "../styles/components/header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Col1>
            <img className="logo" src={logoUrl} alt="Jayden Harrod Logo" />
          </Col1>
          <Col1>
            <span className="menu">
              <a className="menu-item" href="/about" aria-label="Home Button">
                Home
              </a>
              <a className="menu-item" href="/video" aria-label="Developer Button">
                Developer
              </a>
              <a className="menu-item" href="/photo" aria-label="Filmmaker Button">
                Filmmaker
              </a>
            </span>
          </Col1>
        </Container>
      </div>
    );
  }
}

export default Header;
