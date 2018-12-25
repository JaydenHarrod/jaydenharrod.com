import React from 'react';
import { Helmet } from 'react-helmet';
import {
  HeadingOne,
  Paragraph,
  Anchor,
  Card,
  Label,
  Video,
  Footer,
  Header,
  Container,
  Col,
  Image,
  Row,
  Modal,
  Switch,
  HeadingTwo
} from '../shared';

const RenderVideo = ({ videoSrc, imageSrc, title }) => {
  return (
    <div style={{ postion: 'relative' }}>
      <Paragraph bold mb="0.5rem">
        {title}
      </Paragraph>
      <Switch>
        {({ on, flick }) => (
          <>
            <Image onClick={flick} src={imageSrc} alt={title} />
            {on && (
              <Modal onRequestClose={flick}>
                <Video src={videoSrc} title={title} />
              </Modal>
            )}
          </>
        )}
      </Switch>
    </div>
  );
};

const FilmMaker = () => {
  return (
    <Container>
      <Helmet>
        <title>Film Maker | Jayden Harrod</title>
        <meta
          name="description"
          content="
          Jayden is a film maker and editor based in Sydney. Offering affordable
          videography services with a focus on destinations and experiences."
        />
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
            <HeadingTwo>Tap an image to play</HeadingTwo>
            <RenderVideo
              imageSrc="https://i.vimeocdn.com/video/677248506.webp?mw=2200&mh=1238&q=70"
              videoSrc="https://player.vimeo.com/video/251011540"
              title="Sohoapp promotional launch #ad | sohoapp.com"
            />
            <RenderVideo
              imageSrc="https://i.vimeocdn.com/video/677249032.webp?mw=2200&mh=1238&q=70"
              videoSrc="https://player.vimeo.com/video/251011915"
              title="Will and Steve in the kitchen social short | lenovo.com.au"
            />
            <RenderVideo
              imageSrc="https://i.vimeocdn.com/video/616335173.webp?mw=1400&mh=788&q=70"
              videoSrc="https://player.vimeo.com/video/202331004"
              title="WipeHero INCUBATE documentary | wipehero.com.au"
            />
            <RenderVideo
              imageSrc="https://i.vimeocdn.com/video/677248431.webp?mw=1400&mh=788&q=70"
              videoSrc="https://player.vimeo.com/video/251011507"
              title="Timelapse showreel"
            />
            <RenderVideo
              imageSrc="https://i.vimeocdn.com/video/677248275.webp?mw=1400&mh=788&q=70"
              videoSrc="https://player.vimeo.com/video/251011370"
              title="Umina Beach Sony cinematics"
            />
          </Col>
        </Row>
      </Card>
      <Footer />
    </Container>
  );
};

export default FilmMaker;
