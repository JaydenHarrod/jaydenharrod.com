import React from "react";
import { Card, HeadingOne, Paragraph } from "../../../shared";

const Summary = ({ handleToggle, toggle }) => {
  return (
    <>
      <div id="summary" />
      <HeadingOne center mt="2rem" mb="2rem">
        Two Thousand and Twenty
      </HeadingOne>
      <Card pb={3}>
        <Paragraph>
          2020 can be described as half a year of great chaos, and half a year
          of great stability.
        </Paragraph>
        <Paragraph>
          2020 begun with nothing going right in any area of my life, it seemed
          anything I did just wasn't my calling. However, during that
          experience, I learned and refined exactly what matters most for me and
          where I'll lead my life with authentic intention in retrospect.
        </Paragraph>
        <Paragraph>
          Then covid hit, and it was 3 months of isolation for me as my
          housemate and dog moved out. I followed the lockdown rules strictly
          and so it really did feel like a prison sentence. The company had a
          boom as a result of this new world and my working hours were long and
          boundary-less. I did, however, expand my career into exciting new
          levels of responsibility and ownership as a result of that situation.
        </Paragraph>
        <Paragraph>
          Post covid I began to get control of things again. I moved house and
          curated the perfect home environment for my needs. I purchased a
          Subaru Forester for outdoor lifestyle practicalities. I took up a
          promotion at work to become a Technical Lead which has been an
          exciting mix of software architecture, management, and leadership. I
          invested in stocks and made significant gains. And most importantly, I
          formed many wonderful new friendships with everybody seaming a bit
          more keen than usual to socialize and enjoy life together after
          enduring the lockdown season together.
        </Paragraph>
        <Paragraph>
          And so by the end of 2020, things finally fell into place. No longer
          was I worried. I had a confidence that everything I am currently
          experiencing is the right place for me to be.
        </Paragraph>
      </Card>
    </>
  );
};

export default Summary;
