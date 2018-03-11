import React from "react";
import Box from "./shared/Box"
import devUrl from "../assets/dev.png"
import filmUrl from "../assets/filmmaker.png"
import { FullContainer } from "./shared/Layout";

export const ProjectPanels = () => {
  return (
    <FullContainer>
      <Box title="Developer" class="box-l" path="/developer" alt="Developer Image" src={devUrl} />
      <Box title="Filmmaker" class="box-r" path="/filmmaker" alt="Filmmaker Image" src={filmUrl}/>
    </FullContainer>
  );
};

export default ProjectPanels;
