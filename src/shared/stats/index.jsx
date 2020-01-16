import React from "react";
import { Paragraph, HeadingOne, TinyText } from "../typography";

export const Stats = ({ title, metric, fact, inverse }) => {
  return (
    <div>
      <Paragraph inverse={inverse} bold mb={0}>
        {title}
      </Paragraph>
      <HeadingOne inverse={inverse} mt={0}>
        {metric}
      </HeadingOne>
      {fact && <TinyText>{fact}</TinyText>}
    </div>
  );
};
