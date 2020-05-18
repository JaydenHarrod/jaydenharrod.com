import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Container } from "../shared";
import { homeRoutes } from "../routes";

import TabBar from "../components/TabBar";

class Home extends Component {
  render() {
    const tabs = [
      {
        key: "software",
        route: "/",
        label: "Frontend Developer",
      },
      {
        key: "video",
        route: "/filmmaker",
        label: "Film Maker",
      },
      {
        key: "music",
        route: "/music",
        label: "Music Producer",
      },
    ];

    const subApps = homeRoutes.map(
      ({ exact, path, component, subPage }, key) => (
        <Route exact path={path} key={key} component={component} />
      )
    );

    return (
      <Container>
        <Helmet>
          <title>Jayden Harrod</title>
          <meta
            name="description"
            content="Jayden is a designer, developer, film maker, and musician from
          Australia. He's best known for his YouTube channels."
          />
          <meta
            name="keywords"
            content="jayden harrod, jayden, sydney developer, sydney frontend, remote
          developer, developer blog, how to become a developer, film maker,
          jayden harrod film maker, jayden harrod website"
          />
        </Helmet>

        <TabBar tabs={tabs} activeTab={window.location.pathname} />

        {subApps}
      </Container>
    );
  }
}

export default Home;
