import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 24px;
`;
const Heading = styled.h3`
  padding-top: 18px;
`;
const Paragraph = styled.p`
  margin-bottom: 0;
`;
const DateText = styled.p`
  font-size: 12px;
  margin-top: 0;
  color: rgba(0, 0, 0, 0.54);
`;
const Employment = () => {
  return (
    <Container>
      <Heading>Employment</Heading>
      <Paragraph>hipages: Junior Frontend Developer</Paragraph>
      <DateText>2018 - Present</DateText>
      <Paragraph>Digivizer: Junior Creative</Paragraph>
      <DateText>2016 - 2018</DateText>
      <Paragraph>PickleHosting: Operations Manager</Paragraph>
      <DateText>2014 - 2016</DateText>
      <Paragraph>YouTube: Digital Creative</Paragraph>
      <DateText>2010 - 2016</DateText>
    </Container>
  );
};

export default Employment;
