import type { FC } from "react";
import { useMap } from "react-leaflet";
import { useDispatchMapLocation } from "store/slices/component-slices/mapSlice";

const _MapContext: FC = () => {
  const map = useMap();
  const dispatchMapLoaction = useDispatchMapLocation();
  map.zoomControl.setPosition("bottomleft");

  map.addEventListener("dragend", () => {
    const { lat, lng } = map.getCenter();
    dispatchMapLoaction({ lat, lng });
  });

  return null;
};

export default _MapContext;
