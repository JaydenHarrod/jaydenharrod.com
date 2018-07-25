import React from "react";
import styled from 'styled-components';
import { Container, Col1 } from "./shared/Layout";
import portraitURL from "../assets/profile-picture.jpg";
import BlogPanel from "./BlogPanel";
import Employment from "./Employment";
import Blurb from "./Blurb";
import SocialIcons from "./SocialIcons";

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CreditText = styled.p`
  text-align: right;
  font-size: 10px;
`;
export const Content = () => (
  <Container>
    <Col1>
      <HeadingContainer>
        <h1>Home</h1>
        <SocialIcons />
      </HeadingContainer>
      <img src={portraitURL} width="100%" alt="portrait" />
      <CreditText>Captured by: <a href="https://www.instagram.com/nicholaswcole/" rel="noopener noreferrer" target="_blank">Nicholas Cole</a></CreditText>
      <Blurb />
      <BlogPanel />
      <Employment />
    </Col1>
  </Container>
);

export default Content;
