import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '~screens/Home';
import TestScreen from '~screens/Test';
import ProfileScreen from "~screens/Profile";
import CategoriesScreen from "~screens/Categories";
import RecipesScreen from "~screens/Recipes";
import EditRecipeScreen from "~screens/EditRecipe";

const Stack = createStackNavigator();

const LoggedIn = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyle: { backgroundColor: '#fff' }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Recipes" component={RecipesScreen} />
        <Stack.Screen name="Edit Recipe" component={EditRecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoggedIn;