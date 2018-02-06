import React from "react";
import DeveloperPanel from "./DeveloperPanel";
import MakerPanel from "./MakerPanel";
import { Container, Col1 } from "./shared/Layout";

export const ProjectPanels = props => {
  return (
    <Container>
      <DeveloperPanel />
      <MakerPanel />
    </Container>
  );
};

export default ProjectPanels;
