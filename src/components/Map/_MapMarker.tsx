import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

const _MapMarker: FC = () => {
  return (
    <Center pos="absolute" inset={0} zIndex={9999} pointerEvents="none">
      <Box pos="relative">
        <Image
          alt="marker"
          src="/assets/images/map-marker.svg"
          width={24}
          height={48}
        />
      </Box>
    </Center>
  );
};

export default _MapMarker;
