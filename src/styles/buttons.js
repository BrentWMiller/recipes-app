import { StyleSheet } from "react-native";
import colors from "./colors";

const defaultStyle = {
  overflow: 'hidden',
  paddingHorizontal: 34,
  paddingVertical: 19,
  backgroundColor: colors.gray[300],
  borderRadius: 16,
  borderWidth: 1,
  borderColor: colors.gray[300],
  fontFamily: 'Inter600',
  fontSize: 14,
}

const buttonStyles = StyleSheet.create({
  default: {
    ...defaultStyle
  },
  dark: {
    ...defaultStyle,
    backgroundColor: colors.black,
    borderColor: colors.black,
    color: colors.white,
  },
  light: {
    ...defaultStyle,
    backgroundColor: colors.white,
    borderColor: colors.white,
    color: colors.black
  }
});

export default buttonStyles;