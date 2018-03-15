import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Box from "../components/shared/Box";
import reactpostsURL from "../assets/react-posts.png";
import jhURL from "../assets/jh-website.png";
import { Container, Col1, TextBox } from "../components/shared/Layout";
import SocialIcons from "../components/SocialIcons";
import "../styles/components/developer.scss";

class Developer extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Developer | JH</title>
        </Helmet>
        <Col1>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1>Developer</h1>
            <SocialIcons />
          </div>
          <p>
            I&#x27;m a software engineer using full-stack JavaScript, HTML5, CSS3,
            and React to build web products. In my role as a developer, I love
            designing interfaces that feel intuitive and accessible to all
            people. The work I enjoy the most is creating functional user
            interfaces based on wireframes and hifi designs.
          </p>
          <TextBox>
            <div className="skill-container">
              <span className="skill-badge">HTML5</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">CSS in JS</span>
              <span className="skill-badge">CSS3</span>
              <span className="skill-badge">React</span>
              <span className="skill-badge">Redux</span>
              <span className="skill-badge">Node</span>
              <span className="skill-badge">Express</span>
              <span className="skill-badge">Postgres</span>
              <span className="skill-badge">UX/UI Design</span>
              <span className="skill-badge">Web Accessibility</span>
              <span className="skill-badge">Design Systems</span>
              <span className="skill-badge">Responsive Web</span>
            </div>
          </TextBox>
          <h2>Projects</h2>
          <a href="https://github.com/JaydenHarrod/react-redux-crud" target="_blank" rel="noopener noreferrer">
            <h3>React Posts</h3>
          </a>
          <Box
            class="box"
            path="https://github.com/JaydenHarrod/react-redux-crud"
            link="true"
            alt="React Posts Image"
            src={reactpostsURL}
          />
          <a href="https://github.com/JaydenHarrod/jh" target="_blank" rel="noopener noreferrer">
            <h3>JaydenHarrod.com</h3>
          </a>
          <Box
            class="box"
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
