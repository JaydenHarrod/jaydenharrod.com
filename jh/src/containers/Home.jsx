import React from 'react';
import { Helmet } from 'react-helmet';
import ReactTextRotator from 'react-text-rotator';
import {
  Container,
  Row,
  Col,
  HeadingOne,
  Paragraph,
  Anchor,
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
        <Row pl="1rem" pr="1rem">
          <Col xs={12} md={6}>
            <HeadingOne mt={0}>
              <ReactTextRotator content={content} time={3500} startDelay={0} />
            </HeadingOne>
            <Paragraph bold>{`Hello 👋`}</Paragraph>
            <Anchor
              block
              rel="noreferrer"
              target="_blank"
              href="https://mudbath.com.au"
            >
              I'm a web developer at mudbath.com.au
            </Anchor>
            <Anchor
              block
              rel="noreferrer"
              target="_blank"
              href="https://youtube.com/jaydenharrod"
            >
              Posting developer, minimalism, and travel videos for YouTube
            </Anchor>
            <Anchor
              block
              rel="noreferrer"
              target="_blank"
              href="https://github.com/jaydenharrod"
            >
              Coding web apps on Github
            </Anchor>
            <Anchor
              block
              rel="noreferrer"
              target="_blank"
              href="https://instagram.com/jaydenharrod"
            >
              Sharing travel photos on Instagram
            </Anchor>
            <Anchor
              block
              rel="noreferrer"
              target="_blank"
              href="https://soundcloud.com/allsidesdj"
            >
              Producing Hardstyle music
            </Anchor>
          </Col>
          <Col xs={12} md={6}>
            <Image src={hero} height="auto" width="362" alt="Profile picture" />
          </Col>
        </Row>
      </Card>
      <Footer />
    </Container>
  );
};

export default Home;
