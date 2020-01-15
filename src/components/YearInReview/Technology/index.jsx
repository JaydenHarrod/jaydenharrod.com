import React from 'react';
import styled from 'styled-components';
import { HeadingOne, Card, Stats, Row, Col, Anchor } from '../../../shared';
import ig1 from './images/1.jpg';
import ig2 from './images/2.jpg';
import ig3 from './images/3.jpg';
import ig4 from './images/4.jpg';
import ig5 from './images/5.jpg';

const Image = styled.img`
  object-fit: cover;
  display: flex;
  flex-grow: 1;
  width: 384px;
  height: 384px;
`;

const Technology = () => {
  return (
    <>
      <div id="technology" />
      <HeadingOne center mb="2rem" mt="2rem">
        <span role="img" alt="emoji" aria-label="related-emoji">
          💻
        </span>{' '}
        Technology{' '}
        <span role="img" alt="emoji" aria-label="related-emoji">
          💻
        </span>
      </HeadingOne>
      <Card header title="Whatpulse" pt={0} ml="1rem" mr="1rem">
        <Row justifyContent="space-between">
          <Stats title="KEYS ⌨️" metric="3,374,383" />
          <Stats title="CLICKS 🖱" metric="2,282,244" />
          <Stats title="DOWNLOADED ⬇️" metric="1.5TB" />
          <Stats title="UPLOADED ⬆️" metric="78.98GB" />
        </Row>
      </Card>
      <Row justifyContent="space-evenly" gutter="1rem">
        <Col xs={12} md={6} lg={6} order={{ xs: 2, lg: 1 }}>
          <Card header title="Github" pt={0} pb="1rem">
            <Stats title="CONTRIBUTIONS" metric="752" />
          </Card>
        </Col>
        <Col xs={12} md={6} lg={6} order={{ xs: 2, lg: 1 }}>
          <Card header title="Instagram" pt={0} ml="1rem" mr="1rem">
            <Row justifyContent="space-between" alignItems="top">
              <Stats title="PHOTOS POSTED" metric="35" />
              <Stats title="LIKES" metric="2,375" />
            </Row>
          </Card>
        </Col>
      </Row>
      <Card header title="@jaydenharrod">
        <Row justifyContent="center" pl="1rem" pr="1rem">
          <Image alt="ig-photo" src={ig1} />
          <Image alt="ig-photo" src={ig4} />
          <Image alt="ig-photo" src={ig2} />
          <Image alt="ig-photo" src={ig5} />
          <Image alt="ig-photo" src={ig3} />
        </Row>
      </Card>
      <Card header title="Todoist" pt={0} ml="1rem" mr="1rem">
        <Row justifyContent="space-between">
          <Stats title="TASKS" metric="871" />
          <Stats title="KARMA POINTS" metric="4,061" />
          <Stats title="LEADERBOARD" metric="TOP 14%" />
        </Row>
        <Row justifyContent="center">
          <Anchor href="https://todoist.com/review/2018/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjQ3hsSEdiVSIsInVpZCI6NzI4ODk1NywieWVhciI6MjAxOH0.voIbruxMAflDQiOXT2tmkfUXipkwE6uQISNzMuP257o">
            Take a look at my 2018 productivity report from Todoist
          </Anchor>
        </Row>
      </Card>
    </>
  );
};

export default Technology;
