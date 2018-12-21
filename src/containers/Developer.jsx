import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from '../shared/layout';
import Header from '../shared/header';
import { HeadingOne, Paragraph } from '../shared/typography';
import { Card } from '../shared/card';
import Footer from '../shared/footer';

const Developer = () => {
  return (
    <Container>
      <Helmet>
        <title>Developer | Jayden Harrod</title>
      </Helmet>
      <Header />
      <Card>
        <Row pl="1rem" pr="1rem">
          <Col xs={12} md={6}>
            <HeadingOne>Developer </HeadingOne>
            <Paragraph>
              I'm a software engineer using full-stack JavaScript, HTML5, CSS3,
              and React to build web products. In my role as a developer, I love
              designing interfaces that feel intuitive and accessible to all
              people. The work I enjoy the most is creating functional user
              interfaces based on wireframes and hifi designs.
            </Paragraph>
          </Col>
        </Row>
      </Card>
      <Footer />
    </Container>
  );
};

export default Developer;
