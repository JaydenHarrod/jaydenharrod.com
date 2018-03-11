import React from "react";
import "../../styles/components/shared/layout.scss";

const Container = props => {
  return <div className="container">{props.children}</div>;
};

const FullContainer = props => {
  return <div className="full-container">{props.children}</div>;
};

const Col1 = props => {
  return <div className="col-1">{props.children}</div>;
};

const TextBox = props => {
  return <div className="text-box">{props.children}</div>;
}

export { Container, FullContainer, Col1, TextBox };
