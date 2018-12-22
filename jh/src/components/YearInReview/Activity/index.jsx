import React from 'react';
import { Card, Row, HeadingOne, Paragraph, MetricBox } from '../../../shared';
import FitBitChart from './FitBitChart';

const Activity = () => {
  return (
    <>
      <div id="activity" />
      <HeadingOne center mt="2rem" mb="2rem">
        <span role="img" aria-label="related-emoji">
          ⌚️
        </span>{' '}
        Activity{' '}
        <span role="img" aria-label="related-emoji">
          ⌚️
        </span>
      </HeadingOne>

      <Card header title="Fitbit">
        <Paragraph mb="1rem" mt={0}>
          The work-week step challenge (as a competitive person) pushed me to
          walk and run and now developed into a great weekly habit.
        </Paragraph>
        <Row justifyContent="center" mb="1rem">
          <MetricBox title="STEPS" metric="2.5M" />
          <MetricBox title="DISTANCE" metric="2,000KM" />
          <MetricBox title="FLOORS" metric="5,266" />
          <MetricBox title="CALORIES" metric="892,601" />
        </Row>
        <FitBitChart />
      </Card>
    </>
  );
};

export default Activity;
