import React from "react";
import { Container, Col1 } from "./shared/Layout.js";
import "../styles/components/featured.scss";

const Featured = props => {
  return (
    <div className="featured">
      <Container>
        <Col1>
          <h2>Featured</h2>
          <div className="box" />
        </Col1>
      </Container>
    </div>
  );
};

export default Featured;
