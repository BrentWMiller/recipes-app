import React from "react";
import { SafeAreaView, View } from "react-native";
import RecipeSearchInput from "~components/RecipeSearchInput";
import APP from "~styles/app";
import CategoryBlocks from "~components/CategoryBlocks";
import RecipeBlocks from "~components/RecipeBlocks";
import Greeting from "~components/Greeting";
import UserAvatar from "~components/UserAvatar";

const HomeScreen = ({navigation}) => {
  const user = {
    name: 'Stephanie'
  }

  const categories = [
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

      <View style={[APP.container, {flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20}]}>
        <Greeting name={user.name} />
        <UserAvatar initials={user.name} onPress={() => console.log('User profile')} />
      </View>

      <View style={[APP.container, {flexDirection: 'row', marginTop: 40}]}>
        <RecipeSearchInput />
      </View>

      <View style={{marginTop: 40}}>
        <CategoryBlocks categories={ categories } />
      </View>

      <View style={{marginTop: 40}}>
        <RecipeBlocks />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;