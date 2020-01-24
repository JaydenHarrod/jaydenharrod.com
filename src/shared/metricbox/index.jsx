import React from "react";
import styled from "styled-components";
import { Paragraph, HeadingOne } from "../typography";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  margin-bottom: 1rem;
  margin-left: ${props => (props.vertical ? props.vertical : "1rem")};
  margin-right: ${props => (props.vertical ? props.vertical : "1rem")};
  padding: 1rem;
  color: ${props => props.theme.textAlternate};
  box-shadow: ${props => props.theme.boxShadow};
  background-color: ${props => (props.color ? props.color : props.theme.info)};
  background-position: center center;
  background-blend-mode: multiply;
  background-size: cover;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;

const InverseParagraph = styled(Paragraph)`
  color: inherit;
`;

const InverseHeadingOne = styled(HeadingOne)`
  color: inherit;
`;

export const MetricBox = ({ title, metric, color, vertical }) => {
  return (
    <Box color={color} vertical={vertical}>
      <InverseParagraph bold mt={0} mb={0} mr="1rem">
        {title}
      </InverseParagraph>
      <InverseHeadingOne mt={0}>{metric}</InverseHeadingOne>
    </Box>
  );
};
