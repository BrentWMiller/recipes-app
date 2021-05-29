import { StyleSheet } from "react-native";
import COLORS from "./colors";
import fonts from "./fonts";

const defaultStyle = {
  overflow: 'hidden',
  alignSelf: 'flex-start',
  paddingHorizontal: 34,
  paddingVertical: 19,
  backgroundColor: COLORS.gray[300],
  borderRadius: 16,
  borderWidth: 1,
  borderColor: COLORS.gray[300],
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
    backgroundColor: COLORS.black,
    borderColor: COLORS.black,
    color: COLORS.white,
  },
  light: {
    ...defaultStyle,
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    color: COLORS.black
  }
});

export default BUTTONS;