import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { Router, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import routes from "./routes";
import { Footer } from "./shared";
import Header from "./shared/header";

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.background};
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.text};
  }
`;

const App = props => {
  const stored = localStorage.getItem("isDarkMode");

  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <Router history={props.history}>
          <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkMode} />
          <>{routeComponents}</>
          <Footer />
        </Router>
        <Normalize />
        <Global />
      </>
    </ThemeProvider>
  );
};

export default App;
