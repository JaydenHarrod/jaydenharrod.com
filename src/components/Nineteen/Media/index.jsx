import React from "react";
import {
  Card,
  HeadingOne,
  Paragraph,
  Row,
  Col,
  Stats,
  Switch,
  Image,
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

const RenderVideo = ({ videoSrc, imageSrc, title }) => {
  return (
    <div style={{ postion: "relative" }}>
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

const Music = () => {
  return (
    <>
      <div id="music" />
      <HeadingOne center mt="2rem" mb="2rem">
        Digital Creator
      </HeadingOne>

      <Row justifyContent="space-evenly" gutter="1rem">
        <Col lg={6} sm={12}>
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
        </Col>
        <Col lg={6} sm={12}>
          <Card header title="Allsides">
            <Paragraph mt={0}>
              Progress on my music alias Allsides was slow this year. I spent a
              lot of time relearning sound design and composition. By far the
              biggest improvement was using NimbleKick VST for automatic kick
              pitching, saving hours spent tweaking Hardstyle kicks manually.
            </Paragraph>
            <iframe
              src="https://open.spotify.com/embed/track/594vGYnxt8UgLRbao5RH9m"
              title="Spotify Allsides release"
              width="100%"
              height="205"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
            />
          </Card>
        </Col>
      </Row>

      <Card header title="Murphy The Frug" pt={0}>
        <RenderVideo
          imageSrc="https://external-syd2-1.xx.fbcdn.net/safe_image.php?d=AQDdl0rxsZaezr9g&w=960&h=480&url=https%3A%2F%2Fi.vimeocdn.com%2Ffilter%2Foverlay%3Fsrc0%3Dhttps%253A%252F%252Fi.vimeocdn.com%252Fvideo%252F846855906_1280x640.jpg%26src1%3Dhttps%253A%252F%252Ff.vimeocdn.com%252Fimages_v6%252Fshare%252Fplay_icon_overlay.png&_nc_hash=AQDl0MDiHVqPKVtD"
          videoSrc="https://player.vimeo.com/video/384943841"
        />
      </Card>

      <Card header title="IG @jaydenharrod">
        <Row justifyContent="center" pl="1rem" pr="1rem">
          <Image alt="ig-photo" src={ig1} />
          <Image alt="ig-photo" src={ig2} />
          <Image alt="ig-photo" src={ig3} />
          <Image alt="ig-photo" src={ig4} />
          <Image alt="ig-photo" src={ig5} />
          <Image alt="ig-photo" src={ig6} />
          <Image alt="ig-photo" src={ig7} />
          <Image alt="ig-photo" src={ig8} />
          <Image alt="ig-photo" src={ig9} />
        </Row>
      </Card>
    </>
  );
};

export default Music;
