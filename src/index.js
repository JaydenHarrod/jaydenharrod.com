import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

var mountNode = document.getElementById("app");

class Root extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

Root.propTypes = {
  name: PropTypes.string
}

ReactDOM.render(<Root name="Bob" />, mountNode);
