import React from "react";
import styled from "styled-components";
import { useCityContext } from "../../contexts/CityContext";
import Input from "../../ui/Input.styled";
import Item from "./Item";

const StyledList = styled.ul`
  max-height: 500px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  overflow-y: scroll;
  list-style: none;
`;

const CitiesList = () => {
  const { cities } = useCityContext();

  return (
    <>
      <Input placeholder="Search city by name..." />
      <StyledList>
        {cities.map((city) => (
          <Item city={city} />
        ))}
      </StyledList>
    </>
  );
};

export default CitiesList;
