import MapContext from "components/Map/MapContext";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import type { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { MAX_MAP_ZOOM } from "utils/constants";

const _Map: FC = () => {
  return (
    <MapContainer
      center={[35.771624, 51.374313]}
      zoom={MAX_MAP_ZOOM}
      style={{
        position: "absolute",
        inset: 0
      }}
      attributionControl={false}
      zoomControl={false}
    >
      <TileLayer url="https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png" />
      <MapContext />
    </MapContainer>
  );
};

export default _Map;
