import React from 'react';
import { Helmet } from 'react-helmet';
import ReactTextRotator from 'react-text-rotator';
import {
  Container,
  Row,
  Col,
  HeadingOne,
  Header,
  Footer,
  Image,
  Card
} from '../shared';
import hero from '../components/images/hero.jpg';

const content = [
  {
    text: 'Maker.',
    className: 'classA',
    animation: 'fade'
  },
  {
    text: 'YouTuber.',
    className: 'classB',
    animation: 'fade'
  },
  {
    text: 'Programmer.',
    className: 'classC',
    animation: 'fade'
  },
  {
    text: 'Photographer.',
    className: 'classD',
    animation: 'fade'
  },
  {
    text: 'Music Producer.',
    className: 'classE',
    animation: 'fade'
  }
];

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
        <Row justifyContent="center" pl="1rem" pr="1rem">
          <Col xs={12} md={6}>
            <HeadingOne center mt={0} mb={3}>
              <ReactTextRotator content={content} time={3500} startDelay={0} />
            </HeadingOne>
            <Image src={hero} height="auto" width="362" alt="Profile picture" />
          </Col>
        </Row>
      </Card>
      <Footer />
    </Container>
  );
};

export default Home;
