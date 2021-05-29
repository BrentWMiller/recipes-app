import React from "react";
import { View, Text } from "react-native";
import APP from "~styles/app";
import TYPOGRAPHY from "~styles/typography";
import AppLink from "./AppLink";
import CategoryBlock from "./CategoryBlock";

const CategoryBlocks = (props) => {
  const { categories } = props;

  return (
    <View>
      <View style={[APP.container, {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
        <Text style={[TYPOGRAPHY.subheading]}>Categories</Text>
        <AppLink title="View all" />
      </View>

      {
        categories.length > 0
          ? <View>
              {categories.map((category) => (
                <CategoryBlock key={category.id} category={ category } />
              ))}
            </View>
          : <Text>No categories created yet.</Text>
      }
    </View>
  )
}

export default CategoryBlocks;