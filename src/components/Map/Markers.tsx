import React, { useCallback, useEffect, useRef, useState } from "react";
import { Marker, useMap, useMapEvents } from "react-leaflet";
import { useCityContext } from "../../contexts/CityContext";
import isInside from "../../utils/isInside";
import { ICity } from "../../types";

export const Markers = () => {
  const map = useMap();
  const { cities, selectedCity, setSelectedCity } = useCityContext();

  const [markedCities, setMarkedCities] = useState<Array<ICity>>([]);

  const defaultPositionSet = useRef(false);
  useEffect(() => {
    if (cities.length && !defaultPositionSet.current) {
      map.flyTo([cities[0].latitude, cities[0].longitude], 10, { duration: 1 });

      defaultPositionSet.current = true;
    }
  }, [cities, map]);

  const loadMarkers = useCallback(() => {
    const center = map.getCenter();
    const bounds = center.toBounds(100000);

    setMarkedCities(
      cities.filter((city) =>
        isInside(
          [city.longitude, city.latitude],
          [
            [bounds.getWest(), bounds.getNorth()],
            [bounds.getEast(), bounds.getNorth()],
            [bounds.getEast(), bounds.getSouth()],
            [bounds.getWest(), bounds.getSouth()]
          ]
        )
      )
    );
  }, [map, cities]);

  useEffect(() => {
    if (defaultPositionSet.current) {
      loadMarkers();
    }
  }, [defaultPositionSet, loadMarkers]);

  useEffect(() => {
    if (selectedCity)
      map.flyTo([selectedCity.latitude, selectedCity.longitude], 10, {
        duration: 2
      });
  }, [selectedCity, map]);

  useMapEvents({
    moveend: loadMarkers
  });

  return (
    <>
      {markedCities.length
        ? markedCities.map((city) => (
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

export default Markers;
