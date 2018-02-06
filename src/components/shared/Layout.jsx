import React from "react";
import styles from "../../styles/components/shared/layout.scss";

const Container = props => {
  return <div className="container">{props.children}</div>;
};

const Col1 = props => {
  return <div className="col-1">{props.children}</div>;
};

export { Container, Col1 };
