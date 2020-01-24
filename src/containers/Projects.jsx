import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card, HeadingOne, Paragraph } from "../shared";

const Projects = () => {
  return (
    <Container>
      <Helmet>
        <title>Projects | Jayden Harrod</title>
        <meta
          name="description"
          content="
          Jayden is a designer, developer, film maker, and musician from
          Australia. He's best known for his YouTube channels."
        />
      </Helmet>
      <Card>
        <Row pl="1rem" pr="1rem">
          <Col xs={12}>
            <HeadingOne>Projects </HeadingOne>
            <Paragraph>
              The best way to summarise what I do is to say "I enjoy making
              things"
            </Paragraph>
            <Paragraph>
              Things come in many forms. Design, code, devops, marketing, photo,
              video, music, and everything in-between. This page is a place to
              collate and showcase the variety of projects I have completed over
              the years.
            </Paragraph>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Projects;
