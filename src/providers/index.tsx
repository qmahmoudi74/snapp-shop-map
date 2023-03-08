import AppLayout from "layout";
import AppChakraProvider from "providers/AppChakraProvider";
import AppContextProvider from "providers/AppContextProvider";
import type { FC, PropsWithChildren } from "react";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppContextProvider>
      <AppChakraProvider>
        <AppLayout>{children}</AppLayout>
      </AppChakraProvider>
    </AppContextProvider>
  );
};

export default AppProvider;
