import React, { Fragment } from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  padding-top: 18px;
`;
const BlogContainer = styled.div`
  border: 1px solid #f5f5f5;
  padding: 18px;
  border-radius: 4px;
  margin-bottom: 18px;
  margin-left: -18px;
  margin-right: -18px;
`;
const DateText = styled.p`
  font-size: 12px;
  margin-top: 0;
  color: rgba(0, 0, 0, 0.54);
`;
const BlogPanel = () => {
  return (
    <Fragment>
      <Heading>Writing</Heading>
      <BlogContainer>
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
