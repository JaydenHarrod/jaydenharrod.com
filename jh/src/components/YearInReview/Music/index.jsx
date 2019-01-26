import React from 'react';
import { Card, HeadingOne, Paragraph } from '../../../shared';

const Music = () => {
  return (
    <>
      <div id="music" />
      <HeadingOne center mt="2rem" mb="2rem">
        <span role="img" aria-label="related-emoji">
          🎹
        </span>{' '}
        Music{' '}
        <span role="img" aria-label="related-emoji">
          🎹
        </span>
      </HeadingOne>
      <Card header title="Allsides">
        <Paragraph mt={0}>
          In 2018 I kick started my hard dance music alias Allsides. I released
          my first single followed by a 12 track album avaliable on all major
          portals.
        </Paragraph>
        <iframe
          src="https://open.spotify.com/embed/album/6a6fFUtrcQZzyMaDrgPnR2"
          title="Spotify album embed"
          width="100%"
          height="380"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        />
      </Card>
    </>
  );
};

export default Music;
