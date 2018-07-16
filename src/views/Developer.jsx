import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Box from '../components/shared/Box';
import reactpostsURL from '../assets/react-posts.png';
import jhURL from '../assets/jh-website.png';
import { Container, Col1, TextBox } from '../components/shared/Layout';
import SocialIcons from '../components/SocialIcons';

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
class Developer extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Developer | JH</title>
        </Helmet>
        <Col1>
          <HeadingContainer>
            <h1>Developer</h1>
            <SocialIcons />
          </HeadingContainer>
          <p>
            I&#x27;m a software engineer using full-stack JavaScript, HTML5,
            CSS3, and React to build web products. In my role as a developer, I
            love designing interfaces that feel intuitive and accessible to all
            people. The work I enjoy the most is creating functional user
            interfaces based on wireframes and hifi designs.
          </p>
          <TextBox>
            <SkillContainer>
              <SkillBadge>HTML5</SkillBadge>
              <SkillBadge>JavaScript</SkillBadge>
              <SkillBadge>CSS in JS</SkillBadge>
              <SkillBadge>CSS3</SkillBadge>
              <SkillBadge>React</SkillBadge>
              <SkillBadge>Redux</SkillBadge>
              <SkillBadge>Node</SkillBadge>
              <SkillBadge>Express</SkillBadge>
              <SkillBadge>Postgres</SkillBadge>
              <SkillBadge>UX/UI Design</SkillBadge>
              <SkillBadge>Web Accessibility</SkillBadge>
              <SkillBadge>Design Systems</SkillBadge>
              <SkillBadge>Responsive Web</SkillBadge>
            </SkillContainer>
          </TextBox>
          <h2>Projects</h2>
          <a
            href="https://github.com/JaydenHarrod/react-redux-crud"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>React Posts</h3>
          </a>
          <Box
            path="https://github.com/JaydenHarrod/react-redux-crud"
            link="true"
            alt="React Posts Image"
            src={reactpostsURL}
          />
          <a
            href="https://github.com/JaydenHarrod/jh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>JaydenHarrod.com</h3>
          </a>
          <Box
            path="https://github.com/JaydenHarrod/jh"
            link="true"
            alt="JaydenHarrod.com Image"
            src={jhURL}
          />
        </Col1>
      </Container>
    );
  }
}

export default Developer;
