import React, { useEffect, useRef } from "react";
import { Marker, useMap } from "react-leaflet";
import { useCityContext } from "../../contexts/CityContext";

export const Map = () => {
  const map = useMap();
  const { cities } = useCityContext();

  const defaultPosisionSet = useRef(false);

  useEffect(() => {
    if (cities.length && !defaultPosisionSet.current)
      map.flyTo([cities[0].latitude, cities[0].longitude], 10, {
        animate: false
      });
  }, [cities]);

  return (
    <>
      {cities.length
        ? cities.map((city) => (
            <Marker
              key={city.rank}
              position={[city.latitude, city.longitude]}
              eventHandlers={{
                click: (p) => {
                  console.log(p);
                }
              }}
            />
          ))
        : null}
    </>
  );
};

export default Map;
