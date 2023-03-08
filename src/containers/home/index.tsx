import { Box, Button } from "@chakra-ui/react";
import Map from "components/Map";
import MapMarker from "containers/home/MapMarker";
import MapZoomController from "containers/home/MapZoomController";
import SearchBar from "containers/home/SearchBar";
import type { NextPage } from "next";
import { useAppContext } from "providers/AppContextProvider";
import { MAX_MAP_ZOOM } from "utils/constants";

const HomePage: NextPage = () => {
  const { map } = useAppContext();

  return (
    <>
      <Button
        onClick={() => {
          if (!map) return;
          import("leaflet").then(({ LatLng }) => {
            map.flyTo(new LatLng(35.772000, 51.372000), MAX_MAP_ZOOM, {
              duration: 0.25
            });
          });
        }}
      >
        test
      </Button>
      <Box pos="relative" h={640} w={640}>
        <SearchBar />
        <MapMarker />
        <MapZoomController />
        <Map />
      </Box>
    </>
  );
};

export default HomePage;
