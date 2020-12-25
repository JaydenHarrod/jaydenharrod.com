import React from "react";

import {
  HeadingOne,
  Paragraph,
  Video,
  Image,
  Modal,
  Switch,
  Page,
} from "../shared";

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

const FilmMaker = () => {
  return (
    <Page>
      <HeadingOne>Films</HeadingOne>
      <RenderVideo
        imageSrc="http://i3.ytimg.com/vi/aguE5W3kHXU/maxresdefault.jpg"
        videoSrc="https://www.youtube.com/embed/aguE5W3kHXU"
        title="Young Endeavour Promotional"
      />
      <RenderVideo
        imageSrc="https://i.vimeocdn.com/video/677248506_1280x720.jpg"
        videoSrc="https://player.vimeo.com/video/251011540"
        title="Sohoapp promotional launch #ad | sohoapp.com"
      />
      <RenderVideo
        imageSrc="https://i.vimeocdn.com/video/677249032_1280x720.jpg"
        videoSrc="https://player.vimeo.com/video/251011915"
        title="Will and Steve in the kitchen social short | lenovo.com.au"
      />
      <RenderVideo
        imageSrc="https://i.vimeocdn.com/video/616335173_1280x720.jpg?q=60"
        videoSrc="https://player.vimeo.com/video/202331004"
        title="WipeHero INCUBATE documentary | wipehero.com.au"
      />
      <RenderVideo
        imageSrc="https://i.vimeocdn.com/video/677248431_1280x720.jpg"
        videoSrc="https://player.vimeo.com/video/251011507"
        title="Timelapse showreel"
      />
      <RenderVideo
        imageSrc="https://i.vimeocdn.com/video/677248275_1280x720.jpg"
        videoSrc="https://player.vimeo.com/video/251011370"
        title="Umina Beach Sony cinematics"
      />
    </Page>
  );
};

export default FilmMaker;
