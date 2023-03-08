import { useAppContext } from "providers/AppContextProvider";
import { FC, useEffect } from "react";
import { useMap } from "react-leaflet";

const MapContext: FC = () => {
  const map = useMap();
  const { setMap } = useAppContext();

  useEffect(() => {
    setMap?.(map);
  }, [map, setMap]);

  return null;
};

export default MapContext;
