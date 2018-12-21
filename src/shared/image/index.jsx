import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

export const ImageBox = styled.img`
  max-width: 100%;
  height: ${props => (props.height ? props.height : 'auto')};
  background-image: ${props => props.url};
  transition: all 0.4s ease-in-out;
  ${space};
  :hover {
    transform: scale(1.01);
  }
`;

const Image = ({ height, src }) => {
  return <ImageBox height={height} src={src} />;
};

export default Image;
