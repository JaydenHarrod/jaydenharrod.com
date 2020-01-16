import React, { Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Row, Col, Header, Container, Footer } from "../shared";

import Summary from "../components/Nineteen/Summary";
import Stats from "../components/Nineteen/Stats";
import Creator from "../components/Nineteen/Creator";
import Finance from "../components/Nineteen/Finance";

const Border = styled.div`
  box-shadow: 2px 3px 4px ${props => props.theme.grey};
  border-top: 1px solid ${props => props.theme.grey};
`;

class Nineteen extends Component {
  state = {
    toggle: false
  };

  handleToggle = () => {
    if (this.state.toggle) {
      return this.setState({ toggle: false });
    } else {
      return this.setState({ toggle: true });
    }
  };

  render() {
    const { toggle } = this.state;

    return (
      <>
        <Helmet>
          <title>2019 | Jayden Harrod</title>
          <meta
            name="description"
            content="
          Jayden is a designer, developer, film maker, and Creatorian from
          Australia. He's best known for his YouTube channels."
          />
          <script src="https://apis.google.com/js/platform.js" />
        </Helmet>
        <Container>
          <Header />
        </Container>
        <Border />
        <Row justifyContent="center">
          <Col
            alignItems="center"
            xs={12}
            sm={10}
            md={8}
            order={{ xs: 2, lg: 1 }}
          >
            <Summary toggle={toggle} handleToggle={this.handleToggle} />
            <Stats />
            <Creator />
            <Finance />
            <Footer />
          </Col>
        </Row>
      </>
    );
  }
}

export default Nineteen;
