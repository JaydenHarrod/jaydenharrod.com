import React, { Component } from "react";
import Box from "../components/shared/Box";
import reactpostsURL from "../assets/react-posts.png";
import { Container, Col1, TextBox } from "../components/shared/Layout";

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
            <p>JS (ES6), HTML5, BEM/CSS3, React, Redux, Design Systems</p>
            <b>Working Knowledge: </b>
            <p>RESTful APIs, Node, Express, Postgres, Parcel, Convox</p>
          </TextBox>
          <a href="https://github.com/JaydenHarrod/react-redux-crud" target="_blank">
            <h3 style={{ marginTop: 24 }}>React Posts</h3>
          </a>
          <p style={{ fontStyle: "italic" }}>
            MongoDB, Express, Node, React, Redux, Router, Thunk, Babel, CSS
          </p>
          <div>
            <a href="https://github.com/JaydenHarrod/react-redux-crud">
              <Box
                class="box-l"
                path="/"
                alt="Developer Image"
                src={reactpostsURL}
              />
            </a>
          </div>
        </Col1>
      </Container>
    );
  }
}

export default Developer;
