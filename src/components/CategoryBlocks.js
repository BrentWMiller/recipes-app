import React from "react";
import { View, Text } from "react-native";
import APP from "~styles/app";
import TYPOGRAPHY from "~styles/typography";
import AppLink from "./AppLink";

const CategoryBlocks = () => {
  return (
    <View style={[APP.container, {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
      <Text style={[TYPOGRAPHY.subheading]}>Categories</Text>
      <AppLink title="View all" />
    </View>
  )
}

export default CategoryBlocks;