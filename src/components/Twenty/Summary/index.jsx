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
        <Paragraph>Coming soon</Paragraph>
      </Card>
    </>
  );
};

export default Summary;
