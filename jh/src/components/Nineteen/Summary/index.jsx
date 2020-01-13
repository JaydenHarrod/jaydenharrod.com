import React from "react";
import { Card, HeadingOne, Paragraph, HeadingTwo } from "../../../shared";

const Summary = ({ handleToggle, toggle }) => {
  return (
    <>
      <div id="summary" />
      <HeadingOne center mt="2rem" mb="2rem">
        <span role="img" aria-label="related-emoji">
          📜
        </span>{" "}
        Year In Review - 2019{" "}
        <span role="img" aria-label="related-emoji">
          📜
        </span>
      </HeadingOne>
      <Card>
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
          Major life changes offer a great reset in motivation and vision. I
          made good use of it!
        </Paragraph>
        <Paragraph>
          <button onClick={() => handleToggle()}>Toggle List</button>
        </Paragraph>
        {toggle && (
          <>
            <Paragraph>
              - Started the year with wisdoms surgery to never deal with it
              again
            </Paragraph>
            <Paragraph>
              - Purchased studio monitors for life (Presonus Sceptre S8s)
            </Paragraph>
            <Paragraph>
              - Strategically purchased my first car in cash (Mazda 3)
            </Paragraph>
            <Paragraph>
              - Ran 5KMs in 25 mins (all-time personal best)
            </Paragraph>
            <Paragraph>- Left working at hipages, despite loving it</Paragraph>
            <Paragraph>
              - Started a new job in a Newcastle based agency
            </Paragraph>
            <Paragraph>
              - Invested in sleep quality by getting a Queen Koala mattress
              bundle
            </Paragraph>
            <Paragraph>
              - Went on a Landcare leadership retreat on the Central Coast
            </Paragraph>
            <Paragraph>
              - Became a Christian and started going to Church
            </Paragraph>
            <Paragraph>
              - Climbed the Young Endeavour again whilst it was in port
            </Paragraph>
            <Paragraph>
              - Went to the hotrod Rattletrap at Crowdy Head
            </Paragraph>
            <Paragraph>
              - Witnessed the best sunrise ever (
              <a href="https://www.instagram.com/jaydenharrod/">
                see for yourself!
              </a>
              )
            </Paragraph>
            <Paragraph>- Saw my friend Jared get married</Paragraph>
            <Paragraph>
              - Photographed the HUSTLE event in Port Stephens
            </Paragraph>
            <Paragraph>- Decided agency life was not for me and left</Paragraph>
            <Paragraph>
              - Took a month of work completely to rest after burn out
            </Paragraph>
            <Paragraph>
              - Started working at a product company, loving it
            </Paragraph>
            <Paragraph>- Become a Redfrog volenteer</Paragraph>
            <Paragraph>- Completed a time capsule wardrobe</Paragraph>
            <Paragraph>- Got my full licence and passport</Paragraph>
            <Paragraph>
              - Moved into a new place and completed my dream home office/studio
            </Paragraph>
            <Paragraph>
              - Release a track under my music alias Allsides
            </Paragraph>
          </>
        )}
      </Card>
    </>
  );
};

export default Summary;
