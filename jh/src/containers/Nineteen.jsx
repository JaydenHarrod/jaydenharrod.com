import React, { Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import {
  Anchor,
  Paragraph,
  Row,
  Col,
  Header,
  Container,
  HeadingTwo,
  Footer
} from "../shared";
import Finance from "../components/Nineteen/Finance";
import Summary from "../components/Nineteen/Summary";
import Music from "../components/Nineteen/Music";

const SideMenu = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 1px 3px 3px ${props => props.theme.grey};
`;

const scrollTo = selector => e => {
  e && e.preventDefault();
  window.scrollTo({
    top: document.querySelector(selector).offsetTop - 0,
    behavior: "smooth"
  });
};

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
          Jayden is a designer, developer, film maker, and musician from
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
            xs={0}
            md={2}
            style={{
              position: "sticky",
              alignSelf: "flex-start",
              top: "0"
            }}
          >
            <SideMenu>
              <Col>
                <Paragraph bold mt={0}>
                  Chapters
                </Paragraph>
                <Anchor block onClick={scrollTo("#summary")}>
                  Summary
                </Anchor>
                <Anchor block onClick={scrollTo("#activity")}>
                  Activity
                </Anchor>
                <Anchor block onClick={scrollTo("#media")}>
                  Media
                </Anchor>
                <Anchor block onClick={scrollTo("#travel")}>
                  Travel
                </Anchor>
                <Anchor block onClick={scrollTo("#technology")}>
                  Technology
                </Anchor>
                <Anchor block onClick={scrollTo("#music")}>
                  Music
                </Anchor>
                <Anchor block onClick={scrollTo("#finance")}>
                  Finance
                </Anchor>
                <Anchor block href="/">
                  <span role="img" aria-label="back button">
                    ↩️{" "}
                  </span>
                  Home
                </Anchor>
              </Col>
            </SideMenu>
          </Col>
          <Col
            alignItems="center"
            xs={12}
            sm={10}
            md={8}
            order={{ xs: 2, lg: 1 }}
          >
            <Summary toggle={toggle} handleToggle={this.handleToggle} />

            {/* Activity Component */}
            <HeadingTwo>Activity</HeadingTwo>
            <Paragraph>
              I stopped wearing my fitbit and started using a car. I predict my
              activity has decreased significantly from last year.
            </Paragraph>
            <Paragraph>12 bush walks</Paragraph>
            <Paragraph>1 6km kayak</Paragraph>
            <Paragraph>3 bike trips</Paragraph>

            {/* Media Component */}
            <HeadingTwo>Media</HeadingTwo>
            <Paragraph>blah</Paragraph>

            {/* Travel Component */}
            <HeadingTwo>Travel</HeadingTwo>
            <Paragraph>blah</Paragraph>

            {/* Technology Component */}
            <HeadingTwo>Technology</HeadingTwo>
            <Paragraph>blah</Paragraph>

            <Music />
            <Finance />
            <Footer />
          </Col>
        </Row>
      </>
    );
  }
}

export default Nineteen;
