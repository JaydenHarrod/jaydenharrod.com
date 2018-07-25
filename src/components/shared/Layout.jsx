import React from 'react';
import styled from 'styled-components';

const ContainerStyles = styled.div`
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 18px;
  padding-right: 18px;
  display: flex;
  align-items: center;
`;
const Col1Styles = styled.div`
  flex: 1 1;
`;
const TextBoxStyles = styled.div`
  margin-top: $scale-p0;
  margin-bottom: $scale-p3;
`;
const Container = props => {
  return <ContainerStyles>{props.children}</ContainerStyles>;
};

const Col1 = props => {
  return <Col1Styles>{props.children}</Col1Styles>;
};

const TextBox = props => {
  return <TextBoxStyles>{props.children}</TextBoxStyles>;
};

export { Container, Col1, TextBox };
