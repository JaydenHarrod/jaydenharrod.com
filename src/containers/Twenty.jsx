import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Row, Col, Container } from "../shared";

import Summary from "../components/Twenty/Summary";
import Stats from "../components/Twenty/Stats";
import Creator from "../components/Twenty/Creator";
import Finance from "../components/Twenty/Finance";

class Twenty extends Component {
  state = {
    toggle: false,
  };

  handleToggle = () => {
    return this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;

    return (
      <Container>
        <Helmet>
          <title>2020 | Jayden Harrod</title>
          <meta
            name="description"
            content="
          Jayden is a designer, developer, film maker, and Creatorian from
          Australia. He's best known for his YouTube channels."
          />
          <script src="https://apis.google.com/js/platform.js" />
        </Helmet>
        <Row justifyContent="center">
          <Col xs={12}>
            <Summary toggle={toggle} handleToggle={this.handleToggle} />
            <Stats />
            <Creator />
            <Finance />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Twenty;
