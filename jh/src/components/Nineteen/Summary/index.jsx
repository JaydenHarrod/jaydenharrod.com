import React from "react";
import { Card, HeadingOne, Paragraph, HeadingTwo } from "../../../shared";
import styled from "styled-components";

const UnorderedList = styled("ul")`
  background-color: #f3f3f3;
  border-radius: 4px;
  margin-top: -50px;
  padding: 20px;
  padding-top: 50px;
  color: #484848;

  li {
    padding-top: 4px;
    padding-bottom: 4px;
    margin-left: 14px;
  }
`;

const ToggleButton = styled("button")`
  border: 0;
  background-color: #e4e4e4;
  text-align: left;
  width: 100%;
  color: #616161;
  border-radius: 4px;
  padding: 8px;
`;

const Summary = ({ handleToggle, toggle }) => {
  return (
    <>
      <div id="summary" />
      <HeadingOne center mt="2rem" mb="2rem">
        Two Thousand and Nineteen
      </HeadingOne>
      <Card pb={1}>
        {/* Summary Component */}
        <HeadingTwo mt={0}>Year Summary</HeadingTwo>
        <Paragraph>
          2019 was the year of change. I moved cities, worked 3 different jobs,
          and lived in 3 different places. After 3 years of dealing with the
          anxiety that comes with an over populated city, the impossible
          financial demands, and the logistical nightmare involved when
          socialising with friends or spending time outdoors. I decided that
          there must be a better life to be had outside of Sydney, and that the
          job hub of Australia wasn't the only answer for a successful career.
          After all, I was previously living in a small country town, Sydney was
          not my identity or a place I saw myself living long-term. With the
          reward potentials high and the timing right, I took a huge risk and
          moved back to my hometown of Newcastle, NSW to completely redefine how
          I lived my life in 2019.
        </Paragraph>
        <HeadingTwo>Achievements</HeadingTwo>
        <Paragraph>
          Major life changes offer a great reset in motivation and vision.
        </Paragraph>
        <Paragraph>
          <ToggleButton onClick={() => handleToggle()}>
            {!toggle ? "Expand List" : "Hide List"}
          </ToggleButton>
        </Paragraph>
        {toggle && (
          <UnorderedList>
            <li>
              Started the year with wisdoms surgery to never deal with it again
            </li>
            <li>Purchased studio monitors for life (Presonus Sceptre S8s)</li>
            <li>Strategically purchased my first car in cash (Mazda 3)</li>
            <li>Ran 5KMs in 25 mins (all-time personal best)</li>
            <li>Left working at hipages, despite loving it</li>
            <li>Started a new job in a Newcastle based agency</li>
            <li>
              Invested in sleep quality by getting a Queen Koala mattress bundle
            </li>
            <li>Went on a Landcare leadership retreat on the Central Coast</li>
            <li>Became a Christian and started going to Church</li>
            <li>Climbed the Young Endeavour again whilst it was in port</li>
            <li>Went to the hotrod Rattletrap at Crowdy Head</li>
            <li>Witnessed the best sunrise ever</li>
            <li>Saw my friend Jared get married</li>
            <li>Photographed the HUSTLE event in Port Stephens</li>
            <li>Decided agency life was not for me and left</li>
            <li>Took a month of work completely to rest after burn out</li>
            <li>Started working at a product company, loving it</li>
            <li>Become a Redfrog volenteer</li>
            <li>Completed a time capsule wardrobe</li>
            <li>Got my full licence and passport</li>
            <li>
              Moved into a new place and completed my dream home office/studio
            </li>
            <li>Release a track under my music alias Allsides</li>
          </UnorderedList>
        )}
      </Card>
    </>
  );
};

export default Summary;
