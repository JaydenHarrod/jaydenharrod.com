import React from "react";
import { HeadingOne, Paragraph, Image, Page } from "../shared";

import darkgithub from "../components/images/darkgithub.png";

const SoftwareEngineer = () => {
  const githubImage = darkgithub;

  return (
    <Page>
      <HeadingOne>Design Technologist</HeadingOne>
      <Paragraph>
        I'm a professional in the Software Design and Development industry as
        both a Senior Frontend Developer (JavaScript - TypeScript - React) and
        Product Design (UX - UI - Ops)
      </Paragraph>
      <Paragraph>
        I'm motivated by the team clarity good systems design, domain driven
        design, and information architecture has on a products long-term
        success. And how close collaboration with product teams can be used to
        create consistent, reliable, and maintainable frontend codebases that
        align with the business. This often involves being the engineer for the
        UX team to work closely to implement Design Systems and Component
        Libraries, experiments, and migrations across an organisation.
      </Paragraph>
      <Image alt="github" src={githubImage} />
    </Page>
  );
};

export default SoftwareEngineer;
