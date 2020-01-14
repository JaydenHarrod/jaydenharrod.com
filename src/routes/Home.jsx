import React, { Suspense } from 'react';
import { Loader } from '../shared';

const Container = React.lazy(() => import('../containers/Home'));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container />
    </Suspense>
  );
};

export default Home;
