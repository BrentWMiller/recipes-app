import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import RecipeSearchInput from "~components/RecipeSearchInput";
import APP from "~styles/app";
import CategoryBlocks from "~components/CategoryBlocks";
import RecipeBlocks from "~components/RecipeBlocks";
import Greeting from "~components/Greeting";
import UserAvatar from "~components/UserAvatar";
import { useDispatch, useSelector } from "react-redux";
import { getUserRecipes } from "~store/recipes";

const HomeScreen = ({navigation}) => {
  const user = useSelector(state => state.userReducer.user);
  const recipes = useSelector(state => state.recipesReducer.recipes);

  const dispatch = useDispatch();

  const categories = [];

  useEffect(() => {
    if (user.uid) {
      dispatch(getUserRecipes(user.uid));
    }
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[APP.container, {flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20}]}>
          <Greeting name={user.name} />
          <UserAvatar name={user.name} onPress={() => navigation.navigate('Profile')} />
        </View>

        <View style={[APP.container, {flexDirection: 'row', marginTop: 40}]}>
          <RecipeSearchInput />
        </View>

        <View style={{marginTop: 40}}>
          <CategoryBlocks categories={ categories } navigation={ navigation } />
        </View>

        <View style={{marginVertical: 40}}>
          <RecipeBlocks recipes={recipes} navigation={ navigation } />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;