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
        <meta name="description">
          Jayden is a designer, developer, film maker, and musician from
          Australia. He's best known for his YouTube channels.
        </meta>
        <meta name="keywords">
          jayden harrod, jayden, sydney developer, sydney frontend, remote
          developer, developer blog, how to become a developer, film maker,
          jayden harrod film maker, jayden harrod website
        </meta>
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
              href="https://hipages.com.au"
            >
              I'm a web developer at hipages.com.au
            </Anchor>
            <Anchor
              block
              rel="noreferrer"
              target="_blank"
              href="https://youtube.com/jaydenharrod"
            >
              Making developer, minimalism, and destination videos for YouTube
            </Anchor>
            <Anchor
              block
              rel="noreferrer"
              target="_blank"
              href="https://github.com/jaydenharrod"
            >
              Coding a SaaS product on Github
            </Anchor>
            <Anchor
              block
              rel="noreferrer"
              target="_blank"
              href="https://instagram.com/jaydenharrod"
            >
              Sharing destination photos on Instagram
            </Anchor>
            <Anchor
              block
              rel="noreferrer"
              target="_blank"
              href="https://soundcloud.com/allsidesdj"
            >
              And produce hard-dance music
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
