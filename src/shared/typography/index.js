import styled from "styled-components";
import { space } from "styled-system";

export const HeadingOne = styled.h1`
  font-size: 2.074rem;
  display: ${props => (props.inline ? "inline" : "")};
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 0;
  padding: 0;
  text-align: ${props => (props.center ? "center" : "left")};
  color: ${props => props.theme.text};
  ${space};
`;

export const HeadingTwo = styled.h2`
  font-size: 1.44rem;
  line-height: 1.2;
  margin: 1.414rem 0 0.5rem;
  padding: 0;
  color: ${props => props.theme.text};
  text-align: ${props => (props.center ? "center" : "left")};
  ${space};
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.45rem;
  margin-top: 1rem;
  padding: 0;
  text-align: ${props => (props.center ? "center" : "left")};
  font-weight: ${props => (props.bold ? "600" : "normal")};
  color: ${props => props.theme.text};
  ${space};
`;

export const Anchor = styled.a`
  font-size: inherit;
  line-height: 1.45rem;
  margin-top: 1rem;
  padding: 0;
  display: ${props => (props.block ? "block" : "")};
  text-align: ${props => (props.center ? "center" : "left")};
  font-weight: ${props => (props.bold ? "600" : "normal")};
  color: ${props => (props.active ? props.theme.text : props.theme.highlight)};
  text-decoration: none;
  cursor: pointer;
  ${space};
  :hover {
    color: ${props => props.theme.text};
    text-decoration: underline;
  }
  :active {
    color: ${props => props.theme.highlight};
  }
`;

export const TinyText = styled.p`
  font-size: 0.694rem;
  line-height: 1.45rem;
  margin: 0.1rem 0 0 0;
  padding: 0;
  color: ${props => props.theme.text};
  text-align: ${props => (props.center ? "center" : "left")};
  ${space};
`;
