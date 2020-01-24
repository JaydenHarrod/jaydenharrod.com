import React from "react";
import { Paragraph, HeadingOne, TinyText } from "../typography";

export const Stats = ({ title, metric, fact }) => {
  return (
    <div>
      <Paragraph bold mb={0}>
        {title}
      </Paragraph>
      <HeadingOne mt={0}>{metric}</HeadingOne>
      {fact && <TinyText>{fact}</TinyText>}
    </div>
  );
};
