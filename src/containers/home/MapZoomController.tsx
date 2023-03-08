import { Button, VStack } from "@chakra-ui/react";
import { useAppContext } from "providers/AppContextProvider";
import { FC, useCallback, useEffect, useState } from "react";

const MapZoomController: FC = () => {
  const { map } = useAppContext();
  const [{ isMaxZoom, isMinZoom }, setZoomTreshold] = useState({
    isMaxZoom: false,
    isMinZoom: false
  });

  const setZoomTresholdHandler = useCallback(() => {
    if (!map) return;

    const zoomLevel = map.getZoom();
    const maxZoom = map.getMaxZoom();
    const minZoom = map.getMinZoom();

    setZoomTreshold({
      isMaxZoom: zoomLevel === maxZoom,
      isMinZoom: zoomLevel === minZoom
    });
  }, [map]);

  const onZoomInClick = () => {
    if (!map || isMaxZoom) return;
    map.zoomIn();
    setZoomTresholdHandler();
  };

  const onZoomOutClick = () => {
    if (!map || isMinZoom) return;
    map.zoomOut();
    setZoomTresholdHandler();
  };

  useEffect(() => {
    if (!map) return;

    setZoomTresholdHandler();

    map.on("zoom", () => {
      setZoomTresholdHandler();
    });
  }, [map, setZoomTresholdHandler]);

  return (
    <VStack
      pos="absolute"
      spacing={0}
      zIndex="sticky"
      w={10}
      h={20}
      bottom={4}
      left={4}
      rounded="md"
      overflow="hidden"
      shadow="md"
    >
      <Button
        isDisabled={isMaxZoom}
        flex={1}
        bgColor="white"
        p={0}
        minH={10}
        minW={10}
        rounded="none"
        fontSize="xl"
        color="gray.500"
        lineHeight={1}
        _hover={{ bgColor: "gray.50" }}
        _disabled={{ bgColor: "gray.100", cursor: "not-allowed" }}
        onClick={onZoomInClick}
      >
        +
      </Button>

      <Button
        isDisabled={isMinZoom}
        flex={1}
        bgColor="white"
        p={0}
        minH={10}
        minW={10}
        rounded="none"
        fontSize="xl"
        color="gray.500"
        lineHeight={1}
        _hover={{ bgColor: "gray.50" }}
        _disabled={{ bgColor: "gray.100", cursor: "not-allowed" }}
        onClick={onZoomOutClick}
      >
        ‒
      </Button>
    </VStack>
  );
};

export default MapZoomController;
