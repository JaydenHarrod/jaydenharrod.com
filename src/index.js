import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Featured from "./components/Featured";
import Projects from "./components/Projects";
// import Featured from "./components/Featured";
// import { Container, Col1 } from "./components/shared/Layout";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <Featured />
        <Projects />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// export default App;

if (module.hot) {
  module.hot.accept();
}
