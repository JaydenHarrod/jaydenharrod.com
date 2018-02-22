import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Developer from "./views/Developer";
import Filmmaker from "./views/Filmmaker";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/developer" component={Developer} />
          <Route path="/filmmaker" component={Filmmaker} />
        </div>
      </Router>
    );
  }
}

export default App;
