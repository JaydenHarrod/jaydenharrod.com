import React, { Fragment } from 'react';
import styled from 'styled-components';
import dwcdImg from '../assets/medium-dealing-thumb.png';
import ysgwImg from '../assets/medium-goals-thumb.png';

const Heading = styled.h3`
  padding-top: 2rem;
  margin-bottom: 1rem;
`;
const BlogContainer = styled.div`
  border: 1px solid #f5f5f5;
  box-shadow: 3px 2px #f5f5f5;
  padding: 18px;
  border-radius: 4px;
  margin-bottom: 18px;
  margin-left: -18px;
  margin-right: -18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DateText = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 1rem;
`;
const Thumbnail = styled.img`
  max-width: 64px;
  max-height: 64px;
  margin-right: 1rem;
`;
const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const BlogPanel = () => {
  return (
    <Fragment>
      <Heading>Featured Video</Heading>
      <VideoWrapper>
        <iframe
          width="720"
          height="405"
          src="https://www.youtube.com/embed/aguE5W3kHXU"
          frameBorder="0"
          allowFullScreen
        />
      </VideoWrapper>
      <Heading>Writing</Heading>
      <BlogContainer>
        <Thumbnail src={dwcdImg} />
        <a
          href="https://medium.com/@JaydenHarrod/dealing-with-city-distractions-ae4d133d17dc"
          rel="noopener noreferrer"
          target="_blank"
        >
          Dealing With City Distractions
        </a>
        <DateText>Feb 4th, 2018</DateText>
      </BlogContainer>
      <BlogContainer>
        <Thumbnail src={ysgwImg} />
        <a
          href="https://medium.com/@JaydenHarrod/life-logging-goal-setting-guide-2018-689ffd7b271a"
          rel="noopener noreferrer"
          target="_blank"
        >
          You&#x27;re Setting Goals Wrong
        </a>
        <DateText>Jan 9th, 2018</DateText>
      </BlogContainer>
    </Fragment>
  );
};

export default BlogPanel;
