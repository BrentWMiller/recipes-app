import React from "react";
import { View, Text } from "react-native";
import APP from "~styles/app";
import TYPOGRAPHY from "~styles/typography";
import AppLink from "./AppLink";
import RecipeBlock from "./RecipeBlock";

const RecipeBlocks = (props) => {
  const { recipes } = props;

  return (
    <View>
      <View style={[APP.container, {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
        <Text style={[TYPOGRAPHY.subheading]}>Recipes</Text>
        <AppLink title="View all" />
      </View>

      <View style={{ marginTop: 20 }}>
        {
          recipes.length > 0
            ? <View style={[APP.containerWider]}>
                {recipes.map((recipe, index) => (
                  <RecipeBlock key={recipe.id} recipe={ recipe } first={index === 0}/>
                ))}
              </View>
            : <Text>No recipes created yet.</Text>
        }
      </View>
    </View>
  )
}

export default RecipeBlocks;