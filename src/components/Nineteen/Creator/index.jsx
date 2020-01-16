import React from "react";
import {
  Card,
  HeadingOne,
  Paragraph,
  Row,
  Col,
  Stats,
  Switch,
  Image as ResponsiveImage,
  Modal,
  Video
} from "../../../shared";

import ig1 from "./images/1.jpg";
import ig2 from "./images/2.jpg";
import ig3 from "./images/3.jpg";
import ig4 from "./images/4.jpg";
import ig5 from "./images/5.jpg";
import ig6 from "./images/6.jpg";
import ig7 from "./images/7.jpg";
import ig8 from "./images/8.jpg";
import ig9 from "./images/9.jpg";
import homestudio from "./images/homestudio.jpg";
import styled from "styled-components";

const Image = styled("img")`
  object-fit: cover;
  display: flex;
  flex-grow: 1;
  width: 384px;
  height: 384px;
`;

const RenderVideo = ({ videoSrc, imageSrc, title }) => {
  return (
    <div style={{ postion: "relative" }}>
      {title && (
        <Paragraph bold mb="0.5rem">
          {title}
        </Paragraph>
      )}
      <Switch>
        {({ on, flick }) => (
          <>
            <ResponsiveImage onClick={flick} src={imageSrc} alt={title} />
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

const Creator = () => {
  return (
    <>
      <div id="creator" />
      <HeadingOne center mt="2rem" mb="2rem">
        Digital Creator
      </HeadingOne>

      <Row justifyContent="space-evenly" gutter="1rem">
        <Col lg={6} sm={12}>
          <Card inverse header title="YouTube" pt={0}>
            <Row mb="1rem">
              <Col lg={6}>
                <div
                  className="g-ytsubscribe"
                  title="Subscribe to JaydenHarrod on YouTube"
                  data-channelid="UCOdFl-yPqum9818JPntA6DQ"
                  data-layout="full"
                  data-count="default"
                  data-theme="dark"
                />
                <Stats inverse title="WATCH TIME (mins)" metric="24,300" />
                <Stats inverse title="VIEWS" metric="16.7K" />
                <Stats inverse title="SUBSCRIBERS" metric="+77" />
              </Col>
              <Col lg={6}>
                <div
                  className="g-ytsubscribe"
                  title="Subscribe to SquizzFilms on YouTube"
                  data-channel="SquizzFilms"
                  data-layout="full"
                  data-count="default"
                  data-theme="dark"
                />
                <Stats inverse title="WATCH TIME (mins)" metric="55,200" />
                <Stats inverse title="VIEWS" metric="32.8K" />
                <Stats inverse title="SUBSCRIBERS" metric="-149" />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={6} sm={12}>
          <Card inverse header title="Allsides" pt={0}>
            <iframe
              src="https://open.spotify.com/embed/track/594vGYnxt8UgLRbao5RH9m"
              title="Spotify Allsides release"
              width="100%"
              height="298"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
            />
          </Card>
        </Col>
      </Row>

      <Card inverse header title="Home Studio 2019" pt={0}>
        <ResponsiveImage src={homestudio} />
      </Card>

      <Card inverse header title="Murphy The Frug" pt={0}>
        <RenderVideo
          imageSrc="https://i.vimeocdn.com/video/846857707.webp?mw=1000&mh=500"
          videoSrc="https://player.vimeo.com/video/384943841"
        />
      </Card>

      <Card header inverse title="Instagram @jaydenharrod" pb="0.4rem" pt={0}>
        <Row justifyContent="center">
          <Image width="33%" height="400px" alt="ig-photo" src={ig4} />
          <Image width="33%" height="400px" alt="ig-photo" src={ig9} />
          <Image width="33%" height="400px" alt="ig-photo" src={ig3} />
        </Row>
        <Row justifyContent="center">
          <Image width="33%" height="400px" alt="ig-photo" src={ig1} />
          <Image width="33%" height="400px" alt="ig-photo" src={ig7} />
          <Image width="33%" height="400px" alt="ig-photo" src={ig5} />
        </Row>
        <Row justifyContent="center">
          <Image width="33%" height="400px" alt="ig-photo" src={ig6} />
          <Image width="33%" height="400px" alt="ig-photo" src={ig2} />
          <Image width="33%" height="400px" alt="ig-photo" src={ig8} />
        </Row>
      </Card>
    </>
  );
};

export default Creator;
