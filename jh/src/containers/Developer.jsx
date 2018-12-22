import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Container,
  Row,
  Col,
  Header,
  Footer,
  Card,
  HeadingOne,
  Paragraph
} from '../shared';

const Developer = () => {
  return (
    <Container>
      <Helmet>
        <title>Developer | Jayden Harrod</title>
        <meta
          name="description"
          content="
          Jayden is a designer, developer, film maker, and musician from
          Australia. He's best known for his YouTube channels."
        />
      </Helmet>
      <Header />
      <Card>
        <Row pl="1rem" pr="1rem">
          <Col xs={12}>
            <HeadingOne>Developer </HeadingOne>
            <Paragraph>
              Frontend developer using full-stack JavaScript, HTML, CSS, and
              React to build web products. In my role as a developer, I love
              designing interfaces that feel intuitive and accessible to all
              people. The work I enjoy the most is creating functional user
              interfaces.
            </Paragraph>
          </Col>
        </Row>
      </Card>
      <Footer />
    </Container>
  );
};

export default Developer;
