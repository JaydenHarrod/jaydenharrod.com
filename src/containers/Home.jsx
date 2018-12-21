import React from 'react';
import { Helmet } from 'react-helmet';
import ReactTextRotator from 'react-text-rotator';
import { Container, Row, Col } from '../shared/layout';
import Header from '../shared/header';
import { HeadingOne, Paragraph, Anchor } from '../shared/typography';
import Image from '../shared/image';
import hero from '../components/images/hero.jpg';
import { Card } from '../shared/card';

const content = [
  {
    text: 'Maker.',
    className: 'classA',
    animation: 'fade'
  },
  {
    text: 'Web Developer.',
    className: 'classB',
    animation: 'fade'
  },
  {
    text: 'YouTuber.',
    className: 'classC',
    animation: 'fade'
  },
  {
    text: 'Music Producer.',
    className: 'classD',
    animation: 'fade'
  },
  {
    text: 'Videographer.',
    className: 'classE',
    animation: 'fade'
  },
  {
    text: 'Minimalist.',
    className: 'classF',
    animation: 'fade'
  }
];

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>About | Jayden Harrod</title>
      </Helmet>
      <Header />
      <Card>
        <Row pl="1rem" pr="1rem">
          <Col xs={12} md={6}>
            <HeadingOne>
              <ReactTextRotator content={content} time={3500} startDelay={0} />
            </HeadingOne>
            <Paragraph bold>{`Hello, nice to meet you 👋`}</Paragraph>
            <Anchor block target="_blank" href="https://hipages.com.au">
              I'm a web developer at hipages
            </Anchor>
            <Anchor
              block
              target="_blank"
              href="https://youtube.com/jaydenharrod"
            >
              Sharing my journey on YouTube
            </Anchor>
            <Anchor
              block
              target="_blank"
              href="https://soundcloud.com/allsidesdj"
            >
              Releasing music @allsidesdj
            </Anchor>
            <Anchor
              block
              target="_blank"
              href="https://github.com/jaydenharrod"
            >
              Coding on Github @jaydenharrod
            </Anchor>
            <Anchor
              block
              target="_blank"
              href="https://instagram.com/jaydenharrod"
            >
              Instagramming @jaydenharrod
            </Anchor>
          </Col>
          <Col xs={12} md={6}>
            <Image src={hero} height="auto" width="362" />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Home;
