import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../shared";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: ${props => props.theme.boxShadow};
  background-image: url(${props => props.src});
  background-color: ${props => props.color};
  background-position: center center;
  background-blend-mode: multiply;
  background-size: cover;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;

const InverseParagraph = styled(Paragraph)`
  color: #fff;
`;

const MediaBox = ({ entity, src, type }) => {
  return (
    <>
      {type === "spotify" && (
        <Box src={src} color="rgb(29,185,84, 0.5)">
          <InverseParagraph center bold>
            {entity}
          </InverseParagraph>
        </Box>
      )}
      {type === "netflix" && (
        <Box src={src} color="rgb(229, 9, 20, 0.5)">
          <InverseParagraph center bold>
            {entity}
          </InverseParagraph>
        </Box>
      )}
    </>
  );
};

export default MediaBox;
