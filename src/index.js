import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom'
import App from "./App";
import "./styles/base.scss";

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
