import React from "react";
import { Container, Col1 } from "./shared/Layout";
import classNames from "../styles/components/landing.scss";

const Landing = props => {
  return (
    <div className="module">
      <Container>
        <Col1>
          <h1>Jayden Harrod</h1>
          <h5>Front-end Developer & Designer | Freelance Filmmaker</h5>
        </Col1>
      </Container>
    </div>
  );
};

export default Landing;
