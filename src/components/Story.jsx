import React from "react";
import { Container, Col1, TextBox } from "./shared/Layout";

export const Projects = props => (
  <Container>
    <Col1>
      <h2>About</h2>
      <p>
        Jayden is a digital media generalist with experience in{" "}
        <b>
          Web Development, System Admin, Video Production, Music Production,
        </b>{" "}
        and <b>Digital Design.</b>
        <p>
          He ran global operations for an e-commerce hosting company. Gathered
          millions of views as a YouTuber. Created content for Australia`s
          biggest brands. And began coding HTML and CSS when tables were a thing!
          Thank goodness we have flexbox now.
        </p>
      </p>
      <TextBox>
        <h3>10 Years In Review</h3>
        <p>
          <b>2008:</b> Sold $5 chat room graphics using paint.
        </p>
        <p>
          <b>2009:</b> Begun coding websites using HTML and CSS.
        </p>
        <p>
          <b>2010:</b> Created the SquizzMedia{" "}
          <a href="https://youtube.com/squizzmedia">YouTube</a> channel.
        </p>
        <p>
          <b>2011:</b> Reach 1,000,000 views and 1,000 subs.
        </p>
        <p>
          <b>2012:</b> Created the SquizzFilms{" "}
          <a href="https://youtube.com/squizzfilms">YouTube</a> channel.
        </p>
        <p>
          <b>2013:</b> Built an epic studio using Google Adsense.
        </p>
        <p>
          <b>2014:</b> Gathered an additional 1,000,000 views and 6,000 subs.
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
