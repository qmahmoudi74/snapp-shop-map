import { ChakraTheme, DeepPartial, extendTheme } from "@chakra-ui/react";
import fonts from "theme/fonts";
import styles from "theme/styles";

export type AppTheme = DeepPartial<ChakraTheme>;

const appTheme: AppTheme = { styles, fonts, direction: "rtl" };

export default extendTheme(appTheme);
