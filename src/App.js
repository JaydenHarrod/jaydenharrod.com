import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Developer from "./views/Developer";
import Filmmaker from "./views/Filmmaker";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/developer" component={Developer} />
          <Route path="/filmmaker" component={Filmmaker} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
