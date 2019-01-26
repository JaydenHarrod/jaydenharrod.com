import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Router, Route } from 'react-router-dom';
import { darkTheme, lightTheme } from './theme';
import routes from './routes';

const routeComponents = routes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.background};
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.text};
  }
`;

const darkMode = false;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <>
          <Router history={this.props.history}>
            <>{routeComponents}</>
          </Router>
          <Normalize />
          <Global />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
