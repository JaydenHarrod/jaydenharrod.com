import React from "react";
import { SocialIcon } from 'react-social-icons';

import { Container, Col1 } from "./shared/Layout";
import "../styles/components/landing.scss";

const Landing = () => {
  return (
    <div className="module">
      <Container>
        <Col1>
          <h1>Jayden Harrod</h1>
          <div style={{ display: "flex", marginTop: "18px" }}>
            <span style={{ paddingRight: "8px" }}><SocialIcon url="https://twitter.com/jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on Twitter" style={{ height: 18, width: 18 }} color="white" /></span>
            <span style={{ paddingRight: "8px" }}><SocialIcon url="https://medium.com/@jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on Medium" style={{ height: 18, width: 18 }} color="white" /></span>
            <span style={{ paddingRight: "8px" }}><SocialIcon url="https://github.com/jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on GitHub" style={{ height: 18, width: 18 }} color="white" /></span>
            <span style={{ paddingRight: "8px" }}><SocialIcon url="https://instagram.com/jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on Instagram" style={{ height: 18, width: 18 }} color="white" /></span>
            <span style={{ paddingRight: "8px" }}><SocialIcon url="https://linkedin.com/in/jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on LinkedIn" style={{ height: 18, width: 18 }} color="white" /></span>
            <span style={{ paddingRight: "8px" }}><SocialIcon url="https://facebook.com/harrodjayden" rel="noopener noreferrer" aria-label="Jayden on Facebook" style={{ height: 18, width: 18 }} color="white" /></span>
            <span style={{ paddingRight: "8px" }}><SocialIcon url="mailto:harrod.jayden@gmail.com" rel="noopener noreferrer" aria-label="Contact Jayden via Email" style={{ height: 18, width: 18 }} color="white" /></span>
          </div>
        </Col1>
      </Container>
    </div>
  );
};

export default Landing;
