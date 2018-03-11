import React from "react";
import { Container, Col1 } from "./shared/Layout";
import { SocialIcon } from 'react-social-icons';
import profilepictureURL from "../assets/profile-picture.jpg";

export const Projects = () => (
  <Container>
    <Col1>
      <img src={profilepictureURL} width="100%" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>About</h1>
        <div style={{ paddingTop: "11px", paddingBottom: "18px" }}>
          <span style={{ paddingRight: "8px" }}><SocialIcon url="https://twitter.com/jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on Twitter" style={{ height: 18, width: 18 }} color="black" /></span>
          <span style={{ paddingRight: "8px" }}><SocialIcon url="https://medium.com/@jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on Medium" style={{ height: 18, width: 18 }} color="black" /></span>
          <span style={{ paddingRight: "8px" }}><SocialIcon url="https://github.com/jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on GitHub" style={{ height: 18, width: 18 }} color="black" /></span>
          <span style={{ paddingRight: "8px" }}><SocialIcon url="https://instagram.com/jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on Instagram" style={{ height: 18, width: 18 }} color="black" /></span>
          <span style={{ paddingRight: "8px" }}><SocialIcon url="https://linkedin.com/in/jaydenharrod" rel="noopener noreferrer" aria-label="Jayden on LinkedIn" style={{ height: 18, width: 18 }} color="black" /></span>
          <span style={{ paddingRight: "8px" }}><SocialIcon url="https://facebook.com/harrodjayden" rel="noopener noreferrer" aria-label="Jayden on Facebook" style={{ height: 18, width: 18 }} color="black" /></span>
          <span style={{ paddingRight: "8px" }}><SocialIcon url="mailto:harrod.jayden@gmail.com" rel="noopener noreferrer" aria-label="Contact Jayden via Email" style={{ height: 18, width: 18 }} color="black" /></span>
        </div>
      </div>
      <p>
        I'm a digital media generalist with experience in Web Development,
        DevOps, Video Production, Photography, Music Production, and Digital Design.
      </p>
      <p>
        I ran global operations for an e-commerce hosting company. Gathered millions of views as a YouTuber. And created content for Australia's biggest tech brands at Digivizer.
      </p>
      <p>
        Today, I'm living less of the hustle life and focusing on what's most important. Currently, that's being a Front End Engineer, telling stories through filmmaking, my mental and physical health, and friends and family. Please take a look around and contact me if you'd like to say hello!
      </p>
    </Col1>
  </Container>
);

export default Projects;
