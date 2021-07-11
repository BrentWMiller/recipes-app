import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from '~screens/Home';
import ProfileScreen from "~screens/Profile";
import CategoriesScreen from "~screens/Categories";
import RecipesScreen from "~screens/Recipes";
import EditRecipeScreen from "~screens/EditRecipe";
import AddRecipeScreen from "~screens/AddRecipe";
import RecipeScreen from "~screens/Recipe";

// Icons/Styles
import Home from "~svgs/home.svg";
import Recipes from "~svgs/recipes.svg";
import Plus from "~svgs/plus.svg";
import Face from "~svgs/face.svg";
import FONTS from "~styles/fonts";
import COLORS from "~styles/colors";

const navTheme = {
  dark: false,
  colors: {
    primary: COLORS.primary[500],
    background: COLORS.white,
    card: COLORS.white,
    text: COLORS.black,
    border: COLORS.white,
    notification: COLORS.primary[500],
  }
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.gray[50],
        },
        headerTintColor: COLORS.black,
        headerTitleStyle: {
          fontFamily: FONTS.semibold600,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} options={{headerShown: false}} />
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
        tabBarOptions={{
          showLabel: false,
          activeTintColor: COLORS.white,
          inactiveTintColor: COLORS.gray[400],
          style: {
            backgroundColor: COLORS.black
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreenNavigator}
          options={{
            tabBarAccessibilityLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Home color={color} width={size} height={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Add Recipe"
          component={AddRecipeScreen}
          options={{
            tabBarAccessibilityLabel: 'Add Recipe',
            tabBarIcon: ({color, size}) => (
              <Plus color={color} width={size} height={size} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Recipes"
          component={RecipesScreen}
          options={{
            tabBarAccessibilityLabel: 'Recipes',
            tabBarIcon: ({color, size}) => (
              <Recipes color={color} width={size} height={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarAccessibilityLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Face color={color} width={size} height={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default LoggedIn;