import React from 'react';
import { HeadingOne, Paragraph } from '../../../shared/typography';
import { Card } from '../../../shared/card';
import FinancePieChart from './FinancePieChart';

const Finance = () => {
  return (
    <>
      <div id="finance" />
      <HeadingOne center mb="2rem" mt="2rem">
        <span role="img" aria-label="related-emoji">
          💰
        </span>{' '}
        Finance{' '}
        <span role="img" aria-label="related-emoji">
          💰
        </span>
      </HeadingOne>
      <Card header title="Expenses">
        <Paragraph mt={0}>
          Despite getting a significant salary increase this year my spending
          habits have actually decreased by 5.0% year on year. Lifestyle creep
          is very common so I am happy to see I avoided it and instead put the
          extra money into savings as I continue towards financial independence.
        </Paragraph>
        <Paragraph bold center mb={0}>
          SPENDING BREAKDOWN
        </Paragraph>
        <FinancePieChart />
      </Card>
    </>
  );
};

export default Finance;
