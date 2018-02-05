import React from "react";
import { Container, Col1 } from "./shared/Layout";
import classNames from "../styles/components/box.scss";

export const DeveloperBox = props => (
  <Col1>
    <h4 className="text-overlay">Developer</h4>
    <div className="box" />
  </Col1>
);

export default DeveloperBox;
