import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import RecipeSearchInput from "~components/RecipeSearchInput";
import RecipeSearchFilterToggle from "~components/RecipeSearchFilterToggle";
import APP from "~styles/app";
import TYPOGRAPHY from "~styles/typography";
import CategoryBlocks from "~components/CategoryBlocks";

const HomeScreen = ({navigation}) => {
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

      <View style={[APP.container, {marginTop: 40}]}>
        <CategoryBlocks />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;