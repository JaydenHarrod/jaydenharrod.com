import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Container, Col1, TextBox } from "../components/shared/Layout";
import SocialIcons from "../components/SocialIcons";
import "../styles/components/filmmaker.scss";

class Filmmaker extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Filmmaker | JH</title>
        </Helmet>
        <Col1>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1>Filmmaker</h1>
            <SocialIcons />
          </div>
          <p>I&#x27;m a freelance videographer, photographer, and editor. My speciality in the industry is attention to high quality audio recording, and the use of SFX to create immersive edits. I also strategize videos that recieve high engagement on social media from my days as a YouTube partner.</p>
          <p>To discuss freelance services please email me: <a href="mailto:harrod.jayden@gmail.com">harrod.jayden@gmail.com</a></p>
          <TextBox>
            <div className="skill-container">
              <span className="skill-badge">Lumix GH5</span>
              <span className="skill-badge">Lumix 12-35 F/2.8</span>
              <span className="skill-badge">Lumix XLR adaptor</span>
              <span className="skill-badge">RODELink Wireless Lav</span>
              <span className="skill-badge">RODE Video Mic Pro</span>
              <span className="skill-badge">Audio-Technica AT2020</span>
              <span className="skill-badge">Manfrotto Befree Tripod</span>
              <span className="skill-badge">X3 Yongnuo YN-300 LED Light Kit</span>
              <span className="skill-badge">Zhiyun Crane 2 Gimbal</span>
              <span className="skill-badge">Livestreaming</span>
            </div>
          </TextBox>
          <h2 style={{ marginTop: "32px", marginBottom: "0" }}>Projects</h2>
          <div className="video-wrapper"><iframe title="portfolio video soho app" src="https://player.vimeo.com/video/251011540" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
          <div className="video-wrapper"><iframe title="portfolio video in the kitchen with will and steve" src="https://player.vimeo.com/video/251011915" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
          <div className="video-wrapper"><iframe title="portfolio video wipehero story" src="https://player.vimeo.com/video/202331004" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
          <div className="video-wrapper"><iframe title="portfolio video umina beach sunrise" src="https://player.vimeo.com/video/251011370" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
          <div className="video-wrapper"><iframe title="portfolio video taking flight" src="https://player.vimeo.com/video/251011247" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
          <div className="video-wrapper"><iframe title="portfolio video manly beach timelapse" src="https://player.vimeo.com/video/251011285" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
          <div className="video-wrapper"><iframe title="portfolio video month of timelapses" src="https://player.vimeo.com/video/251011507" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
        </Col1>
      </Container>
    );
  }
}

export default Filmmaker;
