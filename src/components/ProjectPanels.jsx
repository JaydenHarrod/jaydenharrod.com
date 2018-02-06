import React from "react";
import Box from "./shared/Box"
import { Container, Col1 } from "./shared/Layout";

export const ProjectPanels = props => {
  return (
    <Container>
      <Box title="Developer" class="box-l" path="/developer" alt="Developer Image"/>
      <Box title="Filmmaker" class="box-r" path="/filmmaker" alt="Filmmaker Image"/>
    </Container>
  );
};

export default ProjectPanels;
