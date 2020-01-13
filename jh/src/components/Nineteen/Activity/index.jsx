import React from "react";
import { Card, HeadingOne, Paragraph } from "../../../shared";

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
      <Card header title="Activity">
        <Paragraph mt={0}>
          I stopped wearing my fitbit and started using a car. I predict my
          activity has decreased significantly from last year.
        </Paragraph>
      </Card>
    </>
  );
};

export default Activity;
