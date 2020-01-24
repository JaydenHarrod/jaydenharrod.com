import React from "react";
import { Helmet } from "react-helmet";
import { Row, Col, Container } from "../shared";

import Summary from "../components/YearInReview/Summary";
import Stats from "../components/YearInReview/Stats";
import Creator from "../components/YearInReview/Creator";
import Finance from "../components/YearInReview/Finance";

const YearInReview = () => {
  return (
    <Container>
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
      <Row justifyContent="center">
        <Col xs={12}>
          <Summary />
          <Stats />
          <Creator />
          <Finance />
        </Col>
      </Row>
    </Container>
  );
};

export default YearInReview;
