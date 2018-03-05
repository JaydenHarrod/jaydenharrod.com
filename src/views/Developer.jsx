import React, { Component } from "react";
import Box from "../components/shared/Box";
import reactpostsURL from "../assets/react-posts.png";
import { Container, Col1, TextBox } from "../components/shared/Layout";
import "../styles/components/developer.scss"
class Developer extends Component {
  render() {
    return (
      <Container>
        <Col1>
          <h1>Developer</h1>
          <p>
            I'm a software engineer using full-stack JavaScript, HTML5, CSS3,
            and React to build web products. In my role as a developer, I love
            designing interfaces that feel intuitive and accessible to all
            people. The work I enjoy the most is creating functional user
            interfaces based on wireframes and hifi designs.
          </p>
          <TextBox>
            <b>Professional Skills: </b>
            <div className="skill-container">
            <span className="skill-badge">JavaScript (ES6)</span>
            <span className="skill-badge">HTML5</span>
            <span className="skill-badge">BEM/CSS3</span>
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
            <h3 style={{ marginTop: 32 }}>React Posts</h3>
          </a>
          <p style={{ fontStyle: "italic" }}>
            Technologies: MongoDB, Express, Node, React, Redux, Router, Thunk, Babel, CSS
          </p>
          <div>
            <Box
              class="box-l"
              path="https://github.com/JaydenHarrod/react-redux-crud"
              link="true"
              alt="Developer Image"
              src={reactpostsURL}
            />
          </div>
        </Col1>
      </Container>
    );
  }
}

export default Developer;
