import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Featured from "./components/Featured";
import { Container, Col1 } from "./components/shared/Layout.js";
import "./styles/base.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <Featured />
        <Container>
          <h2>Projects</h2>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
