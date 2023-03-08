import _MapContext from "components/Map/_MapContext";
import _MapMarker from "components/Map/_MapMarker";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import type { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const _Map: FC = () => {
  return (
    <MapContainer
      center={[35.771624, 51.374313]}
      zoom={20}
      style={{ position: "absolute", inset: 0 }}
      attributionControl={false}
    >
      <TileLayer url="https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png" />
      <_MapMarker />
      <_MapContext />
    </MapContainer>
  );
};

export default _Map;
