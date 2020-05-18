import React from "react";
import { HeadingOne, Paragraph, Image, Page } from "../shared";

import darkgithub from "../components/images/darkgithub.png";

const SoftwareEngineer = () => {
  const githubImage = darkgithub;

  return (
    <Page>
      <HeadingOne>Frontend Developer</HeadingOne>
      <Paragraph>
        Jayden Harrod is a Lead Frontend Engineer (React/Vue) for product
        companies. With assisting skills in devops, product management, design,
        and marketing as an aspiring Head of Product.
      </Paragraph>
      <Paragraph>
        These disciplines have been matured from 10 years of practical learning,
        5 years commercial experience, amazing mentors, and a variety of
        companies and industry specific problems.
      </Paragraph>
      <Image alt="github" src={githubImage} />
    </Page>
  );
};

export default SoftwareEngineer;
