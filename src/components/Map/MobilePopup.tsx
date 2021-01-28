import React from "react";
import { useCityContext } from "../../contexts/CityContext";
import Item from "../Cities/Item";

const MobilePopup = () => {
  const { selectedCity } = useCityContext();

  if (selectedCity) return <Item city={selectedCity} />;

  return null;
};

export default MobilePopup;
