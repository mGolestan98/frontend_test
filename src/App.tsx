import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./screens/Home";
import { CityProvider } from "./contexts/CityContext";

const App = () => {
  return (
    <CityProvider>
      <ThemeProvider theme={{}}>
        <Home />
      </ThemeProvider>
    </CityProvider>
  );
};

export default App;
