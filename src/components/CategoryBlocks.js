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
        { categories.length > 1 && <AppLink title="View all" onPress={() => navigation.navigate('Categories')} /> }
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
            : <View style={[APP.container]}>
                <Text style={[TYPOGRAPHY.body]}>Add recipes to start seeing categories.</Text>
              </View>
        }
      </View>
    </View>
  )
}

export default CategoryBlocks;