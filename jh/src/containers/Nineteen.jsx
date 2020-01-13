import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import {
  Anchor,
  Paragraph,
  Row,
  Col,
  Header,
  Container
} from "../shared";

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

const YearInReview = () => {
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
          <h1>Hello, 2019</h1>
        </Col>
      </Row>
    </>
  );
};

export default YearInReview;
