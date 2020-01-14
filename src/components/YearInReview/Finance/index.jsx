import React from 'react';
import { HeadingOne, Paragraph, Card } from '../../../shared';
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
          habits have actually decreased 5.0% year on year. Lifestyle creep is
          very common so I am happy to have avoided it and instead put the extra
          money into savings as I continue towards financial independence.
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
