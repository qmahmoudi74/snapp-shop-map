import { ChakraProvider } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";
import appTheme from "theme";

const AppChakraProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraProvider theme={appTheme}>{children}</ChakraProvider>;
};

export default AppChakraProvider;
