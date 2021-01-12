import React from "react";
import styled from "styled-components";
import {
  Card,
  Col,
  HeadingOne,
  Image as ResponsiveImage,
  Row,
  Stats,
} from "../../../shared";
import ig1 from "./images/1.jpg";
import ig2 from "./images/2.jpg";
import homestudio from "./images/2020setup.png";
import ig3 from "./images/3.jpg";

const Image = styled("img")`
  object-fit: cover;
  display: flex;
  flex-grow: 1;
  max-height: 109px;
  @media (min-width: 768px) {
    max-height: unset;
  }
`;

const Creator = (props) => {
  const theme = props.isDarkMode ? "dark" : "light";
  return (
    <>
      <div id="creator" />
      <HeadingOne center mt="2rem" mb="2rem">
        Digital Creator
      </HeadingOne>

      <Card header title="YouTube">
        <Row mb="1rem" pt={{ xs: 2, lg: 0 }}>
          <Col lg={6}>
            <div
              className="g-ytsubscribe"
              title="Subscribe to JaydenHarrod on YouTube"
              data-channelid="UCOdFl-yPqum9818JPntA6DQ"
              data-layout="full"
              data-count="default"
              data-theme={theme}
            />
            <Stats title="WATCH TIME (hours)" metric="391" />
            <Stats title="VIEWS" metric="17.1K" />
            <Stats title="SUBSCRIBERS" metric="+66" />
          </Col>
          <Col lg={6} mt={{ xs: 2, lg: 0 }}>
            <div
              className="g-ytsubscribe"
              title="Subscribe to SquizzFilms on YouTube"
              data-channel="SquizzFilms"
              data-layout="full"
              data-count="default"
              data-theme={theme}
            />
            <Stats title="WATCH TIME (hours)" metric="991" />
            <Stats title="VIEWS" metric="37.5K" />
            <Stats title="SUBSCRIBERS" metric="-90" />
          </Col>
        </Row>
      </Card>

      <Card header title="Home Studio 2020">
        <ResponsiveImage src={homestudio} />
      </Card>

      <Card header title="Top Snaps" pb={0} pt={0}>
        <Row justifyContent="center">
          <Image width="50%" alt="ig-photo" src={ig1} />
          <Image width="50%" alt="ig-photo" src={ig2} />
          <Image width="50%" alt="ig-photo" src={ig3} />
        </Row>
      </Card>
    </>
  );
};

export default Creator;
