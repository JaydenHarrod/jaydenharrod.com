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
          <p style={{ display: "flex" }}>
              <div style={{ paddingRight: "8px" }}><SocialIcon url="https://twitter.com/jaydenharrod" style={{ height: 18, width: 18 }} color="white" /></div>
              <div style={{ paddingRight: "8px" }}><SocialIcon url="https://medium.com/@jaydenharrod" style={{ height: 18, width: 18 }} color="white" /></div>
              <div style={{ paddingRight: "8px" }}><SocialIcon url="https://github.com/jaydenharrod" style={{ height: 18, width: 18 }} color="white" /></div>
              <div style={{ paddingRight: "8px" }}><SocialIcon url="https://linkedin.com/in/jaydenharrod" style={{ height: 18, width: 18 }} color="white" /></div>
              <div style={{ paddingRight: "8px" }}><SocialIcon url="https://facebook.com/harrodjayden" style={{ height: 18, width: 18 }} color="white" /></div>
              <div style={{ paddingRight: "8px" }}><SocialIcon url="mailto:harrod.jayden@gmail.com" style={{ height: 18, width: 18 }} color="white" /></div>
          </p>
        </Col1>
      </Container>
    </div>
  );
};

export default Landing;
