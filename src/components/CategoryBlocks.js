import React from "react";
import { View, Text, ScrollView } from "react-native";
import APP from "~styles/app";
import TYPOGRAPHY from "~styles/typography";
import AppLink from "./AppLink";
import CategoryBlock from "./CategoryBlock";

const CategoryBlocks = (props) => {
  const { categories, navigation } = props;

  return (
    <View>
      <View style={[APP.container, {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
        <Text style={[TYPOGRAPHY.subheading]}>Categories</Text>
        <AppLink title="View all" onPress={() => navigation.navigate('Categories')} />
      </View>

      <View style={{ marginTop: 20 }}>
        {
          categories.length > 0
            ? <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                {categories.map((category, index) => (
                  <CategoryBlock
                    key={category.id}
                    category={ category }
                    first={index === 0}
                    last={index === categories.length - 1}
                  />
                ))}
              </ScrollView>
            : <Text>No categories created yet.</Text>
        }
      </View>
    </View>
  )
}

export default CategoryBlocks;