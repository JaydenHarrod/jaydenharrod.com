import React, { Component } from "react";
import ScrollLock from "react-scrolllock";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  @media (max-width: 30rem) {
    padding: 0;
  }
`;

const Close = styled.div`
  font-size: 1rem;
  text-align: right;
  padding: 1rem 0;
  color: #fff;
  cursor: pointer;
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
  :hover {
    text-decoration: underline;
  }
`;

export class Modal extends Component {
  onRequestClose = () => {
    const { onRequestClose } = this.props;

    onRequestClose();
  };

  handleEscapeKey = event => {
    if (event && event.keyCode === 27) {
      this.onRequestClose();
    }
  };

  handleModalClick = event => {
    event.stopPropagation();
  };

  componentDidMount() {
    const { ignoreEscape } = this.props;
    if (!ignoreEscape) {
      document.addEventListener("keydown", this.handleEscapeKey);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscapeKey);
  }

  render() {
    const { children, ...rest } = this.props;
    const elements = (
      <Overlay onClick={this.onRequestClose} {...rest}>
        <Close onClick={this.onRequestClose}>Tap or ESC to close</Close>
        <ScrollLock />
        {children}
      </Overlay>
    );

    return ReactDOM.createPortal(elements, document.body);
  }
}
