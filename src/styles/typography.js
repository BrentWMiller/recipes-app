import { StyleSheet } from "react-native";
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
    fontFamily: fonts.medium500,
    fontSize: 24
  }
});

export default TYPOGRAPHY;