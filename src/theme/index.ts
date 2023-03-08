import { DeepPartial, extendTheme, Theme } from "@chakra-ui/react";
import styles from "theme/styles";
import fonts from "theme/fonts";

export type AppTheme = DeepPartial<Theme>;

const appTheme: AppTheme = { styles, fonts };

export default extendTheme(appTheme);
