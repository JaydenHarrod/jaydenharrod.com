import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Footer, Row, Col, Header, Container } from "../shared";
import Finance from "../components/YearInReview/Finance";
import Travel from "../components/YearInReview/Travel";
import Technology from "../components/YearInReview/Technology";
import Media from "../components/YearInReview/Media";
import Activity from "../components/YearInReview/Activity";
import Summary from "../components/YearInReview/Summary";
import Music from "../components/YearInReview/Music";

const Border = styled.div`
  box-shadow: 2px 3px 4px ${props => props.theme.grey};
  border-top: 1px solid ${props => props.theme.grey};
`;

const YearInReview = () => {
  return (
    <>
      <Helmet>
        <title>2018 | Jayden Harrod</title>
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
          alignItems="center"
          xs={12}
          sm={10}
          md={8}
          order={{ xs: 2, lg: 1 }}
        >
          <Summary />
          <Activity />
          <Media />
          <Travel />
          <Technology />
          <Music />
          <Finance />
          <Footer />
        </Col>
      </Row>
    </>
  );
};

export default YearInReview;
