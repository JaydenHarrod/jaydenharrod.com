/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "styled-components";

import {
  Card,
  HeadingOne,
  Row,
  Stats as StatsBox,
  Anchor,
  MetricBox
} from "../../../shared";
import sydney from "./cities/sydney.jpg";
import newcastle from "./cities/newcastle.jpg";
import brisbane from "./cities/brisbane.jpg";
import wingham from "./cities/wingham.jpg";
import gloucester from "./cities/gloucester.jpg";
import TopCitiesBox from "../../YearInReview/Stats/TopCitiesBox";

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
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  :hover {
    background: #eeee;
  }
`;

const EmojiIcon = styled("span")`
  font-size: 48px;
  margin-bottom: 8px;
`;

const Stats = () => {
  return (
    <>
      <div id="stats" />
      <HeadingOne center mt="2rem" mb="2rem">
        Stats
      </HeadingOne>
      <Card header title="Facts" pt="0.5rem" pb="0.5rem">
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
            <EmojiIcon role="img" aria-label="related-emoji">
              ⛺
            </EmojiIcon>
            2 camping trips
          </ActivityBox>
          <ActivityBox>
            <EmojiIcon role="img" aria-label="related-emoji">
              🏠
            </EmojiIcon>
            moved 3 times
          </ActivityBox>
          <ActivityBox>
            <EmojiIcon role="img" aria-label="related-emoji">
              👨‍💻
            </EmojiIcon>
            7 companies
          </ActivityBox>
          <ActivityBox>
            <EmojiIcon role="img" aria-label="related-emoji">
              🏆
            </EmojiIcon>
            best year award
          </ActivityBox>
        </Row>
      </Card>

      <Card header title="Todoist" pt={0} ml="1rem" mr="1rem">
        <Row justifyContent="space-between">
          <StatsBox title="TASKS" metric="1182" />
          <StatsBox title="KARMA POINTS" metric="6,483" />
          <StatsBox title="LEADERBOARD" metric="TOP 10%" />
        </Row>
        <Row justifyContent="center">
          <Anchor href="https://todoist.com/review/2019/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjQ3hsSEdiVSIsInVpZCI6NzI4ODk1NywieWVhciI6MjAxOH0.voIbruxMAflDQiOXT2tmkfUXipkwE6uQISNzMuP257o">
            2019 productivity report from Todoist
          </Anchor>
        </Row>
      </Card>

      <Card header title="Streaming" pt={0} ml="1rem" mr="1rem">
        <Row justifyContent="space-between">
          <StatsBox title="YOUTUBE WATCHED" metric="400 hours" />
          <StatsBox title="SPOTIFY LISTENED" metric="27,241 mins" />
          <StatsBox title="NETFLIX EPISODES" metric="100" />
        </Row>
      </Card>

      <Card header title="Whatpulse" pt={0} ml="1rem" mr="1rem">
        <Row justifyContent="space-between">
          <StatsBox title="KEYS ⌨️" metric="2,799,881" />
          <StatsBox title="CLICKS 🖱" metric="3,011,896" />
          <StatsBox title="DOWNLOADED ⬇️" metric="1.30TB" />
          <StatsBox title="UPLOADED ⬆️" metric="64GB" />
        </Row>
      </Card>

      <Card header title="Most Visited" pl="2rem" pb={0}>
        <Row justifyContent="center">
          <TopCitiesBox city="Newcastle" src={newcastle} />
          <TopCitiesBox city="Sydney" src={sydney} />
          <TopCitiesBox city="Gloucester" src={gloucester} />
          <TopCitiesBox city="Brisbane" src={brisbane} />
          <TopCitiesBox city="Wingham" src={wingham} />
        </Row>
      </Card>

      <Card header title="All-time location data" pl="1rem">
        <Row justifyContent="center" mt="0.5rem" mb={0}>
          <MetricBox title="COUNTRIES" metric="6" />
          <MetricBox title="CITIES" metric="198" />
          <MetricBox title="PLACES" metric="448" />
          <MetricBox title="DISTANCE" metric="543,000 km" />
        </Row>
      </Card>
    </>
  );
};

export default Stats;
