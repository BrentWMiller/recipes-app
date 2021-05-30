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
        <AppLink title="View all" onPress={() => navigation.navigate('Recipes')} />
      </View>

      <View style={[[APP.containerWider], { marginTop: 20 }]}>
        {
          recipes.length > 0
            ? <>
                {recipes.map((recipe, index) => (
                  <RecipeBlock key={recipe.id} recipe={ recipe } first={index === 0}/>
                ))}
              </>
            : <Text>No recipes created yet.</Text>
        }
      </View>
    </View>
  )
}

export default RecipeBlocks;