import React from "react";
import { Container, Col1 } from "./shared/Layout";
import "../styles/components/landing.scss";

const Landing = props => {
  return (
    <div className="module">
      <Container>
        <Col1>
          <h1>Jayden Harrod</h1>
          <p>Developer &bull; Filmmaker / Sydney, Australia {" "}🇦🇺</p>
        </Col1>
      </Container>
    </div>
  );
};

export default Landing;
