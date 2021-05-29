import React from "react";
import { View, Text, Button } from "react-native";
import TYPOGRAPHY from "~styles/typography";
import AppLink from "./AppLink";

const CategoryBlocks = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <Text style={[TYPOGRAPHY.subheading]}>Categories</Text>
      <AppLink title="View all" />
    </View>
  )
}

export default CategoryBlocks;