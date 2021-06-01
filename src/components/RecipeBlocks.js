import React from "react";
import { View, Text } from "react-native";
import APP from "~styles/app";
import TYPOGRAPHY from "~styles/typography";
import AppLink from "./AppLink";
import RecipeBlock from "./RecipeBlock";

const RecipeBlocks = (props) => {
  const { recipes, navigation } = props;

  return (
    <View>
      <View style={[APP.container, {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
        <Text style={[TYPOGRAPHY.subheading]}>Recipes</Text>
        { recipes.length > 1 && <AppLink title="View all" onPress={() => navigation.navigate('Recipes')} /> }
      </View>

      <View style={[{ marginTop: 20 }]}>
        {
          recipes.length > 0
            ? <View style={[APP.containerWider]}>
                {recipes.map((recipe, index) => (
                  <RecipeBlock key={recipe.id} recipe={ recipe } first={index === 0}/>
                ))}
              </View>
            : <View style={[APP.container]}>
                <Text style={[TYPOGRAPHY.body]}>You haven't created any recipes yet.</Text>
              </View>
        }
      </View>
    </View>
  )
}

export default RecipeBlocks;