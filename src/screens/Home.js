import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import RecipeSearchInput from "~components/RecipeSearchInput";
import APP from "~styles/app";
import CategoryBlocks from "~components/CategoryBlocks";
import RecipeBlocks from "~components/RecipeBlocks";
import Greeting from "~components/Greeting";
import UserAvatar from "~components/UserAvatar";

const HomeScreen = ({navigation}) => {
  const user = {
    name: 'Brent Miller'
  }

  const categories = [
    {
      id: '3',
      title: 'Dinner for Winners',
      recipesCount: 26
    },
    {
      id: '1',
      title: 'Delicious Breakfast Favorites',
      // image: require('../../assets/test/recipe.jpg'),
      recipesCount: 4
    },
    {
      id: '2',
      title: 'Brunch and Lunch',
      // image: require('../../assets/test/recipe5.jpg'),
      recipesCount: 14
    },
    {
      id: '4',
      title: 'Delicious Deserts',
      image: require('../../assets/test/recipe3.jpg'),
      recipesCount: 15
    },
    {
      id: '5',
      title: 'Killer Cocktails',
      image: require('../../assets/test/recipe4.jpg'),
      recipesCount: 10
    }
  ];

  const recipes = [
    {
      id: '1',
      name: 'Chicken Paprikash',
      time: 30,
      ingredients: 11,
    },
    {
      id: '2',
      name: 'Mom\'s Homemade Spaghetti w/ Meatballs',
      time: 60,
      ingredients: 6,
      // image: require('../../assets/test/recipe2.jpg'),
    },
    {
      id: '6',
      name: 'Long named recipe that someone could add to the app',
      time: 61,
      ingredients: 24
    },
    {
      id: '3',
      name: 'Birthday cake',
      time: 130,
      ingredients: 8
    },
    {
      id: '7',
      name: 'Pancakes',
      time: 20,
      ingredients: 4
    },
    {
      id: '8',
      name: 'Fish Tacos',
      time: 45,
      ingredients: 10
    },
    {
      id: '4',
      name: 'Chicken Alfredo',
      time: 50,
      ingredients: 13
    },
    {
      id: '5',
      name: 'Homemade Pizza',
      time: 45,
      ingredients: 10
    },
    {
      id: '10',
      name: 'Creamy Italian Chicken',
      time: 45,
      ingredients: 15
    },
    {
      id: '11',
      name: 'Pinot Noir',
      time: 0,
      ingredients: 1
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[APP.container, {flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20}]}>
          <Greeting name={user.name} />
          <UserAvatar initials={user.name} onPress={() => navigation.navigate('Profile')} />
        </View>

        <View style={[APP.container, {flexDirection: 'row', marginTop: 40}]}>
          <RecipeSearchInput />
        </View>

        <View style={{marginTop: 40}}>
          <CategoryBlocks categories={ categories } navigation={ navigation } />
        </View>

        <View style={{marginTop: 40}}>
          <RecipeBlocks recipes={recipes} navigation={ navigation } />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;