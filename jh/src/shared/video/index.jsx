import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const VideoFrame = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
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
        width="720px"
        height="405px"
        title={title}
        frameBorder="0"
        src={src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </VideoFrame>
  );
};
