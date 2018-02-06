import React from "react";
import { Container, Col1, TextBox } from "./shared/Layout";

export const Projects = props => (
  <Container>
    <Col1>
        <h2>Story Time</h2>
        <p>
          I began my digital journey <i>one decade</i> ago. Since, I have
          learned the skills required to take full advantage of the modern web
          spanning across design, growth, video, audio, and code.
        </p>
        <p>
          Today, I'm a front-end developer loving the React H.O.C pattern for
          building web apps.
        </p>
        <TextBox>
        <h3>10 Years 🎉</h3>
        <p>
          <b>2008:</b> Sold <a href="https://xat.com">xat.com</a> chat room
          graphics using paint.
        </p>
        <p>
          <b>2009:</b> Begun coding HTML and CSS sites.
        </p>
        <p>
          <b>2010:</b> Created a gaming{" "}
          <a href="https://youtube.com/squizzmedia">YouTube</a> channel.
        </p>
        <p>
          <b>2011:</b> Reach 1,000,000 views and 1,000 subs.
        </p>
        <p>
          <b>2012:</b> Started a new{" "}
          <a href="https://youtube.com/squizzfilms">YouTube</a> channel.
        </p>
        <p>
          <b>2013:</b> Used YouTube adsense to build an epic studio.
        </p>
        <p>
          <b>2014:</b> Additional 1,000,000 views and 6,000 subs.
        </p>
        <p>
          <b>2015:</b> Graduated school, Lenovo sponsorship, moved to the
          Netherlands.
        </p>
        <p>
          <b>2016:</b> Moved to Sydney and started working at{" "}
          <a href="https://digivizer.com">Digivizer</a>.
        </p>
        <p>
          <b>2017:</b> Switched careers and became a sole trader.
        </p>
        <p>
          <b>2018:</b> Incubating... check back later!
        </p>
      </TextBox>
    </Col1>
  </Container>
);

export default Projects;
