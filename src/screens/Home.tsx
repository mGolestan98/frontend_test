import React from "react";
import styled from "styled-components";
import CitiesList from "../components/Cities/List";
import Map from "../components/Map";
import media from "../config/styles/mediaQueries";
import { Column, Row } from "../ui/Layout.styled";

const HomeWrapper = styled(Row)`
  border: 1px solid #cacaca;

  ${media.desktop} {
    margin-top: 50px;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Column
        columnCountDesktop={4}
        columnCountTablet={12}
        columnCountPhone={12}
        hideInPhone
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
    </HomeWrapper>
  );
};

export default Home;
