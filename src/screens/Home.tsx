import React from "react";
import styled, { ThemeProvider } from "styled-components";
import CitiesList from "../components/Cities/List";
import Map from "../components/Map";
import { CityProvider } from "../contexts/CityContext";
import { Column, Row } from "../ui/Layout.styled";

const StyledAppSection = styled(Row)`
  border: 1px solid #000;
  margin-top: 50px;
`;

const Home = () => {
  return (
    <CityProvider>
      <ThemeProvider theme={{}}>
        <StyledAppSection>
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
        </StyledAppSection>
      </ThemeProvider>
    </CityProvider>
  );
};

export default Home;
