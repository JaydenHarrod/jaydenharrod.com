import React from "react";
import { Link } from "react-router-dom";
import { Container, Col1 } from "./shared/Layout";
import logoUrl from "../assets/logo.png";
import "../styles/components/header.scss";

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
              <Link to="/">
                <span className="menu-item" aria-label="Home Button">
                  Home
                </span>
              </Link>
              <Link to="/developer">
                <span className="menu-item" aria-label="Developer Button">
                  Developer
                </span>
              </Link>
              <Link to="/filmmaker">
                <span className="menu-item" aria-label="Filmmaker Button">
                  Filmmaker
                </span>
              </Link>
            </span>
          </Col1>
        </Container>
      </div>
    );
  }
}

export default Header;
