import { Box, Button } from "@chakra-ui/react";
import Map from "components/Map";
import MapMarker from "containers/home/MapMarker";
import MapZoomController from "containers/home/MapZoomController";
import SearchBar from "containers/home/SearchBar";
import type { NextPage } from "next";
import { useAppContext } from "providers/AppContextProvider";

const HomePage: NextPage = () => {
  return (
    <Box pos="relative" h={640} w={640}>
      <SearchBar />
      <MapMarker />
      <MapZoomController />
      <Map />
    </Box>
  );
};

export default HomePage;
