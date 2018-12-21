import React, { Suspense } from 'react';
import Loader from '../shared/loader';

const Container = React.lazy(() => import('../containers/Developer'));

const Developer = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container />
    </Suspense>
  );
};

export default Developer;
