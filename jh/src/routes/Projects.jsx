import React, { Suspense } from 'react';
import { Loader } from '../shared';

const Container = React.lazy(() => import('../containers/Projects'));

const Projects = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container />
    </Suspense>
  );
};

export default Projects;
