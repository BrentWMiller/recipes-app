import { StyleSheet } from "react-native";
import COLORS from "./colors";
import FONTS from "./fonts";

const APP = StyleSheet.create({
  container: {
    paddingHorizontal: 32
  },
  containerWider: {
    paddingHorizontal: 16
  },
  inputLabel: {
    marginBottom: 8,
    fontSize: 16,
    fontFamily: FONTS.semibold600,
    color: COLORS.gray[800]
  },
  input: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16,
    borderRadius: 5,
    fontFamily: FONTS.medium500,
    backgroundColor: COLORS.gray[100],
  }
});

export default APP;