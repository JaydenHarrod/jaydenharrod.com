import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const VideoFrame = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  ${space}
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Video = ({ src, title, ...rest }) => {
  return (
    <VideoFrame {...rest}>
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </VideoFrame>
  );
};
