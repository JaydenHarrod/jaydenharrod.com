import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { BrowserRouter, Route } from 'react-router-dom';
import { darkTheme, lightTheme } from './shared/theme';
import routes from './routes';

const routeComponents = routes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    font-family: ${props => props.theme.fontFamily};
  }
`;

const darkMode = false;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <>
          <GlobalStyle />
          <Normalize />
          <BrowserRouter history={this.props.history}>
            <>{routeComponents}</>
          </BrowserRouter>
        </>
      </ThemeProvider>
    );
  }
}

export default App;