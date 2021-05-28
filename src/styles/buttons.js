import { StyleSheet } from "react-native";
import colors from "./colors";
import fonts from "./fonts";

const defaultStyle = {
  overflow: 'hidden',
  alignSelf: 'flex-start',
  paddingHorizontal: 34,
  paddingVertical: 19,
  backgroundColor: colors.gray[300],
  borderRadius: 16,
  borderWidth: 1,
  borderColor: colors.gray[300],
  fontFamily: fonts.semibold600,
  fontSize: 14,
  textAlign: 'center'
}

const BUTTONS = StyleSheet.create({
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

export default BUTTONS;