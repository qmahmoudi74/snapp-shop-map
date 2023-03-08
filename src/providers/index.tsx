import AppChakraProvider from "providers/AppChakraProvider";
import AppReduxProvider from "providers/AppReduxProvider";
import type { FC, PropsWithChildren } from "react";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppReduxProvider>
      <AppChakraProvider>{children}</AppChakraProvider>
    </AppReduxProvider>
  );
};

export default AppProvider;
