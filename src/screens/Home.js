import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import RecipeSearchInput from "~components/RecipeSearchInput";
import RecipeSearchFilterToggle from "~components/RecipeSearchFilterToggle";
import APP from "~styles/app";
import TYPOGRAPHY from "~styles/typography";
import CategoryBlocks from "~components/CategoryBlocks";
import RecipeBlocks from "~components/RecipeBlocks";
import Greeting from "~components/Greeting";

const HomeScreen = ({navigation}) => {
  const TEST_CATEGORIES = [
    {
      id: '1',
      title: 'Delicious Breakfast Favorites',
      image: require('../../assets/test/recipe.jpg'),
      recipesCount: 4
    },
    {
      id: '2',
      title: 'Lunch and Brunch',
      image: require('../../assets/test/recipe-alt.jpg'),
      recipesCount: 14
    },
    {
      id: '3',
      title: 'Dinner for Winners',
      image: require('../../assets/test/recipe.jpg'),
      recipesCount: 26
    },
    {
      id: '4',
      title: 'Delicious Deserts',
      image: require('../../assets/test/recipe-alt.jpg'),
      recipesCount: 15
    },
    {
      id: '5',
      title: 'Killer Cocktails',
      image: require('../../assets/test/recipe.jpg'),
      recipesCount: 10
    }
  ];


  return (
    <SafeAreaView>

      <View style={[APP.container, {paddingTop: 20}]}>
        <Greeting />
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