import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import RecipeSearchInput from "~components/RecipeSearchInput";
import RecipeSearchFilterToggle from "~components/RecipeSearchFilterToggle";
import APP from "~styles/app";
import TYPOGRAPHY from "~styles/typography";
import CategoryBlocks from "~components/CategoryBlocks";
import RecipeBlocks from "~components/RecipeBlocks";

const HomeScreen = ({navigation}) => {
  const TEST_CATEGORIES = [
    {
      id: '1',
      title: 'Breakfast',
      recipesCount: 4
    },
    {
      id: '2',
      title: 'Lunch',
      recipesCount: 14
    },
    {
      id: '3',
      title: 'Dinner',
      recipesCount: 26
    },
    {
      id: '4',
      title: 'Desert',
      recipesCount: 15
    },
    {
      id: '5',
      title: 'Cocktails',
      recipesCount: 10
    }
  ];


  return (
    <SafeAreaView>
      <View style={[APP.container, {paddingTop: 20}]}>
        <Text style={[TYPOGRAPHY.heading]}>Recipes</Text>
      </View>

      <View style={[APP.container, {flexDirection: 'row', marginTop: 24}]}>
        <RecipeSearchInput />
        <View style={{ marginLeft: 16}}>
          <RecipeSearchFilterToggle />
        </View>
      </View>

      <View style={{marginTop: 40}}>
        <CategoryBlocks categories={ TEST_CATEGORIES } />
      </View>

      <View style={{marginTop: 40}}>
        <RecipeBlocks />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;