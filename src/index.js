import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/base.scss";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
