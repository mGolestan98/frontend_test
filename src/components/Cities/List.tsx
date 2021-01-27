import React from "react";
import { useCityContext } from "../../contexts/CityContext";
import Item from "./Item";

const CitiesList = () => {
  const { cities } = useCityContext();

  return (
    <ul style={{ maxHeight: 700, overflow: "scroll" }}>
      {cities.map((city) => (
        <Item city={city} />
      ))}
    </ul>
  );
};

export default CitiesList;
