import React from "react";
import {
  Card,
  Row,
  HeadingOne,
  Paragraph,
  MetricBox,
  Col,
  Stats as StatsBox,
  Anchor
} from "../../../shared";

import FitBitChart from "./FitBitChart";
import TopCitiesBox from "./TopCitiesBox";
import MediaBox from "./MediaBox";

import newcastle from "./cities/newcastle.jpg";
import bowral from "./cities/bowral.jpg";
import cairns from "./cities/cairns.jpg";
import brisbane from "./cities/brisbane.jpg";
import nineNine from "./images/brooklyn-nine-nine.jpg";
import dirkGently from "./images/dirk-gently.jpg";
import theExpanse from "./images/the-expanse.jpg";
import lostInSpace from "./images/lost-in-space.jpg";

const Stats = () => {
  return (
    <>
      <div id="stats" />
      <HeadingOne center mt="2rem" mb="2rem">
        Stats
      </HeadingOne>

      <Card header title="Fitbit">
        <Paragraph mb="1rem" mt={0}>
          The work-week step challenge (as a competitive person) pushed me to
          walk and run and now developed into a great weekly habit.
        </Paragraph>
        <Row justifyContent="center" mb="1rem">
          <MetricBox title="STEPS" metric="2.5M" />
          <MetricBox title="DISTANCE" metric="2,000KM" />
          <MetricBox title="FLOORS" metric="5,266" />
          <MetricBox title="CALORIES" metric="892,601" />
        </Row>
        <FitBitChart />
      </Card>

      <Card header title="Todoist" pt={0} pl="2rem" pr="2rem">
        <Row justifyContent="space-between">
          <StatsBox title="TASKS" metric="871" />
          <StatsBox title="KARMA POINTS" metric="4,061" />
          <StatsBox title="LEADERBOARD" metric="TOP 14%" />
        </Row>
        <Row justifyContent="center">
          <Anchor href="https://todoist.com/review/2018/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjQ3hsSEdiVSIsInVpZCI6NzI4ODk1NywieWVhciI6MjAxOH0.voIbruxMAflDQiOXT2tmkfUXipkwE6uQISNzMuP257o">
            2018 productivity report from Todoist
          </Anchor>
        </Row>
      </Card>

      <Card header title="Whatpulse" pt={0} pl="2rem" pr="2rem">
        <Row justifyContent="space-between">
          <StatsBox title="KEYS ⌨️" metric="3,374,383" />
          <StatsBox title="CLICKS 🖱" metric="2,282,244" />
          <StatsBox title="DOWNLOADED ⬇️" metric="1.5TB" />
          <StatsBox title="UPLOADED ⬆️" metric="79GB" />
        </Row>
      </Card>

      <Row justifyContent="space-evenly" gutter="1rem">
        <Col xs={12} md={6} lg={6} order={{ xs: 2, lg: 1 }}>
          <Card header title="Spotify" pb={0}>
            <StatsBox
              title="MINUTES STREAMED"
              metric="36,526"
              fact={`(${Math.round(35526 / 60 / 24)} days)`}
            />
            <Paragraph bold mb="1rem">
              TOP ARTISTS
            </Paragraph>
            <Row>
              <Col xs={12} md={6}>
                <MediaBox
                  type="spotify"
                  entity="D-Sturb"
                  src="https://i1.sndcdn.com/avatars-000217228865-9vcuwh-t500x500.jpg"
                />
                <MediaBox
                  type="spotify"
                  entity="Lowercase Noises"
                  src="https://i1.sndcdn.com/avatars-000398250153-0t1oqz-t500x500.jpg"
                />
                <MediaBox
                  type="spotify"
                  entity="Wasted Penguinz"
                  src="https://i1.sndcdn.com/avatars-000687847092-d10e2c-t500x500.jpg"
                />
              </Col>
              <Col xs={12} md={6}>
                <MediaBox
                  type="spotify"
                  entity="Stereotuners"
                  src="https://i1.sndcdn.com/avatars-000050029283-ndthck-t500x500.jpg"
                />
                <MediaBox
                  type="spotify"
                  entity="Atmozfears"
                  src="https://lastfm.freetls.fastly.net/i/u/770x0/f2399617daf66e981766b571e2cf3b73.jpg#f2399617daf66e981766b571e2cf3b73"
                />
                <MediaBox
                  type="spotify"
                  entity="Nosia"
                  src="https://i1.sndcdn.com/avatars-000451809714-n5njwk-t500x500.jpg"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={6} order={{ xs: 2, lg: 1 }} gutter="1rem">
          <Card header title="Netflix" pb={4} style={{ minHeight: "526px" }}>
            <StatsBox title="EPISODES WATCHED" metric="384" />
            <StatsBox
              title="EST HOURS WATCHED"
              metric="150"
              fact="(6 full days binged)"
            />
            <Paragraph bold mb="1rem">
              TOP PICKS
            </Paragraph>
            <Row>
              <Col xs={12} md={6}>
                <MediaBox
                  type="netflix"
                  entity="Dirk Gently"
                  src={dirkGently}
                />
                <MediaBox
                  type="netflix"
                  entity="Brooklyn Nine-Nine"
                  src={nineNine}
                />
              </Col>
              <Col xs={12} md={6}>
                <MediaBox
                  type="netflix"
                  entity="The Expanse"
                  src={theExpanse}
                />
                <MediaBox
                  type="netflix"
                  entity="Lost In Space"
                  src={lostInSpace}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Card header title="Highlight Trips" pl="2rem" pb={0}>
        <Row justifyContent="center">
          <TopCitiesBox city="Newcastle" src={newcastle} />
          <TopCitiesBox city="Bowral" src={bowral} />
          <TopCitiesBox city="Brisbane" src={brisbane} />
          <TopCitiesBox city="Cairns" src={cairns} />
        </Row>
      </Card>
      <Card header title="2018 Location Data" pl="1rem">
        <Row justifyContent="center" mt="0.5rem" mb={0}>
          <MetricBox title="COUNTRIES" metric="1" />
          <MetricBox title="CITIES" metric="27" />
          <MetricBox title="PLACES" metric="36" />
          <MetricBox title="DISTANCE" metric="16,000 km" />
        </Row>
      </Card>
      <Card header title="All-time Location Data" pl="1rem">
        <Row justifyContent="center" mt="0.5rem" mb={0}>
          <MetricBox title="COUNTRIES" metric="6" />
          <MetricBox title="CITIES" metric="128" />
          <MetricBox title="PLACES" metric="375" />
          <MetricBox title="DISTANCE" metric="538,000 km" />
        </Row>
      </Card>
    </>
  );
};

export default Stats;
