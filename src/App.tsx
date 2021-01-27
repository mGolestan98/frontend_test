import React from "react";
import { ThemeProvider } from "styled-components";
import { CityProvider } from "./contexts/CityContext";

const Home = () => {
  return (
    <CityProvider>
      <ThemeProvider theme={{}}>
        <Home />
      </ThemeProvider>
    </CityProvider>
  );
};

export default Home;
