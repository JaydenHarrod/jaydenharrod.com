import React from "react";
import {
  Card,
  HeadingOne,
  Paragraph,
  Image,
  Row,
  Col,
  Stats
} from "../../../shared";
import wrapped from "./spotify-wrapped-2019.jpg";
import decade from "./spotify-wrapped-decade.jpg";

const Music = () => {
  return (
    <>
      <div id="music" />
      <HeadingOne center mt="2rem" mb="2rem">
        Digital Creator
      </HeadingOne>
      <Card header title="YouTube" pt={0}>
        <Row mb="1rem">
          <Col lg={6} mt="2rem">
            <div
              className="g-ytsubscribe"
              title="Subscribe to JaydenHarrod on YouTube"
              data-channelid="UCOdFl-yPqum9818JPntA6DQ"
              data-layout="full"
              data-count="default"
            />
            <Stats title="WATCH TIME (mins)" metric="24,300" />
            <Stats title="VIEWS" metric="16.7K" />
            <Stats title="SUBSCRIBERS" metric="+77" />
          </Col>
          <Col lg={6} mt="2rem">
            <div
              className="g-ytsubscribe"
              title="Subscribe to SquizzFilms on YouTube"
              data-channel="SquizzFilms"
              data-layout="full"
              data-count="default"
            />
            <Stats title="WATCH TIME (mins)" metric="55,200" />
            <Stats title="VIEWS" metric="32.8K" />
            <Stats title="SUBSCRIBERS" metric="-149" />
          </Col>
        </Row>
      </Card>
      <Card header title="Allsides">
        <Paragraph mt={0}>
          Progress on my music alias Allsides was slow this year. I spent a lot
          of time relearning sound design and composition. By far the biggest
          improvement was using NimbleKick VST for automatic kick pitching,
          saving hours spent tweaking Hardstyle kicks manually.
        </Paragraph>
        <iframe
          src="https://open.spotify.com/embed/track/594vGYnxt8UgLRbao5RH9m"
          title="Spotify Allsides release"
          width="100%"
          height="96"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        />
      </Card>
    </>
  );
};

export default Music;
