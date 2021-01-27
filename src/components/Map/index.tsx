import React from "react";
import { MapContainer as RLMapContainer, TileLayer } from "react-leaflet";
import Markers from "./Markers";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

// a fix based on this issue https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387
// @ts-ignore Property '_getIconUrl' does not exist on type 'Default'.
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export const MapContainer = () => {
  return (
    <RLMapContainer
      center={[0, 0]}
      zoom={10}
      style={{ height: 700, width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers />
    </RLMapContainer>
  );
};

export default MapContainer;
