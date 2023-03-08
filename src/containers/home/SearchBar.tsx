import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  Menu,
  MenuItem,
  MenuList,
  Portal,
  Spinner,
  Text,
  useBoolean,
  useMenu,
  VStack,
  type InputProps,
  type StackProps
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import useDebounce from "hooks/useDebounce";
import { Address } from "pages/api/search/search-address";
import { useAppContext } from "providers/AppContextProvider";
import { FC, useEffect, useMemo, useState } from "react";
import { MdSearch } from "react-icons/md";
import { getAddress, useGetAddress, useGetSearchAddress } from "services";
import { MAX_MAP_ZOOM } from "utils/constants";

const MotionVStack = motion<StackProps>(VStack);

const SearchBar: FC = () => {
  const { map } = useAppContext();
  const [address, setAddress] = useState<Address>();
  const [searchValue, setSearchValue] = useState("");
  const debSearchValue = useDebounce(searchValue);
  const [isOpen, { on, off }] = useBoolean(false);

  const { data, isLoading } = useGetSearchAddress(
    { address: debSearchValue },
    { enabled: debSearchValue.length > 1 }
  );

  const onSearchInputChange: InputProps["onChange"] = (event) => {
    setSearchValue(event.target.value);
  };

  const addressList = useMemo(() => data?.result ?? [], [data?.result]);

  const isInitial = debSearchValue.length < 2;

  const isEmpty =
    addressList.length === 0 && debSearchValue.length > 1 && !isLoading;

  useEffect(() => {
    if (!map) return;
    map.addEventListener("dragend", ({}) => {
      const { lat, lng } = map.getCenter();
      getAddress({ lat, lng }).then(({ address }) => setAddress(address));
    });
  }, [map]);

  useEffect(() => {
    if (!address) return;
    setSearchValue(`${address.city} - ${address.street}`);
  }, [address]);

  return (
    <Box pos="absolute" right={0} left={0} zIndex={999999}>
      <HStack
        pos="relative"
        bgColor="white"
        h={12}
        m={4}
        px={4}
        rounded="md"
        shadow="md"
        fontFamily="body"
        spacing={0}
        gap={2}
      >
        <Box color="gray.500">
          <MdSearch size={24} />
        </Box>

        <Text fontSize={16} whiteSpace="nowrap" color="gray.500">
          جست‌وجو در
        </Text>

        <Input
          color="#B400AF"
          p={0}
          border="none"
          h="full"
          focusBorderColor="transparent"
          value={searchValue}
          onChange={onSearchInputChange}
          onFocus={on}
          onBlur={() => {
            setTimeout(off, 100);
          }}
        />

        <AnimatePresence>
          {isOpen ? (
            <MotionVStack
              w="full"
              pos="absolute"
              inset={0}
              top={14}
              bgColor="white"
              maxH={48}
              h="max-content"
              shadow="md"
              rounded="md"
              initial={{ opacity: 0, scale: 0.9, transformOrigin: "top" }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              spacing={0}
              overflowY="auto"
            >
              {isInitial ? (
                <Center h={32}>
                  <Text>برای شروع جست‌وجو حداقل ۲ حرف تایپ کنید.</Text>
                </Center>
              ) : isEmpty ? (
                <Center h={32}>
                  <Text>نتیجه ای یافت نشد!</Text>
                </Center>
              ) : isLoading ? (
                <Center h={32}>
                  <Spinner />
                </Center>
              ) : (
                addressList.map(({ city, street, id, lat, lng }) => (
                  <Button
                    w="full"
                    rounded={0}
                    minH={10}
                    textAlign="start"
                    variant="ghost"
                    key={id}
                    onClick={() => {
                      setAddress({ city, id, street, lat, lng });
                      if (!map) return;
                      import("leaflet").then(({ LatLng }) => {
                        map.flyTo(new LatLng(lat, lng), 15, { duration: 0.25 });
                      });
                    }}
                  >
                    <Text flex={1}>{`${city} - ${street}`}</Text>
                  </Button>
                ))
              )}
            </MotionVStack>
          ) : null}
        </AnimatePresence>
      </HStack>
    </Box>
  );
};

export default SearchBar;
