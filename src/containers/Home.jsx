import React from "react";
import { Helmet } from "react-helmet";
import ReactTextRotator from "react-text-rotator";
import {
  Container,
  Row,
  Col,
  HeadingOne,
  Card,
  Paragraph,
  Switch,
  Modal,
  Video,
  Image
} from "../shared";

import darkgithub from "../components/images/darkgithub.png";

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
  const githubImage = darkgithub;
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
      <Card pl="1rem" pr="1rem" p="2rem">
        <Row pl="1rem" pr="1rem">
          <Col xs={12} md={12}>
            <HeadingOne center mt={0} mb={3}>
              <ReactTextRotator content={content} time={3500} startDelay={0} />
            </HeadingOne>
            <Paragraph>
              Jayden Harrod is an Australian videographer, software engineer,
              and music producer.
            </Paragraph>
            <Paragraph bold>Videography</Paragraph>
            <Switch>
              {({ on, flick }) => (
                <>
                  <Image
                    onClick={flick}
                    alt="Image of tall ship"
                    src="http://i3.ytimg.com/vi/aguE5W3kHXU/maxresdefault.jpg"
                  />
                  {on && (
                    <Modal onRequestClose={flick}>
                      <Video
                        src="https://www.youtube.com/embed/aguE5W3kHXU"
                        title="Young Endeavour video"
                      />
                    </Modal>
                  )}
                </>
              )}
            </Switch>

            <Paragraph bold>Software Engineering</Paragraph>
            <Image alt="github" src={githubImage} />
            <Paragraph bold>Music Production</Paragraph>
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
    </Container>
  );
};

export default Home;
