import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Container, Col1 } from '../components/shared/Layout';
import SocialIcons from '../components/SocialIcons';
import PhotoStories from '../components/PhotoStories';

const HeadingContainer = styled.div`
  display: 'flex';
  justify-content: 'space-between';
  align-items: 'center';
`;
const PhotosIndex = () => {
  return (
    <Container>
      <Helmet>
        <title>Developer | JH</title>
      </Helmet>
      <Col1>
        <HeadingContainer>
          <h1>Photos</h1>
          <SocialIcons />
        </HeadingContainer>
        <PhotoStories />
      </Col1>
    </Container>
  );
};

export default PhotosIndex;
