import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../../shared/typography';

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  color: #fff;
  box-shadow: 0px 2px 4px ${props => props.theme.grey};
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

const MediaBox = ({ entity, src, type }) => {
  return (
    <>
      {type === 'spotify' && (
        <Box src={src} color="rgb(29,185,84, 0.5)">
          <Paragraph bold>{entity}</Paragraph>
        </Box>
      )}
      {type === 'netflix' && (
        <Box src={src} color="rgb(229, 9, 20, 0.5)">
          <Paragraph bold>{entity}</Paragraph>
        </Box>
      )}
    </>
  );
};

export default MediaBox;
