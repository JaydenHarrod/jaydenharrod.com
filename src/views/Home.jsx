import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Content from "../components/Content";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Home | JH</title>
        </Helmet>
        <Content />
      </Fragment>
    );
  }
}

export default Home;
