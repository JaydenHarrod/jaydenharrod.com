import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import {
  HeadingOne,
  Paragraph,
  Card,
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
import homestudio from "./images/homestudio.jpg";

const Image = styled("img")`
  object-fit: cover;
  display: flex;
  flex-grow: 1;
`;

const Media = () => {
  return (
    <>
      <Helmet>
        <script src="https://apis.google.com/js/platform.js" />
      </Helmet>
      <div id="media" />
      <HeadingOne center mb="2rem" mt="2rem">
        Digital Creator
      </HeadingOne>

      <Card header title="YouTube">
        <Row mb="1rem" pt={{ xs: 2, lg: 0 }}>
          <Col lg={6}>
            <div
              className="g-ytsubscribe"
              title="Subscribe to JaydenHarrod on YouTube"
              data-channelid="UCOdFl-yPqum9818JPntA6DQ"
              data-layout="full"
              data-count="default"
            />
            <Stats
              title="WATCH TIME (mins)"
              metric="60K"
              fact="(part-time for a year at 20 hrs a week)"
            />
            <Stats title="VIEWS" metric="40K" />
            <Stats title="SUBSCRIBERS" metric="+304" />
          </Col>
          <Col lg={6} pt={{ xs: 2, lg: 0 }}>
            <div
              className="g-ytsubscribe"
              title="Subscribe to SquizzFilms on YouTube"
              data-channel="SquizzFilms"
              data-layout="full"
              data-count="default"
            />
            <Stats
              title="WATCH TIME (mins)"
              metric="152K"
              fact="(more than the duration of winter)"
            />
            <Stats title="VIEWS" metric="75K" />
            <Stats title="SUBSCRIBERS" metric="-116" />
          </Col>
        </Row>
      </Card>

      <Card header title="Allsides">
        <Paragraph mt={0}>
          In 2018 I started my hard dance music alias Allsides. I released my
          first single followed by a 12 track album avaliable on all major
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

      <Card header title="Home Studio 2018">
        <ResponsiveImage src={homestudio} />
      </Card>

      <Card
        header
        title="Young Endeavour V15/18"
        pl="1rem"
        style={{ position: "relative" }}
      >
        <Switch>
          {({ on, flick }) => (
            <>
              <ResponsiveImage
                onClick={flick}
                alt="Image of tall ship"
                src="http://i3.ytimg.com/vi/aguE5W3kHXU/maxresdefault.jpg"
                playIcon
              />
              {on && (
                <Modal onRequestClose={flick}>
                  <Video
                    src="https://www.youtube.com/embed/aguE5W3kHXU"
                    title="Young Endeavour video"
                  />
                </Modal>
              )}
            </>
          )}
        </Switch>
      </Card>

      <Card header title="Instagram @jaydenharrod">
        <Row justifyContent="center" pl="1rem" pr="1rem">
          <Image width="33%" alt="ig-photo" src={ig1} />
          <Image width="33%" alt="ig-photo" src={ig4} />
          <Image width="33%" alt="ig-photo" src={ig2} />
          <Image width="33%" alt="ig-photo" src={ig5} />
          <Image width="33%" alt="ig-photo" src={ig3} />
        </Row>
      </Card>
    </>
  );
};

export default Media;
