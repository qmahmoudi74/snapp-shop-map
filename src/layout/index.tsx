import { Center } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Center sx={{ pos: "fixed", inset: 0 }}>{children}</Center>;
};

export default AppLayout;
