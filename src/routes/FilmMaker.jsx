import React, { Suspense } from "react";
import { Loader } from "../shared";

const Container = React.lazy(() => import("../containers/FilmMaker"));

const FilmMaker = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container />
    </Suspense>
  );
};

export default FilmMaker;
