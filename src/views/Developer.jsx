import React, { Component } from "react";
import Box from "../components/shared/Box";
import { Container, Col1 } from "../components/shared/Layout";

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
          <a href="https://github.com/JaydenHarrod/react-redux-crud">
            <h3 style={{ marginTop: 32 }}>React Posts</h3>
          </a>
          <p>
            Technologies:{" "}
            <i>
              MongoDB, Express, Node, React, Redux, Router, Thunk, Babel, CSS
            </i>
          </p>
          <div>
            <a href="https://github.com/JaydenHarrod/react-redux-crud">
              <Box
                class="box-l"
                path="/"
                alt="Developer Image"
                src="https://camo.githubusercontent.com/dc862d726108fe2b61bec79a77cca227a31ac03f/68747470733a2f2f692e696d6775722e636f6d2f4a663056576e4d2e706e67"
              />
            </a>
          </div>
        </Col1>
      </Container>
    );
  }
}

export default Developer;
