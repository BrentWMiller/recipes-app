import React from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '~screens/Home';
import ProfileScreen from "~screens/Profile";
import CategoriesScreen from "~screens/Categories";
import RecipesScreen from "~screens/Recipes";
import EditRecipeScreen from "~screens/EditRecipe";
import AddRecipeScreen from "~screens/AddRecipe";
import COLORS from "~styles/colors";

const navTheme = DefaultTheme;
navTheme.colors.background = COLORS.white;

const Tab = createBottomTabNavigator();

const LoggedIn = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyle: { backgroundColor: '#fff' }
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Recipes" component={RecipesScreen} />
        <Tab.Screen name="Add Recipe" component={AddRecipeScreen} />
        <Tab.Screen name="Edit Recipe" component={EditRecipeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default LoggedIn;