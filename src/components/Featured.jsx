import React from "react";
import { Container, Col1 } from "./shared/Layout";
import "../styles/components/featured.scss";

export const Featured = props => (
  <Container>
    <Col1>
      <h2>Featured</h2>
      <div className="box" />
    </Col1>
  </Container>
);

export default Featured;
