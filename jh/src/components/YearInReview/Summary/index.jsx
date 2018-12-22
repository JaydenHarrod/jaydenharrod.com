import React from 'react';
import { Card, HeadingOne, Paragraph } from '../../../shared';

const Summary = () => {
  return (
    <>
      <div id="summary" />
      <HeadingOne center mt="2rem" mb="2rem">
        <span role="img" aria-label="related-emoji">
          📜
        </span>{' '}
        Year-In-Review{' '}
        <span role="img" aria-label="related-emoji">
          📜
        </span>
      </HeadingOne>
      <Card>
        <Paragraph bold mt={0}>
          It's been a big one!
        </Paragraph>
        <Paragraph>
          In January, I discovered the world of life logging. When apps like
          Fitbit, MyFitnessPal and MoneyBrilliant revealed real-time insights
          into my daily life, I was hooked. This lead to overcoming depression
          this year celebrating 365 days okay. Since, I've had the most
          rewarding year yet.
        </Paragraph>
        <Paragraph>
          There's been a big improvement in all areas of my life. My diet and
          health is at its peak, I overcame debt and well on my way towards
          FIRE, made more meaningful relationships, became a smarter/quicker
          developer, and narrowed down exactly what kind of life I want to live.
        </Paragraph>
        <Paragraph>
          I challenged myself further than ever before this year like
          commandeering the Young Endeavour tall ship for 11 days around the
          Whitsundays, met like minded people at the Landcare leadership
          retreat, and started a new job leading to new friends and luncheons.
          The success of this year was a direct result of being more
          introspective, focused, and motivated to learn.
        </Paragraph>
        <Paragraph>
          With a support network of mentors, like-minded people, a clear mind,
          and another year of skill improvement, I have high hopes for 2019.
        </Paragraph>
      </Card>
    </>
  );
};

export default Summary;
