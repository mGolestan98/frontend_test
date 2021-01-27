import React, { useEffect, useRef } from "react";
import { Marker, useMap } from "react-leaflet";
import { useCityContext } from "../../contexts/CityContext";

export const Map = () => {
  const map = useMap();
  const { cities, selectedCity, setSelectedCity } = useCityContext();

  const defaultPositionSet = useRef(false);
  useEffect(() => {
    if (cities.length && !defaultPositionSet.current)
      map.flyTo([cities[0].latitude, cities[0].longitude], 10, {
        animate: false
      });
  }, [cities]);

  useEffect(() => {
    if (selectedCity)
      map.flyTo([selectedCity.latitude, selectedCity.longitude], 10);
  }, [selectedCity]);

  return (
    <>
      {cities.length
        ? cities.map((city) => (
            <Marker
              key={city.rank}
              position={[city.latitude, city.longitude]}
              eventHandlers={{
                click: () => setSelectedCity(city)
              }}
            />
          ))
        : null}
    </>
  );
};

export default Map;
