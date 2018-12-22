import React from 'react';
import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  HeadingOne,
  HeadingTwo,
  Footer,
  Anchor,
  Paragraph,
  Row,
  Col
} from '../shared';
import Finance from '../components/YearInReview/Finance';
import Travel from '../components/YearInReview/Travel';
import Technology from '../components/YearInReview/Technology';
import Media from '../components/YearInReview/Media';
import Activity from '../components/YearInReview/Activity';

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 6rem;
  background-color: #fff;
  box-shadow: 0px 2px 4px ${props => props.theme.grey};
`;

const MenuBar = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 1px 3px 4px ${props => props.theme.grey};
`;

const scrollTo = selector => e => {
  e && e.preventDefault();
  window.scrollTo({
    top: document.querySelector(selector).offsetTop - 0,
    behavior: 'smooth'
  });
};

const MenuLink = Anchor.withComponent(RouteLink);

const YearInReview = () => {
  return (
    <>
      <Helmet>
        <title>2018 | Jayden Harrod</title>
        <meta name="description">
          Jayden is a designer, developer, film maker, and musician from
          Australia. He's best known for his YouTube channels.
        </meta>
        <script src="https://apis.google.com/js/platform.js" />
      </Helmet>
      <Hero>
        <HeadingOne center mr="1rem" mt={0}>
          JH 2018
        </HeadingOne>
        <HeadingTwo mt={0} mb={0}>
          Year In Review
        </HeadingTwo>
      </Hero>
      <Row justifyContent="center">
        <Col
          xs={0}
          md={2}
          style={{
            position: 'sticky',
            alignSelf: 'flex-start',
            top: '0'
          }}
        >
          <MenuBar>
            <Col>
              <Paragraph bold mt={0}>
                Jump to section
              </Paragraph>
              <Anchor block onClick={scrollTo('#activity')}>
                Activity
              </Anchor>
              <Anchor block onClick={scrollTo('#media')}>
                Media
              </Anchor>
              <Anchor block onClick={scrollTo('#travel')}>
                Travel
              </Anchor>
              <Anchor block onClick={scrollTo('#technology')}>
                Technology
              </Anchor>
              <Anchor block onClick={scrollTo('#finance')}>
                Finance
              </Anchor>
              <Anchor
                block
                href="https://twitter.com/jaydenharrod"
                target="_blank"
                mb="2rem"
              >
                Follow on Twitter
              </Anchor>
              <MenuLink to="/" title="Navigate to Home">
                ↩️ Back to About
              </MenuLink>
            </Col>
          </MenuBar>
        </Col>
        <Col xs={12} sm={10} md={8} lg={8} order={{ xs: 2, lg: 1 }}>
          <Activity />
          <Media />
          <Travel />
          <Technology />
          <Finance />
          <Footer />
        </Col>
      </Row>
    </>
  );
};

export default YearInReview;
