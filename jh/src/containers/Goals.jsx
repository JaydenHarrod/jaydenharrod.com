import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Container,
  Row,
  Col,
  HeadingOne,
  Paragraph,
  Header,
  Footer,
  Card,
  HeadingTwo
} from '../shared';

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>About | Jayden Harrod</title>
        <meta
          name="description"
          content="
          Jayden is a designer, developer, film maker, and musician from
          Australia. He's best known for his YouTube channels."
        />
        <meta
          name="keywords"
          content="
          jayden harrod, jayden, sydney developer, sydney frontend, remote
          developer, developer blog, how to become a developer, film maker,
          jayden harrod film maker, jayden harrod website"
        />
      </Helmet>
      <Header />
      <Card pl="1rem" pr="1rem" p="2rem">
        <Row pl="1rem" pr="1rem">
          <Col xs={12} md={12}>
            <HeadingOne mt={0}>Goals: 2019</HeadingOne>
            <Paragraph>
              I love all things personal developement, growth, and productivity
              so tracking my progress against my goals is something I really
              enjoy doing. This year, I've decided to make my goals progress
              public to stay more accountable.
            </Paragraph>
            <HeadingTwo mt="4rem">🍎 Health</HeadingTwo>
            <Paragraph bold>Goals</Paragraph>
            <ul>
              <li>25 pushups</li>
              <li>25 situps</li>
              <li>5km run in 30 mins</li>
              <li>Sleep 8 hours a day</li>
            </ul>
            <Paragraph bold>Habits</Paragraph>
            <ul>
              <li>Sleep between 11:00 pm - 7:00 am</li>
              <li>Daily MyFitnessPal nutrition recording</li>
              <li>Plank club 3 days per week</li>
              <li>Run club 2 days per week</li>
              <li>Swim club 1 day per week</li>
            </ul>
            <HeadingTwo mt="4rem">💼 Career</HeadingTwo>
            <Paragraph bold>Goals</Paragraph>
            <ul>
              <li>Complete fullstack JavaScript tutorial</li>
              <li>Publish NeverIgnore MVP app on ProductHunt</li>
              <li>Upload 2 YouTube videos every month</li>
              <li>Increase salary by 30%</li>
            </ul>
            <Paragraph bold>Habits</Paragraph>
            <ul>
              <li>5:00 - 6:00 pm programming study time</li>
              <li>Make time for side projects on weekends</li>
              <li>Dedicate one day pw to documenting the journey</li>
            </ul>
          </Col>
        </Row>
      </Card>
      <Footer />
    </Container>
  );
};

export default Home;
