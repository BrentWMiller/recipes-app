import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import COLORS from "~styles/colors";
import FONTS from "~styles/fonts";
import SearchIcon from "~svgs/search.svg";

const RecipeSearchInput = (props) => {

  return (
    <View style={{flexGrow: 1}}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Search for recipes"
        />
        <SearchIcon color={COLORS.black} style={styles.icon} width="22" height="21"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: COLORS.gray[400],
    backgroundColor: COLORS.gray[100],
    paddingLeft: 22 + (15 * 2),
    paddingRight: 15,
    borderRadius: 15,
    fontFamily: FONTS.medium500
  },
})

export default RecipeSearchInput;