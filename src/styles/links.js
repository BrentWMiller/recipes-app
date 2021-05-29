import { StyleSheet } from "react-native";
import COLORS from "./colors";
import fonts from "./fonts";

const defaultStyle = {
  alignSelf: 'flex-start',
  fontFamily: fonts.medium500,
  fontSize: 16,
  color: COLORS.seawave
}

const LINKS = StyleSheet.create({
  default: {
    ...defaultStyle
  },
});

export default LINKS;