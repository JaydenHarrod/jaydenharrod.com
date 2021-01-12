/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "styled-components";

import {
  Anchor,
  Card,
  HeadingOne,
  Row,
  Stats as StatsBox,
} from "../../../shared";

const FactBox = styled("div")`
  width: 100px;
  padding: 10px;
  background-color: ${(props) => props.theme.cardTitle};
  color: ${(props) => props.theme.text};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
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
          <FactBox>
            <EmojiIcon role="img" aria-label="related-emoji">
              🥾
            </EmojiIcon>
            20 hikes
          </FactBox>
          <FactBox>
            <EmojiIcon role="img" aria-label="related-emoji">
              🛶
            </EmojiIcon>
            2 kayak trips
          </FactBox>
          <FactBox>
            <EmojiIcon role="img" aria-label="related-emoji">
              🚙
            </EmojiIcon>
            new car
          </FactBox>
          <FactBox>
            <EmojiIcon role="img" aria-label="related-emoji">
              🏠
            </EmojiIcon>
            1st rental lease
          </FactBox>
          <FactBox>
            <EmojiIcon role="img" aria-label="related-emoji">
              👨‍💻
            </EmojiIcon>
            2 promotions
          </FactBox>
        </Row>
      </Card>

      <Card header title="Todoist" pt={0} pl="2rem" pr="2rem">
        <Row justifyContent="space-between">
          <StatsBox title="TASKS" metric="1748" />
          <StatsBox title="KARMA POINTS" metric="7,919" />
          <StatsBox title="LEADERBOARD" metric="TOP 5%" />
        </Row>
        <Row justifyContent="center">
          <Anchor href="https://todoist.com/review/2020/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjcyODg5NTcsInllYXIiOjIwMjAsImp0aSI6IkVGSHRFTWtqIn0.KIOTbNLKK5qntdXTziE0cX1TypmQrBaCg9T8s2rK6oE">
            2020 productivity report from Todoist
          </Anchor>
        </Row>
      </Card>

      <Card header title="Streaming" pt={0} pl="2rem" pr="2rem">
        <Row justifyContent="space-between">
          <StatsBox title="YOUTUBE WATCHED" metric="510 hours" />
          <StatsBox title="SPOTIFY LISTENED" metric="27,241 mins" />
          <StatsBox title="NETFLIX EPISODES" metric="20" />
        </Row>
      </Card>

      <Card header title="Whatpulse" pt={0} pl="2rem" pr="2rem">
        <Row justifyContent="space-between">
          <StatsBox title="KEYS ⌨️" metric="5,674,000" />
          <StatsBox title="CLICKS 🖱" metric="3,104,958" />
          <StatsBox title="DOWNLOADED ⬇️" metric="620GB" />
          <StatsBox title="UPLOADED ⬆️" metric="42GB" />
        </Row>
      </Card>
    </>
  );
};

export default Stats;
