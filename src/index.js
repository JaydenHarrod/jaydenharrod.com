import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Featured from "./components/Featured";
import ProjectPanels from "./components/ProjectPanels";
import "./styles/base.scss";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Landing />
        <ProjectPanels />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
