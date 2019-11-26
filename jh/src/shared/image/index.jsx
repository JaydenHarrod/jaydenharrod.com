import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const ImageBox = styled.img`
  max-width: 100%;
  min-height: 120px;
  height: ${props => (props.height ? props.height : 'unset')};
  background-image: ${props => props.url};
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  ${space};
  :hover {
    transform: scale(1.01);
  }
`;

const PlayIcon = styled.div`
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 40px);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 40px 0 40px 64px;
  border-color: transparent transparent transparent #fff;
  cursor: pointer;
`;

export const Image = ({ height, src, onClick, playIcon, alt }) => {
  return (
    <>
      <ImageBox height={height} src={src} onClick={onClick} alt={alt} />
      {playIcon && <PlayIcon onClick={onClick} />}
    </>
  );
};
