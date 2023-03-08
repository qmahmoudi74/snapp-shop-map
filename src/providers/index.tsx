import AppLayout from "layout";
import AppChakraProvider from "providers/AppChakraProvider";
import AppContextProvider from "providers/AppContextProvider";
import AppQueryClientProvider from "providers/AppQueryClientProvider";
import type { FC, PropsWithChildren } from "react";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppContextProvider>
      <AppChakraProvider>
        <AppQueryClientProvider>
          <AppLayout>{children}</AppLayout>
        </AppQueryClientProvider>
      </AppChakraProvider>
    </AppContextProvider>
  );
};

export default AppProvider;
