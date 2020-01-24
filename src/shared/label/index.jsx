import React from "react";
import styled from "styled-components";
import { space } from "styled-system";

const Pill = styled.div`
  background-color: ${props =>
    props.color ? props.color : props.theme.primary};
  display: inline-block;
  color: #fff;
  border-radius: 4px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid transparent;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  ${space};
  :hover {
    border: ${props => props.theme.border};
    transition: border 0.2s ease-out;
    box-shadow: 1px 1px 3px #333;
    transition: box-shadow 0.2s ease-out;
  }
`;

export const Label = ({ text, color, ...rest }) => {
  return (
    <Pill color={color} {...rest}>
      {text}
    </Pill>
  );
};
