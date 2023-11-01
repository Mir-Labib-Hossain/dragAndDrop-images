import { useTheme } from "styled-components";
import { IColor } from "../types/theme";

export const useColor = (color?: IColor) => {
  const theme = useTheme();
  switch (color) {
    case "primaryText":
      return theme.primaryText;
    case "error":
      return theme.error;
    // case "secondaryText":
    //   return theme.white1;

    default:
      return theme.primaryText;
  }
};
