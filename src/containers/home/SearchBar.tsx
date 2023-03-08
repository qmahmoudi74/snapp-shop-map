import { Box, HStack, Input, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { MdSearch } from "react-icons/md";

const SearchBar: FC = () => {
  return (
    <HStack
      pos="absolute"
      bgColor="white"
      h={12}
      right={0}
      left={0}
      zIndex={999999}
      m={4}
      px={4}
      rounded="md"
      shadow="md"
      fontFamily="body"
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
      />
    </HStack>
  );
};

export default SearchBar;
