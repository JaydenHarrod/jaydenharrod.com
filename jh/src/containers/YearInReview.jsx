import React from 'react';
import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Footer, Anchor, Paragraph, Row, Col, Header } from '../shared';
import Finance from '../components/YearInReview/Finance';
import Travel from '../components/YearInReview/Travel';
import Technology from '../components/YearInReview/Technology';
import Media from '../components/YearInReview/Media';
import Activity from '../components/YearInReview/Activity';
import Summary from '../components/YearInReview/Summary';

const SideMenu = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 1px 3px 3px ${props => props.theme.grey};
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
        <meta
          name="description"
          content="
          Jayden is a designer, developer, film maker, and musician from
          Australia. He's best known for his YouTube channels."
        />
        <script src="https://apis.google.com/js/platform.js" />
      </Helmet>
      <Header full />
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
          <SideMenu>
            <Col>
              <Paragraph bold mt={0}>
                Jump to section
              </Paragraph>
              <Anchor block onClick={scrollTo('#summary')}>
                Summary
              </Anchor>
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
                {`↩️ Back to About`}
              </MenuLink>
            </Col>
          </SideMenu>
        </Col>
        <Col xs={12} sm={10} md={8} lg={8} order={{ xs: 2, lg: 1 }}>
          <Summary />
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
