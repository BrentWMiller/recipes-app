import { StyleSheet } from "react-native";
import FONTS from "./fonts";

const TYPOGRAPHY = StyleSheet.create({
  body: {
    fontFamily: FONTS.normal400,
    fontSize: 16
  },
  heading: {
    fontFamily: FONTS.bold700,
    fontSize: 32
  },
  subheading: {
    fontFamily: FONTS.semibold600,
    fontSize: 20
  }
});

export default TYPOGRAPHY;