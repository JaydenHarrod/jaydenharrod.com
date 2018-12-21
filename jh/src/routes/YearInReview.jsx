import React, { Suspense } from 'react';
import { Loader } from '../shared';

const Container = React.lazy(() => import('../containers/YearInReview'));

const YearInReview = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container />
    </Suspense>
  );
};

export default YearInReview;
