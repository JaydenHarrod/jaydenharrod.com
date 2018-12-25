import React, { Suspense } from 'react';
import { Loader } from '../shared';

const Container = React.lazy(() => import('../containers/Goals'));

const Goals = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container />
    </Suspense>
  );
};

export default Goals;
