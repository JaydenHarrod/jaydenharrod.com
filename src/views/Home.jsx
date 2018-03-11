import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Story from "../components/Story";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home | JH</title>
        </Helmet>
        <Story />
      </Fragment>
    );
  }
}

export default Home;
