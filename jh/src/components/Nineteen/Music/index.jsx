import React from "react";
import { Card, HeadingOne, Paragraph, Stats, Image } from "../../../shared";
import wrapped from "./spotify-wrapped-2019.jpg";
import decade from "./spotify-wrapped-decade.jpg";

const Music = () => {
  return (
    <>
      <div id="music" />
      <HeadingOne center mt="2rem" mb="2rem">
        <span role="img" aria-label="related-emoji">
          🎹
        </span>{" "}
        Media{" "}
        <span role="img" aria-label="related-emoji">
          🎹
        </span>
      </HeadingOne>
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
          height="300"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
        />
      </Card>
      <Card header inverse title="Spotify" pt={0} pb={0}>
        <Image src={wrapped} />
        <Image src={decade} />
      </Card>
    </>
  );
};

export default Music;
