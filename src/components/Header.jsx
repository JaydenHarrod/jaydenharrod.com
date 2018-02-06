import React from "react";
import { Container, Col1 } from "./shared/Layout";
import logoUrl from "../assets/logo.png";
import styles from "../styles/components/header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Container>
          <Col1>
            <a href="/" aria-label="Logo Home Button">
              <img className="logo" src={logoUrl} alt="Jayden Harrod Logo" />
            </a>
          </Col1>
          <Col1>
            <span className="menu">
              <a className="menu-item" href="/" aria-label="Home Button">
                Home
              </a>
              <a
                className="menu-item"
                href="/developer"
                aria-label="Developer Button"
              >
                Developer
              </a>
              <a
                className="menu-item"
                href="/filmmaker"
                aria-label="Filmmaker Button"
              >
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
