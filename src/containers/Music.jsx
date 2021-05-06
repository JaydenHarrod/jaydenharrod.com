import React from "react";
import { HeadingOne, Paragraph, Page } from "../shared";

const MusicProducer = () => {
  return (
    <Page>
      <HeadingOne>Music Producer</HeadingOne>
      <Paragraph>As a hobby, I enjoy making music using FL Studio.</Paragraph>
      <iframe
        src="https://open.spotify.com/embed/artist/2ERwsdfJZQX8jpYA8qACvr"
        width="100%"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Allsides Spotify playlist"
      ></iframe>{" "}
    </Page>
  );
};

export default MusicProducer;
