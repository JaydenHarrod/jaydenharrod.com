import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from '../shared/layout';
import Header from '../shared/header';
import { HeadingOne, Paragraph, Anchor } from '../shared/typography';
import { Card } from '../shared/card';
import { Label } from '../shared/label';
import { Video } from '../shared/video';
import Footer from '../shared/footer';

const FilmMaker = () => {
  return (
    <Container>
      <Helmet>
        <title>Film Maker | Jayden Harrod</title>
      </Helmet>
      <Header />
      <Card>
        <Row pl="1rem" pr="1rem">
          <Col xs={12}>
            <HeadingOne>Film Maker</HeadingOne>
            <Paragraph>
              I'm a freelance videographer, photographer, and editor. My
              speciality in the industry is attention to high quality audio
              recording, and the use of SFX to create immersive edits. I also
              strategize videos that recieve high engagement on social media
              from my days as a YouTube partner.
            </Paragraph>
            <Paragraph>
              To discuss freelance services please email me: {` `}
              <Anchor href="mailto:harrod.jayden@gmail.com">
                harrod.jayden@gmail.com
              </Anchor>
            </Paragraph>
            <Label text="4K" />
            <Label text="Slow Motion" />
            <Label text="Lav Mics" />
            <Label text="Boom Mics" />
            <Label text="Editing" />
            <Label text="Directing" />
            <Label text="Motion Control" />
            <Label text="Timelapse" />
            <Label text="Documentary" />
            <Label text="Social Media" />
            <Label text="Ads" />
            <Video
              src="https://player.vimeo.com/video/251011540"
              title="Soho promotional video"
            />
            <Video
              src="https://player.vimeo.com/video/251011915"
              title="Will and Steve cooking video"
            />
            <Video
              src="https://player.vimeo.com/video/202331004"
              title="WipeHero documentary video"
            />
            <Video
              src="https://player.vimeo.com/video/251011507"
              title="A month of timelapse footage"
            />
            <Video
              src="https://player.vimeo.com/video/251011370"
              title="Umina beach cinematography"
            />
          </Col>
        </Row>
      </Card>
      <Footer />
    </Container>
  );
};

export default FilmMaker;
