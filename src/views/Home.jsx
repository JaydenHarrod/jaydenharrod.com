import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Landing from "../components/Landing";
import Story from "../components/Story";
import ProjectPanels from "../components/ProjectPanels";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home | JH</title>
        </Helmet>
        <Landing />
        <Story />
        <ProjectPanels />
      </Fragment>
    );
  }
}

export default Home;
