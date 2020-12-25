import React from "react";
import { HeadingOne, Paragraph, Image, Page } from "../shared";

import darkgithub from "../components/images/darkgithub.png";

const SoftwareEngineer = () => {
  const githubImage = darkgithub;

  return (
    <Page>
      <HeadingOne>Product & Engineering</HeadingOne>
      <Paragraph>
        Jayden Harrod passionately creates digital products using software. He
        is currently a Technical Lead at BetMakers Technology Group.
      </Paragraph>
      <Paragraph>
        With over 10 years of experience in programming, design, business, and
        marketing, he has the gift of quick discernment when it comes to
        optimising value creation between business, service, and development
        practices.
      </Paragraph>
      <Paragraph>
        My technical skills in software development include AWS Infrastructure,
        JavaScript Frontend Engineering, and Product Design. I also enjoy
        mentoring and leading people to feel their best and have a big personal
        passion for personal development.
      </Paragraph>
      <Image alt="github" src={githubImage} />
    </Page>
  );
};

export default SoftwareEngineer;
