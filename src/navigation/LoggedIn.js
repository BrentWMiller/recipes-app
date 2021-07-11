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
import { createStackNavigator } from "@react-navigation/stack";

const navTheme = DefaultTheme;
navTheme.colors.background = COLORS.white;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Edit Recipe" component={EditRecipeScreen} />
    </Stack.Navigator>
  )
}

const LoggedIn = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyle: { backgroundColor: COLORS.white }
        }}
      >
        <Tab.Screen name="Home" component={HomeScreenNavigator} />
        <Tab.Screen name="Add Recipe" component={AddRecipeScreen} />
        <Tab.Screen name="Recipes" component={RecipesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default LoggedIn;