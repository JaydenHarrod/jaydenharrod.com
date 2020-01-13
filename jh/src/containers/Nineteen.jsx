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
  HeadingOne
} from "../shared";
import Finance from "../components/Nineteen/Finance";

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

  render() {
    const { toggle } = this.state;
    console.log("toggle", toggle);

    const handleToggle = () => {
      if (toggle) {
        return this.setState({ toggle: false });
      } else {
        return this.setState({ toggle: true });
      }
    };

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
            <HeadingOne>Year In Review - 2019</HeadingOne>

            {/* Summary Component */}
            <HeadingTwo>Summary</HeadingTwo>
            <Paragraph>
              2019 was a year of changed life priorities. After 3 years of
              dealing with the anxiety that comes with an over populated city,
              the impossible financial demands, and the logistical nightmare
              involved when socialising with friends or spending time outdoors,
              I decided that there must be a better life to be had somewhere
              else, and that the job hub of Australia wasn't the only answer for
              a successful career. After all, I used to live in a small country
              town, Sydney was not my identity or a place I saw myself living
              long-term. With the reward potentials high, I took a huge risk and
              moved back to my hometown of Newcastle, NSW to completely redefine
              how I lived my life and it's been the greatest adventure yet.
            </Paragraph>
            <HeadingTwo>Achievements</HeadingTwo>
            <Paragraph>
              Major life changes offer a great reset in motivation and vision. I
              made good use of it!
            </Paragraph>
            <Paragraph>
              <button onClick={() => handleToggle()}>Toggle List</button>
            </Paragraph>
            {toggle && (
              <>
                <Paragraph>
                  - Started the year with wisdoms surgery to never deal with it
                  again
                </Paragraph>
                <Paragraph>
                  - Purchased studio monitors for life (Presonus Sceptre S8s)
                </Paragraph>
                <Paragraph>
                  - Strategically purchased my first car in cash (Mazda 3)
                </Paragraph>
                <Paragraph>
                  - Ran 5KMs in 25 mins (all-time personal best)
                </Paragraph>
                <Paragraph>
                  - Left working at hipages, despite loving it
                </Paragraph>
                <Paragraph>
                  - Started a new job in a Newcastle based agency
                </Paragraph>
                <Paragraph>
                  - Invested in sleep quality by getting a Queen Koala mattress
                  bundle
                </Paragraph>
                <Paragraph>
                  - Went on a Landcare leadership retreat on the Central Coast
                </Paragraph>
                <Paragraph>
                  - Became a Christian and started going to Church
                </Paragraph>
                <Paragraph>
                  - Climbed the Young Endeavour again whilst it was in port
                </Paragraph>
                <Paragraph>
                  - Went to the hotrod Rattletrap at Crowdy Head
                </Paragraph>
                <Paragraph>
                  - Witnessed the best sunrise ever (
                  <a href="https://www.instagram.com/jaydenharrod/">
                    see for yourself!
                  </a>
                  )
                </Paragraph>
                <Paragraph>- Saw my friend Jared get married</Paragraph>
                <Paragraph>
                  - Photographed the HUSTLE event in Port Stephens
                </Paragraph>
                <Paragraph>
                  - Decided agency life was not for me and left
                </Paragraph>
                <Paragraph>
                  - Took a month of work completely to rest after burn out
                </Paragraph>
                <Paragraph>
                  - Started working at a product company, loving it
                </Paragraph>
                <Paragraph>- Become a Redfrog volenteer</Paragraph>
                <Paragraph>- Completed a time capsule wardrobe</Paragraph>
                <Paragraph>- Got my full licence and passport</Paragraph>
                <Paragraph>
                  - Moved into a new place and completed my dream home
                  office/studio
                </Paragraph>
                <Paragraph>
                  - Release a track under my music alias Allsides
                </Paragraph>
              </>
            )}

            {/* Activity Component */}
            <HeadingTwo>Activity</HeadingTwo>
            <Paragraph>I stopped wearing my fitbit and started using a car. I predict my activity has decreased significantly from last year.</Paragraph>
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

            {/* Music Component */}
            <HeadingTwo>Music</HeadingTwo>
            <Paragraph>blah</Paragraph>

            {/* Finance Component */}
            <Finance/>
          </Col>
        </Row>
      </>
    );
  }
}

export default Nineteen;
