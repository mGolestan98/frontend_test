import React from "react";
import { Popup as RLPopup } from "react-leaflet";
import { useCityContext } from "../../contexts/CityContext";

const Popup = () => {
  const { selectedCity, setSelectedCity } = useCityContext();

  if (selectedCity)
    return (
      <RLPopup
        position={[selectedCity.latitude, selectedCity.longitude]}
        onClose={() => setSelectedCity(null)}
      >
        {selectedCity.city}
      </RLPopup>
    );

  return null;
};

export default Popup;
