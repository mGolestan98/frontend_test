import React from "react";
import { ThemeProvider } from "styled-components";
import CitiesList from "../components/Cities/List";
import Map from "../components/Map";
import { CityProvider } from "../contexts/CityContext";
import { Column, Row } from "../ui/Layout.styled";

const Home = () => {
  return (
    <CityProvider>
      <ThemeProvider theme={{}}>
        <Row>
          <Column
            columnCountDesktop={4}
            columnCountTablet={12}
            columnCountPhone={12}
          >
            <CitiesList />
          </Column>
          <Column
            columnCountDesktop={8}
            columnCountTablet={12}
            columnCountPhone={12}
          >
            <Map />
          </Column>
        </Row>
      </ThemeProvider>
    </CityProvider>
  );
};

export default Home;
