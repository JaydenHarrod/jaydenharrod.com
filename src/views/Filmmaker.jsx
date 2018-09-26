import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Container, Col1, TextBox } from '../components/shared/Layout';
import SocialIcons from '../components/SocialIcons';

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const HeadingContainer = styled.div`
  display: 'flex';
  justify-content: 'space-between';
  align-items: 'center';
`;
const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const SkillBadge = styled.div`
  background-color: #00449e;
  color: #fff;
  border-radius: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 8px;
  margin-top: 18px;
  border: 1px solid transparent;
  :hover {
    border: 1px solid #001b44;
    transition: border 0.2s ease-out;
    box-shadow: 1px 1px 3px #ccc;
    transition: box-shadow 0.2s ease-out;
  }
`;
const Heading = styled.h3`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
class Filmmaker extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Filmmaker | JH</title>
        </Helmet>
        <Col1>
          <HeadingContainer>
            <h1>Filmmaker</h1>
            <SocialIcons />
          </HeadingContainer>
          <p>
            I&#x27;m a freelance videographer, photographer, and editor. My
            speciality in the industry is attention to high quality audio
            recording, and the use of SFX to create immersive edits. I also
            strategize videos that recieve high engagement on social media from
            my days as a YouTube partner.
          </p>
          <p>
            To discuss freelance services please email me:{' '}
            <a href="mailto:harrod.jayden@gmail.com">harrod.jayden@gmail.com</a>
          </p>
          <TextBox>
            <SkillContainer>
              <SkillBadge>Lumix GH5</SkillBadge>
              <SkillBadge>Lumix 12-35 F/2.8</SkillBadge>
              <SkillBadge>Lumix XLR adaptor</SkillBadge>
              <SkillBadge>RODELink Wireless Lav</SkillBadge>
              <SkillBadge>RODE Video Mic Pro</SkillBadge>
              <SkillBadge>Audio-Technica AT2020</SkillBadge>
              <SkillBadge>Manfrotto Befree Tripod</SkillBadge>
              <SkillBadge>X3 Yongnuo YN-300 LED Light Kit</SkillBadge>
              <SkillBadge>Zhiyun Crane 2 Gimbal</SkillBadge>
              <SkillBadge>Livestreaming</SkillBadge>
            </SkillContainer>
          </TextBox>
          <Heading>Projects</Heading>
          <VideoWrapper>
            <iframe
              title="portfolio video soho app"
              src="https://player.vimeo.com/video/251011540"
              width="720"
              height="405"
              frameBorder="0"
              allowFullScreen
            />
          </VideoWrapper>
          <VideoWrapper>
            <iframe
              title="portfolio video in the kitchen with will and steve"
              src="https://player.vimeo.com/video/251011915"
              width="720"
              height="405"
              frameBorder="0"
              allowFullScreen
            />
          </VideoWrapper>
          <VideoWrapper>
            <iframe
              title="portfolio video wipehero story"
              src="https://player.vimeo.com/video/202331004"
              width="720"
              height="405"
              frameBorder="0"
              allowFullScreen
            />
          </VideoWrapper>
          <VideoWrapper>
            <iframe
              title="portfolio video umina beach sunrise"
              src="https://player.vimeo.com/video/251011370"
              width="720"
              height="405"
              frameBorder="0"
              allowFullScreen
            />
          </VideoWrapper>
          <VideoWrapper>
            <iframe
              title="portfolio video taking flight"
              src="https://player.vimeo.com/video/251011247"
              width="720"
              height="405"
              frameBorder="0"
              allowFullScreen
            />
          </VideoWrapper>
          <VideoWrapper>
            <iframe
              title="portfolio video manly beach timelapse"
              src="https://player.vimeo.com/video/251011285"
              width="720"
              height="405"
              frameBorder="0"
              allowFullScreen
            />
          </VideoWrapper>
          <VideoWrapper>
            <iframe
              title="portfolio video month of timelapses"
              src="https://player.vimeo.com/video/251011507"
              width="720"
              height="405"
              frameBorder="0"
              allowFullScreen
            />
          </VideoWrapper>
        </Col1>
      </Container>
    );
  }
}

export default Filmmaker;
