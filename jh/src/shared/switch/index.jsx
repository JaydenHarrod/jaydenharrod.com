import { Component } from 'react';
import PropTypes from 'prop-types';

export class Switch extends Component {
  static propTypes = {
    isInitiallyOn: PropTypes.bool,
    children: PropTypes.any
  };

  state = { on: false };

  constructor(props) {
    super(props);
    this.state.on = !!props.isInitiallyOn;
  }

  flick = flickTo => {
    // eslint-disable-next-line
    const state = typeof state !== 'undefined' ? !!flickTo : !this.state.on;
    this.setState({ on: state });
  };

  render() {
    return this.props.children({ on: this.state.on, flick: this.flick });
  }
}
