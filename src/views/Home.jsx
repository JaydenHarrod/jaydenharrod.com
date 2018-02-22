import React, { Component, Fragment } from "react";
import Landing from "../components/Landing";
import Story from "../components/Story";
import ProjectPanels from "../components/ProjectPanels";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Landing />
        <Story />
        <ProjectPanels />
      </Fragment>
    );
  }
}

export default Home;
