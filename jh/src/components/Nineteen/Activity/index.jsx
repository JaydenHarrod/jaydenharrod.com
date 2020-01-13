import React from "react";
import styled from "styled-components";

import { Card, HeadingOne, Paragraph, Row } from "../../../shared";
import TopCitiesBox from "../../YearInReview/Travel/TopCitiesBox";
import sydney from "./cities/sydney.jpg";
import newcastle from "./cities/newcastle.jpg";
import brisbane from "./cities/brisbane.jpg";
import wingham from "./cities/wingham.jpg";
import gloucester from "./cities/gloucester.jpg";

const ActivityBox = styled("div")`
  width: 120px;
  padding: 10px;
  background: #e8e8e8;
  color: #4c3a2e;
  border-radius: 4px;
  border: 1px solid #a5a5a5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const EmojiIcon = styled("span")`
  font-size: 48px;
  margin-bottom: 8px;
`;

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
      <Card header title="Activities">
        <Row justifyContent="space-evenly">
          <ActivityBox>
            <EmojiIcon role="img" aria-label="related-emoji">
              🥾
            </EmojiIcon>
            12 hikes
          </ActivityBox>
          <ActivityBox>
            <EmojiIcon role="img" aria-label="related-emoji">
              🛶
            </EmojiIcon>
            6km kayaked
          </ActivityBox>
          <ActivityBox>
            {" "}
            <EmojiIcon role="img" aria-label="related-emoji">
              ⛺
            </EmojiIcon>
            2 camping trips
          </ActivityBox>
        </Row>
      </Card>
      <HeadingOne center mt="2rem" mb="2rem">
        <span role="img" aria-label="related-emoji">
          ✈️
        </span>{" "}
        Travel{" "}
        <span role="img" aria-label="related-emoji">
          ✈️
        </span>
      </HeadingOne>
      <Card header title="Most Visited" pl="2rem" pb={0}>
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
