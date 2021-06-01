import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import RecipeSearchInput from "~components/RecipeSearchInput";
import APP from "~styles/app";
import CategoryBlocks from "~components/CategoryBlocks";
import RecipeBlocks from "~components/RecipeBlocks";
import Greeting from "~components/Greeting";
import UserAvatar from "~components/UserAvatar";
import { useSelector } from "react-redux";

const HomeScreen = ({navigation}) => {
  const user = useSelector(state => state.userReducer.user);

  const categories = [];

  const recipes = [];

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