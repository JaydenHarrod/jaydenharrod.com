import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Container, Col1 } from "../components/shared/Layout";
import "../styles/components/filmmaker.scss";

class Filmmaker extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Filmmaker | JH</title>
        </Helmet>
        <Col1>
          <h1>Filmmaker</h1>
          <p>I'm a freelance videographer, photographer, and editor. My speciality in the industry is attention to high quality audio recording, and the use of SFX to create immersive edits. I also strategize videos that recieve high engagement on social media from my days as a YouTube partner.</p>
          <p>To discuss freelance services please email me: <a href="mailto:harrod.jayden@gmail.com">harrod.jayden@gmail.com</a></p>
          <h3 style={{ marginTop: "32px" }}>Equipment</h3>
          <div className="skill-container">
            <span className="skill-badge">Lumix GH5 (4K, Full HD)</span>
            <span className="skill-badge">Lumix 12-35 F/2.8</span>
            <span className="skill-badge">Lumix XLR adaptor</span>
            <span className="skill-badge">RODELink Wireless Lav</span>
            <span className="skill-badge">RODE Video Mic Pro</span>
            <span className="skill-badge">Audio-technica AT2020</span>
            <span className="skill-badge">Manfrotto Befree Tripod</span>
            <span className="skill-badge">X3 Yongnuo YN-300 LED Light Kit</span>
            <span className="skill-badge">Zhiyun Crane 2 Gimbal</span>
            <span className="skill-badge">Livestreaming</span>
          </div>
          <h2 style={{ marginTop: "32px", marginBottom: "0" }}>Projects</h2>
          <div className="video-wrapper"><iframe src="https://player.vimeo.com/video/251011540" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
          <div className="video-wrapper"><iframe src="https://player.vimeo.com/video/251011915" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
          <div className="video-wrapper"><iframe src="https://player.vimeo.com/video/202331004" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
          <div className="video-wrapper"><iframe src="https://player.vimeo.com/video/251011370" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
          <div className="video-wrapper"><iframe src="https://player.vimeo.com/video/251011247" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
          <div className="video-wrapper"><iframe src="https://player.vimeo.com/video/251011285" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
          <div className="video-wrapper"><iframe src="https://player.vimeo.com/video/251011507" width="720" height="405" frameBorder="0" allowFullScreen></iframe></div>
        </Col1>
      </Container>
    );
  }
}

export default Filmmaker;
