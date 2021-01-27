import React from "react";
import styled from "styled-components";
import CitiesList from "../components/Cities/List";
import Map from "../components/Map";
import { Column, Row } from "../ui/Layout.styled";

const StyledAppSection = styled(Row)`
  border: 1px solid #000;
  margin-top: 50px;
`;

const Home = () => {
  return (
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
  );
};

export default Home;
