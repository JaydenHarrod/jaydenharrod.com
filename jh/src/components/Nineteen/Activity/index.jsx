import React from "react";
import { Card, HeadingOne, Paragraph, Row } from "../../../shared";
import TopCitiesBox from "../../YearInReview/Travel/TopCitiesBox";

import sydney from "./cities/sydney.jpg";
import newcastle from "./cities/newcastle.jpg";
import brisbane from "./cities/brisbane.jpg";
import wingham from "./cities/wingham.jpg";
import gloucester from "./cities/gloucester.jpg";

const Activity = () => {
  return (
    <>
      <div id="activity" />
      <HeadingOne center mt="2rem" mb="2rem">
        <span role="img" aria-label="related-emoji">
          ⌚️
        </span>{" "}
        Activity{" "}
        <span role="img" aria-label="related-emoji">
          ⌚️
        </span>
      </HeadingOne>
      <Card header title="Outdoors">
        <Paragraph mt={0}>
          I stopped wearing my fitbit and started using a car. I predict my
          activity has decreased significantly from last year.
        </Paragraph>

        <Paragraph>12 bush walks</Paragraph>
        <Paragraph>1 6km kayak</Paragraph>
        <Paragraph>3 bike trips</Paragraph>
      </Card>
      <Card header title="Most Visited Cities" pl="2rem" pb={0}>
        <Row justifyContent="center">
          <TopCitiesBox city="Newcastle" src={newcastle} />
          <TopCitiesBox city="Sydney" src={sydney} />
          <TopCitiesBox city="Gloucester" src={gloucester} />
          <TopCitiesBox city="Brisbane" src={brisbane} />
          <TopCitiesBox city="Wingham" src={wingham} />
        </Row>
      </Card>
    </>
  );
};

export default Activity;
