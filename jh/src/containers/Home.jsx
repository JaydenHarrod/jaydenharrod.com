import React from "react";
import { Helmet } from "react-helmet";
import ReactTextRotator from "react-text-rotator";
import {
  Container,
  Row,
  Col,
  HeadingOne,
  Header,
  Footer,
  Card,
  Paragraph
} from "../shared";

const content = [
  {
    text: "Maker.",
    className: "classA",
    animation: "fade"
  },
  {
    text: "YouTuber.",
    className: "classB",
    animation: "fade"
  },
  {
    text: "Programmer.",
    className: "classC",
    animation: "fade"
  },
  {
    text: "Photographer.",
    className: "classD",
    animation: "fade"
  },
  {
    text: "Music Producer.",
    className: "classE",
    animation: "fade"
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
          <Col xs={12} md={12}>
            <HeadingOne left mt={0} mb={3}>
              <ReactTextRotator content={content} time={3500} startDelay={0} />
            </HeadingOne>
            <Paragraph>
              Jayden Harrod is an Australian videographer, software engineer,
              and music producer.
            </Paragraph>
            <Paragraph bold>Videography</Paragraph>
            <Paragraph>
              Since my early teens, I have been passionate about creating video
              content. I created my first YouTube channel in 2010 and grew it to
              1,000 subscribers and 1,000,000 views in the first year. Topping
              daily and weekly stats in Australia which lead to YouTube
              partnership. Off the financial success of my first YouTube channel
              I created my second channel SquizzFilms which I grew to over 7,500
              subscribers and 2,000,000 views, this also lead to a YouTube
              partnership.
            </Paragraph>
            <Paragraph>
              Off the success of my second channel I become an Operations
              Manager at PickleHosting - a digital e-commerce game server
              hosting company, received sponsorship from Lenovo, and got my
              first full-time job in a digital agency. There I did videography
              for leading Australian brands based out of Sydney. I then invested
              into professional videography equipment and now offer freelance
              videography services for small businesses, individuals, and
              brands.
            </Paragraph>
            <Paragraph bold>Software Engineering</Paragraph>
            <Paragraph>
              For 3 years, I have been working as a professional frontend
              engineer specialising in modern Javascript tooling, React and Vue
              frameworks, and the occasional Node/Postgres backend. I love
              working in product companies and personally feel invested when it
              comes to building digital products. My approach to software
              development leans towards minimising waste, using micro-services
              in the cloud, and improving UI consistency by maintaining
              component library design systems.
            </Paragraph>
            <Paragraph bold>Music Production</Paragraph>
            <Paragraph>
              For about 10 years, I have also been a hard dance music producer.
              I release under the alias "Allsides" and you can listen to my
              music on YouTube, Soundcloud, iTunes, and Spotify.
            </Paragraph>
            <iframe
              src="https://open.spotify.com/embed/artist/2ERwsdfJZQX8jpYA8qACvr"
              width="100%"
              height="380"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Allsides Spotify playlist"
            ></iframe>
          </Col>
        </Row>
      </Card>
      <Footer />
    </Container>
  );
};

export default Home;
