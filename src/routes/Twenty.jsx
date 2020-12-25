import React, { Suspense } from "react";
import { Loader } from "../shared";

const Container = React.lazy(() => import("../containers/Twenty"));

const Nineteen = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container />
    </Suspense>
  );
};

export default Nineteen;
