import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Story from "./components/Story";
import ProjectPanels from "./components/ProjectPanels";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Landing />
        <Story />
        <ProjectPanels />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// export default App;

if (module.hot) {
  module.hot.accept();
}
