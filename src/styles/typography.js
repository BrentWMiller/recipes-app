import { StyleSheet } from "react-native";
import colors from "./colors";
import fonts from "./fonts";

const TYPOGRAPHY = StyleSheet.create({
  body: {
    fontFamily: fonts.normal400,
    fontSize: 16
  },
  heading: {
    fontFamily: fonts.bold700,
    fontSize: 32
  },
  subheading: {
    fontFamily: fonts.semibold600,
    fontSize: 20
  }
});

export default TYPOGRAPHY;