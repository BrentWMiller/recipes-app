import React from "react";
import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "~styles/colors";
import FiltersIcon from "~svgs/filters.svg";

const RecipeSearchFilterToggle = (props) => {
  const { onPress } = props;

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <FiltersIcon width="22" height="19" color={COLORS.black} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: COLORS.gray[300]
  }
})

export default RecipeSearchFilterToggle;