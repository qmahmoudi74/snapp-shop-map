import { Box } from "@chakra-ui/react";
import Map from "components/Map";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Box pos="relative" h={640} w={640}>
      <Map />
    </Box>
  );
};

export default HomePage;
