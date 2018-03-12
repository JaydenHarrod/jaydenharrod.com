import React from "react";
import { Container, Col1 } from "./shared/Layout";
import portraitURL from "../assets/profile-picture.jpg";
import BlogPanel from "./BlogPanel";
import Employment from "./Employment";
import Blurb from "./Blurb";
import SocialIcons from "./SocialIcons";

export const Content = () => (
  <Container>
    <Col1>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Home</h1>
        <SocialIcons />
      </div>
      <img src={portraitURL} width="100%" alt="portrait" />
      <Blurb />
      <Employment />
      <BlogPanel />
    </Col1>
  </Container>
);

export default Content;
